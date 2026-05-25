import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
} from "@angular/core";

// Directiva personalizada

@Directive({
  selector: "[appResaltarUrgente]",
  standalone: true,
})
export class ResaltarUrgenteDirective implements OnChanges {
  /* Cuando es true, el elemento se resalta con un borde y brillo de acento. */
  @Input("appResaltarUrgente") urgente = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnChanges(): void {
    if (this.urgente) {
      this.renderer.setStyle(
        this.el.nativeElement,
        "boxShadow",
        "0 0 0 1px var(--th-green), 0 0 12px rgba(29,158,117,0.25)",
      );
      this.renderer.setStyle(
        this.el.nativeElement,
        "borderColor",
        "transparent",
      );
    } else {
      this.renderer.removeStyle(this.el.nativeElement, "boxShadow");
      this.renderer.removeStyle(this.el.nativeElement, "borderColor");
    }
  }
}
