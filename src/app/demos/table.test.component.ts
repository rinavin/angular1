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
      <!--<label>-->
        <!--&lt;!&ndash;<span>{{GetProperty('idlabel', propType.Text )}}</span>&ndash;&gt;-->
        <!---->
        <!--<input-->
          <!--type="text"-->
          <!--magic="seeId"-->
          <!--formControlName="seeId">-->
      <!--</label>-->
      <!--<br>-->
   
    <ul >
      <li *ngFor="let o of task.Records.list" >
        <!--[formGroupName]="o.rowId"-->
        <div>
          i = {{o.rowId}}
          <!--[formGroupName]="getmyform(o.rowId)"-->
    <!--<form  >-->
      
       <!--<input-->
         <!--type="text"-->
         <!--magic="id"-->
         <!--formControlName="id">-->
      <!--<span  magic="id" [rowId]="o.rowId">{{o.values['id']}}</span>-->
      <span  magic="name" [rowId]="o.rowId">{{gettext('name',o.rowId )}}</span>
      <button magic="clickme" [rowId]="o.rowId"> ClickMe</button>
       
    <!--</form>-->
        </div>

      </li>
      <button magic="refresh" >View Refresh</button>
      
    </ul>
    </form>
    </div>
  `
})
export class TableTestComponent extends BaseTaskMagicComponent {



  get user(): FormGroup {
    return this.record;
  }
  getmyform(id:string):FormGroup {
    console.log("getmyform" + id );
    console.dir(this.task.rows);
    console.dir(this.task.Records.list);
    let num: number = parseInt(id);
    let g : FormGroup  =this.task.rows[id];
    console.log("FormGroup " + id );
    console.dir(g);
    console.log("FormGroup " + num );
    g   =this.task.rows[num];
    console.dir(g);
    return g;
   }
}








