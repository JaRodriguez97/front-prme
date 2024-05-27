import { Component, OnInit } from '@angular/core';
import { PublicService } from '@app/services/Public/public.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  sections: Array<{
    img: string;
    p: string;
    year: number;
    month: string;
    day: number;
  }> = [
    {
      img: '../../../assets/imagenes/blog/img2.avif',
      p: '8) ',
      year: 2024,
      month: 'May',
      day: 27,
    },
    {
      img: '../../../assets/imagenes/blog/img2.avif',
      p: '7) El análisis de datos permite a las empresas tomar decisiones informadas, identificar tendencias y medir el rendimiento de sus campañas. Descubre cómo el uso de datos puede optimizar tus estrategias de marketing y maximizar el retorno de inversión.',
      year: 2024,
      month: 'May',
      day: 26,
    },
    {
      img: '../../../assets/imagenes/blog/img2.avif',
      p: '6) Las redes sociales permiten a las empresas interactuar con un público más amplio, fortalecer relaciones y aumentar la lealtad de los clientes. Exploramos estrategias efectivas de marketing en estas plataformas para impulsar el crecimiento empresarial.',
      year: 2024,
      month: 'May',
      day: 25,
    },
    {
      img: '../../../assets/imagenes/blog/img2.avif',
      p: '5) El SEO es crucial para mejorar la visibilidad en los motores de búsqueda, incrementando el tráfico web y atrayendo potenciales clientes mediante prácticas y técnicas de optimización.',
      year: 2024,
      month: 'May',
      day: 24,
    },
    {
      img: '../../../assets/imagenes/blog/img2.avif',
      p: '4) El marketing estratégico es esencial para el éxito a largo plazo de una empresa, abarcando análisis de mercado, segmentación de clientes y desarrollo de propuestas de valor.',
      year: 2024,
      month: 'May',
      day: 23,
    },
    {
      img: '../../../assets/imagenes/blog/img3.avif',
      p: '3) Ofrecemos una amplia gama de servicios personalizados, desde publicidad digital y SEO hasta gestión de redes sociales y análisis de mercado, para mejorar la visibilidad y atraer más clientes.',
      year: 2024,
      month: 'May',
      day: 22,
    },
    {
      img: '../../../assets/imagenes/blog/img2.jpg',
      p: '2) Contamos con un equipo apasionado y capacitado, desde estrategas digitales hasta analistas de datos, que colaboran para garantizar el éxito de nuestros clientes a través de aprendizaje continuo.',
      year: 2024,
      month: 'May',
      day: 21,
    },
    {
      img: '../../../assets/imagenes/blog/img1.jpg',
      p: '1) En RP Marketing Estratégico, transformamos ideas en estrategias exitosas, ayudando a las empresas a alcanzar sus metas con soluciones innovadoras y efectivas de marketing.',
      year: 2024,
      month: 'May',
      day: 20,
    },
  ];
  constructor(public publicService: PublicService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // setTimeout(() => this.publicService.stopInterval(), 2000);
  }
}
