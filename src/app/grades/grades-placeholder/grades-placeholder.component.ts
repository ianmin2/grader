
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-grades-placeholder',
//   templateUrl: './grades-placeholder.component.html',
//   styleUrls: ['./grades-placeholder.component.css']
// })
// export class GradesPlaceholderComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Injectable, NgZone, OnInit} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {BehaviorSubject, Observable, of as observableOf, Subscription} from 'rxjs';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { GraderResponse } from 'src/app/models/Response.model';
import { ByteGraderHelperService } from './../../services/byte-grader-helper.service';
import { Rule } from './../../models/Rule.model';
import { HttpService } from 'src/app/services/http.service';
import { AssignmentsStoreService } from 'src/app/services/stor/assignments.stor.service';
import { Assignment } from 'src/app/models/Assignment.model';

/**
 * File node data with nested structure.
 * Each node has a filename, and a type or a list of children.
 */
export class FileNode {
  id: string;
  children: FileNode[];
  filename: string;
  type: any;
}

/** Flat node with expandable and level information */
export class FileFlatNode {
  constructor(
    public expandable: boolean,
    public filename: string,
    public level: number,
    public type: any,
    public id: string
  ) {}
}


export class RuleNode {
  id: string;
  children: RuleNode[];
  ruleName: string;
  ruleData: Rule;
}

export class RuleFlatNode {
  constructor(
    public expandable: boolean,
    public title: string,
    public level: number,
    public type: any,
    public id: string
  ) {}
}

/**
 * The file structure tree data in string. The data could be parsed into a Json object
 */
const TREE_DATA = JSON.stringify({
  Applications: {
    Calendar: 'app',
    Chrome: 'app',
    Webstorm: 'app'
  },
  Documents: {
    angular: {
      src: {
        compiler: 'ts',
        core: 'ts'
      }
    },
    material2: {
      src: {
        button: 'ts',
        checkbox: 'ts',
        input: 'ts'
      }
    }
  },
  Downloads: {
    October: 'pdf',
    November: 'pdf',
    Tutorial: 'html'
  },
  Pictures: {
    'Photo Booth Library': {
      Contents: 'dir',
      Pictures: 'dir'
    },
    Sun: 'png',
    Woods: 'jpg'
  }
});

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
@Injectable()
export class FileAndRuleDatabase {
  dataChange = new BehaviorSubject<FileNode[]>([]);

  get data(): FileNode[] { return this.dataChange.value; }


  // +++++++++++++++++++++++++++++++++++
  dataRuleChange = new BehaviorSubject<RuleNode[]>([]);


  get dataRule(): RuleNode[] { return this.dataRuleChange.value; }
  // ***********************************
  

  constructor(private helper:ByteGraderHelperService) {
    this.initialize();
  }

  initialize() {

    // Parse the string to json object.    
    const dataObject = this.helper.json(TREE_DATA);

    // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
    //     file node as children.
    const data = this.buildFileTree(dataObject, 0);

    // Notify the change.
    this.dataChange.next(data);
  }


  // +++++++++++++++++++++++++++++++++++
  initializeRule(TREE_RULE_DATA) {
    
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
    console.dir(this.helper.json(TREE_RULE_DATA));
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)

    // Parse the string to json object.
    const dataRuleObject = this.helper.json(TREE_RULE_DATA);

    // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
    //     file node as children.
    const dataRule = this.buildRuleTree(dataRuleObject, 0);

