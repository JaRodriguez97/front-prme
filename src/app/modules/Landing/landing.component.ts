import { Component, OnInit } from '@angular/core';
import { PublicService } from '@app/services/Public/public.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  faBars = faBars;

  constructor(public publicService: PublicService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const animationFrame = () => {
      if (typeof requestAnimationFrame === 'function')
        requestAnimationFrame(() => {
          if (this.publicService.img2Inicio) this.publicService.stopInterval();

          setTimeout(() => animationFrame(), 2000); // Llamada recursiva para continuar la animación
        });
    };

    animationFrame(); // Iniciar la animación por primera vez
  }

  toogleMenu() {
    this.publicService.servicios = true;
    this.publicService.trabajos = true;
    this.publicService.testimonios = true;
    this.publicService.contactImg = true;

    this.publicService.menuToggle = !this.publicService.menuToggle;
    this.publicService.menu = !this.publicService.menu;
  }
}
