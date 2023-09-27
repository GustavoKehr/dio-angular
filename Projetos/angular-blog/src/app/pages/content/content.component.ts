import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string = 'https://s2-techtudo.glbimg.com/vEfKioHLbZWZ75RhWIOI3ZYwJYU=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/w/x/0XWQNqTNmcs5u1mrS2AQ/counter-strike-2-valve-acesso-beta-teste-global-offensive-csgo-tutorial.jpg';
  contentTitle: string = 'Minha NOTICIA';
  contentDescription: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum nonvel eveniet odit eaque voluptas sequi ipsam! Quia asperiores ipsum iur';

  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )
  }
}
