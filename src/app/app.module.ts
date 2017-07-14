import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule}         from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {MagicDirectiveDirective} from './magic/src/ui/magic-directive.directive';
import {MagicModule} from "./magic/magic.core.module";
import {AppComponent} from './app.component';
import {Demo1Component} from "./demos/demo1.component";
import {InnerComponent} from "./demos/inner.component";
import {Demo2Component} from "./demos/demo2.component";
import { Demo2WithNgContainerComponent } from './demos/demo2WithNgContainer.component';
import { Demo2WithNgDynamicComponent } from './demos/demo2WithNgDynamic.component';
import { Called1Component } from './demos/called1.component';
import { Called2Component } from './demos/called2.component';
import {DynamicModule} from "ng-dynamic-component";

@NgModule({
   declarations: [
      AppComponent,
      Demo1Component,
      Demo2Component,
       //MagicDirectiveDirective,
      InnerComponent,
       Demo2WithNgContainerComponent,
       Demo2WithNgDynamicComponent,
       Called1Component,
       Called2Component
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      JsonpModule,
      ReactiveFormsModule,

      DynamicModule.withComponents([Called1Component, Called2Component]),

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
   constructor()
   {

   }
}
