// document.getElementById('img').src = "img/pic_bulbon.gif"

// var Img = document.getElementById("Myimg")

// function myFunction() {
//     Img.src = "img/pic_bulbon.gif"
// }

// function myFunction2() {
//     Img.src = "img/pic_bulboff.gif"
// }

// var a = 45; b = 43; c = a + b;
// document.getElementById("paraGraph").innerHTML = 
// "Hello Dolly!";


// var s;
// s = 10 + 10;

// document.write(s * 10);


/*

// Math Objects
console.log(Math.E)
console.log(Math.PI)
console.log(Math.SQRT2)
console.log(Math.SQRT1_2)

*/

//  let r = 19;
//  let r2 = 21;

//  if (r > r2) {
//      console.log("Rakib is Older Than Ripa")
//  }

//  if(r2 > r ) {
//      console.log("Ripa is Greater Than Rakib")
//  }


//  var n = Math.random();
//  var s = 12;

//  if (n < s) {
//      console.log("S is Graeter Than n")
//  }


//  else
//  {
//      console.log("n is Grater Than s")
//  }




// let p = prompt("Enetr You Number Here");
// let n = 12;


// if (p > n) {
//     document.write("Your Number Greater Than N")
// }

// else
// {
//     document.write("Your Number smalller than N")
// }




/* 
let m = 60;

if (m % 2 == 0) {
    console.log("M is an Even Numebr")
}

else{
    console.log("M is a Odd  Number")
}

*/

let form = document.querySelector("form")
let num = document.querySelector("#number")
let showGrades = document.querySelector("#showGrades")

form.addEventListener('submit',(event)=>{
    let marks = num.value
    console.log(marks)
    if(marks<=100 && marks>=80){
        showGrades.innerHTML="Your Grade is:- 'A+'"
    }
    else if(marks<=79 && marks>=70){
        showGrades.innerHTML="Your Grade is:- 'A'"
    }
    else if(marks<=69 && marks>=60){
        showGrades.innerHTML="Your Grade is:- 'A-'"
    }
    else if(marks<=59 && marks>=50){
        showGrades.innerHTML="Your Grade is:- 'B'"
    }
    else if(marks<=49 && marks>=40){
        showGrades.innerHTML="Your Grade is:- 'C'"
    }
    else if(marks<=39 && marks>=33){
        showGrades.innerHTML="Your Grade is:- 'D'"
    }
    else if(marks<=33 && marks>=0){
        showGrades.innerHTML="Your Grade is:- 'F'"
    }
    else{
        showGrades.innerHTML="This is not a valid marks"
    }
    

    event.preventDefault()
})