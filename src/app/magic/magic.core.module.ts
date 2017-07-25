/**
 * Created by rinav on 05/07/2017.
 */
import {NgModule} from "@angular/core";
import {MagicEngine} from "./src/services/magic.engine";
import {TaskMagicService} from "./src/services/task.magics.service";
import {MagicDirectiveDirective} from "./src/ui/magic-directive.directive";
import {MagicLabelComponent} from "./src/ui/magic-label.component";
import {MagicCheckboxComponent} from "./src/ui/magic-checkbox.component";
import {MagicImageComponent} from "./src/ui/magic-Image.component"
import {Demo1Component} from "./../demos/demo1.component";
import {Demo2Component} from "../demos/demo2.component";
import {Called2Component} from "../demos/called2.component";
import {Called1Component} from "../demos/called1.component";
import {Demo2WithNgContainerComponent} from "../demos/demo2WithNgContainer.component";
import {Demo2WithNgDynamicComponent} from "../demos/demo2WithNgDynamic.component";
import {TableTestComponent} from "../demos/table.test.component";
import {RunmeComponent} from "../POS/runme.comonent";
import {EnableVisibleTestComponent} from "../demos/enable-visible.test.component";
import {OrderLocation} from "../POS/orderLocation.component";
import {SelectDateAndTime} from "../POS/selectDateandTime.component";
import {DemoImageControlComponent} from "../demos/DemoImageControl.component";

import {CommonModule} from "@angular/common";
import {DemoImageButtonControlComponent} from "../demos/DemoImageButtonControl.component";
import {MagicImageButtonComponent} from "./src/ui/magic-ImageButton.component";

import {MagicHyperTextButtonComponent} from "app/magic/src/ui/magic-HyperTextButton.component";
import {DemoHyperTextButtonControlComponent} from "../demos/DemoHyperTextButtonControl.component";

const decs = [
  MagicDirectiveDirective,
  MagicLabelComponent,
  MagicCheckboxComponent,
  MagicImageComponent,
  MagicImageButtonComponent,
  MagicHyperTextButtonComponent
];

@NgModule({
  declarations:decs,
  exports: decs,
  imports:[
    CommonModule
  ],
  entryComponents: [
    Demo1Component,
    Demo2Component,
    Demo2WithNgContainerComponent,
    Demo2WithNgDynamicComponent,
    Called1Component,
    Called2Component,
    TableTestComponent,
    RunmeComponent,
    OrderLocation,
    SelectDateAndTime,
    EnableVisibleTestComponent,
    DemoImageButtonControlComponent,
    DemoImageControlComponent,
    DemoHyperTextButtonControlComponent
  ]
})
export class MagicModule{
   static forRoot(){
      return {
         ngModule: MagicModule,
         providers: [
            MagicEngine,
            //TaskMagicService
         ]
      }
   }
}
