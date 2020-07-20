// Heute werden wir einen Idealgewicht Rechner nach der folgenden Formel programmieren.

// • Formel für Menschen mit einem zierlichen und schmalen Körperbau:
// [(Körpergröße in cm - 100) + (Alter/ 10)] x 0,9 x 0,9

// • Formel für Menschen mit einem eher breiten Körperbau:
// [(Körpergröße in cm - 100) + (Alter/ 10)] x 0,9 x 1,1

let deineGroesse = document.getElementById('deineGroesse');
let deinAlter = document.getElementById('deinAlter');
let deinGewicht = document.getElementById('deinGewicht');
let weiblich = document.getElementById('breite');
let maennlich = document.getElementById('schmale');
let result = document.getElementById('result');
let idealgewischt;
function calc() {
     if (schmale.checked == true) {
          idealgewischt =
               deineGroesse.value - 100 + (deinAlter.value / 10) * 0.9 * 0.9;
          result.innerHTML = idealgewischt.toFixed();
     } else {
          idealgewischt =
               deineGroesse.value - 100 + (deinAlter.value / 10) * 0.9 * 1.1;
          result.innerHTML = idealgewischt.toFixed();
     }
}