    // Notify the change.
    this.dataRuleChange.next(dataRule);
  }
  // ***********************************

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `FileNode`.
   */
  buildFileTree(obj: {[key: string]: any}, level: number, parentId: string = '0'): FileNode[] {

    return Object.keys(obj).reduce<FileNode[]>((accumulator, key, idx) => {
      const value = obj[key];
      const node = new FileNode();
      node.filename = key;
      /**
       * Make sure your node has an id so we can properly rearrange the tree during drag'n'drop.
       * By passing parentId to buildFileTree, it constructs a path of indexes which make
       * it possible find the exact sub-array that the node was grabbed from when dropped.
       */
      node.id = `${parentId}/${idx}`;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1, node.id);
        } else {
          node.type = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }

  // +++++++++++++++++++++++++++++++++++
  buildRuleTree(obj: {[key: string]: any}, level: number, parentId: string = '0'): RuleNode[] {
   
    console.info(`---------------------------`)
    console.dir(obj)
    console.info(`---------------------------`)

    return Object.keys(obj).reduce<RuleNode[]>((accumulator, key, idx) => {
      const val = obj[key];
      const node = new RuleNode();
      node.ruleName = key;

      node.id = `${parentId}/${idx}`;

      if(val!=null){
        if(typeof val === 'object') {
          node.children = this.buildRuleTree(val, level+1, node.id);
        }
        else
        {
          node.ruleData = val;
        }
      }

      return accumulator.concat(node);

    }, []);

  }
  // ***********************************


}



/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'grades-placeholder.component',
  templateUrl: 'grades-placeholder.component.html',
  styleUrls: ['grades-placeholder.component.css'],
  providers: [FileAndRuleDatabase]
})
export class GradesPlaceholderComponent implements OnInit {

  //@ PRIVATE DATA ACCESS
  private dataStorObj: FileAndRuleDatabase;


  treeControl: FlatTreeControl<FileFlatNode>;
  treeFlattener: MatTreeFlattener<FileNode, FileFlatNode>;
  dataSource: MatTreeFlatDataSource<FileNode, FileFlatNode>;
  expandedNodeSet = new Set<string>();
  dragging = false;
  expandTimeout: any;
  expandDelay = 1000;

  // +++++++++++++++++++++++++++++++++++
  treeRuleControl: FlatTreeControl<RuleFlatNode>;
  treeRuleFlattener: MatTreeFlattener<RuleNode, RuleFlatNode>;
  dataRuleSource: MatTreeFlatDataSource<RuleNode, RuleFlatNode>;
  expandedRuleNodeSet = new Set<string>();
  // ***********************************

  assignmentsSubscription : Subscription;

  public gradingRules :any;

  public activeAssignment: Assignment;

  public assignments:Assignment[];

  public userAssignments: Assignment[];



  constructor(database: FileAndRuleDatabase, private http: HttpService, public helpers: ByteGraderHelperService, private router: Router, private ngZone: NgZone,  private assignmentsUpdater: AssignmentsStoreService) {

    this.dataStorObj = database;

    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
      this._isExpandable, this._getChildren);
    this.treeControl = new FlatTreeControl<FileFlatNode>(this._getLevel, this._isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    database.dataChange.subscribe(data => this.rebuildTreeForData(data));

     // +++++++++++++++++++++++++++++++++++
     this.treeRuleFlattener = new MatTreeFlattener(this.transformerRule, this._getRuleLevel,
      this._isRuleExpandable, this._getRuleChildren);
    this.treeRuleControl = new FlatTreeControl<RuleFlatNode>(this._getRuleLevel, this._isRuleExpandable);
    this.dataRuleSource = new MatTreeFlatDataSource(this.treeRuleControl, this.treeRuleFlattener);

    // database.dataRuleChange.subscribe(this.rebuildRuleTreeForData);

    // ***********************************

  }
  ngOnInit(): void {
    this.fetchAssignmentRules(10004);
  }

  transformer = (node: FileNode, level: number) => {
    return new FileFlatNode(!!node.children, node.filename, level, node.type, node.id);
  }
  private _getLevel = (node: FileFlatNode) => node.level;
  private _isExpandable = (node: FileFlatNode) => node.expandable;
  private _getChildren = (node: FileNode): Observable<FileNode[]> => observableOf(node.children);
  hasChild = (_: number, _nodeData: FileFlatNode) => _nodeData.expandable;


  // +++++++++++++++++++++++++++++++++++

