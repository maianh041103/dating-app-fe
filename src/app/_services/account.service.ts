import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../_model/user';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = environment.apiUrl;

  private currentUserSource = new BehaviorSubject<any>(1); //Lưu 1 người dùng hiện tại
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model: any) {
    console.log(environment.apiUrl);
    return this.http.post<User>(this.baseUrl + "accounts/login", model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post<User>(this.baseUrl + "accounts/register", model).pipe(
      map((user: User) => {
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUserSource.next(user);
        }
        return user;
      })
    )
  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem("user");
    this.currentUserSource.next(null);
  }
}
