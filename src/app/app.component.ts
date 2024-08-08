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

  constructor(private store: Store<{ calculator: CalculatorState }>) {
    // let calculateParams = ["1","3","9","7","9","/","1"]
    // // split array into 2 arrays by regex
    // let index = calculateParams.findIndex((element) => element.match(/[\+\-\*\/]/));
    // let operator = calculateParams[index]
    // let leftString = calculateParams.slice(0, index);
    // let rightString = calculateParams.slice(index + 1);
    // let secondNum = parseInt(rightString.join(''));
    //
    // console.log(leftString)
    // console.log(operator)
    // console.log(rightString)
  }

  calc(){
    let calculateParams = ["1","3","9","7","9","+","1"]
    // split array into 2 arrays by regex
    let index = calculateParams.findIndex((element) => element.match(/[\+\-\*\/]/));
    let operator = calculateParams[index]
    let leftString = calculateParams.slice(0, index);
    let rightString = calculateParams.slice(index + 1);

    let firstNum = parseInt(leftString.join(''));
    let secondNum = parseInt(rightString.join(''));
    // console.log(firstNum)
    // console.log(secondNum)
    // console.log(operator)

    switch (operator) {
      case '+':
        console.log(firstNum + secondNum)
        break;
      case '-':
        console.log(firstNum - secondNum)
        break;
      case '*':
        console.log(firstNum * secondNum)
        break;
      case '/':
        console.log(firstNum / secondNum)
        break;
    }


  }


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