  transformerRule = (node: RuleNode, level: number) => {
    return new RuleFlatNode(!!node.children, node.ruleName, level, node.ruleData, node.id);
  }
  private _getRuleLevel = (node: RuleFlatNode) => node.level;
  private _isRuleExpandable = (node: RuleFlatNode) => node.expandable;
  private _getRuleChildren = (node: RuleNode): Observable<RuleNode[]> => observableOf(node.children);
  hasRuleChild = (_: number, _nodeData: RuleFlatNode) => _nodeData.expandable;


  // ***********************************

  /**
   * This constructs an array of nodes that matches the DOM,
   * and calls rememberExpandedTreeNodes to persist expand state
   */
  visibleNodes(): FileNode[] {
    this.rememberExpandedTreeNodes(this.treeControl, this.expandedNodeSet);
    const result = [];

    function addExpandedChildren(node: FileNode, expanded: Set<string>) {
      result.push(node);
      if (expanded.has(node.id)) {
        node.children.map(child => addExpandedChildren(child, expanded));
      }
    }
    this.dataSource.data.forEach(node => {
      addExpandedChildren(node, this.expandedNodeSet);
    });
    return result;
  }

  // +++++++++++++++++++++++++++++++++++
  visibleRuleNodes(): RuleNode[] {
    this.rememberRuleExpandedTreeNodes(this.treeRuleControl, this.expandedRuleNodeSet);
    const result = [];

    function addExpandedRuleChildren(node: RuleNode, expanded: Set<string>) {
      result.push(node);
      if (expanded.has(node.id)) {
        node.children.map(child => addExpandedRuleChildren(child, expanded));
      }
    }
    this.dataRuleSource.data.forEach(node => {
      addExpandedRuleChildren(node, this.expandedRuleNodeSet);
    });
    return result;
  }
  // ***********************************

  /**
   * Handle the drop - here we rearrange the data based on the drop event,
   * then rebuild the tree.
   * */
  drop(event: CdkDragDrop<string[]>) {
    // console.log('origin/destination', event.previousIndex, event.currentIndex);
  
    // ignore drops outside of the tree
    if (!event.isPointerOverContainer) return;

    // construct a list of visible nodes, this will match the DOM.
    // the cdkDragDrop event.currentIndex jives with visible nodes.
    // it calls rememberExpandedTreeNodes to persist expand state
    const visibleNodes = this.visibleNodes();

    // deep clone the data source so we can mutate it
    const changedData = this.helpers.json(this.helpers.str(this.dataSource.data));

    // recursive find function to find siblings of node
    function findNodeSiblings(arr: Array<any>, id: string): Array<any> {
      let result, subResult;
      arr.forEach(item => {
        if (item.id === id) {
          result = arr;
        } else if (item.children) {
          subResult = findNodeSiblings(item.children, id);
          if (subResult) result = subResult;
        }
      });
      return result;
    }

    // remove the node from its old place
    const node = event.item.data;
    const siblings = findNodeSiblings(changedData, node.id);
    const siblingIndex = siblings.findIndex(n => n.id === node.id);
    const nodeToInsert: FileNode = siblings.splice(siblingIndex, 1)[0];

    // determine where to insert the node
    const nodeAtDest = visibleNodes[event.currentIndex];
    if (nodeAtDest.id === nodeToInsert.id) return;

    // determine drop index relative to destination array
    let relativeIndex = event.currentIndex; // default if no parent
    const nodeAtDestFlatNode = this.treeControl.dataNodes.find(n => nodeAtDest.id === n.id);
    const parent = this.getParentNode(nodeAtDestFlatNode);
    if (parent) {
      const parentIndex = visibleNodes.findIndex(n => n.id === parent.id) + 1;
      relativeIndex = event.currentIndex - parentIndex;
    }
    // insert node 
    const newSiblings = findNodeSiblings(changedData, nodeAtDest.id);
    if (!newSiblings) return;
    newSiblings.splice(relativeIndex, 0, nodeToInsert);
    
    // rebuild tree with mutated data
    this.rebuildTreeForData(changedData);
  }

