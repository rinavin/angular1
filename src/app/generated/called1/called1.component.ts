import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BaseTaskMagicComponent} from "../../magic/src/ui/app.baseMagicComponent";
import {TaskMagicService} from "../../magic/src/services/task.magics.service";

@Component({
  selector: 'app-calle1',
  providers: [TaskMagicService],
  templateUrl: './called1.component.html',
  // styleUrls: ['./sample.component.css']
})
export class Called1Component extends BaseTaskMagicComponent implements OnInit {

  constructor(protected ref: ChangeDetectorRef,
              protected task: TaskMagicService) {
    super(ref, task);
    this.task.insertEvent("menuclick", "", "4002");

  }


}
