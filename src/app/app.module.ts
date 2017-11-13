import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {MagicModule} from "./magic/magic.core.module";
import {AppComponent} from './app.component';
import {DynamicModule} from "ng-dynamic-component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MagicComponents} from "./generated/magic.components";


@NgModule({
  declarations: [
    AppComponent,
    MagicComponents,
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
        MagicComponents,
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
