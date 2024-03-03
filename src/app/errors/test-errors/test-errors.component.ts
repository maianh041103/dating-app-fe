import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-errors.component.html',
  styleUrl: './test-errors.component.css'
})
export class TestErrorsComponent {
  baseUrl = "https://localhost:5001/api/";

  validationErrors: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  get404Error() {
    this.http.get(this.baseUrl + "buggy/not-found").subscribe(response => {
      console.log("🚀 ~ TestErrorsComponent ~ this.http.get ~ response:", response)
    }, error => {
      console.log("🚀 ~ TestErrorsComponent ~ this.http.get ~ error:", error)
    });
  }

  get400Error() {
    this.http.get(this.baseUrl + "buggy/bad-request").subscribe(response => {
      console.log("🚀 ~ TestErrorsComponent ~ this.http.get ~ response:", response)
    }, error => {
      console.log("🚀 ~ TestErrorsComponent ~ this.http.get ~ error:", error)
    });
  }

  get500Error() {
    this.http.get(this.baseUrl + "buggy/server-error").subscribe(response => {
      console.log("🚀 ~ TestErrorsComponent ~ this.http.get ~ response:", response)
    }, error => {
      console.log("🚀 ~ TestErrorsComponent ~ this.http.get ~ error:", error)
    });
  }

  get401Error() {
    this.http.get(this.baseUrl + "buggy/auth").subscribe(response => {
      console.log("🚀 ~ TestErrorsComponent ~ this.http.get ~ response:", response)
    }, error => {
      console.log("🚀 ~ TestErrorsComponent ~ this.http.get ~ error:", error)
    });
  }

  get400ValidationError() {
    this.http.post(this.baseUrl + "accounts/register", {}).subscribe(response => {
      console.log("🚀 ~ TestErrorsComponent ~ this.http.post ~ response:", response)
    }, error => {
      console.log("🚀 ~ TestErrorsComponent ~ this.http.post ~ error:", error)
      this.validationErrors = error;
    });
  }
}
