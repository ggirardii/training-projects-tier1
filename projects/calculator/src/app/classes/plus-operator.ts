import { Operator } from "./operator";

export class PlusOperator extends Operator{
  constructor(){
    super('+');
  }

  eval(number1: number, number2: number): number {
    return number1 + number2;
  }
}
