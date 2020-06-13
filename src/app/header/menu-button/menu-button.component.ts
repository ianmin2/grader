import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'byte-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent implements OnInit {

  @Input() customClass:string;
  @Input() targetUrl:string;
  @Input() title:string;


  constructor() { }

  ngOnInit(): void {
  }

}
