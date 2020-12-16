import b from './b';

console.log(b);

const a = 5;

export default a;

class User {
  constructor(name) {
    this.name = name;
  }

  showName() {
    console.log(this.name);
  }
}

new User('Mango ').showName;
