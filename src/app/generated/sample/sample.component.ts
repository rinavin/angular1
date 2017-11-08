import {Component} from '@angular/core';
import {BaseTaskMagicComponent} from "../../magic/src/ui/app.baseMagicComponent";
import {TaskMagicService} from "../../magic/src/services/task.magics.service";

@Component({
  selector: 'app-sample',
  providers: [TaskMagicService],
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent extends BaseTaskMagicComponent {
}
