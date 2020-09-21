import { Rule } from './../../../models/Rule.model';
import { HttpService } from './../../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private http: HttpService) { }

  public routes:Rule[];

  ngOnInit(): void {

    this.fetchRoutes();


  }

  fetchRoutes(){
    this.http.getRules().subscribe((d: {response,data: {message,command}})=> {
      if(d.response == 200){
        console.dir(d.data.message);
        this.routes = d.data.message;
       }
       else
       {
         alert(`${d.data.message.toString()}`);
       }
    });
  }
}
