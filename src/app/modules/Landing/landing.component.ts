import { Component, OnInit } from '@angular/core';
import { PublicService } from '@app/services/Public/public.service';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  sections: Array<{
    h1: string;
    h2: string;
    h3: string;
    p: string;
    active: boolean;
    page: string;
  }> = [
    {
      h1: 'Marketing Estratégico',
      h2: 'análisis profundo y objetivo',
      h3: '01. Relaciones Públicas',
      p: ' Nuestra estrategia de marketing mejora su reputación, visibilidad y credibilidad. Implementando nuestras técnicas especializadas, fortalecerá la confianza de su audiencia y potenciará el crecimiento de su empresa. Aproveche nuestra experiencia para destacar en el mercado.',
      active: true,
      page: 'servicios',
    },
    {
      h1: 'Nuestro Blog',
      h2: 'Descubre lo mejor',
      h3: '02. Impulsamos tu Marca hacia el Éxito',
      p: 'Brindamos información crucial para destacarte en un mercado competitivo. Ofrezcemos consejos, análisis y las últimas tendencias en marketing, diseñados para ayudarte a alcanzar tus objetivos comerciales de manera efectiva.',
      active: false,
      page: 'blog',
    },
    {
      h1: 'Servicios Increibles',
      h2: 'Elevando tus Expectativas',
      h3: '03. Superando Límites',
      p: 'Elevamos tus metas y trabajamos contigo para alcanzar resultados extraordinarios. Descubre cómo nuestras soluciones innovadoras pueden transformar tu negocio y llevarlo al siguiente nivel. Explora más de nuestro contenido y únete a nosotros en este viaje hacia el éxito.',
      active: false,
      page: 'servicios',
    },
    {
      h1: 'Proyectos Realizados',
      h2: 'Casos de Éxito',
      h3: '04. Impacto Transformador',
      p: 'Nuestros Proyectos Realizados son testimonio de nuestro compromiso y eficacia. Cada caso de éxito demuestra cómo nuestras soluciones han generado un impacto transformador para nuestros clientes. Descubre los detalles de estos proyectos y cómo podemos replicar ese éxito en tu negocio.',
      active: false,
      page: 'proyectos',
    },
    {
      h1: '¡Escríbenos Hoy!',
      h2: 'Estamos Aquí para Ayudarte',
      h3: '05. Conecta y Crece con Nosotros',
      p: 'Conéctate con nuestro equipo de expertos y descubre cómo podemos impulsar tu negocio hacia el éxito. Ya sea que tengas preguntas, necesites asesoramiento o quieras iniciar un proyecto, estamos listos para apoyarte. Contáctanos y comienza tu camino hacia el crecimiento y la transformación.',
      active: false,
      page: 'contacto',
    },
  ];

  constructor(public publicService: PublicService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.publicService.headerLoad = true;

      this.publicService.medium_load = true;

      setTimeout(() => (this.publicService.load = false), 2200);
    }, 10000);
  }

  prevBtn() {
    let indexSection = this.sections.findIndex((s) => s.active),
      numberOfSlides = this.sections.length;

    this.sections[indexSection].active = false;

    if (indexSection == 0) this.sections[numberOfSlides - 1].active = true;
    else this.sections[indexSection - 1].active = true;
  }

  nextBtn() {
    let indexSection = this.sections.findIndex((s) => s.active),
      numberOfSlides = this.sections.length;

    this.sections[indexSection].active = false;

    if (indexSection == numberOfSlides - 1) this.sections[0].active = true;
    else this.sections[indexSection + 1].active = true;
  }
}
