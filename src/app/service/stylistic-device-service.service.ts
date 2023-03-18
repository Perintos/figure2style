import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StylisticDevice } from '../model/stylisticdevice.model';

@Injectable({
  providedIn: 'root'
})
export class StylisticDeviceService {
  private url:string ="http://51.254.119.169/"
  private tls:string ="https://51.254.119.169/"
  private local:string ="http://localhost:3000/"

  constructor(private http:HttpClient) { }

  getAllStylisticDevice(): Observable<StylisticDevice[]> {
    return this.http.get<StylisticDevice[]>(this.tls + "stylisticdevice/");
  }

  getById(id: number): Observable<StylisticDevice> {
    return this.http.get<StylisticDevice>(this.tls+"stylisticdevice/"+id);
  }

  getRandom(stylistic_id: number): Observable<any> {
    return this.http.get<StylisticDevice>(this.tls+"stylisticdevice/random/"+stylistic_id);
  }
}
