/**
 * Created by rinav on 05/07/2017.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MagicEngine} from "./src/services/magic.engine";
import {MagicDirectiveDirective} from "./src/ui/magic-directive.directive";
import {MagicDefaultValueAccessor, MagicFormControlNameDirective} from "./src/ui/magic.form-control-name.directive";
import {MagicComponents} from "../generated/magic.components";

const decs = [
  MagicDirectiveDirective,
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
    MagicComponents,
  ]
})
export class MagicModule{
   static forRoot(){
      return {
         ngModule: MagicModule,
         providers: [
            MagicEngine,
         ]
      }
   }
}
