 a=document.getElementById("name")
 b=document.getElementById("num")

let names=prompt("enter your name")
let age=prompt("enter your age")

localStorage.setItem("user-name",names+"is mine")
localStorage.setItem("age",age+"dude")

let username=localStorage.getItem("user-name")
a.innerHTML=username

let ages=localStorage.getItem("age")
b.innerHTML=ages

const arr = ['bobby', 'hadz', 'com'];
localStorage.setItem('my-array', JSON.stringify(arr));
