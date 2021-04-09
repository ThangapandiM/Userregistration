import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map, take } from "rxjs/operators";
import { catchError } from 'rxjs/operators'; 

@Injectable()
export class NPIService {
  
  headers: HttpHeaders;
  
  constructor(private _http: HttpClient) { }

  getNPIdetails(NPInumber: string): Observable<any> {
    return this._http.get('../.././assets/Npidata.Json')
    .pipe(
        map((response:any)=>response),catchError(this.handleError)
      )
  }

  private handleError(error: Response) {
      console.error(error);
      return Observable.throw(error.json() || 'Server error');
    
    
  }
}
