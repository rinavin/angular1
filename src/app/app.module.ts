import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {MagicModule} from "./magic/magic.core.module";
import {AppComponent} from './app.component';
import {SampleComponent} from './generated/sample/sample.component';
import {DynamicModule} from "ng-dynamic-component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    // Add the subform components
    DynamicModule.withComponents(
      [
        SampleComponent,
      ]),

    MagicModule.forRoot()
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {

  }
}
