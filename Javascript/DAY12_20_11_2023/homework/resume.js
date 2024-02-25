
const resume = {
    personalInformation: {
        name: "Mathan jose.V",
        address: "11/77,alluvilai,moolachel,meakamandapam(p),629166",
        phone: "9489383139",
        email: "mathan1026jose@gmail.com",
    },
    education: {
        degree: "Bachelor of Arts",
        university: "manonmanium university",
        graduationYear: 2019,
    },
    skills: ["gym",  "HTML", "CSS"],
};


console.log("=== Resume ===");
console.log("Personal Information:");
console.log(`Name: ${resume.personalInformation.name}`);
console.log(`Address: ${resume.personalInformation.address}`);
console.log(`Phone: ${resume.personalInformation.phone}`);
console.log(`Email: ${resume.personalInformation.email}`);

console.log("Education:");
console.log(`${resume.education.degree} - ${resume.education.school} (${resume.education.graduationYear})`);

console.log("Skills: " + resume.skills.join(", "));
