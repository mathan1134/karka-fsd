let resume = {
  personalInfo: {
      name: "V Mathan Jose",
      DOB: "24/02/1998",
      mobileNumber: 9489383139,
      email: "mathanjose1026@gmail.com",
      address: "11/77, Moolachel, Meakamandapm, 629166"
  },
  qualifications: ["BA", "MBA"],
  skills: ["HTML", "CSS", "HDCT"],
  marks: {
      tenth: {
          tamil: 90,
          english: 76,
          maths: 70,
          science: 76,
          social: 79
      },
      twelfth: {
          tamil: 170,
          english: 176,
          maths: 170,
          physics: 146,
          chemistry: 140,
          biology: 170
      },
      degree: {
          first_sem: "55%",
          second_sem: "57%",
          third_sem: "58%",
          fourth_sem: "60%",
          fifth_sem: "70%",
          sixth_sem: "65%"
      }
  },
  additionalInfo: {
      workExperience: "No",
      maritalStatus: "Single",
      interests: ["Listening to songs", "Gym", "Traveling"]
  },
  familyInfo: {
      motherName: "Rethinam S",
      fatherName: "Vincent M",
      siblings: "Yes"
  }
};


// console.log(resume);

for (let key in resume.personalInfo) {
  console.log(key + ": " + resume.personalInfo[key]);
}


for (let i = 0; i < resume.qualifications.length; i++) {
  console.log("Qualification: " + resume.qualifications[i]);
}
for (let i=0;i<resume.skills.length;i++){
  console.log("skills"+": "+resume.skills[i])
}

for (let key in resume.marks) {
  console.log("Marks for " + key + ":");
  for (let subject in resume.marks[key]) {
      console.log(subject + ": " + resume.marks[key][subject]);
  }
}
for (let key in resume.additionalInfo) {
  console.log(key + ": " + resume.additionalInfo[key]);
}
for (let key in resume.familyInfo) {
  console.log(key + ": " + resume.familyInfo[key]);
}
