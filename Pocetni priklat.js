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
  console.log("Poloměr kruhu je: " + polomer);
  console.log("Obvod kruhu je: " + obvod);
  console.log("Obsah kruhu je: " + obsah);
}