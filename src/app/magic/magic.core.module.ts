/**
 * Created by rinav on 05/07/2017.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MagicEngine} from "./src/services/magic.engine";
import {TaskMagicService} from "./src/services/task.magics.service";
import {MagicDirectiveDirective} from "./src/ui/magic-directive.directive";
import {MagicLabelComponent} from "./src/ui/magic-label.component";
import {MagicCheckboxComponent} from "./src/ui/magic-checkbox.component";
import {MagicImageComponent} from "./src/ui/magic-Image.component"


import {Called2Component} from "../demos/called2.component";




import {MagicImageButtonComponent} from "./src/ui/magic-ImageButton.component";
import {MagicHyperTextButtonComponent} from "app/magic/src/ui/magic-HyperTextButton.component";
import {MagicDefaultValueAccessor, MagicFormControlNameDirective} from "./src/ui/magic.form-control-name.directive";

const decs = [
  MagicDirectiveDirective,
  MagicLabelComponent,
  MagicCheckboxComponent,
  MagicImageComponent,
  MagicImageButtonComponent,
  MagicHyperTextButtonComponent,
  MagicDefaultValueAccessor,
  MagicFormControlNameDirective,

];

@NgModule({
  declarations:decs,
  exports: decs,
  imports:[
    CommonModule
  ],
  entryComponents: [
    Called2Component,
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
