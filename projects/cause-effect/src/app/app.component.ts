import { Component } from '@angular/core';
import { Person } from './classes/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people = [
    new Person('Name 1', 'Street 1', 'City 1', 'State 1', 'Country 1', 'Telephone 1', '01/01/2001'),
    new Person('Name 2', 'Street 2', 'City 2', 'State 2', 'Country 2', 'Telephone 2', '02/02/2002'),
    new Person('Name 3', 'Street 3', 'City 3', 'State 3', 'Country 3', 'Telephone 3', '03/03/2003'),
    new Person('Name 4', 'Street 4', 'City 4', 'State 4', 'Country 4', 'Telephone 4', '04/04/2004')
  ];
  selectedPerson!: Person;

  setSelectedPerson(person: Person): void{
    this.selectedPerson = person;
  }
}
