let age = 19;
console.log("age", age);

let firstName = "Chen";
let lastName = "Jiyan";
let fullName = firstName + " " + lastName;
console.log("fullName", fullName);
let fullName2 = `${firstName} ${lastName}`; // ES6 用法，可讀性較高
console.log("fullName2", fullName2);

let n1 = 1;
let n2 = 1.25;
let n3 = n1 + n2;
let n4 = '10';
// let n5 = n1 + parseInt(n4, 10);
let n5 = +n4 + n1;
console.log("n5", n5);

console.log("typeof of n1", typeof n1.toString());
console.log("typeof of n5", typeof n5);
// ==========================================================================

let con = 1;
// let con = true,false,1,0,"s","",-1,2;
if (con) {
    console.log(`${con} is true . `);
}

let students = [10, 20, 30];
students.push(40);
console.log("students", students);
console.log("students[2]", students[2]);

// ==========================================================================
let scope = students.join(",");
console.log("scope", scope, "typeof scope = ", typeof scope, "typeof students = ", typeof students);

console.log(students.indexOf(200));
// 未搜尋到 = -1

let index = students.indexOf(200);
console.log("index", index);
students.splice(index, 1);
console.log("students", students);
students.push(50);
students.push(60);
students.push(70);
students.push(80);
students.forEach((scope, index) => {
    console.log(`index ${index}: ${scope}`);
})
// ==========================================================================
let a = [];

a.push({
    name: 'jiyan chen',
    scope: 100
});
a.push({
    name: 'jsssssn ddddn',
    scope: 80
});
console.log("a", a);

a.forEach((a, index) => {
    console.log(` a index ${index} : ${a.name} score is ${a.score} `);
})