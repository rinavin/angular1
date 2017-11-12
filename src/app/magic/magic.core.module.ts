/**
 * Created by rinav on 05/07/2017.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MagicEngine} from "./src/services/magic.engine";
import {MagicDirectiveDirective} from "./src/ui/magic-directive.directive";
import {SampleComponent} from "../generated/sample/sample.component";
import {MagicDefaultValueAccessor, MagicFormControlNameDirective} from "./src/ui/magic.form-control-name.directive";
import {Called1Component} from "../generated/called1/called1.component";

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
    SampleComponent,
    Called1Component
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
