
function celement(){
    let a=[1,3,5,8]
    let b=[0,3,4,8]
    for(i=0;i<a.length;i++){
      for(j=0;j<b.length;j++){
         if (a[i]==b[j]){
            console.log(a[i],b[j])
         }

      }

    }
}
celement()





var buttonTarget = document.getElementsByClassName("btn")[0];
var counter = 1;

function incrementer(){
  buttonTarget.innerHTML  = counter.toString();
  counter++;
  return counter;
}
incrementer()



function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}







console.log("largest number")

function large_num(){
    let a=[24,6,89,67,2,13]
    let b=a[0]
for (i=0;i<a.length;i++){
    if(a[i]>b){
        b=a[i]
    }
}
console.log(b)

}
large_num()


console.log("18+")


function eighteen(){     
    let myarray=[10,23,4,6,46,70,12,18,17]     
    let newarray = []     
    for(i=0;i<myarray.length;i++){ 
        if(myarray[i]>17){
            newarray.push(myarray[i])
        }
    }     
    console.log(newarray)  
} 
eighteen()


console.log("newarray")

function neway(){
    let a=[1,4,5,7,9,7,1]
    let b =[...new Set(a)]
    console.log(b)
    }
neway()

console.log("password_manager")
function password(){
    
}



//                                        password

function checkPasswordStrength(password) {
    if (password.length < 6) {
        return 'Weak: Password is less than 6 characters.';
    } else if (password.length >= 6 && password.length <= 8) {
        return 'Medium: Password is between 6 and 8 characters.';
    } else {
        return 'Strong: Password is more than 8 characters.';
    }
}

var userPassword = prompt('Enter your password:');

var result = checkPasswordStrength(userPassword);

console.log(result);


