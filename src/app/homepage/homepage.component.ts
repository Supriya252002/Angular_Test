import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  cards: { id: number, cardtitle:string, image:string}[] =[
    {
      id: 1,
      cardtitle: 'accusamus beatae ad facilis cum similique qui sunt',
      image:'https://via.placeholder.com/600/92c952'
    },
    {
      id: 2,
      cardtitle: '"reprehenderit est deserunt velit ipsam',
      image:'https://via.placeholder.com/600/771796'
    },
    {
      id: 3,
      cardtitle: 'officia porro iure quia iusto qui ipsa ut modi',
      image:'https://via.placeholder.com/600/24f355'
    },
    {
      id: 4,
      cardtitle: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
      image:'https://via.placeholder.com/600/d32776'
    },
    {
      id: 5,
      cardtitle: 'natus nisi omnis corporis facere molestiae rerum in',
      image:'https://via.placeholder.com/600/f66b97'
    },
    {
      id: 6,
      cardtitle: 'accusamus ea aliquid et amet sequi nemo"',
      image:'https://via.placeholder.com/600/56a8c2"'
    },
    {
      id: 7,
      cardtitle: 'accusamus beatae ad facilis cum similique qui sunt',
      image:'https://via.placeholder.com/600/b0f7cc'
    },
    {
      id: 8,
      cardtitle: 'aut porro officiis laborum odit ea laudantium corporis',
      image:'https://via.placeholder.com/600/54176f'
    },
    {
      id: 9,
      cardtitle: 'qui eius qui autem sed',
      image:'https://via.placeholder.com/600/51aa97'
    },
    {
      id: 10,
      cardtitle: 'beatae et provident et ut vel',
      image:'https://via.placeholder.com/600/810b14'
    },

  ]
}
