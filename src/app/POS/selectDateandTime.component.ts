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
          <div class="col-sm-4">
            <div class="col-sm-4" *ngIf="isImageExists('Delivery')">
              <img magic="Delivery" [src]="getImage('Delivery')"/>
            </div>
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
    this.getvalueCallback = (rowId: string, controlKey: string) => {
      let val = this.orgValueCallback(rowId, controlKey);
      if (controlKey == 'vTime') {
        debugger;
        let date: Date = val;
        val = `${this.pad(val.getHours())}:${this.pad(val.getMinutes())}`;
      }
      // else if (controlKey == 'vDate') {
      //   debugger;
      //   let date: Date = new Date(val);
      //   val = this.pad(date.getDate() + 1 ) + '/' + this.pad(date.getMonth() + 1) + '/' + this.pad(date.getFullYear());
      // }

      return val;
    }
  }

  private pad(n) {
    return n < 10 ? "0" + n : n;
  }

  // setInterval(()=>{
  //   this.counter++;
  //   app.tick();
  // },1000);
}


//counter = 0;

/*  user = new FormGroup({
 vDate : new FormControl(),
 vMinute : new FormControl()
 })*/
//}

