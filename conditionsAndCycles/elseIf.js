/* Напишите программу с переменной name. Если в этой переменной находится
ваше имя, напечатайте: «Привет мне!» — иначе напечатайте: «Привет,
незнакомец!» (Подсказка: используйте === для сравнения переменной name
с вашим именем.)
Теперь дополните программу, чтобы она здоровалась с вашим папой,
если в name его имя, и с вашей мамой, если в name ее имя. Если же там
что-то иное, по-прежнему печатайте «Привет, незнакомец!» */ 
var myName ="Bogdan";
var momName = "Nata";
var fatherName ="Oleg";
var names = "Oleg";
if(names===myName){
    console.log("Привіт мені");    
} else if(names!=myName) {
    console.log("Привіт незнайомець");
}
if(names===fatherName){
    console.log("Привіт тато");    
} else if(names!=fatherName) {
    console.log("Привіт незнайомець");
}
if(names===momName){
    console.log("Привет мне");    
} else if(names!=momName) {
    console.log("Привіт незнайомець");
}
