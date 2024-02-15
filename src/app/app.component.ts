import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { User } from './_model/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root', //Hiển thị ra UI là cái thẻ nào
  standalone: true, //Không có file ng module
  imports: [CommonModule, NavComponent, HomeComponent], //Nhúng các component tạo ra
  templateUrl: './app.component.html', //File template(giao diện) là file nào
  styleUrl: './app.component.css' //File css
})
export class AppComponent implements OnInit { //File ts là chính nó
  title = 'The Dating app'; //Truyền dữ liệu như lớp controller cho app.component.html
  users: any;

  constructor(private http: HttpClient, private accountService: AccountService) { }

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem("user") || `null`);
    this.accountService.setCurrentUser(user);
  }
}
