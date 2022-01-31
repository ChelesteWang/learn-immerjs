/**
 * 初始化数据源
 */
const obj = {
  name: 'xiaoming',
  age: 12,
  gender: 'man',
};

type IGender = 'man' | 'woman';

/**
 * 创建一个领域对象
 * @param name
 * @param age
 * @param gender
 */
class Person {
  private name: string;
  private age: number;
  private gender: IGender;

  constructor({ name, age, gender }: any) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getPerson() {
    return { name: this.name, age: this.age, gender: this.gender };
  }

  setName(name: string) {
    this.name = name;
  }

  setAge(age: number) {
    this.age = age;
  }

  setGender(gender: IGender) {
    this.gender = gender;
  }
}

/**
 * 新建一个类型
 * @param Person
 */
const xiaoming = new Person(obj);

console.log(xiaoming.getPerson());

xiaoming.setAge(18);

console.log(xiaoming.getPerson());
