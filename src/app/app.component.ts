import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { PublicService } from '@services/Public/public.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('preload', { static: false }) preload!: ElementRef;

  faWhatsapp = faWhatsapp;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  title = 'front-rpme';

  constructor(public publicService: PublicService, private render: Renderer2) {
    this.publicService.load = true;
  }

  ngOnInit(): void {
    this.initAnimateLoad();
  }

  initAnimateLoad() {
    const animationFrame = () => {
      if (typeof requestAnimationFrame === 'function')
        requestAnimationFrame(() => {
          if (!this.preload) return;
          let bg = this.publicService.animateBackground();
          console.log('🚀 ~ AppComponent ~ requestAnimationFrame ~ bg:', {
            bg,
          });

          this.render.setAttribute(this.preload.nativeElement, 'style', bg);

          setTimeout(() => animationFrame(), 50); // Llamada recursiva para continuar la animación
        });
    };

    animationFrame(); // Iniciar la animación por primera vez
  }
}
