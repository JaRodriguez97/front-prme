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
  title = 'front-rpme';

  faBars = faBars;
  faWhatsapp = faWhatsapp;
  faFacebook = faFacebookF;
  faInstagram = faInstagram;

  constructor(public publicService: PublicService, private render: Renderer2) {
    this.publicService.load = true;
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
