import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  binaryValue: string = '0';
  isBinaryValid: boolean = false;
  binaryValueErrors: any;
  decimalValue: number = 0;

  constructor() {

  }
  ngOnInit(){
    this.validateBinaryValue();
  }

  private validateBinaryValue(): void {

    if(this.binaryValue.length === 0){
      this.isBinaryValid = false;
      this.binaryValueErrors = { required: 'The binary field is required.' }
    }
    else if(this.binaryValue.length > 8){
      this.isBinaryValid = false;
      this.binaryValueErrors = { maxLength: 'The max length of the binary value is 8.' }
    }
    else if(!this.isBinary()){
      this.isBinaryValid = false;
      this.binaryValueErrors = { invalidBinary: 'Only the numbers 1 and 0 are allowed.' }
    }
    else{
      this.isBinaryValid = true;
      this.binaryValueErrors = {}
    }
  }

  private isBinary(): boolean {
    let array = Array.from(this.binaryValue).map(Number);
    for(let i = 0; i < array.length; i++){
      if(array[i] !== 0 && array[i] !== 1)
        return false
    }
    return true;
  }

  onBinaryValueChange(e: string): void {
    this.binaryValue = e;
    this.validateBinaryValue();
  }

  convertValue(): void {
    if(this.isBinaryValid){
      let binary = Array.from(this.binaryValue).map(Number);
      let decimal = 0;
      for(let i = 0; i < binary.length; i++){
        decimal += binary[i] * Math.pow(2, binary.length - 1 - i)
      }
      this.decimalValue = decimal;
    }
  }
}
