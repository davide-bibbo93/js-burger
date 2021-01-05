// var costanti
var priceStandard = 50;
var discount = 20;
var couponList = ['GUSTOSO', 'DELIZIOSO', 'ESAGERATO'];
var arrayTotal = 0;
var lessIngredients;
// ------------------------------------------------------------------------

// stabilire var richiamando dall'html.
var refreshButt = document.getElementById('refresh');
var paymentButt = document.getElementById('payment');
var shop = document.getElementsByClassName('shop')[0];
var ingredients = document.getElementsByClassName('shop')[0].getElementsByTagName('ul')[0];
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
    alert('Seleziona il nome del tuo Burger.')
    total.innerText = '0';
  } else if (nameHamburger.value !== '') {
    // l'utente deve selezionare almeno due ingredienti, sennò alert.
    // Attribuire value agli ingredienti per somma totale.
    var counterIngredients = 0; // flag
    var arrayIngredients = [];
    var allIngredients = [];

    for (var i = 0; i < listIngredients.length; i++) {
      if (listIngredients[i].checked === true) {
        counterIngredients += 1; // flag aumenta di uno
        arrayIngredients.push(parseInt(listIngredients[i].value));
        allIngredients.push(listIngredients[i].name);
      }
    }

    for (var i = 0; i < arrayIngredients.length; i++) {
      arrayTotal += arrayIngredients[i];
    }

    if (counterIngredients < 2) {
      alert('Seleziona almeno 2 ingredienti.');
      total.innerHTML = '0';
      lessIngredients = true;
    }else {
      lessIngredients = false;
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

  if (lessIngredients === false && couponNow !== true) {
    total.innerText = priceStandard + arrayTotal;
  } else if (lessIngredients === false && couponNow === true){
    sconto = ((priceStandard + arrayTotal) * discount) / 100;
    total.innerText = priceStandard + arrayTotal - sconto;
  }

  // parte lista carrello
  for (var i = 0; i < allIngredients.length; i++) {
    ingredients.innerHTML = '<li>' + 'PANE x1' + '</li>';
    ingredients.innerHTML += '<li>' + 'CARNE x1' + '</li>';
  }
  for (var i = 0; i < allIngredients.length; i++) {
    ingredients.innerHTML += '<li>' + allIngredients[i].toUpperCase() + ' x1' + '</li>';
    paymentButt.style.visibility = 'visible';
  }
  allIngredients = [];
  arrayTotal = 0;
});

// parte pagamento
paymentButt.addEventListener('click',function() {
  if (total.innerHTML === '0') {
    alert('Attenzione, non è possibile continuare l\'ordine. Seleziona nome del tuo Burger e almeno due ingredienti.');
  }else {
    alert('Procediamo con il pagamento..');
    location.href = "pay/js-burger-pay.html";
  }
});

// parte refresh carrello

refreshButt.addEventListener('click',function() {
  ingredients.innerHTML = '<li>' + 'PANE x1' + '</li>';
  ingredients.innerHTML += '<li>' + 'CARNE x1' + '</li>';
  total.innerText = '0';
});
