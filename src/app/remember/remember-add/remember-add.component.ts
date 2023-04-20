import { LowerCasePipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Card } from 'src/shared/models/Card';

@Component({
  selector: 'app-remember-add',
  templateUrl: './remember-add.component.html',
  styleUrls: ['./remember-add.component.less']
})
export class RememberAddComponent {
  @Output()
  public add = new EventEmitter<Card>();

  public form = new FormGroup({
    cardTitle: new FormControl<string | null>(null, [Validators.required]),
    cardDescription: new FormControl<string | null>(null, [Validators.required]),
  });

  public submit(): void {
    const formData = this.form.value;
    const newCard: Card = {
      title: new LowerCasePipe().transform(formData.cardTitle) || '',
      description: formData.cardDescription || '',
      isFrontside: true,
    };
    this.add.emit(newCard);
    this.form.reset();
  }
  public get cardTitle() { return this.form.get('cardTitle'); }
  public get cardDescription() { return this.form.get('cardDescription'); }
 
}
