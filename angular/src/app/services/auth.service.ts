import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, { email, password }).pipe(
      tap(r => { if (r.data?.token) localStorage.setItem('token', r.data.token); })
    );
  }

  logout() { localStorage.removeItem('token'); this.router.navigate(['/login']); }
  getToken()   { return localStorage.getItem('token'); }
  isLoggedIn() { return !!this.getToken(); }
}
