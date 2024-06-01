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

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public publicService: PublicService
  ) {}

  ngOnInit(): void {
    if (this.publicService.isBrowser) {
      this.animationFrameId = requestAnimationFrame(() => {
        setTimeout(() => {
          this.roundParticles();
          this.ngOnInit();
        }, 5000);
      });
    }
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

      let duration = Math.random() * 3 + 2;

      let deg = Math.random() * 360 + 1;

      particles.style.setProperty('--x', randomX + 'px');
      particles.style.setProperty('--y', randomY + 'px');

      particles.style.width = randomSize + 'px';
      particles.style.height = randomSize + 'px';

      particles.style.animation = `animate ${duration}s ease forwards`;

      particles.style.background = `linear-gradient(${deg}deg, #f00, var(--colorPrincipal))`;

      particles.classList.add('particles');

      section!.appendChild(particles);

      setTimeout(() => particles.remove(), 5000);
    }
  }
}
