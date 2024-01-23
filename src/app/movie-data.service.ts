import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
url = 'http://localhost:8080/movies/';
  constructor(private http:HttpClient) { }

  getMovies(year: number){
    let httpParams= new HttpParams().set('movieYear',year);
    
return this.http.get(`${this.url}byYearSearch`,{params:httpParams,headers:{accept:'text/plain'}});

  }

  savemovie(data:any){
    return this.http.post(this.url,data);
  }
  

}
