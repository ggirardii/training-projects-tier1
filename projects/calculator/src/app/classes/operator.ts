export abstract class Operator{
  name:string;
  constructor(name: string) {
    this.name = name;
  }
  abstract eval(number1: number, number2: number): number;
}
