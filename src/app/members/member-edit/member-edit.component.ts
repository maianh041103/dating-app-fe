import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { AccountService } from '../../_services/account.service';
import { MembersService } from '../../_services/members.service';
import { take } from 'rxjs';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { GalleryModule } from 'ng-gallery';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-member-edit',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, TabsModule, GalleryModule],
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.css'
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm | undefined;
  member: any;
  user: any;
  @HostListener('window:beforeunload', ['$event']) unloadNotification($event: any) {
    if (this.editForm?.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(private accountService: AccountService, private memberService: MembersService,
    private toastr: ToastrService) {

    this.user = localStorage.getItem("user");
    this.accountService.currentUser$.pipe(take(1)).subscribe({
      next: user => {
        this.user = user;
      }
    });
  }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    if (!this.user) return;
    const username = this.user;
    this.memberService.getMember(this.user.username).subscribe({
      next: member => this.member = member
    })
  }

  updateMember() {
    this.memberService.updateMember(this.member).subscribe(() => {
      this.toastr.success("Profile updated successfully");
      this.editForm?.reset(this.member);
    })
  }
}
