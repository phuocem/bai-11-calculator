import { createReducer, on } from '@ngrx/store';
import * as CalculatorActions from './calculator.actions';
import { CalculatorState } from './calculator.state';

export const initialState: CalculatorState = {
  firstNumber: 0,
  secondNumber: 0,
  operator: '',
  result: 0
};

export const calculatorReducer = createReducer(
  initialState,
  on(CalculatorActions.add, (state, { firstNumber, secondNumber }) => ({
    ...state,
    firstNumber,
    secondNumber,
    operator: '+',
    result: firstNumber + secondNumber
  })),
  on(CalculatorActions.subtract, (state, { firstNumber, secondNumber }) => ({
    ...state,
    firstNumber,
    secondNumber,
      operator: '-',
      result: firstNumber - secondNumber
    })),
  on(CalculatorActions.multiply, (state, { firstNumber, secondNumber }) => ({
      ...state,
      firstNumber,
      secondNumber,
      operator: '*',
      result: firstNumber * secondNumber
    })),
  on(CalculatorActions.divide, (state, { firstNumber, secondNumber }) => ({
      ...state,
      firstNumber,
      secondNumber,
      operator: '/',
      result: firstNumber / secondNumber
    }))

)
