import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css'],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() compteur: number;
  @Output() changementCompteur: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public incrementer() {
    this.compteur++;
    this.changementCompteur.emit(this.compteur);
  }

  public decrementer() {
    this.compteur--;
    this.changementCompteur.emit(this.compteur);
  }
}
