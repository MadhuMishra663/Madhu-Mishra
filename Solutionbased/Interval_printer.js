// Write code that prints numbers from 1 to 10, each number after a 1-second delay.
function IntervalPrinter(){
  for(let i=1; i<=10; i++){
    setTimeout(() => {
        console.log(i)
    },1*1000);
}
}