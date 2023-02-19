import { Component } from '@angular/core';
import { Example } from 'src/app/model/example.model';
import { StylisticDevice } from 'src/app/model/stylisticdevice.model';
import { ExampleService } from 'src/app/service/example.service';
import { StylisticDeviceService } from 'src/app/service/stylistic-device-service.service';
import arrayShuffle from 'array-shuffle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent {
  protected examples:Example[] = []
  protected n:number = -1
  protected listAnswer:StylisticDevice[] = [];
  protected indexAnswerChosen:number=-1
  protected trueAnswer:StylisticDevice;
  protected rating:number=0;

  protected isVictoryPanelDisplayed:boolean = false;
  protected isWon:boolean = false;
  protected isQuestionOver:boolean = false;
  protected answerClicked:StylisticDevice;

  protected isLoading:boolean = true;

  constructor(private exampleService:ExampleService,
              private stylisticDeviceService:StylisticDeviceService,
              private router:Router){
    this.answerClicked = {id:0,
                          name:"",
                          description:"",
                          text:"",
                          author:""} ;
    this.trueAnswer = { id:0,
                        name:"",
                        description:"",
                        text:"",
                        author:""} ;
  }

  ngOnInit(){
    this.exampleService.getRandom().subscribe(data =>{
      this.examples = data;
      this.onClickNext();
    })
  }

  onClickAnswer(choice:number){
    if(!this.isQuestionOver){
      this.answerClicked=this.listAnswer[choice]
      this.indexAnswerChosen=choice;
    }
  }

  onClickNextValidate(){
    if(this.isQuestionOver)
      this.onClickNext()
    else
      this.onClickValidate()
  }

  onClickValidate(){
    this.isWon = this.answerClicked.id == this.trueAnswer.id
    if(this.isWon)
      this.rating=this.rating+1;
    this.isVictoryPanelDisplayed=true;
    this.isQuestionOver=true    
  }

  resetQuestion(){
    this.isVictoryPanelDisplayed=false;
    this.isQuestionOver=false;
    this.isWon=false;
    this.answerClicked = {id:0,
                          name:"",
                          description:"",
                          text:"",
                          author:""} ;
  }

  onClickNext(){
    this.isLoading = true;
    this.answerClicked.id=0;
    this.isVictoryPanelDisplayed=false
    this.indexAnswerChosen=-1
    this.n = this.n+1;
    this.isQuestionOver=false;
    this.listAnswer = []
    
    if(this.n>9)
      this.router.navigate(["quizz-result",this.rating]);
    else{
      this.stylisticDeviceService.getById(this.examples[this.n].id_stylistic_device).subscribe(stylisticDevice => { //requete http pour obtenir la répoonse à la question
        this.listAnswer.push(stylisticDevice);
        this.trueAnswer=stylisticDevice;
        this.stylisticDeviceService.getRandom(stylisticDevice).subscribe(stylisticDevices => {                      //requete http pour obtenir 3 fausse réponse à la question
          this.listAnswer.push(...stylisticDevices);
          this.listAnswer = arrayShuffle(this.listAnswer);
          this.isLoading = false;
        });
      })
    }
  }

  getClass(index:number){
    if(!this.isQuestionOver){
      console.log("selected")
      return this.indexAnswerChosen==index?'selected':null;
    }
    else{
      if(this.indexAnswerChosen==index && this.listAnswer[index].id==this.trueAnswer.id)
        return "green";
      else if(this.indexAnswerChosen==index && this.listAnswer[index].id!=this.trueAnswer.id)
        return "red";
      
      if(this.indexAnswerChosen!=index && this.listAnswer[index].id==this.trueAnswer.id)
        return "green";
    }
    return null;
  }
}

