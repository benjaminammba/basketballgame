//we start by creating two variable homeNum and guestNum
// we get the document from the htmlfile 

let homeNum=document.getElementById("home")
let guestNum= document.getElementById("guest")
// we set our counter to 0 
let count=0
let count2=0


//we create functions for the incremantation 
function homeIncrement1(){
    count=count+1
    homeNum.innerText=count
}
 function homeIncrement2(){
      count=count+2
    homeNum.innerText=count
 }
 function homeIncrement3(){
      count=count+3
    homeNum.innerText=count
 }
 
 
 
 
 function guestIncrement1(){
    count2=count2+1
    guestNum.innerText=count2
}
 function guestIncrement2(){
      count2=count2+2
    guestNum.innerText=count2
 }
 function guestIncrement3(){
      count2=count2+3
    guestNum.innerText=count2
 }
 
 
 function newGame(){
     
     count=0
     count2=0
     homeNum.innerText=count
     guestNum.innerText=count2
     
     
 }