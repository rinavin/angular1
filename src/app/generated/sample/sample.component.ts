import {ChangeDetectorRef, Component} from '@angular/core';
import {BaseTaskMagicComponent} from "../../magic/src/ui/app.baseMagicComponent";
import {TaskMagicService} from "../../magic/src/services/task.magics.service";

@Component({
  selector: 'app-sample',
  providers: [TaskMagicService],
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent extends BaseTaskMagicComponent {
  constructor(protected ref: ChangeDetectorRef,
              protected task: TaskMagicService) {
    super(ref, task);
    this.task.insertEvent("menuclick", "", "4001");

  }
}