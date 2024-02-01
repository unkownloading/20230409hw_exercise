// const calc = function (nums1, nums2) {
//     for (let i = 1; i <= nums1; i++) {
//         console.log("i = ", i);
//         for (let k = 1; k <= nums2; k++) {
//             console.log("k = ", k);
//             console.log(`${i} x ${k} = ${i * k}`);
//         }
//     }
// };
const calc = function (n1, n2) {
    let tbody = document.querySelector("#display-table tbody");
    let content = "";






    for (let i = 1; i <= n2; i++) {
        content += `<tr><td>${i}</td>`;

        for (let j = 1; j <= n1; j++) {
            content += `<td>${i * j}</td>`;
        }

        content += '</tr>';
    }

    tbody.innerHTML = content;








}

const makeThead = function (n1) {
    let thead = document.querySelector("#display-table thead");
    let content = '<tr><th></th>';

    for (let i = 1; i <= n1; i++) {
        content += `<th>${i}</th>`;
    }

    content += `</tr>`;

    thead.innerHTML = content;
}

//  makebtn 

let makeBtn = document.querySelector("#make-btn");

makeBtn.addEventListener("click", () => {
    let nums1 = document.querySelector("#nums1");
    let nums2 = document.querySelector("#nums2");

    if (!nums1.value) {
        alert("數字1 未填寫");
        nums1.focus();
        return;
    }

    if (!nums2.value) {
        alert('數字2 未填寫');
        nums2.focus();
        return;
    }

    let n1 = +nums1.value;
    let n2 = +nums2.value;

    makeThead(n1);

    calc(n1, n2);
})