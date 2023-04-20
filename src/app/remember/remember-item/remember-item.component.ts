import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Card } from 'src/shared/models/Card';

@Component({
  selector: 'app-remember-item',
  templateUrl: './remember-item.component.html',
  styleUrls: ['./remember-item.component.less']
})
export class RememberItemComponent implements OnChanges{

  @Input()
  public card: Card | null = null;
  
  @Input()
  isFrontside: boolean | null = true; 
  
  @Output() 
  changeSides = new EventEmitter<Card>();
  
  ngOnChanges(changes: SimpleChanges) {
    const itemContent = document.getElementById(this.card?.title || '');
    if (changes['isFrontside'].currentValue) {
      itemContent?.classList.remove("item-content__clicked");
    } else {
      itemContent?.classList.add("item-content__clicked");
    }
  }
  isClicked = false;

  onClickSideChanged(): void { 
    if (this.isClicked) return;  
    this.isClicked = true;
    const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
      this.isClicked = false;
    }, 800);

    if (this.card) {
      this.card.isFrontside = !this.isFrontside;
      this.changeSides.emit(this.card);
    }
  }
  @Output() 
  remove = new EventEmitter<Card>();

  onRemoveCard(): void{
    if (this.card){
      this.remove.emit(this.card);
    }
      
  }
}