import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-server-error',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './server-error.component.html',
  styleUrl: './server-error.component.css'
})
export class ServerErrorComponent {
  error: any;

  constructor(private router: Router) {
    const navagation = this.router.getCurrentNavigation();
    this.error = navagation?.extras?.state?.['error'];
  }

  ngOnInit(): void { }


}
