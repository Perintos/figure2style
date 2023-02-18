import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quizz-result',
  templateUrl: './quizz-result.component.html',
  styleUrls: ['./quizz-result.component.scss']
})
export class QuizzResultComponent {

  protected rating:number=0; // decorate the property with @Input()
  private sub: any;

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      this.rating = params['rating'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}