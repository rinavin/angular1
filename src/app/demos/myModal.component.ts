import {ChangeDetectorRef, Component, ElementRef} from '@angular/core';
import {BaseTaskMagicComponent} from "../magic/src/ui/app.baseMagicComponent";
import {FormGroup} from "@angular/forms";
import {TaskMagicService} from "../magic/src/services/task.magics.service";

@Component({
  selector: 'myModalComponent',
  providers: [TaskMagicService],
  template: `
    <form novalidate [formGroup]="user">
      <nav>
        <div class="modal">
          <div class="modal-body">
            <h3>Modal - TaskId: {{taskId}}</h3>
            <m-label controlId="IdModal"></m-label>
            <input
              type="text"
              magic="editA"
              formControlName="editA">
            <button (click)="MgClick($event)">close</button>
          </div>
        </div>
        <div class="modal-background">
          <div class="modal-body"></div>          
        </div>
      </nav>
    </form>
  `
})
export class MyModalComponent extends BaseTaskMagicComponent {

  // private element: any;
  //
  // constructor(private elem: ElementRef,
  //             protected ref: ChangeDetectorRef,
  //             protected task: TaskMagicService) {
  //
  //   super (ref, task);
  //
  //   this.element = (elem.nativeElement);
  // }

  get user(): FormGroup{
    return this.record;
  }

  public MgClick(event){
    this.task.insertEvent("close", "0", "0");
    //this.element.remove();
  }
}
