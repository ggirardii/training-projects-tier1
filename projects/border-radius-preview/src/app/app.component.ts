import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  borderRadiusCss : string = '';
  border: any = {
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0
  }

  onValueChange(key: string, value: any): void {
    this.border[key] = value;
    this.changeBorderRadiusCss();
  }

  copyToClipboard(): void {
    let input = document.getElementById('borderRadiusCss') as HTMLInputElement;
    input.select();
    document.execCommand('copy');
  }

  private changeBorderRadiusCss(): void {
    if(this.isAllBorderPropsEmpty())
      this.borderRadiusCss = '';
    else if(this.isAllBorderPropsEquals())
      this.borderRadiusCss = `border-radius: ${this.border.topLeft}px;`;
    else if (this.isEqualBorderProps('topLeft', 'bottomRight') && this.isEqualBorderProps('topRight', 'bottomLeft'))
      this.borderRadiusCss = `border-radius: ${this.border.topLeft || 0}px ${this.border.topRight || 0}px;`
    else
      this.borderRadiusCss = `border-radius: ${this.border.topLeft || 0}px ${this.border.topRight || 0}px ${this.border.bottomRight || 0}px ${this.border.bottomLeft || 0}px;`

  }

  private isAllBorderPropsEmpty = (): boolean =>
    Object.keys(this.border).every(key => this.isBorderPropEmpty(key));

  private isBorderPropEmpty = (key: string): boolean =>
     this.border[key] === 0 || this.border[key] === null;

  private isAllBorderPropsEquals = (): boolean => {
    let keys =  Object.keys(this.border);
    return keys.every(key => this.isEqualBorderProps(keys[0], key));
  }

  private isEqualBorderProps = (key1: string, key2: string): boolean =>
    (this.border[key1] || 0) === (this.border[key2] || 0)
}
