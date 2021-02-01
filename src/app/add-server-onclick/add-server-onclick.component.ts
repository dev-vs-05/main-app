import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-server-onclick',
  templateUrl: './add-server-onclick.component.html',
  styleUrls: ['./add-server-onclick.component.css']
})
export class AddServerOnclickComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dummyData: any = '';
  addServerName: any = '';

  // onUpdateServerName (event: any) {
  //   this.addServerName = event.target.value;
  // }

  onClickAddServerName() {
    this.dummyData = 'Server no is ' + this.addServerName;
    // console.log(this.addServerName);   working
  }

}
