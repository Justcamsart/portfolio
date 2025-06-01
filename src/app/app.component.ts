import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ContactComponent } from './Components/contact/contact.component';
import { FooterComponent } from './Components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HomeComponent,
    SkillsComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    TranslateModule //
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['fr', 'en']);
    this.translate.setDefaultLang('fr');

    const browserLang = translate.getBrowserLang();
    this.translate.use(browserLang?.match(/fr|en/) ? browserLang : 'fr');
  }
}
