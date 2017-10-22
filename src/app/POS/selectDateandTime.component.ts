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
    <link rel="stylesheet" href="https://unpkg.com/neo-assets@1/dist/css/neo.min.css">
    <link rel="stylesheet" href="https://unpkg.com/neo-assets@1.3.0/dist/css/neo-checkbox-radio.min.css">

    <form novalidate [formGroup]="screenFormGroup">

      <div class="mainbody">
        <div class="row">
          <!--::berore-->
          <div class="col-sm-4">
            <m-image controlId="Delivery"></m-image>
          </div>
          <div class="vspacer15 visible-xs"></div>
          <div class="col-sm-4" *ngIf="isImageExists('ToGo')">
            <img magic="ToGo" [src]="getImage('ToGo')"/>
          </div>
          <div class="vspacer15 visible-xs"></div>
          <div class="col-sm-4">
            <div class="row">
              <div class="col-sm-12 pad0">
                <label> Selected Date:</label>
                <!--<h3>-->
                <!--<m-label controlId="SelectaDate:"></m-label>-->
                <!--</h3>-->
                <div class="has-feedback datepicker-control">
                  <p-calendar magic="vDate" formControlName="vDate"></p-calendar>
                </div>
              </div>

              <div class="col-sm-12 tmar20 pad0 ">
                <!--<h3>-->
                <!--<m-label controlId="Selectatime:"></m-label>-->
                <!--</h3>-->
                <label> Selected Time:</label>
                <div class="has-feedback datepicker-control">
                  <p-calendar magic="vTime" formControlName="vTime" [timeOnly]="true" dateFormat="HH:mm"></p-calendar>
                </div>
              </div>

              <div class="col-sm-12 tmar20 pad0 ">
                <button magic="Continue" class="btn btn-primary">Continue</button>
              </div>
            </div>
          </div>
        </div>

        <!--&lt;!&ndash;::after&ndash;&gt;-->
        <!--<div class="row fr tmar20">-->
        <!--<div class="row fr tmar12">  &lt;!&ndash; class = "buttons" &ndash;&gt;-->
        <!--&lt;!&ndash;<button magic="Continue" class="btn btn-primary">Continue</button>&ndash;&gt;-->
        <!--&lt;!&ndash;<input type="text" magic="vDate" formControlName="vDate"/>  [showSeconds]="true"&ndash;&gt;-->
        <!--&lt;!&ndash;<input type="text" magic="vHour" formControlName="vHour"/> :&ndash;&gt;-->
        <!--&lt;!&ndash;<input type="text" magic="vMinute" formControlName="vMinute"/>&ndash;&gt;-->
        <!--</div>-->
        <!--</div>-->

        <!--<div>-->
        <!--debug:{{task.getValue('vDate')}}-->
        <!--debug:{{task.getValue('vTime')}}-->
        <!--</div>-->


        <!-- date: <input type="text" formControlName="vDate"/><br>-->

        <!--<input type="time" magic="vMinute" formControlName="vMinute"/><br>-->
        <!--{{counter}}-->
        <!--<pre>-->
        <!--{{ user.value | json }}-->
        <!--</pre>-->

      </div>  <!--</div  mainBody> -->

    </form>
  `
})
export class SelectDateAndTime extends BaseTaskMagicComponent {

  orgValueCallback: any;



  constructor(ref: ChangeDetectorRef,
              task: TaskMagicService,
              public app: ApplicationRef) {
    super(ref, task);
    this.orgValueCallback = this.getvalueCallback;
    this.getvalueCallback = (rowId:string, controlKey: string) => {
      let val = this.orgValueCallback(rowId, controlKey);
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

