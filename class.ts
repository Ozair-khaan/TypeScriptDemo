import { Login, User } from "./interface";

import * as UserLogin from "./interface"; //we need concate the UserLogin with . (refer line no 12)

interface Address {
  street: string;
  city: string;
  state: string;
  pincode: number;
}

// class Employee implements UserLogin.Login {
class Employee implements Login {
  //   private id: number;
  #id: number; //this one is also make private
  protected name: string;
  address: Address;

  //setter and getter
  get empId(): number {
    return this.#id;
  }

  set empId(id: number) {
    this.#id = id;
  }

  static getEmployeeCount(): number {
    return 50;
  }

  constructor(id: number, name: string, address: Address) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }
  login(): User {
    return { name: "John", age: 25, id: 1, email: "" };
  }

  //   getNameWithAddress(): string {
  //     return this.name + " " + this.address;
  //   }

  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address}`;
  }
}

let john = new Employee(1, "John", {
  street: "ABC",
  city: "Bangalore",
  state: "Karnataka",
  pincode: 560076,
});

john.empId = 100;

console.log(john.empId);

Employee.getEmployeeCount(); //called static block

class Manager extends Employee {
  constructor(id: number, name: string, address: Address) {
    super(id, name, address);
  }
  getNameWithAddress(): string {
    return `${this.name} is a manager at ${this.address}`;
  }
}

// john.id = 1;
// john.name = "John";
// john.address = "Highway 71";

console.log(john);

let address = john.getNameWithAddress();

console.log(address);

let mike = new Manager(2, "Mike", {
  street: "ABC",
  city: "Bangalore",
  state: "Karnataka",
  pincode: 560076,
});

console.log(mike.getNameWithAddress());
