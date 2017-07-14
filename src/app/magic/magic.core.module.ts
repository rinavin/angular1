/**
 * Created by rinav on 05/07/2017.
 */
import {NgModule} from "@angular/core";
import {MagicEngine} from "./src/services/magic.engine";
import {TaskMagicService} from "./src/services/task.magics.service";
import {MagicDirectiveDirective} from "./src/ui/magic-directive.directive";
import {MagicLabelComponent} from "./src/ui/magic-label.component";
import {Demo1Component} from "./../demos/demo1.component";
import {Demo2Component} from "../demos/demo2.component";
import {Called2Component} from "../demos/called2.component";
import {Called1Component} from "../demos/called1.component";
import {Demo2WithNgContainerComponent} from "../demos/demo2WithNgContainer.component";
import {Demo2WithNgDynamicComponent} from "../demos/demo2WithNgDynamic.component";

@NgModule({
   declarations:[
      MagicDirectiveDirective,
      MagicLabelComponent
   ],
   exports: [
     MagicDirectiveDirective,
     MagicLabelComponent
   ],
   entryComponents: [
     Demo1Component, Demo2Component,
     Demo2WithNgContainerComponent, Demo2WithNgDynamicComponent,
     Called1Component, Called2Component],
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
