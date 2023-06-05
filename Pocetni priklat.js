 function vypocti() {
  let polomer = document.getElementById("polomer").value;
  let obvod = 2 * Math.PI * polomer;
  let obsah = Math.PI * polomer * polomer;

  document.getElementById("obvod").innerHTML = obvod.toFixed(2);
  document.getElementById("obsah").innerHTML = obsah.toFixed(2);
}

// Spustit výpočet po změně poloměru
document.getElementById("polomer").addEventListener("input", vypocti);

function kontrola() {
  var polomer = document.getElementById("polomer").value;
  var obvod = document.getElementById("obvod").value;
  var vypocetObvodu = 2 * Math.PI * polomer;
  var vypocetPolomeru = obvod / (2 * Math.PI);
  console.log(document.getElementById("obvod"))
  console.log(vypocetObvodu, document.getElementById("obvod"), obvod, vypocetPolomeru, polomer)
  if (Math.abs(Math.round(vypocetObvodu) - Math.round(obvod)) <= 1 && Math.abs(Math.round(vypocetPolomeru) - Math.round(polomer)) <= 1) {
    alert("Hodnoty jsou správné!");
  } else {
    alert("Hodnoty jsou nesprávné!");
  }
}