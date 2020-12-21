// stabilire var richiamando dall'html.
var nameHamburger = document.getElementById('name-hamburger');
var listIngredients = document.getElementsByClassName('list')[0].getElementsByTagName('input');
var coupon = document.getElementById('coupon');
var button = document.getElementsByTagName('button')[0];
var total = document.getElementsByClassName('total-cost')[0];


// tutto quello che viene generato al click sul pulsante.
button.addEventListener('click',function() {
  // nome obbligatorio, se input vuota alert!
  if (nameHamburger.value === '') {
    alert('Inserire nome hamburger.')
  }

  // l'utente deve selezionare almeno due ingredienti, sennò alert.
  // Attribuire value agli ingredienti per somma totale.
  var counterIngredients = 0; // flag
  var arrayIngredients = [];
  var arrayTotal = 0;

  if (counterIngredients < 2) {
    alert('Scegli almeno 2 ingredienti.');
  }

  for (var i = 0; i < listIngredients.length; i++) {
    if (listIngredients[i].checked === true) {
      counterIngredients += 1; // flag aumenta di uno
      arrayIngredients.push(parseInt(listIngredients[i].value));
    }
  }

  for (var i = 0; i < arrayIngredients.length; i++) {
    arrayTotal += arrayIngredients[i];
  }

});
