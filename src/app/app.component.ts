import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { PublicService } from '@services/Public/public.service';
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('preload', { static: false }) preload!: ElementRef;

  title = 'front-rpme';

  faBars = faBars;
  faWhatsapp = faWhatsapp;
  faFacebook = faFacebookF;
  faInstagram = faInstagram;

  constructor(public publicService: PublicService, private render: Renderer2) {
    this.publicService.load = true;
  }

  ngOnInit(): void {
    this.initAnimateLoad();
  }

  initAnimateLoad() {
    if (typeof requestAnimationFrame === 'function')
      requestAnimationFrame(() => {
        if (!this.preload) return;

        let bg = this.publicService.animateBackground();

        this.render.setAttribute(this.preload.nativeElement, 'style', bg);

        setTimeout(() => this.initAnimateLoad(), 60); // Llamada recursiva para continuar la animación
      });
  }

  toogleMenu() {
    this.publicService.load = true;
    this.ngOnInit();
    this.publicService.menu = !this.publicService.menu;
  }
}
