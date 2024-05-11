import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID, Renderer2 } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class PublicService {
  // URL = environment.urlBack + 'contact/';

  public interval!: any;
  public isBrowser!: boolean;
  public isMobile!: boolean;
  public sticky!: boolean;
  public imgIndex!: boolean;
  public imgNosotros!: boolean;
  public show!: boolean;
  public menuToggle!: boolean;
  public menu!: boolean;
  public contactImg!: boolean;
  public servicios!: boolean;
  public trabajos!: boolean;
  public testimonios!: boolean;
  public load: boolean = true;
  public transparentes = Array(15).fill('transparent');

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient
  ) {
    // Verifica si la aplicación se está ejecutando en un navegador
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
    }

    console.log('El dispositivo usado es un celular: ', this.isMobile);
  }

  headers() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  animateBackground() {
    let blanco = '#fff5',
      indexHexa: number,
      i = 0;

    i++;
    indexHexa = this.transparentes.findIndex((elemento) =>
      elemento.startsWith('#')
    );
    if (
      indexHexa == this.transparentes.length ||
      indexHexa == this.transparentes.length - 1
    ) {
      this.transparentes[indexHexa] = 'transparent';
      i = 1;
      indexHexa = 0;
    }
    if (i % 2 == 0) {
      this.transparentes[indexHexa] = '#fff4';
      this.transparentes[indexHexa + 1] = '#fff4';
    } else {
      if (indexHexa == -1) this.transparentes.unshift(blanco);
      else {
        this.transparentes[indexHexa] = 'transparent';
        this.transparentes[indexHexa + 1] = blanco;
      }
    }

    return `background-image: var(--backgroundLoad), radial-gradient(
      ${this.transparentes.join(',')}
    );`;
  }

  stopInterval() {
    this.load = false;
    clearInterval(this.interval);
  }

  // sendClick(event: string) {
  //   let headers = this.headers();

  //   return this.http.post(this.URL + 'click', { event }, { headers });
  // }
}
