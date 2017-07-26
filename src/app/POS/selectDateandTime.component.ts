/**
 * Created by rinav on 7/24/2017.
 */
/**
 * Created by rinav on 7/23/2017.
 */
import {ApplicationRef, ChangeDetectorRef, Component} from "@angular/core";
import {BaseTaskMagicComponent} from "../magic/src/ui/app.baseMagicComponent";
import {FormControl, FormGroup} from "@angular/forms";
import {TaskMagicService} from "../magic/src/services/task.magics.service";

/**
 * Created by rinav on 7/19/2017.
 */
@Component({
  selector: 'selectDateTime',
  providers: [TaskMagicService],
  template: `
    <form novalidate [formGroup]="user">
      SelectDateAndTime<br>
      <m-image controlId="Delivery"></m-image>
      <m-image controlId="ToGo"></m-image>
      <br>
      <m-label controlId="SelectaDate:"></m-label>
      <m-label controlId="Selectatime:"></m-label>
      <br>
      <input type="text" magic="vDate" formControlName="vDate"/>  
      <input type="text" magic="vHour" formControlName="vHour"/> :
      <input type="text" magic="vMinute" formControlName="vMinute"/>
      <br>
      debug:{{task.getValue('vDate')}}
      <button magic="Continue">Continue</button>
      

     <!-- date: <input type="text" formControlName="vDate"/><br>-->

      <!--<input type="time" magic="vMinute" formControlName="vMinute"/><br>-->
      <!--{{counter}}-->
      <!--<pre>-->
        <!--{{ user.value | json }}-->
      <!--</pre>-->


    </form>
  `
})
export class SelectDateAndTime extends BaseTaskMagicComponent {


  get user(): FormGroup {
    return this.record;
  }

  constructor(
    ref: ChangeDetectorRef,
    task: TaskMagicService,
    public app:ApplicationRef){
    super(ref,task);
    // setInterval(()=>{
    //   this.counter++;
    //   app.tick();
    // },1000);
  }

  counter = 0;

/*  user = new FormGroup({
    vDate : new FormControl(),
    vMinute : new FormControl()
  })*/
}

