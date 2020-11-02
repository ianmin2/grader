import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem, } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-output-manager',
  templateUrl: './output-manager.component.html',
  styleUrls: ['./output-manager.component.css']
})
export class OutputManagerComponent implements OnInit {

  todos = [
    {
      name: 'Angular',
      category: 'Web Development'
    },
    {
      name: 'Flexbox',
      category: 'Web Development'
    },
    {
      name: 'iOS',
      category: 'App Development'
    },
    {
      name: 'Java',
      category: 'Software development'
    }
  ];
  
  completed = [
    {
      name: 'Android',
      category: 'Mobile Development'
    },
    {
      name: 'MongoDB',
      category: 'Databases'
    },
    {
      name: 'ARKit',
      category: 'Augmented Reality'
    },
    {
      name: 'React',
      category: 'Web Development'
    }
  ];


  compdsleteder = []
  constructor() { }

  ngOnInit(): void {
  }

  onDrop(evt: CdkDragDrop<any[]>, copy:boolean = false, noDrop: boolean = false ){
    if(evt.previousContainer == evt.container)
    {
      moveItemInArray(evt.container.data, evt.previousIndex, evt.currentIndex);
    }
    else
    {
      if(noDrop) return;      
      if(!copy)
      {
        transferArrayItem(evt.previousContainer.data, evt.container.data, evt.previousIndex, evt.currentIndex);
      }
      else
      {
        copyArrayItem(evt.previousContainer.data,evt.container.data, evt.previousIndex, evt.currentIndex);
      }
    }
  }

  

}
