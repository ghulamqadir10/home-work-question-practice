var counter = localStorage.getItem("counter");
if (counter === null) {
    counter = 0;
} else {
    counter = parseInt(counter);
}
counter++
localStorage.setItem("counter", counter);
alert("You have visited (" + counter + ") times this page")



// let num=7
// for(var i=1;i<=10;i++){
//  document.write("<h4>",num," * " ,i," = ",num*i,"</h4>")
// }


let sub_1 = prompt("please enter a subject 1");
let sub_2 = prompt("please enter a subject 2");
let sub_3 = prompt("please enter a subject 3");
let obt_marks_sub_1 = +prompt("please enter obtained marks of subject 1");
let obt_marks_sub_2 = +prompt("please enter a obtained marks of subject 2 ");
let obt_marks_sub_3 = +prompt("please enter  obtained marks of subject 3");

let total_marks = 100;



let percent1 = (obt_marks_sub_1 / total_marks) * 100;
let percent2 = (obt_marks_sub_2 / total_marks) * 100;
let percent3 = (obt_marks_sub_3 / total_marks) * 100;
document.getElementById("sub1").innerHTML = sub_1;
document.getElementById("sub2").innerHTML = sub_2;
document.getElementById("sub3").innerHTML = sub_3;
document.getElementById("totalmarks1").innerHTML = total_marks;
// document.getElementById("totalmarks2").innerHTML = total_marks;
// document.getElementById("").innerHTML = total_marks;
document.getElementById("obmarks1").innerHTML = obt_marks_sub_1;
document.getElementById("obmarks2").innerHTML = obt_marks_sub_2;
document.getElementById("obmarks3").innerHTML = obt_marks_sub_3;
document.getElementById("percentage1").innerHTML = percent1 + "%";
document.getElementById("percentage2").innerHTML = percent2 + "%";
document.getElementById("percentage3").innerHTML = percent3 + "%";


