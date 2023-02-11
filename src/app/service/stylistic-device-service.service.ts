import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StylisticDevice } from '../model/stylisticdevice.model';

@Injectable({
  providedIn: 'root'
})
export class StylisticDeviceService {

  constructor(private http:HttpClient) { }

  getAllStylisticDevice(): Observable<StylisticDevice[]> {
    return this.http.get<StylisticDevice[]>("api/stylisticDevice");
  }
}
