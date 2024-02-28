import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../_services/members.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, TabsModule],
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.css'
})
export class MemberDetailComponent implements OnInit {
  member: any;

  constructor(private memberService: MembersService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    const username = this.route.snapshot.paramMap.get("username");
    if (!username) return;
    this.memberService.getMember(username).subscribe(member => {
      this.member = member;
    })
  }

}
