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
  selector: 'select-date-time',
  providers: [TaskMagicService],
  template: `
    <form novalidate [formGroup]="user">
      <m-image controlId="Delivery"></m-image>
      <m-image controlId="ToGo"></m-image>
      <div class="inputs">
        <m-label controlId="SelectaDate:"></m-label>
        <p-calendar magic="vDate" formControlName="vDate"></p-calendar>

        <m-label controlId="Selectatime:"></m-label>
        <p-calendar magic="vTime" formControlName="vTime" [timeOnly]="true" dateFormat="HH:mm"></p-calendar>
      </div>
      <div class="buttons">
        <button magic="Continue">Continue</button>
      </div>
      <!--<input type="text" magic="vDate" formControlName="vDate"/>  [showSeconds]="true"-->
      <!--<input type="text" magic="vHour" formControlName="vHour"/> :-->
      <!--<input type="text" magic="vMinute" formControlName="vMinute"/>-->
      <div>
        debug:{{task.getValue('vDate')}}
        debug:{{task.getValue('vTime')}}
      </div>


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

  orgValueCallback: any;

  get user(): FormGroup {
    return this.record;
  }

  constructor(ref: ChangeDetectorRef,
              task: TaskMagicService,
              public app: ApplicationRef) {
    super(ref, task);
    this.orgValueCallback = this.getvalueCallback;
    this.getvalueCallback = (controlKey: string) => {
      let val = this.orgValueCallback(controlKey);
      if (controlKey == 'vTime') {
        debugger;
        let date: Date = val;
        val = `${this.pad(val.getHours())}:${this.pad(val.getMinutes())}`;
      }

      return val;
    }
    //


    // setInterval(()=>{
    //   this.counter++;
    //   app.tick();
    // },1000);
  }

  private pad(n) {
    return n < 10 ? "0" + n : n;
  }

  counter = 0;

  /*  user = new FormGroup({
   vDate : new FormControl(),
   vMinute : new FormControl()
   })*/
}

