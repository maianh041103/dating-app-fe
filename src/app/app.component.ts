import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-root', //Hiển thị ra UI là cái thẻ nào
  standalone: true, //Không có file ng module
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html', //File template(giao diện) là file nào
  styleUrl: './app.component.css' //File css
})
export class AppComponent implements OnInit { //File ts là chính nó
  title = 'The Dating app'; //Truyền dữ liệu như lớp controller cho app.component.html
  users: any;

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.http.get("https://localhost:5001/api/users").subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })
  }
}
