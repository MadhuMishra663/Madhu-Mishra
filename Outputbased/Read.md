1. console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

Output: - start
          End
          Promise
          Timeout
   explanation:- since start is synchrouns operation it execute imidiately. Now setTimeout goes into macrotask and asynchrounous and promise into micro task. after this agin the end is synchrounous so it execute after start. Now coming on macro task and microtask , microtask has highest priority so promise run first then setTimeout

2. let original = { a: 1, b: { c: 2 } };
let shallowCopy = { ...original };
shallowCopy.b.c = 3;
console.log(original.b.c);

output - 3

expalnation: since in object we store the refrence so firstly shallow copy take all the original value the we modify the refrence that is we made b.c as 3 then also it reflect the original value that is when we print origina b.c it give 3 because now the refrence of object get change

3. for (var i = 1; i <= 3; i++) { setTimeout(() => console.log(i), 1000);
}
for (let j = 1; j <= 3; j++) { setTimeout(() => console.log(j), 1000);
}
output- 4 4 4 1 2 3
 expalnation- here in first for loop we declare var that has global scope so it go throuh all for loop then there is set time out of 1000 ms and at the end of 1000 ms the first iteration occur and value of i become 4 same for second and 3 iteration so 4 4 4 get printed. now second for loop contain let that has functional scope. so it run in second for loop only one by one the first iteration give 1 thend second give 2 and further 3. so the final answer we get is 4 4 4 1 2 3

4. let obj1 = { a: 10 };
let obj2 = obj1;
obj2.a = 20;
console.log(obj1.a);

output- 20;
expalanation: here also object that is non primitive data structure that store the refrence of object. firstly obj2 take all data refrence of obj 1 thaen we change the value ob refrence of object that why the original object also get change and final answer we get is 20.