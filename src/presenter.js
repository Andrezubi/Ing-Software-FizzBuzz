import { FizzBuzz } from "./FizzBuzz";

const num = document.querySelector("#numero");

const form = document.querySelector("#FizzBuzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numero = Number.parseInt(num.value);


  div.innerHTML = "<p> La cadena FizzBuzz es: <p>" + FizzBuzz(numero) + "</p>";
  console.log("en teoria paso")
});
