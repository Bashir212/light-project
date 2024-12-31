let element=document.getElementById("title")

// let btn=document.getElementsByTagName("button")[0]

// let p=document.getElementsByClassName("intro")[0]

// let x=document.querySelector("h5")

console.log(element)

// console.log(btn)

// console.log(p)

// console.log(x)

// //changing html

// let h=document.querySelector("#hero").innerHTML="Hello World!"
// // h.innerHTML="Waa ku salamay"

// //class work 

// let para=document.querySelector(".pp")
// para.innerHTML="Welcome To Learning Javascript...."

// //changing css
// para.style.color="blue"
// para.style.backgroundColor="green"
// para.style.fontSize="40px"
// para.style.paddingTop="30px"


//Assignment

// let reg=document.querySelector("#bar");
// reg.style.width="50px"
// reg.style.height="50px"
// reg.style.border="1px solid blue";
// reg.style.borderRadius="10px"

// let c2=document.querySelector(".bb")
// c2.style.width="50px"
// c2.style.height="50px"
// c2.style.border="1px solid green";
// c2.style.borderRadius="10px"


// let c3 =document.querySelector(".br")

// c3.style.width="50px"
// c3.style.height="50px"
// c3.style.borderRadius="10px"
// c3.style.border="1px solid red"


// let bash=document.querySelector(".can")

// bash.style.display="flex"
// bash.style.gap="50px"
// bash.style.justifyContent="center"







                         //31-12-24
//AddEventsListener:  Amarka dhacayo Dhagayso then sameeye waxan  e.g mouseleave,click mouseover

// let button=document.querySelector(".btn")

// button.addEventListener("click",function(){
//     document.body.style.backgroundColor="blue"
// })


//one simple project : light project

let box=document.querySelector("#light")
let btn=document.querySelector("#btnon")
let btn1=document.querySelector("#btnoff")

//meesha actionka ka dhacaayo

btn.addEventListener("click",function(){
    box.style.backgroundColor= "yellow"
})

btn1.addEventListener("click",function(){
    box.style.backgroundColor= "transparent"
})


 


