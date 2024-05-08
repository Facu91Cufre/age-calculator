const btn = document.getElementById("btn");
const result = document.getElementById("result");
const container = document.querySelector(".container");

let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

const calculateAge = () => {
  let dateOfBirth = new Date(userInput.value);

  let d1 = dateOfBirth.getDate();
  let m1 = dateOfBirth.getMonth() + 1;
  let y1 = dateOfBirth.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  result.innerHTML = `Tenés <span>${y3}</span> años, <span>${m3}</span> meses, <span>${d3}</span> días de edad.`;
  console.log(y3, m3, d3 - 1);
  if(y3 > 50) {
    let edad = document.createElement("p");
    edad.classList.add("edad");
    edad.innerHTML = `Que vieja <span>chota</span>.`;
    container.appendChild(edad);
  }
};

const getDaysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};

btn.addEventListener("click", () => {
  calculateAge();
});
