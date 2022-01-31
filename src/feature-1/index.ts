const obj = {
  name: 'xiaoming',
  age: 12,
  gender: 'man',
};

class Person {
  private name: string;
  private age: number;
  private gender: 'man' | 'woman';

  constructor({ name, age, gender }) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getPerson() {
    return { name: this.name, age: this.age, gender: this.gender };
  }
}

const xiaoming = new Person(obj);
