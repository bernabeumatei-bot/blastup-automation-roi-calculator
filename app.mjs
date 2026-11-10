import {calculateROI} from "./roi.mjs";
const form = document.querySelector("#calculator");
const results = document.querySelector("#results");
const euro = new Intl.NumberFormat("es-ES", {style:"currency", currency:"EUR", maximumFractionDigits:0});
const number = new Intl.NumberFormat("es-ES", {maximumFractionDigits:1});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  try {
    const data = calculateROI(Object.fromEntries(new FormData(form)));
    const show = (id, value) => document.querySelector(id).textContent = value;
    show("#hours", number.format(data.annualHours) + " h");
    show("#benefit", euro.format(data.annualBenefit));
    show("#cost", euro.format(data.annualCost));
    show("#net", euro.format(data.yearOneNet));
    show("#roi", data.roiPercent === null ? "No calculable sin coste" : number.format(data.roiPercent) + " %");
    show("#payback", data.paybackMonths === null ? "No recuperable con estos supuestos" : number.format(data.paybackMonths) + " meses");
    results.hidden = false;
  } catch (error) {
    results.hidden = true;
    alert(error.message);
  }
});
