import { Component, OnInit } from '@angular/core';
import { PublicService } from '@app/services/Public/public.service';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  faTrophy = faTrophy;

  constructor(public publicService: PublicService) {}

  ngOnInit(): void {}

  imagen1cargada() {}
}
