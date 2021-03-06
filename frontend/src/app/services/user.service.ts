import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { map } from 'rxjs/operators';


@Injectable()
export class UserService {

  private _baseUrl = "http://localhost:3000/users/";

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<any> {
    return this._http.get(`${this._baseUrl}users`);
    // .pipe(map((res: Response) => { return res }));
  }
  getUser(id): Observable<any> {
    return this._http.get(`${this._baseUrl}users/${id}`);
    // .pipe(map((res: Response) => { return res }));
  }

}
