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
    hrefP: string;
    hrefN: string;
    p: string;
    year: number;
    month: string;
    day: number;
  }> = [
    {
      img: '../../../assets/imagenes/blog/img1.jpg',
      hrefP: 'blog#banner',
      hrefN: 'blog#post1',
      p: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ducimus fuga accusamus dolorem. Tenetur voluptatem delectus vel.',
      year: 2024,
      month: 'May',
      day: 22,
    },
    {
      img: '../../../assets/imagenes/blog/img2.avif',
      hrefP: 'blog#post0',
      hrefN: 'blog#post2',
      p: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ducimus fuga accusamus dolorem. Tenetur voluptatem delectus vel.',
      year: 2024,
      month: 'May',
      day: 22,
    },
    {
      img: '../../../assets/imagenes/blog/img3.avif',
      hrefP: 'blog#post1',
      hrefN: 'blog#post3',
      p: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ducimus fuga accusamus dolorem. Tenetur voluptatem delectus vel.',
      year: 2024,
      month: 'May',
      day: 22,
    },
    {
      img: '../../../assets/imagenes/blog/img4.avif',
      hrefP: 'blog#post2',
      hrefN: 'blog#post4',
      p: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ducimus fuga accusamus dolorem. Tenetur voluptatem delectus vel.',
      year: 2024,
      month: 'May',
      day: 22,
    },
    {
      img: '../../../assets/imagenes/blog/img5.avif',
      hrefP: 'blog#post3',
      hrefN: 'blog#banner',
      p: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ducimus fuga accusamus dolorem. Tenetur voluptatem delectus vel.',
      year: 2024,
      month: 'May',
      day: 22,
    },
  ];
  constructor(public publicService: PublicService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    setTimeout(() => this.publicService.stopInterval(), 2000);
  }
}
