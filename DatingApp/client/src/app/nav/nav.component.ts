import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedIn: boolean = false;

  constructor(private _account: AccountService) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }

  login() {
    this._account.login(this.model).subscribe(
      (response) => {
        console.log(response);
        this.loggedIn = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  logout() {
    this._account.logout();
    this.loggedIn = false;
  }

  getCurrentUser() {
    this._account.currentUser$.subscribe(
      (user) => {
        this.loggedIn = !!user;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
