import { PublicService } from '@app/services/Public/public.service';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent implements OnInit, OnDestroy {
  private animationFrameId: number | null = null;
  public servicios: Array<{
    src: string;
    alt: string;
    title: string;
    titulo: string;
    // parrafo: string;
  }> = [
    {
      src: 'https://img.freepik.com/vector-gratis/plantilla-poster-fotografia-diseno-plano_23-2149729941.jpg?t=st=1717423612~exp=1717427212~hmac=81d050b8d8cc01e8be07c608dc7b195f2693c701551ba4bc896d3ef24d3f23e4&w=740',
      alt: 'string',
      title: 'string',
      titulo: 'VOLANTE',
      // parrafo: 'string',
    },
    {
      src: 'https://img.freepik.com/vector-gratis/tarjeta-visita-ondulada-azul-moderna-elegante_1055-14035.jpg?t=st=1717423754~exp=1717427354~hmac=7986187be8c1ae128cb91ba6f47fb6f46485fb72309ae432dccb9544e7b546a4&w=740',
      alt: 'string',
      title: 'string',
      titulo: 'TARJETA PRESENTACION',
      // parrafo: 'string',
    },
    {
      src: 'https://img.freepik.com/vector-gratis/coleccion-etiquetas-gratis-dibujadas-mano_23-2149941094.jpg?t=st=1717424266~exp=1717427866~hmac=d51253daecc5773cb29b6182b326a17ad5528861f25889a2d4fb9e30d213f818&w=740',
      alt: 'string',
      title: 'string',
      titulo: 'SELLOS',
      // parrafo: 'string',
    },
    {
      src: 'https://img.freepik.com/vector-gratis/fondo-neon-proximamente_23-2148886596.jpg?t=st=1717424326~exp=1717427926~hmac=eda3b8742e6b26a5da5e24cebe533df3d8982402b34c70ca0ea395ad42e7041a&w=740',
      alt: 'string',
      title: 'string',
      titulo: 'LETREROS NEON',
      // parrafo: 'string',
    },
    {
      src: 'https://img.freepik.com/psd-gratis/comprar-maqueta-letrero_15879-541.jpg?t=st=1717424401~exp=1717428001~hmac=6318dad586ef5ed0f2c8a32877a327852dfc20cfdf0785ccaa48173019275990&w=740',
      alt: 'string',
      title: 'string',
      titulo: 'LETREROS VINILO',
      // parrafo: 'string',
    },
    {
      src: 'https://img.freepik.com/foto-gratis/cerrar-manos-sosteniendo-fotos-postres_23-2149294461.jpg?t=st=1717424519~exp=1717428119~hmac=ef8b99c38c4718092567e0a277a84d0ef259fbfa6727b316c9a622d3345fed87&w=740',
      alt: 'string',
      title: 'string',
      titulo: 'SESION FOTOGRAFIAS',
      // parrafo: 'string',
    },
    {
      src: 'https://img.freepik.com/foto-gratis/editor-video-asiatico-que-trabaja-imagenes-multimedia-edita-montajes-peliculas-gradacion-color-sonido-trabaja-forma-independiente-casa-uso-software-postproduccion-hacer-peliculas_482257-48024.jpg?t=st=1717424614~exp=1717428214~hmac=08631778beb60c246553fd4e59b29103333e2366e72fd1859c56ec9ed34b1023&w=740',
      alt: 'string',
      title: 'string',
      titulo: 'EDICION VIDEO',
      // parrafo: 'string',
    },
    {
      src: 'https://img.freepik.com/foto-gratis/gente-tiro-medio-adicta-redes-sociales_23-2149834257.jpg?t=st=1717424699~exp=1717428299~hmac=7a7b4011d72c051ead4630eaddad21b2c17167f6d3b926f3c3864e993428835c&w=740',
      alt: 'string',
      title: 'string',
      titulo: 'REDES SOCIALES',
      // parrafo: 'string',
    },
    {
      src: 'https://cdn.dribbble.com/userupload/14451326/file/original-1b8e38dc003b70c21843631c704e005b.png?resize=1600x1200',
      alt: 'string',
      title: 'string',
      titulo: 'PAGINAS WEB',
      // parrafo: 'string',
    },
  ];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public publicService: PublicService
  ) {}

  ngOnInit(): void {
    this.roundParticles();

    this.delayAnimation();

    this.detectScroll();
  }

  delayAnimation() {
    if (this.publicService.isBrowser) {
      this.animationFrameId = requestAnimationFrame(() => {
        setTimeout(() => {
          this.roundParticles();
          this.delayAnimation();
        }, 10000);
      });
    }
  }

  detectScroll() {
    let services = this.document.querySelector('.services');

    services?.addEventListener('scroll', () => {
      let scrollPos = services?.scrollTop!;

      this.publicService.sticky = scrollPos > 50;
    });
  }

  ngOnDestroy(): void {
    if (this.animationFrameId !== null)
      cancelAnimationFrame(this.animationFrameId);
  }

  roundParticles() {
    for (let i = 0; i < 50; i++) {
      let particles = this.document.createElement('i');
      let section = this.document.getElementById('lab');

      let randomX = (Math.random() - 0.5) * innerWidth;
      let randomY = (Math.random() - 0.5) * innerHeight;

      let randomSize = Math.random() * 60 + 10;

      let duration = Math.random() * 10 + 5;

      let deg = Math.random() * 360 + 1;

      particles.style.setProperty('--x', randomX + 'px');
      particles.style.setProperty('--y', randomY + 'px');

      particles.style.width = randomSize + 'px';
      particles.style.height = randomSize + 'px';

      particles.style.animation = `animate ${duration}s ease forwards`;

      particles.style.background = `linear-gradient(${deg}deg, #f00, var(--colorPrincipal))`;

      particles.classList.add('particles');

      section!.appendChild(particles);

      setTimeout(() => particles.remove(), 11000);
    }
  }
}
