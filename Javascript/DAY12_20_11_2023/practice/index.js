
// function myFunction() {
//   alert("Page is loaded");
// }

// let b={
//     name:"jose",
//     age:25,
//     from:"kanyakumari",
// }
// console.log(b.age)


// let c={
//     tamil:10,
//     english:10,
//     maths:10,
//     chemistry:10,
//     physics:10,
//     biology:10
// }
//   if(c.physics>=160 && c.chemistry>=160 && c.maths>=160 && c.biology>=160){
//     console.log("eligable for dental course")
// }
//   else if( (c.tamil >=150 || c.english >=150) && (c.maths>=150 && c.physics>=150)){
//     console.log("eligable for engineering course")  
// }
//   else if((c.chemistry>=140 || c.physics>=140) && (c.biology>=140 && c.maths>=140)) {
//     console.log("eligible for b.s.c course")
// }
// else{
//     console.log("not fit for any courses")
// }



// function show(e) {
//     e.preventDefault()
//     let input = document.getElementById("name").value
//     let input1 = document.getElementById("DOB").value
//     let input2 = document.getElementById("salary").value
//     let myvalue = {
//         name: input,
//         DOB: input1,
//         salary: input2
//     }
//     console.log(myvalue)
// }

//  function handle(){
// let name =document.getElementById("name").value
// let date =document.getElementById("date").value
// let salary =document.getElementById("salary").value

// let myvalue={
//     name:name,
//     date:date,
//     salary:salary
// }
// console.log(myvalue)
// }


// let marks = [
//     {
//         tamil:67,
//         english:45
//     },
//     {
//         tamil:57,
//         english:75
//     },
//     {
//         tamil:87,
//         english:85
//     }
// ]
// console.log(marks)

                                            //  filter

// let students = [
//     {
//         name:"mohan",
//         qualification:"ba"
//     },
//     {
//         name:"jino",
//         qualification:"be"
//     },
//     {
//         name:"ram",
//         qualification:"css"
//     },
//     {
//         name:"guna",
//         qualification:"tech"
//     }
// ]
// for ( i=0;i<students.length;i++){
//     console.log(students[i].qualification)
// }


let students = [
    {
        name:"mohan",
        qualification:["ba","mcom"],
        place:"ngl",
        skill:["sing","html","css"]
    },
    {
        name:"jino",
        qualification:["be","ma","ca"],
        place:"klm",
        skill:["gym","python","ui"]
    },
    {
        name:"ram",
        qualification:["css","be","me"],
        place:"tck",
        skill:["cricket","js","cd"]
    },
    {
        name:"guna",
        qualification:["tech","de","me"],
        place:"tvm",
        skill:["hockey","html","react"]
    }
]
for ( i=0;i<students.length;i++){
    console.log(students[i].name)
    for ( j=0;j<students[i].qualification.length;j++){
        console.log(students[i].qualification[j])
   
}
}
