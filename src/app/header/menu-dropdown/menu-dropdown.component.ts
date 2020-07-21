import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'byte-menu-dropdown',
  templateUrl: './menu-dropdown.component.html',
  styleUrls: ['./menu-dropdown.component.css']
})





export class MenuDropdownComponent implements OnInit {

  @Input() customClass:string = "";
  @Input() targetUrl:string = "";
  @Input() title:string = "";
  @Input() subMenuItems: any = "";
  @Input() isAlignedRight:string = "";


  constructor(private router:Router) {

   }

  ngOnInit(): void {

    let rgx = new RegExp(/\{(.*?)\}/ig);

    this.subMenuItems = this.subMenuItems
    .replace(/\'/ig,'"')
    .match(rgx)
    .map(itm=>JSON.parse(itm),[]);


  }


  doDisplayElements()
  {
    console.dir( this.subMenuItems);
  }

  getAlignment()
  {
    let v = this.isAlignedRight.toLowerCase();
    return (v == "true" || v== "y" || v=="1" || v== "yes")  ? true : false;
  }

  navigateTo(navigationPath = '/')
  {

    let navRoute = navigationPath.split('/').filter(a=>a);
    navRoute[0] = `${navRoute[0]? '/'+navRoute[0]: '/'}`;
    this.router.navigate(navRoute);
  }

}
