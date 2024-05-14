import { Component, OnInit } from '@angular/core';
import { PublicService } from '@app/services/Public/public.service';
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  faBars = faBars;
  faWhatsapp = faWhatsapp;
  faFacebook = faFacebook;
  faInstagram = faInstagram;

  constructor(public publicService: PublicService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    setInterval(() => {
      if (this.publicService.img2Inicio) this.publicService.stopInterval();
    }, 1000);
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
