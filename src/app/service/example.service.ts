import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  private tls:string ="https://51.254.119.169/"
  private url:string ="http://51.254.119.169/"
  private local:string ="http://localhost:3000/"

  constructor(private http:HttpClient) { }

  getRandom(): Observable<any> {
    return this.http.get<any>(this.tls+"example/random");
  }
}
