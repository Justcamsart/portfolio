import { Component } from '@angular/core';
import { ObserveVisibilityDirective } from '../../directives/observe-visibility.directive';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-skills',
  imports: [TranslateModule,ObserveVisibilityDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
