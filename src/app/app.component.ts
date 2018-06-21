import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .condition {
    color: white;
      }
 `]
})
export class AppComponent  implements OnInit {
  public counter : number = 0;
  displayDetails = false;
  details ='TestDetails';
  detailsAdded = false;
  conditionStatus: string = 'nocondition';

  ngOnInit() {

  }
  
  onDisplaydetails() {
    this.detailsAdded = true;
    this.counter += 1; 
    this.conditionStatus = this.counter >= 5 ? 'condition' : 'nocondition'; 
    
  }
  getConditionStatus() {
    return this.conditionStatus;
  }
  constructor() {
    setTimeout(() => {
      this.displayDetails = true;
    }, 1000);
 }
  getColor() {
    return this.conditionStatus === 'condition' ? 'blue' : 'white';
  }
}
