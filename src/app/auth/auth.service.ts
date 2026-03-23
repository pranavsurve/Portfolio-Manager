import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { User, LoginCredentials } from '../models/user.model';
import { authConfig } from './auth.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private isLoggedIn = false;

  constructor() {
    // Check localStorage for existing session
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
      this.isLoggedIn = true;
    }
  }

  get isAuthenticated(): boolean {
    if (!authConfig.enabled) {
      return true; // Auth disabled - allow access
    }
    return this.isLoggedIn;
  }

  login(credentials: LoginCredentials): Observable<User> {
    // Mock login - replace with actual API call when backend is ready
    const mockUser: User = {
      id: '1',
      email: credentials.email,
      name: credentials.email.split('@')[0],
      token: 'mock-jwt-token-' + Date.now()
    };

    return of(mockUser).pipe(
      delay(500), // Simulate API delay
      tap(user => {
        this.isLoggedIn = true;
        this.currentUserSubject.next(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
  }

  get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  // Method to toggle auth for testing
  toggleAuth(enabled: boolean): void {
    // This updates the config at runtime (for testing only)
    // The actual toggle should be done in auth.config.ts
    if (!enabled) {
      this.logout();
    }
  }
}