const students = [
    {name: "mathan", age: 25, place: "moolachel"},
    {name: "arun", age: 25, place: "mondaymarket"},
    {name: "jameswatt", age: 26, place: "nagercoil"},
    {name: "mahathi", age: 17, place: "thengapatanam"},
    {name: "jemil", age: 21, place: "karka"},
    {name: "ajay", age: 23, place: "karka"},
    {name: "manish", age: 23, place: "karka"}
];

const table = `
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Place</th>
            </tr>
        </thead>
        <tbody>
            ${students.map(student => `
                <tr>
                    <td>${student.name}</td>
                    <td>${student.age}</td>
                    <td>${student.place}</td>
                </tr>
            `).join('')}
        </tbody>
    </table>
`;

console.log(table)
