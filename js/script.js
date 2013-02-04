// JavaScript Document//
onload = init;
function init(){ 
//alert("uioi"+document.getElementById("question1"));
document.getElementById("gender").onchange = showq1;
document.getElementById("user_chance").onchange = showq2;

}
function showq1(){
if(document.getElementById("gender").value=="Male"){
document.getElementById("question1").style.display = "block";
document.getElementById("question2").style.display = "none";
}else if(document.getElementById("gender").value=="Female"){
document.getElementById("question2").style.display = "block";
document.getElementById("question1").style.display = "none";
}
}





function showq2(){
if(document.getElementById("user_chance").value=="Yes"){
document.getElementById("question3").style.display = "block";
document.getElementById("question4").style.display = "none";
}else if(document.getElementById("user_chance").value=="No"){
document.getElementById("question4").style.display = "block";
document.getElementById("question3").style.display = "none";
}
}



