/**
 * Created by rinav on 05/07/2017.
 */
import {NgModule} from "@angular/core";
import {MagicEngine} from "./src/services/magic.engine";
import {TaskMagicService} from "./src/services/task.magics.service";
import {MagicDirectiveDirective} from "./src/ui/magic-directive.directive";
import {MagicLabelComponent} from "./src/ui/magic-label.component";
import {MagicCheckboxComponent} from "./src/ui/magic-checkbox.component";
import {MagicEditComponent} from "./src/ui/magic-edit.component";

const decs = [MagicDirectiveDirective, MagicLabelComponent, MagicCheckboxComponent, MagicEditComponent];


@NgModule({
  declarations:decs,
  exports: decs
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
