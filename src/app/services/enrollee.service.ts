import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Enrollee } from '../interfaces/enrollee';

const ENROLLEE_API = `${environment.enrolleeApiEndpoint}`;

@Injectable({
  providedIn: 'root'
})
export class EnrolleeService {
  constructor(private readonly _http: HttpClient) { }

  public getEnrolleee(): Observable<any> {
    const url = `${ENROLLEE_API}/enrollees`;
    return this._http.get<Enrollee>(url).pipe(map(resp => {
      return resp;
    }), catchError(error => {
      return observableThrowError(error);
    }));
  }

  public updateEnrolleee(id, data: Enrollee): Observable<any> {
    const url = `${ENROLLEE_API}/enrollees/${id}`;

    return this._http.put(url, data).pipe(map(resp => {
      return resp;
    }), catchError(error => {
      return observableThrowError(error);
    }));
  }
}