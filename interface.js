"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: "John", id: 1, email: "" };
let { name: userName, email: userLogin } = {
    name: "John",
    age: 25,
    id: 1,
    email: "",
};
let employee = { name: "John", id: 1, email: "", salary: 20000 };
let [user1, user2, ...restUsers] = [
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
