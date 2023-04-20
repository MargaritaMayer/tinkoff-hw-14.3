import { LowerCasePipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Card } from 'src/shared/models/Card';

@Component({
  selector: 'app-remember-add',
  templateUrl: './remember-add.component.html',
  styleUrls: ['./remember-add.component.less']
})
export class RememberAddComponent {
  @Output()
  add = new EventEmitter<Card>();

  form = new FormGroup({
    cardTitle: new FormControl<string | null>(null),
    cardDescription: new FormControl<string | null>(null),
  });

  submit(): void {
    const formData = this.form.value;
    const newCard: Card = {
      title: new LowerCasePipe().transform(formData.cardTitle) || '',
      description: formData.cardDescription || '',
      isFrontside: true,
    };
    this.add.emit(newCard);
    this.form.reset();
  } 
  // get title() { return this.formData.cardTitle; }
  // get description() { return this.formData.cardDescription; }
}
