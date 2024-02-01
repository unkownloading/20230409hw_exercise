let uid = document.querySelector("#uid");

let students = document.querySelector(".student");

console.log("uid", uid);
console.log("students", students);

let m_uid = document.querySelectorAll("#uid");
let m_students = document.querySelectorAll(".student");


console.log("m_uid", m_uid);
console.log("m_students", m_students);

m_uid.forEach(u => {
    console.log("u", u);
})

m_students.forEach(s => {
    console.log("s", s);
})

if (uid) {
    uid.innerHTML = "New UID";
}

const login = function () {
    let acc = document.querySelector("#acc");
    let pwd = document.querySelector("#pwd");
    console.log("acc", acc.value, "pwd", pwd.value);

    acc.value = 'ffff';

}

uid.style.backgroundColor = "red";

console.log("uid", uid.classList);


const myContains = function (dom, className) {
    let cname = dom.className;
    let cnameArr = cname.split(" ");
    console.log("cname = ", cname);
    console.log("cnameArr = ", cnameArr);

    cnameArr.forEach(n => {
        if (n == className) {
            console.log(`${className} in dom element. use function`);
        }
    })
}
// 優先權較低

if (uid.classList.contains("main")) {
    console.log("main in uid element. use contains");
}
// 優先權較高
+
    myContains(uid, "main");