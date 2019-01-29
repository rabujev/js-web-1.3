
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/
let vilName;
let superPower;
let motiv;
let plan;
document.querySelector('#Reset').addEventListener('click', () => {
  document.querySelector('#super-vilain-name').value = "";
  document.querySelector('#super-power').value = "";
  document.querySelector('#motivation').value = "";
  document.querySelector('#plan-to-conquer-the-world').value = "";
});
document.querySelector('#Display').addEventListener('click', () => {
  document.querySelector('#show').style.display = "none";
  vilName = document.querySelector('#super-vilain-name').value;
  superPower = document.querySelector('#super-power').value;
  motiv = document.querySelector('#motivation').value;
  plan = document.querySelector('#plan-to-conquer-the-world').value;
  document.querySelector('#vilNametxt').innerText = vilName;
  document.querySelector('#superPowertxt').innerText = superPower;
  document.querySelector('#motivtxt').innerText = motiv;
  document.querySelector('#plantxt').innerText = plan;
  document.querySelector('#hide').style.display = "block";
});
