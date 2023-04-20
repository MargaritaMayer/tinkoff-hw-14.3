import { Component, OnInit } from '@angular/core';
import { Card } from 'src/shared/models/Card';

const data: Card[] = [
  {
    title: 'импрессионизм',
    description: 'одно из крупнейших течений в искусстве последней трети XIX — начала XX века, зародившееся во Франции и затем распространившееся по всему миру',
    isFrontside: true
  },
  {
    title: 'экспрессионизм',
    description: 'течение в европейском искусстве эпохи модернизма, получившее наибольшее развитие в первые десятилетия XX века, преимущественно в Германии и Австрии',
    isFrontside: true
  },
  {
    title: 'кубизм',
    description: 'течение в западноевропейском искусстве, связанное с концепциями модернизма. Прежде всего, характерно для французской живописи, и скульптуре этого периода',
    isFrontside: true
  },
  {
    title: 'футуризм',
    description: 'течение авангардного искусства 1910-х — начала 1920-х годов, прежде всего в поэзии и живописи Италии и России',
    isFrontside: true
  },
  {
    title: 'сюрреализм',
    description: 'направление в литературе и искусстве двадцатого века, сложившееся в 1920-х годах в художественной культуре западного авангардизма',
    isFrontside: true
  }
];

@Component({
  selector: 'app-remember',
  templateUrl: './remember.component.html',
  styleUrls: ['./remember.component.less']
})
export class RememberComponent implements OnInit {
  public cards: Card[] = [];
  public ngOnInit(): void {
    this.cards = data;
  }
  public removeCard(removedCard: Card | null) {
    this.cards = this.cards.filter(card => card!=removedCard)
  }
  public addNewCard(card: Card): void {
    this.cards.push(card);
  }
  public changeCardsSides(flippedCard: Card){
    data.forEach(card => 
      card.isFrontside = (card !== flippedCard)? true: flippedCard.isFrontside)
  }
}
