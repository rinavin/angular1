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
          magic="seeId"
          formControlName="seeId">
      </label>
      <br>
    </form>
    <ul >
      <li *ngFor="let o of task.Records.list" > 
    <span >
      <span  magic="id" [rowId]="o.rowId">{{o.values['id']}}</span>
      <span  magic="name" [rowId]="o.rowId">{{o.values['name']}}</span>
      <button magic="clickme" [rowId]="o.rowId"> ClickMe</button>
       
    </span>

      </li>
      <button magic="refresh" >View Refresh</button>
      
    </ul>
    </div>
  `
})
export class TableTestComponent extends BaseTaskMagicComponent {



  get user(): FormGroup {
    return this.record;
  }






}

