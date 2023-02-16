import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StylisticDevice } from '../model/stylisticdevice.model';

@Injectable({
  providedIn: 'root'
})
export class StylisticDeviceService {

  constructor(private http:HttpClient) { }

  getAllStylisticDevice(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:8080/stylisticdevice");
  }

  getById(id: any) {
    return this.http.get<StylisticDevice>("api/stylisticDevice?id="+id);
  }
}
