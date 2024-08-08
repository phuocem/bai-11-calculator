import {createAction, createReducer, on, props} from "@ngrx/store";
import * as CalculatorActions from './calculator.actions';
import {CalculatorState} from "./calculator.state";
export const add = createAction(
  '[Calculator] Add',
  props<{ firstNumber: number; secondNumber: number }>()
);
export const subtract= createAction(
  '[Calculator] subtract',
  props<{ firstNumber: number; secondNumber: number }>()
);
export const multiply= createAction(
  '[Calculator] multiply',
  props<{ firstNumber: number; secondNumber: number }>()
);
export const divide= createAction(
  '[Calculator] divide',
  props<{ firstNumber: number; secondNumber: number }>()
);
