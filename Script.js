let  random_num=Math.random()
console.log(random_num)
let a=prompt("Enter first number")
let c=prompt("Enter operation")
let b=prompt("Enter second number")



let obj={
    "+": "-",
"*":"+",
"-":"/",
"/":"**",

}



if(random_num >0.1){
  //for correct operation...
   console.log('The result is ${a} ${c} ${b}')
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else{
  //for incorrect operation...
    c=obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
