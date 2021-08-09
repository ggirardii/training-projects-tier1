export class Person{
  name: string;
  street: string;
  city: string;
  state: string;
  country: string;
  telephone: string;
  birthday: string;
  constructor(name: string, street: string, city: string, state: string, country: string, telephone: string, birthday: string){
    this.name = name;
    this.street = street;
    this.city = city;
    this.state = state;
    this.country = country;
    this.telephone = telephone;
    this.birthday = birthday;
  }
}
