import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { InicioComponent } from '@components/inicio/inicio.component';

@NgModule({
  declarations: [LandingComponent, InicioComponent],
  imports: [CommonModule, LandingRoutingModule, FontAwesomeModule],
})
export class LandingModule {}
