function add(num1: number, num2: number, num3?: number): number { //this is optional param 3
     return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(add(2, 4));

const sub = (num1: number, num2: number, num3 = 10): number => num1 - num2 - num3;

console.log(sub(4, 2));

console.log(sub(3, 3, 5));


const mult = function (num1: number, num2: number): number {
     return num1 * num2;
}

console.log(mult(2, 3));

function add2(num1: number, num2: number, ...num3: number[]): number{
     return num1+num1+num3.reduce((a,b)=>a+b, 0);
}

let numbers = [1,2,3,4,5];
console.log(add2(2,3,...numbers));

function getItems<Type>(items: Type[]):Type[]{
     return new Array<Type>().concat(items);
}

let concatResult=getItems([1,2,3,4,5]);

let concatString = getItems(["a", "b", "c", "d", "e"]);