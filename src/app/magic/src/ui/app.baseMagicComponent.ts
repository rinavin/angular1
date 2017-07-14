import {Component, OnInit, ChangeDetectorRef, Input, Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TaskMagicService} from "../services/task.magics.service";
import {MagicEngine} from "../services/magic.engine";
import {PropType} from "./propType";
import {isUndefined} from "util";

@Component({
   selector: 'task-magic',
   providers: [TaskMagicService]
})
export abstract class BaseTaskMagicComponent implements OnInit {
  @Input() subformName: string;
  @Input() parentId: string;
  @Input() myTaskId: string;

  get controlProperties(): any {
    return this._controlProperties;
  }

  set controlProperties(value: any) {
    this._controlProperties = value;
  }

  get propType() {
    return PropType;
  }

  private _controlProperties: any;
  //persons: { [id: string]: string; };
  protected props: { [id: string]: { [id: string]: string; } };

  /*get rowId(){
   return this.task.rowId;
   }*/

  get table() {
    return this.task.rows;
  }

  get record() {
    return this.task.rows[0];
  }

  //items: FormGroup;
  get taskId() {
    return this.task.taskId;
  }

  constructor(protected ref: ChangeDetectorRef,
              protected task: TaskMagicService,
              //protected magic:MagicEngine

  ) {
    debugger;
  }

  ngOnInit() {
    if (isUndefined(this.myTaskId)) {
      this.task.taskId = this.task.getTaskId(this.parentId, this.subformName);
    }
     else{
       this.task.taskId = this.myTaskId;
    }
    alert(this.taskId);


    this.task.registerGetValueCallback((controlKey: string) => {
      console.log('registerGetValueCallback', controlKey);
      return this.record.get(controlKey).value;
    });

    this.task.registerShowMessageBox(msg => {
      alert(msg);
    });

    this.task.registerRefreshTableUI(data => {
      alert(data);
          // this.list = JSON.parse(data);
          // self.ref.detectChanges();
          // alert(this.list);
          // self.id = obj[1].Value;
          // self.name = obj[3].Value;
          // (<FormControl>this.user.controls['id'])
          //   .setValue(obj[1].Value, { onlySelf: true });
          // (<FormControl>this.user.controls['name'])
          //   .setValue(obj[3].Value, { onlySelf: true });
          // self.ref.detectChanges();
       }
    );
    this.task.registerRefreshUI(data => {
        //TODO: move this code to taskservice
        this.task.controlsMetadata_.fromJson(data);
        // console.dir(obj.ControlsValues);
        this.record.patchValue(this.task.controlsMetadata_.Values());
        this.ref.detectChanges();

      }
    );


    // this.task.startMagic();


  }


  initializeMagic() {
    //myExtObject.registerGetValueCallback(this.GetValueCallback.bind(this));
  }

  GetValueCallback(taskId: number, controlId: string, rowId: number = 0): any {
    return
  }
}
