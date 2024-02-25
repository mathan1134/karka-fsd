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


// for (let i = 0; i < students.length; i++) {

//     if (students[i].place == "ngl") {
//         console.log(students[i].name);
//         for (let j = 0; j < students[i].qualification.length; j++) {
//             console.log("Qualification:", students[i].qualification[j]);
//         }
//         for (let k = 0; k < students[i].skill.length; k++) {
//             console.log("Skill:", students[i].skill[k]);
//         }
//     }
// }

// for (let  i=0;i<students.length;i++){
    
//     for (let  j=0;j<students[i].skill.length;j++){
       
//     if(students[i].skill[j]=="python"){
//         console.log(students[i].name)
//     }  
// }
// }

for (let i=0;i<students.length;i++){
    
if (students[i].place=="ngl"){
    console.log(students[i]) 
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        if (student.place === "ngl") {
            const { place, ...details } = student;
            console.log(details);
        }
    }

    }}
