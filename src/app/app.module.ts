import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {MagicModule} from "./magic/magic.core.module";
import {AppComponent} from './app.component';
import {SampleComponent} from './generated/sample/sample.component';
import {DynamicModule} from "ng-dynamic-component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MenuComponentComponent} from './generated/menu-component/menu-component.component';
import {BooksComponent} from './generated/books/books.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./generated/app.router"
import {Called1Component} from "./generated/called1/called1.component";


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    Called1Component,
    MenuComponentComponent,
    BooksComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    // Add the subform components
    DynamicModule.withComponents(
      [
        SampleComponent,
        Called1Component
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
