import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserveVisibilityDirective } from '../../directives/observe-visibility.directive';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ObserveVisibilityDirective,TranslateModule,],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit, OnDestroy {

  selectedIndex = 0;
  autoScrollInterval: any;

  projects = [
  {
    nameKey: 'projects.alsareDigital.title',
    descKey: 'projects.alsareDigital.desc',
    image: '../../assets/AlSareDigital.png'
  },
  {
    nameKey: 'projects.alsareCreation.title',
    descKey: 'projects.alsareCreation.desc',
    image: 'assets/ecommerce.png'
  },
  {
    nameKey: 'projects.planningApp.title',
    descKey: 'projects.planningApp.desc',
    image: '../../assets/Evento application.png'
  },
  {
    nameKey: 'projects.creaApp.title',
    descKey: 'projects.creaApp.desc',
    image: '../../assets/Oonah application.png'
  }
];

  ngOnInit(): void {
    this.autoScrollInterval = setInterval(() => {
      this.selectedIndex = (this.selectedIndex + 1) % this.projects.length;
    }, 20000); // toutes les 30 secondes
  }

  ngOnDestroy(): void {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }

  selectProject(index: number): void {
    this.selectedIndex = index;
  }
}
