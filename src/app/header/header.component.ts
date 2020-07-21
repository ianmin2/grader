import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selectedPath:string = "Assignments"

  @Input() title:string;
  constructor() {

    this.title = (this.title) ? this.title : "ByteGrader";

  }

  ngOnInit(): void {
  }




}
