import { Component } from '@angular/core';
import { ObserveVisibilityDirective } from '../../directives/observe-visibility.directive';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [TranslateModule,ObserveVisibilityDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
