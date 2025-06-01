import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentLang: string = 'fr';
  isLangOpen = false;

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    this.currentLang = this.translate.currentLang || 'fr';
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    this.isLangOpen = false;
  }

  toggleLangMenu() {
    this.isLangOpen = !this.isLangOpen;
  }
}
