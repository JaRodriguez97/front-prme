import { Component, OnInit } from '@angular/core';
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { PublicService } from '@services/Public/public.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'front-rpme';

  faBars = faBars;
  faWhatsapp = faWhatsapp;
  faFacebook = faFacebookF;
  faInstagram = faInstagram;

  constructor(public publicService: PublicService) {
    this.publicService.load = true;
    this.publicService.headerLoad = false;
  }

  ngOnInit(): void {}

  toogleMenu(i: boolean = true) {
    this.publicService.menu = !this.publicService.menu;

    if (i) {
      this.publicService.load = true;
    }
  }

  imgLogoLoaded() {
    this.publicService.imgLogoLoaded = true;
  }
}
