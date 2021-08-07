import { Operator } from "./operator";

export class MultiplicationOperator extends Operator{
  constructor(){
    super('x');
  }

  eval(number1: number, number2: number): number {
    return number1 * number2;
  }
}
