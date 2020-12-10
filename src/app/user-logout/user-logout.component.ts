import { LocalStorageService } from 'angular-2-local-storage';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {

  constructor(private _localStorage:LocalStorageService, private route:ActivatedRoute, private router:Router) {
   
   }

  ngOnInit(): void {
    this._localStorage.clearAll();
    this.router.navigateByUrl('/auth');
  }

}
