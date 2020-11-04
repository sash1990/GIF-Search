import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://api.giphy.com/v1/gifs/search?api_key=PUMvdoC4tfHTi31P5twYAru6ByGRMWUc&q=';

  constructor(private http: HttpClient) { }

  /*GIPHY Search*/
  giphySearch(object): Observable<any> {
    return this.http.get(this.apiURL+object).pipe(map((res: any) => res));
  }
  /*GIPHY Search*/
}
