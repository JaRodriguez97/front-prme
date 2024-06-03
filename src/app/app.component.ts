import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { PublicService } from '@services/Public/public.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'front-rpme';

  faBars = faBars;
  faWhatsapp = faWhatsapp;
  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faTiktok = faTiktok;

  socialMedia: Array<{
    href: string;
    title: string;
    icon: typeof faTiktok;
  }> = [
    {
      href: 'https://www.facebook.com/people/RPMarketing/61557607667701',
      title: '',
      icon: faFacebookF,
    },
    {
      href: 'https://www.instagram.com/rp_marketingestrategico',
      title: 'string',
      icon: faInstagram,
    },
    {
      href: 'https://www.tiktok.com/@rp_marketingestrategico',
      title: 'string',
      icon: faTiktok,
    },
    {
      href: 'https://wa.me/573025442544',
      title: 'string',
      icon: faWhatsapp,
    },
  ];

  constructor(public publicService: PublicService) {
    this.publicService.load = true;
    this.publicService.headerLoad = false;
  }

  ngOnInit(): void {
    this.publicService.headerLoad = false;
  }

  ngAfterViewInit() {
    this.publicService.headerLoad = false;
    setTimeout(() => {
      this.publicService.medium_load = true;
      this.publicService.headerLoad = true;

      setTimeout(() => {
        this.publicService.load = false;
      }, 2200);
    }, 500);
  }

  toogleMenu() {
    if (this.publicService.sticky)
      this.publicService.sticky = !this.publicService.sticky;

    setTimeout(() => (this.publicService.menu = !this.publicService.menu), 300);
  }

  imgLogoLoaded() {
    this.publicService.imgLogoLoaded = true;
  }
}
