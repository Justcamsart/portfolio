import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appObserveVisibility]',
  standalone: true
})
export class ObserveVisibilityDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'slide-in');
        } else {
          this.renderer.removeClass(this.el.nativeElement, 'slide-in');
        }
      },
      { threshold: 0.1 } // plus sensible à l'entrée/sortie
    );

    observer.observe(this.el.nativeElement);
  }
}