  // +++++++++++++++++++++++++++++++++++
  dropRule(event: CdkDragDrop<string[]>) {
    // console.log('origin/destination', event.previousIndex, event.currentIndex);
  
    // ignore drops outside of the tree
    if (!event.isPointerOverContainer) return;

    // construct a list of visible nodes, this will match the DOM.
    // the cdkDragDrop event.currentIndex jives with visible nodes.
    // it calls rememberExpandedTreeNodes to persist expand state
    const visibleNodes = this.visibleRuleNodes();

    // deep clone the data source so we can mutate it
    const changedData = this.helpers.json(this.helpers.str(this.dataRuleSource.data));

    // recursive find function to find siblings of node
    function findNodeSiblings(arr: Array<any>, id: string): Array<any> {
      let result, subResult;
      arr.forEach(item => {
        if (item.id === id) {
          result = arr;
        } else if (item.children) {
          subResult = findNodeSiblings(item.children, id);
          if (subResult) result = subResult;
        }
      });
      return result;
    }

    // remove the node from its old place
    const node = event.item.data;
    const siblings = findNodeSiblings(changedData, node.id);
    const siblingIndex = siblings.findIndex(n => n.id === node.id);
    const nodeToInsert: RuleNode = siblings.splice(siblingIndex, 1)[0];

    // determine where to insert the node
    const nodeAtDest = visibleNodes[event.currentIndex];
    if (nodeAtDest.id === nodeToInsert.id) return;

    // determine drop index relative to destination array
    let relativeIndex = event.currentIndex; // default if no parent
    const nodeAtDestFlatNode = this.treeRuleControl.dataNodes.find(n => nodeAtDest.id === n.id);
    const parent = this.getRuleParentNode(nodeAtDestFlatNode);
    if (parent) {
      const parentIndex = visibleNodes.findIndex(n => n.id === parent.id) + 1;
      relativeIndex = event.currentIndex - parentIndex;
    }
    // insert node 
    const newSiblings = findNodeSiblings(changedData, nodeAtDest.id);
    if (!newSiblings) return;
    newSiblings.splice(relativeIndex, 0, nodeToInsert);
    
    // rebuild tree with mutated data
    this.rebuildRuleTreeForData(changedData);
  }
  // ***********************************

  /**
   * Experimental - opening tree nodes as you drag over them
   */
  dragStart() {
    this.dragging = true;
  }

  dragEnd() {
    this.dragging = false;
  }

  dragHover(node: FileFlatNode) {
    if (this.dragging) {
      clearTimeout(this.expandTimeout);
      this.expandTimeout = setTimeout(() => {
        this.treeControl.expand(node);
      }, this.expandDelay);
    }
  }
  // +++++++++++++++++++++++++++++++++++
  dragRuleHover(node: RuleFlatNode) {
    if (this.dragging) {
      clearTimeout(this.expandTimeout);
      this.expandTimeout = setTimeout(() => {
        this.treeRuleControl.expand(node);
      }, this.expandDelay);
    }
  }
  // ***********************************
  
  dragHoverEnd() {
    if (this.dragging) {
      clearTimeout(this.expandTimeout);
    }
  }

  // +++++++++++++++++++++++++++++++++++
  dragRuleHoverEnd() {
    if (this.dragging) {
      clearTimeout(this.expandTimeout);
    }
  }
  // ***********************************

  /**
   * The following methods are for persisting the tree expand state
   * after being rebuilt
   */

  rebuildTreeForData(data: any) {
    this.rememberExpandedTreeNodes(this.treeControl, this.expandedNodeSet);
    this.dataSource.data = data;
    this.forgetMissingExpandedNodes(this.treeControl, this.expandedNodeSet);
    this.expandNodesById(this.treeControl.dataNodes, Array.from(this.expandedNodeSet));
  }
  // +++++++++++++++++++++++++++++++++++
  rebuildRuleTreeForData(data: any) {    
    this.rememberRuleExpandedTreeNodes(this.treeRuleControl, this.expandedRuleNodeSet);
    this.dataRuleSource.data = data;
    this.forgetRuleMissingExpandedNodes(this.treeRuleControl, this.expandedRuleNodeSet);
    this.expandNodesById(this.treeRuleControl.dataNodes, Array.from(this.expandedRuleNodeSet));
  }
  // ***********************************

