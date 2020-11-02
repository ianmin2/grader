
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
