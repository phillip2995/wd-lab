//creating an object using objetc literal notion
const person={
    firstname:"john",
    lastname:"doe",
    age:30,
    occupation:"engineer",
    //method inside the object
    sayhello:function(){
        console.log(`hello,my name is ${this.firstname} ${this.lastname}. i am ${this.age} years old`);
    }};

//accessing object properties 
console.log(person.firstname);//output:john
console.log(person.lastname);//output:doe
console.log(person.age);//output:30
console.log(person.occupation);//output:engineer
person.sayhello();//output:hello,my name is john doe. i am 30
