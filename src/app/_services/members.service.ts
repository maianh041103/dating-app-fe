import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Member } from '../_model/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMembers() {
    console.log(JSON.parse(localStorage.getItem("user") || ""));
    return this.http.get<Member[]>(this.baseUrl + "users");
  }

  getMember(username: string) {
    return this.http.get<Member>(this.baseUrl + "users/" + username);
  }
}
