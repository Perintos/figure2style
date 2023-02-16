import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StylisticDevice } from 'src/app/model/stylisticdevice.model';
import { StylisticDeviceService } from 'src/app/service/stylistic-device-service.service';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent {
  private id: number = 0;
  private sub: any;
  protected stylisticDevice!: StylisticDevice;

  constructor(private route: ActivatedRoute,
              private stylisticDeviceService:StylisticDeviceService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.stylisticDeviceService.getById(this.id).subscribe(data => {
        this.stylisticDevice = data;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
