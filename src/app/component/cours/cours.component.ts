import { Component } from '@angular/core';
import { StylisticDevice } from 'src/app/model/stylisticdevice.model';
import { StylisticDeviceService } from 'src/app/service/stylistic-device-service.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent {


  protected listStylisticDevices:StylisticDevice[] = [];
  

  constructor(private stylisticDeviceService:StylisticDeviceService){}

  ngOnInit(){
    this.stylisticDeviceService.getAllStylisticDevice().subscribe(data  => {
      this.listStylisticDevices = data;
    })
  }
}
