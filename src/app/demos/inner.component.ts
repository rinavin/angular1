/**
 * Created by rinav on 06/07/2017.
 */
/**
 * Created by rinav on 06/07/2017.
 */
import {Component, Input, OnInit} from "@angular/core";
import {BaseTaskMagicComponent} from "../magic/src/ui/app.baseMagicComponent";
import {FormGroup} from "@angular/forms";
import {TaskMagicService} from "../magic/src/services/task.magics.service";


@Component({
   selector: 'innercomponent',
   providers: [TaskMagicService],
   template: `
      <h3>Demo 2.1 - TaskId: {{taskId}}</h3>
      <form novalidate [formGroup]="user">
         <label>
            <span>Id111:</span>
            <input
               type="text"
               magic="id"
               formControlName="id"
            >
         </label>
         <br>
         <label>
            <span>Name111:</span>
            <input
               type="text"
               magic="name"
               formControlName="name"
            >
         </label>
         <button magic="nextb" >Next</button>
         <button magic="prevb" >Prev</button>
      </form>
   `
})
export class InnerComponent extends BaseTaskMagicComponent{
  //  ngOnInit(): void {
  //    // alert(this.subformName);
  //    // alert(this.parentId);
  //  }

   @Input() subformName: string;
   @Input() parentId: string;
//extends BaseTaskMagicComponent{

    get user(): FormGroup{
       return this.record;
    }
}
