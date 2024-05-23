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
      p: '4) El marketing digital se ha convertido en una parte integral de cualquier estrategia de marketing. Aprovechar herramientas y canales digitales permite a las empresas alcanzar a su público objetivo de manera más efectiva y medir el impacto de sus campañas en tiempo real.',
      year: 2024,
      month: 'May',
      day: 23,
    },
    {
      img: '../../../assets/imagenes/blog/img3.avif',
      p: '3) Una propuesta de valor clara y convincente es crucial para atraer y retener clientes. Esta debe destacar cómo los productos o servicios de una empresa satisfacen mejor las necesidades del cliente en comparación con la competencia.',
      year: 2024,
      month: 'May',
      day: 22,
    },
    {
      img: '../../../assets/imagenes/blog/img2.jpg',
      p: '2) Segmentar el mercado en grupos de clientes con características y necesidades similares es esencial para desarrollar estrategias de marketing efectivas. Esta práctica permite personalizar mensajes y ofertas, mejorando la eficacia y el retorno de inversión.',
      year: 2024,
      month: 'May',
      day: 21,
    },
    {
      img: '../../../assets/imagenes/blog/img1.jpg',
      p: '1) El análisis de mercado es fundamental para cualquier estrategia de marketing. Permite a las empresas comprender las dinámicas del mercado, identificar oportunidades y amenazas, y tomar decisiones informadas sobre cómo posicionarse para el éxito.',
      year: 2024,
      month: 'May',
      day: 20,
    },
  ];
  constructor(public publicService: PublicService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    setTimeout(() => this.publicService.stopInterval(), 2000);
  }
}
