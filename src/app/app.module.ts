import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { StringPropertyBindingComponent } from './string-property-binding/string-property-binding.component';
import { AddServerOnclickComponent } from './add-server-onclick/add-server-onclick.component';

@NgModule({
  declarations: [
    AppComponent,
    StringPropertyBindingComponent,
    AddServerOnclickComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
