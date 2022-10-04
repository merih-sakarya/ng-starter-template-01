import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

import { UserResponseModel } from '@shared/models/http/response/user/user-response.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/${environment.apiVersion}`;

  constructor(private http: HttpClient) {}

  getUser(): Observable<UserResponseModel> {
    return this.http.get<UserResponseModel>(`${this.apiUrl}/users/me`);
  }
}
