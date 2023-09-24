import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersEntity } from '../+state/users.models';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url = 'http://loclahost:8000';
  constructor(private readonly http: HttpClient) {}

  public getAll(): Observable<UsersEntity[]> {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
    return this.http.get<UsersEntity[]>(`${this.url}/users`, { headers });
  }
}
