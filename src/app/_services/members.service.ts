import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Member } from '../_models/member';
//import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private http = inject(HttpClient);
  //private accountService = inject(AccountService);
  baseUrl = environment.apiUrl;
  
  getMembers()
  {
    return this.http.get<Member[]>(this.baseUrl + 'users'); 
  }

  getMember(username: string)
  {
    return this.http.get<Member>(this.baseUrl + 'users/' + username);
  }
  /*since we added the jwt interceptor we do not need the method implemented below
  getHttpOptions()
  {
    return {
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.accountService.currentUser()?.token}`
    })
   }
  }*/
}
