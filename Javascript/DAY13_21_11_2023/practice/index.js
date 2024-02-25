let students=[{
    name:"mohan",
    place:"konam",
    contact:9889189139,
    skills:["html","python","javascript"],
    qualification:["BE","MBA","HDCA"],

    marks:{
        tamil:78,
        english:70,
        maths:75,
        science:80,
        social:82,
    },
    profesional:"enginering"},

    {name:"mathan",
    place:"moolachel",
    contact:9489383139,
    skills:["html","css","javascript"],
    qualification:["BA","MBA","HDCT"],

    marks:{
        tamil:88,
        english:90,
        maths:70,
        science:80,
        social:89,
    },
    profesional:"arts"},

    {name:"raj",
    place:"chennai",
    contact:9876543219,
    skills:["JAVA","css","javascript"],
    qualification:["BA","MBA","PGDCA"],

    marks:{
        tamil:88,
        english:77,
        maths:75,
        science:85,
        social:80,
    },
    profesional:"arts",
}]

for (let student of students) {
    for (let key in student.marks){
       let value=student.marks[key]
       console.log(value)
    }
  }
  

