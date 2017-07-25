///<reference path="demos/table.test.component.ts"/>
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
import {Demo2WithNgContainerComponent} from './demos/demo2WithNgContainer.component';
import {Demo2WithNgDynamicComponent} from './demos/demo2WithNgDynamic.component';
import {Called1Component} from './demos/called1.component';
import {Called2Component} from './demos/called2.component';
import {DynamicModule} from "ng-dynamic-component";
import {TableTestComponent} from "./demos/table.test.component";
import {CallSubformwithTableComponent} from "./demos/call.subfrom.with.table.component";
import {EnableVisibleTestComponent} from "./demos/enable-visible.test.component"
import {DemoImageControlComponent} from "./demos/DemoImageControl.component";
import {RunmeComponent} from "./POS/runme.comonent";
import {OrderLocation} from "./POS/orderLocation.component";
import {SelectDateAndTime} from "./POS/selectDateandTime.component";
import {DemoImageButtonControlComponent} from "./demos/DemoImageButtonControl.component";


@NgModule({
  declarations: [
    // Add the components name that can be execute
    AppComponent,
    Demo1Component,
    Demo2Component,
    EnableVisibleTestComponent,
    TableTestComponent,
    CallSubformwithTableComponent,
    DemoImageControlComponent,
    InnerComponent,
    Demo2WithNgContainerComponent,
    Demo2WithNgDynamicComponent,
    Called1Component,
    Called2Component,
    RunmeComponent,
    OrderLocation,
    SelectDateAndTime,
    DemoImageButtonControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,

    // Add the subform components
    DynamicModule.withComponents(
      [
        Called1Component,
        Called2Component,
        OrderLocation,
        SelectDateAndTime
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
  constructor()
  {

  }
}
