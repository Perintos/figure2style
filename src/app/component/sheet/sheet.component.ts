import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StylisticDevice } from 'src/app/model/stylisticdevice.model';
import { StylisticDeviceService } from 'src/app/service/stylistic-device-service.service';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent {
  @Input() public id: number = 0;
  @Input() public isParentExist=false;

  private sub: any;
  protected stylisticDevice!: StylisticDevice;
  protected isLoading:boolean=true;

  @Output() onReturnClickedEvent = new EventEmitter<string>();
  onReturnClicked() {
    if(this.isParentExist)
      this.onReturnClickedEvent.emit();
    else
      this.router.navigate(["/cours"])
  }

  constructor(private router:Router,
              private route: ActivatedRoute,
              private stylisticDeviceService:StylisticDeviceService) {}

  ngOnInit() {
    this.isLoading=true;
    this.sub = this.route.params.subscribe(params => {
      this.id = this.id==0?+params['id']:this.id;
      this.stylisticDeviceService.getById(this.id).subscribe(data => {
        this.stylisticDevice = data;
        this.isLoading=false;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
