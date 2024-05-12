import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { PublicService } from '@services/Public/public.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('preload', { static: false }) preload!: ElementRef;
  title = 'front-rpme';

  constructor(public publicService: PublicService, private render: Renderer2) {
    this.publicService.load = true;
    console.log(
      '🚀 ~ AppComponent ~ constructor ~ this.publicService.load:',
      this.publicService.load
    );
  }

  ngOnInit(): void {
    this.publicService.interval = setInterval(() => {
      let bg = this.publicService.animateBackground();

      this.render.setAttribute(this.preload.nativeElement, 'style', bg);
    }, 40);
  }
}
