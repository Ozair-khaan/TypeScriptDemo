export interface User {
  name: string;
  age?: number; //this ques mark make the property as optional
  id: number;
  email: string;
}

let user: User = { name: "John", id: 1, email: "" };

let { name: userName, email: userLogin }: User = {
  name: "John",
  age: 25,
  id: 1,
  email: "",
};

// userLogin="";

interface Employees extends User {
  salary: number;
}

let employee: Employees = { name: "John", id: 1, email: "", salary: 20000 };

export interface Login {
  login(): User;
}

let [user1, user2, ...restUsers]: User[] = [
  {
    name: "John",
    id: 1,
    email: "",
  },
  {
    name: "John2",
    id: 2,
    email: "",
  },
  {
    name: "John3",
    id: 3,
    email: "",
  },
  {
    name: "John4",
    id: 4,
    email: "",
  },
];

console.log(user1);
console.log(user2);
console.log(restUsers);

let result = restUsers.filter((user) => user.id > 3);
console.log(result);
