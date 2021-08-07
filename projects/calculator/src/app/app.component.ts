import { Component } from '@angular/core';
import {
  DivisionOperator,
  MinusOperator,
  MultiplicationOperator,
  Operator,
  PlusOperator
} from './classes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  operators: Operator[] = [
    new MultiplicationOperator(),
    new DivisionOperator(),
    new MinusOperator(),
    new PlusOperator()
  ]
  number1: number | undefined = undefined;
  number2: number | undefined = undefined;
  operator: Operator | undefined = undefined;
  resultLengthError: boolean = false;

  private checkResultLengthError(): void {
    let number1Length = Math.abs(this.number1 ?? 0).toString().length ?? 0;
    if(number1Length > 8)
      this.resultLengthError = true;
    else
      this.resultLengthError = false;
  }

  changeNumerToPositive(): void {
    if(this.number2 !== undefined)
      this.number2 = Math.abs(this.number2);
    else if(this.operator === undefined && this.number1 !== undefined)
      this.number1 = Math.abs(this.number1);
  }

  changeNumerToNegative(): void {
    if(this.number2 !== undefined)
      this.number2 = Math.abs(this.number2) * -1;
    else if(this.operator === undefined && this.number1 !== undefined)
      this.number1 = Math.abs(this.number1) * -1;
  }

  addNumber(number: number): void {
    let number1Length = Math.abs(this.number1 ?? 0).toString().length ?? 0;
    let number2Length = Math.abs(this.number2 ?? 0).toString().length ?? 0;

    if(this.operator === undefined && number1Length < 8)
      this.number1 = this.number1 !== undefined ? parseInt(`${this.number1}${number}`) : number;
    else if (this.operator !== undefined && number2Length < 8)
      this.number2 = this.number2 !== undefined ? parseInt(`${this.number2}${number}`) : number;
  }

  setOperator(operator: Operator): void {
    if(this.number1 !== undefined){
      if(this.number2 !== undefined)
      this.evaluate();

      this.operator = operator;
    }
  }

  evaluate(): void {
    if(this.number1 !== undefined && this.number2 !== undefined){
      this.number1 = this.operator!.eval(this.number1!, this.number2!);
      this.number2 = undefined;
      this.operator = undefined;

      this.checkResultLengthError();
    }
  }

  clear(): void {
    this.resultLengthError = false;
    if(this.number2 !== undefined)
      this.number2 = undefined;
    else if(this.operator !== undefined)
      this.operator = undefined;
    else if(this.number1 !== undefined)
      this.number1 = undefined;
  }

  clearAll(): void {
    this.resultLengthError = false;
    this.number1 = undefined;
    this.number2 = undefined;
    this.operator = undefined;
  }
}





