import { Component, OnInit } from '@angular/core';
import { Member } from '../../_model/member';
import { MembersService } from '../../_services/members.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MemberCardComponent } from '../member-card/member-card.component';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, MemberCardComponent],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent implements OnInit {
  members: Member[] = [];

  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers() {
    this.memberService.getMembers().subscribe(members => {
      this.members = members;
    })
  }
}
