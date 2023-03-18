import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Example } from '../model/example.model';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  private tls:string ="https://51.254.119.169/"
  private url:string ="http://51.254.119.169/"
  private local:string ="http://localhost:3000/"

  constructor(private http:HttpClient) { }

  getRandom(): Observable<Example[]> {
    return this.http.get<Example[]>(this.tls+"example/random");
  }
}
