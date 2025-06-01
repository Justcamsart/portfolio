import { Component } from '@angular/core';
import { AnimatedBackgroundComponent } from '../animated-background/animated-background.component';
import { TranslateService, TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-home',
  imports: [AnimatedBackgroundComponent,TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
