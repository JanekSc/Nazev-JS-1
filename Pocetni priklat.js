// Zeptej se uživatele na poloměr kruhu
let polomer = prompt("Zadejte poloměr kruhu:");

// Zkontroluj, zda uživatel zadal platné číslo
if (isNaN(polomer)) {
  alert("Zadaná hodnota není číslo.");
} else {
  // Vypočti obvod kruhu
  let obvod = 2 * Math.PI * polomer;

  // Vypočti obsah kruhu
  let obsah = Math.PI * Math.pow(polomer, 2);

  // Vypiš výsledky na obrazovku
  document.write("Poloměr kruhu je:" + polomer+ "<br>");
  document.write("Obvod kruhu je: " + obvod+ "<br>");
  document.write("Obsah kruhu je: " + obsah+"<br>");
}

function polomer1(polomer) { return obvod = 2 * Math.PI *polomer}

function obvod(input) {
    let converted = polomer1 (input.value);
    document.getElementById("obvod").innerText = converted;
  }

  function inczk(polomer) { return obsah = Math.PI * Math.pow(polomer, 2)}

function obsah(input) {
    let converted = polomer1(input.value);
    document.getElementById("obsah").innerText = converted;
  }
  