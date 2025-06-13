let lname: string;

lname = "Ozair";

let newName = lname.toUpperCase();
console.log(newName)

let age: number;
age = 10;
age = 26.5;

let dob = "25";

let result = parseInt(dob);

let isInvalid: boolean = false;

console.log(isInvalid);

//array

let empList: string[];

empList = ["Ozair", "Software", "Dev"];

let numList: Array<number>;

numList = [1, 2, 3, 4, 5, 6];

let newNum = numList[5];

let results = numList.filter((num) => num > 2);

//let emp = empList.find((emp) => emp === "Software");

let sum = numList.reduce((acc, num) => acc + num);

console.log(results);
//console.log(emp);
console.log(sum);


const enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue;

let swapNums: [firstNumber: number, secondNumber: number];

function swapNumber(num1: number, num2: number): [number, number] {
    return [num1, num2];
}

swapNums = swapNumber(10, 20);

swapNums[0];
swapNums[1];

let department; //: any; //it is homogeneous, and take any type of  datatype
department="IT";
department=10;

// function add(num1: number, num2: number){
//     return num1+ num2;
// }

// let newSum = add(20, 10);