"use strict";
let lname;
lname = "Ozair";
let newName = lname.toUpperCase();
console.log(newName);
let age;
age = 10;
age = 26.5;
let dob = "25";
let result = parseInt(dob);
let isInvalid = false;
console.log(isInvalid);
//array
let empList;
empList = ["Ozair", "Software", "Dev"];
let numList;
numList = [1, 2, 3, 4, 5, 6];
let newNum = numList[5];
let results = numList.filter((num) => num > 2);
//let emp = empList.find((emp) => emp === "Software");
let sum = numList.reduce((acc, num) => acc + num);
console.log(results);
//console.log(emp);
console.log(sum);
let c = 2 /* Color.Blue */;
let swapNums;
function swapNumber(num1, num2) {
    return [num1, num2];
}
swapNums = swapNumber(10, 20);
swapNums[0];
swapNums[1];
let department; //: any; //it is homogeneous, and take any type of  datatype
department = "IT";
department = 10;
// function add(num1: number, num2: number){
//     return num1+ num2;
// }
// let newSum = add(20, 10);
