import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  //@Input() usersFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {}

  constructor(private accountService: AccountService, private toast: ToastrService) { }
  onInit(): void { }

  register() {
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    }, error => {
      console.log(error);
      this.toast.error(error.error);
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}