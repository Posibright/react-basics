class person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  greet(){
    return 'Hello, my name is $(this.name)'
  }
}

const person1 = new person("John", 30);
console.log(person1.greet()); 