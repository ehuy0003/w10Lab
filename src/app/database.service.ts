import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// Service depends on HTTP
export class DatabaseService {

  constructor( private http:HttpClient ) { }

  getActors(){
    return this.http.get('/actors');
  }

}
