import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../_models/user';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root' //singleton service -> one way for all app
})//tells us that we can inject this service into the specific component
export class AccountService {
  private http = inject(HttpClient);
  baseUrl = 'https://localhost:5001/api/';
  //working with signals
  currentUser = signal<User | null>(null);
  
  login(model: any)
  {
    return this.http.post<User>(this.baseUrl + 'accounts/login', model).pipe(
      map(user => {
        if(user)
        {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUser.set(user);
        }
      })
    );
  }

  register(model: any)
  {
    return this.http.post<User>(this.baseUrl + 'accounts/register', model).pipe(
      map(user => {
        if(user)
        {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUser.set(user);
        }
        return user;
      })
    );
  }

  logout()
  {
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
}


