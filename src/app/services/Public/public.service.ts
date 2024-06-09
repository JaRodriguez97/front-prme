import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID, Renderer2 } from '@angular/core';
import { environment } from '@env/environment';
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
@Injectable({
  providedIn: 'root',
})
export class PublicService {
  // URL = environment.urlBack + 'contact/';

  // public interval!: any;
  readonly isBrowser!: boolean;
  readonly isMobile!: boolean;

  public sticky!: boolean;
  public menu!: boolean;
  public load: boolean = true;
  public loadStop!: boolean;
  public imgLogoLoaded!: boolean;
  public headerLoad: boolean = false;
  public medium_load!: boolean;
  public finish_load!: boolean;
  public transparentes: Array<string> = Array(15).fill('transparent');

  socialMedia: Array<{
    href: string;
    title: string;
    icon: typeof faTiktok;
  }> = [
    {
      href: 'https://www.instagram.com/rp_marketingestrategico',
      title: 'string',
      icon: faInstagram,
    },
    {
      href: 'https://www.facebook.com/people/RPMarketing/61557607667701',
      title: '',
      icon: faFacebookF,
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

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient
  ) {
    // Verifica si la aplicación se está ejecutando en un navegador
    this.headerLoad = false;
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      // Obtén el agente de usuario del navegador
      //@ts-ignore
      const { userAgentData, userAgent } = window.navigator;

      if (userAgentData) this.isMobile = userAgentData.mobile;
      else if (
        userAgent.match(/Android/i) ||
        userAgent.match(/webOS/i) ||
        userAgent.match(/iPhone/i) ||
        userAgent.match(/iPad/i) ||
        userAgent.match(/iPod/i) ||
        userAgent.match(/BlackBerry/i) ||
        userAgent.match(/Windows Phone/i)
      )
        this.isMobile = true;
      else this.isMobile = false;

      console.log('El dispositivo usado es un celular: ', this.isMobile);
    }
  }

  headers() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  // sendClick(event: string) {
  //   let headers = this.headers();

  //   return this.http.post(this.URL + 'click', { event }, { headers });
  // }
}