  private rememberRuleExpandedTreeNodes(
    treeControl: FlatTreeControl<RuleFlatNode>,
    expandedNodeSet: Set<string>
  ) {
    if (treeControl.dataNodes) {
      treeControl.dataNodes.forEach((node) => {
        if (treeControl.isExpandable(node) && treeControl.isExpanded(node)) {
          // capture latest expanded state
          expandedNodeSet.add(node.id);
        }
      });
    }
  }

  private rememberExpandedTreeNodes(
    treeControl: FlatTreeControl<FileFlatNode>,
    expandedNodeSet: Set<string>
  ) {
    if (treeControl.dataNodes) {
      treeControl.dataNodes.forEach((node) => {
        if (treeControl.isExpandable(node) && treeControl.isExpanded(node)) {
          // capture latest expanded state
          expandedNodeSet.add(node.id);
        }
      });
    }
  }

  private forgetMissingExpandedNodes(
    treeControl: FlatTreeControl<FileFlatNode>,
    expandedNodeSet: Set<string>
  ) {
    if (treeControl.dataNodes) {
      expandedNodeSet.forEach((nodeId) => {
        // maintain expanded node state
        if (!treeControl.dataNodes.find((n) => n.id === nodeId)) {
          // if the tree doesn't have the previous node, remove it from the expanded list
          expandedNodeSet.delete(nodeId);
        }
      });
    }
  }
  
  private forgetRuleMissingExpandedNodes(
    treeControl: FlatTreeControl<RuleFlatNode>,
    expandedNodeSet: Set<string>
  ) {
    if (treeControl.dataNodes) {
      expandedNodeSet.forEach((nodeId) => {
        // maintain expanded node state
        if (!treeControl.dataNodes.find((n) => n.id === nodeId)) {
          // if the tree doesn't have the previous node, remove it from the expanded list
          expandedNodeSet.delete(nodeId);
        }
      });
    }
  }

  private expandNodesById(flatNodes: FileFlatNode[] | RuleFlatNode[], ids: string[]) {
    if (!flatNodes || flatNodes.length === 0) return;
    const idSet = new Set(ids);
    return flatNodes.forEach((node) => {
      if (idSet.has(node.id)) {
        this.treeControl.expand(node);
        let parent = this.getParentNode(node);
        while (parent) {
          this.treeControl.expand(parent);
          parent = this.getParentNode(parent);
        }
      }
    });
  }
 

  private getParentNode(node: FileFlatNode): FileFlatNode | null {
    const currentLevel = node.level;
    if (currentLevel < 1) {
      return null;
    }
    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];
      if (currentNode.level < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }



  // +++++++++++++++++++++++++++++++++++

  private getRuleParentNode(node: RuleFlatNode): RuleFlatNode | null {
    const currentLevel = node.level;
    if (currentLevel < 1) {
      return null;
    }
    const startIndex = this.treeRuleControl.dataNodes.indexOf(node) - 1;
    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeRuleControl.dataNodes[i];
      if (currentNode.level < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }

  cnvRule( obj ){
    console.dir(obj)
    let kys = Object.keys(obj);
    return kys.reduce((cm,cr)=>{ cm[cr]=this.cnvRuleChild(obj[cr]); return cm;  },{   });
  }

  cnvRuleChild (ths: Array<Rule>)
  {
    return ths.reduce((cum,cur,idx)=>{ cum[cur.rule_name] = `(${cur.rule_id}) ${cur.rule_method} ${cur.rule_path}`; return cum;   },{})
  }

  fetchAssignmentRules(assignmentId) {
    this.http.getRules(assignmentId,true,true).subscribe((d: GraderResponse) => {
      if(d.response == 200)
      {

        this.gradingRules = this.cnvRule(this.helpers.json(d.data.message));


       this.dataStorObj.initializeRule(this.helpers.str(this.gradingRules));

      }
      else{
        alert(`${d.data.message.toString()}`);
      }
    })
  }
  // ***********************************

}