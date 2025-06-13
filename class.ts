class Employee {
  //   private id: number;
  #id: number; //this one is also make private
  protected name: string;
  address: string;

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

  constructor(id: number, name: string, address: string) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }

  //   getNameWithAddress(): string {
  //     return this.name + " " + this.address;
  //   }

  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address}`;
  }
}

let john = new Employee(1, "John", "Highway 71");

john.empId = 100;

console.log(john.empId);

Employee.getEmployeeCount(); //called static block

class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
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

let mike = new Manager(2, "Mike", "Morgan Stanley");

console.log(mike.getNameWithAddress());
