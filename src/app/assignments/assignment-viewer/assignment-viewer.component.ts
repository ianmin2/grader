import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-viewer',
  templateUrl: './assignment-viewer.component.html',
  styleUrls: ['./assignment-viewer.component.css']
})
export class AssignmentViewerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gotoDynamic() {
    //this.router.navigateByUrl('/dynamic', { state: { id:1 , name:'Angular' } });
    this.router.navigateByUrl(`/${id}`, { state: this.product });
  }

}
