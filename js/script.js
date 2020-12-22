// var costanti
var priceStandard = 50;
var discount = 20;
var couponList = ['GUSTOSO', 'DELIZIOSO', 'ESAGERATO'];
var arrayTotal = 0;
// ------------------------------------------------------------------------

// stabilire var richiamando dall'html.
var nameHamburger = document.getElementById('name-hamburger');
var listIngredients = document.getElementsByClassName('list')[0].getElementsByTagName('input');
var coupon = document.getElementById('coupon');
var button = document.getElementsByTagName('button')[0];
var total = document.getElementById('final-price')
var counterIngredients = 0; // flag

// ------------------------------------------------------------------------

// tutto quello che viene generato al click sul pulsante.
button.addEventListener('click',function() {
  // nome obbligatorio, se input vuota alert!
  if (nameHamburger.value === '') {
    alert('Scegli il nome per il tuo Burger.')
  } else if (nameHamburger.value !== '') {
    // l'utente deve selezionare almeno due ingredienti, sennò alert.
    // Attribuire value agli ingredienti per somma totale.
    var counterIngredients = 0; // flag
    var arrayIngredients = [];

    for (var i = 0; i < listIngredients.length; i++) {
      if (listIngredients[i].checked === true) {
        counterIngredients += 1; // flag aumenta di uno
        arrayIngredients.push(parseInt(listIngredients[i].value));
      }
    }

    for (var i = 0; i < arrayIngredients.length; i++) {
      arrayTotal += arrayIngredients[i];
    }

    if (counterIngredients < 2) {
      alert('Scegli almeno 2 ingredienti.');
    }

  }

  // sezione coupon : creare array con stringhe.
  // se l'utente inserisce una delle stringhe, avrà sconto 20%
  var couponNow = false;

  for (var i = 0; i < couponList.length; i++) {
    if (coupon.value === couponList[i]) {
      couponNow = true;
    }
  }
  // --------------------------------------------------------------------

  // il pulsante button calcolerà la somma prezzo degli ingredienti scelti nel footer.
  // anche in caso coupon, del prezzo scontato.
  var sconto;

  if (couponNow !== true) {
    total.innerText = priceStandard + arrayTotal;
  } else {
    sconto = ((priceStandard + arrayTotal) * discount) / 100;
    total.innerText = priceStandard + arrayTotal - sconto;
  }
  arrayTotal = 0;
});
