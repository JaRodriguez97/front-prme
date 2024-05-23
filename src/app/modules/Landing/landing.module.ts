import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, LandingRoutingModule, FontAwesomeModule],
})
export class LandingModule {}
