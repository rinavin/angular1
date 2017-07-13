/**
 * Created by rinav on 12/07/2017.
 */
import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { FormGroup } from "@angular/forms";
import {TaskMagicService} from "../magic/src/services/task.magics.service";
import {ControlsMetadata} from "../magic/src/controls.metadata.model";
//import { PropType } from "../magic/src/ui/propType";


@Component({
  selector: 'tabletest',
  providers: [TaskMagicService],
  template: `
    <div>
      <h1>TableTest</h1>
    <form novalidate [formGroup]="user">
      <label>
        <!--<span>{{GetProperty('idlabel', propType.Text )}}</span>-->
        
        <input
          type="text"
          magic="id"
          formControlName="id">
        
        <!--<input
           class="jasmine-alert"
           [ngClass]="GetClass('idlabel')"
           
           style="border:1px solid red;"
           [ngStyle]="GetStyle('idlabel')"
           
           tooltip="idlabel"
           type="text"
           magic="id"
           formControlName="id"
           >-->
      </label>
      <br>
      <label>
        <span>Name:</span>
        <input
          type="text"
          magic="name"
          formControlName="name"
        >
      </label>
      
    </form>
    <ul >
      <li *ngFor="let o of task.Records.list" > 
    <span >
      <span  > RowId = {{o.rowId}}</span>
      <span  >{{o.values['id']}}</span>
      <span  >{{o.values['name']}}</span>
       
    </span>

      </li>
      <button magic="refresh" >Next</button>
      
    </ul>
    </div>
  `
})
export class TableTestComponent extends BaseTaskMagicComponent {



  get user(): FormGroup {
    return this.record;
  }






}

