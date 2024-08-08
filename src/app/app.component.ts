import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CalculatorState } from './ngrxcalculator/calculator.state';
import * as CalculatorActions from './ngrxcalculator/calculator.actions';
import {AsyncPipe, JsonPipe} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    FormsModule
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bai11-calculator';
  firstNumber  = 0;
  secondNumber= 0;
  numBer$ = this.store.select('calculator');

  constructor(private store: Store<{ calculator: CalculatorState }>) {}

  add() {
    this.store.dispatch(CalculatorActions.add({ firstNumber: this.firstNumber, secondNumber: this.secondNumber }));
  }

  subtract() {
    this.store.dispatch(CalculatorActions.subtract({ firstNumber: this.firstNumber, secondNumber: this.secondNumber }));
  }

  multiply() {
    this.store.dispatch(CalculatorActions.multiply({ firstNumber: this.firstNumber, secondNumber: this.secondNumber }));
  }

  divide() {
    this.store.dispatch(CalculatorActions.divide({ firstNumber: this.firstNumber, secondNumber: this.secondNumber }));
  }
}
