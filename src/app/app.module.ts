import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { StringPropertyBindingComponent } from './string-property-binding/string-property-binding.component';
import { AddServerOnclickComponent } from './add-server-onclick/add-server-onclick.component';
import { BindingAssignmentComponent } from './binding-assignment/binding-assignment.component';
import { AngularConditionsComponent } from './angular-conditions/angular-conditions.component';
import { BasicComponentCreationComponent } from './angular-basics/basic-component-creation/basic-component-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    StringPropertyBindingComponent,
    AddServerOnclickComponent,
    BindingAssignmentComponent,
    AngularConditionsComponent,
    BasicComponentCreationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
