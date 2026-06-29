import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  health: string = 'Checking...';
  constructor(private auth: AuthService, private router: Router, private http: HttpClient) {}
  ngOnInit() {
    if (!this.auth.isLoggedIn()) { this.router.navigate(['/login']); return; }
    this.http.get<any>(`${environment.apiUrl}/health`).subscribe({
      next: r => this.health = r.status,
      error: () => this.health = 'API not reachable'
    });
  }
  logout() { this.auth.logout(); }
}
