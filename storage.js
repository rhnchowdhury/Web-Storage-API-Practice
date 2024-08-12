//! local storage
// localStorage.setItem("name", "Raihan");
// let test = localStorage.getItem("name");

let btnF = () => {
  const getInput = document.getElementById("inputF").value;
  const getInput2 = document.getElementById("inputL").value;
  localStorage.setItem(getInput, getInput2);
};

const btnAge = () => {
  const getInput3 = document.getElementById("inputAge").value;
  const getInput4 = document.getElementById("yourAge").value;
  localStorage.setItem(getInput3, getInput4);
};

let tt = localStorage.getItem("name");
// console.log(tt);

//? clear local storage
const allClear = () => {
  localStorage.clear();
};

//! session storage
sessionStorage.setItem("test", "testing");
let test = sessionStorage.getItem("test");
console.log(test);

//! cookie practice
document.cookie = "user=raihan; expires=Tue, 12 Aug 2024 20:27:00 GMT";
console.log(document.cookie);
