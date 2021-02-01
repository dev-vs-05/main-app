import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-property-binding',
  templateUrl: './string-property-binding.component.html',
  styleUrls: ['./string-property-binding.component.css']
})
export class StringPropertyBindingComponent implements OnInit {
  addNewServer = false;

  constructor() {
    setTimeout (() => {
      this.addNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  sessionName: string = 'String Interpolation';
  propertyTitle: string = 'Property Binding';
  eventBinding: string = 'Event Binding'
  colNumOne: string = 'one';
  colNumTwo: string = 'two';
  noServerCreated: string = 'Server is not created';
  passingData: string = 'Passing and using data with Event Binding';
  enterServerName: any = '';
  twoWayBinding: string = 'Two Way Binding';
  
  createServer() {
    this.noServerCreated = 'Server is added!';
  }

  onUpdateServerName(event: any) {
    // console.log(event);
    this.enterServerName = event.target.value;
  }
}
