//  add two numbers in ts
// function addTwoNumber(x:number,y:number):number{
// return x+y;
// }
// console.log(addTwoNumber(3,4))
//  inteface
// interface Person{
//     name:string
//     age:number
// }
// class PersonImp implements Person{
//     name:string;
//     age:number;
//     constructor(name:string,age:number){
//         this.name=name;
//         this.age=age
//     }
// }
// let person:Person=new PersonImp("Alice",30);
// console.log(person.name,person.age);
// type
// let numbers:number []=[1,2,3];
// console.log(numbers);
// class
// class Car{
//     make:string;
//     model:string;
//     displayInfo(){
//         console.log(this.make,this.model);       
//     }
//     constructor(make:string,model:string){
//         this.make=make;
//         this.model=model;
//     }
// }
// let tata=new Car('tata','2019');
// tata.displayInfo();
// function
function firstElement(arr) {
    return arr[0];
}
var arr = [1, 2, 3];
console.log(firstElement(arr));
