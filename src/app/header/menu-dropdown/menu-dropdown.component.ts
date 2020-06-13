import { Component, OnInit, Input,AfterViewInit } from '@angular/core';

@Component({
  selector: 'byte-menu-dropdown',
  templateUrl: './menu-dropdown.component.html',
  styleUrls: ['./menu-dropdown.component.css']
})





export class MenuDropdownComponent implements OnInit {

  @Input() customClass:string;
  @Input() targetUrl:string;
  @Input() title:string;
  @Input() subMenuItems: any;


  constructor() {

   }

  ngOnInit(): void {

    let rgx = new RegExp(/\{(.*?)\}/ig);

    this.subMenuItems = this.subMenuItems
    .replace(/\'/ig,'"')
    .match(rgx)
    .map(itm=>JSON.parse(itm),[]);

    // let arr =  Array.from(this.subMenuItems);

    // this.subMenuArray = (Array.isArray(arr))  ? arr.map(menuItem =>{
    //   return (Array.isArray(menuItem)) ? new subMenuItem(menuItem[0],menuItem[1],menuItem[2],menuItem[3]) : undefined;
    // },[]).filter(itm=>itm) : [];

    // console.dir(Array.isArray(this.subMenuItems))

  }

  AfterViewInit() : void
  {



  }

  doDisplayElements()
  {
    console.dir( this.subMenuItems);
  }

}

class subMenuItem {

  constructor(title ,target = "#",custom = "",isolated = false)
  {
    this.title = title,
    this.targetUrl = target;
    this.customClass = custom;
    this.isolated = isolated;
  }
  customClass: string;
  targetUrl:string ;
  title: string;
  isolated:boolean;
}
