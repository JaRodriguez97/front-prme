import { Component, OnInit } from '@angular/core';
import { PublicService } from '@app/services/Public/public.service';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  faTrophy = faAngular;
  faFlagCheckered = faFlagCheckered;
  frase: string = 'Atraiga mas clientes y alcance sus metas con nosotros - ';

  arrayFrase!: string[];

  constructor(public publicService: PublicService) {}

  ngOnInit(): void {
    if (this.publicService.isMobile)
      this.frase = 'Con Nuestra Publicidad + Alcance + Clientes.';

    this.arrayFrase = this.frase.split('');
  }

  imagen1cargada() {
    this.publicService.img1Inicio = true;
  }

  imagen2cargada() {
    this.publicService.img2Inicio = true;
  }

  setStyleSpan(i: number) {
    let multiplicador = this.publicService.isMobile ? 8 : 6.45;
    return `transform: rotate(${i * multiplicador}deg)`;
  }
}
