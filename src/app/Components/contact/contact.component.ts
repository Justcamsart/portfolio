import { Component } from '@angular/core';
import { ObserveVisibilityDirective } from '../../directives/observe-visibility.directive';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [TranslateModule,ObserveVisibilityDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
