Q1. **:**

- Explain the concept of closures in JavaScript. Provide a use-case where closures are beneficial.
Ans. Closures are concept in javascript where there is functions inside anothere function and the inner fuction can access the variable of outer function.
 e.g.
    function Outer(){
        let a=0;
        return function increase(){
            return a++;
        }
    }
const res=outer();
console.log(res());


Q2. **;**
    Describe the differences between var, let, and const in JavaScript, focusing on hoisting and scope.
    Ans. var:- 
          1. can be redeclared
          2. function scope/ Global scope
          3.It is hoisted.
        let:-
          1. Cannot be redeclared
          2. Block scope.
          3. It is also Hoisted but make Temporal dead zone
          4. we can re-assign the value
        const:-
           1. block scope.
           2. cannot re-asigned or redeclare.
           3. hoisted but make temporal dead zome

       let and const give Refrence error when we try to console them before decleration. but var give undefined.

Q3. **;**
     What are the differences between a programming language and a scripting language? Where does JavaScript fit in?
     Ans. Programming language:- 
           1. It is used to create software independently.
           2. e.g- c++, java
           3. Programs in these language run faster.

        Scripting langyage:-
           1. in scripting language we have to write the scripts. It is subset of programming language.
           2. e.g. javascript, python.
           3. they are slower

        Javascript is scripting language when it works with browser and programming language when we use it to make a dynamic website, due to some advancement like Node js etc. we can make one full dynamic website with the help of javascript.