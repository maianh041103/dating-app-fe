import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  model: any = {}; //Lưu giá trị từ ô input

  constructor(public accountService: AccountService, public router: Router, public toastr: ToastrService) { };

  ngOnInit(): void {
  }

  login() { //Hàm submit
    this.accountService.login(this.model).subscribe({
      next: response => {
        this.router.navigateByUrl("/members");
      },
      error: error => this.toastr.error(error.error)
    })
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl("/");
  }
}
