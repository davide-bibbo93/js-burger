// stabilite var richiamando dall'html
var nome = document.getElementById('name');
var cognome = document.getElementById('surname');
var indirizzo = document.getElementById('address');
var credit = document.getElementById('credit');
var buyButton =  document.getElementById('buy');
var checkOne = document.getElementsByClassName('check')[0];
var checkTwo = document.getElementsByClassName('check')[1];
var checkThree = document.getElementsByClassName('check')[2];
var checkFour = document.getElementsByClassName('check')[3];
var feedBack = document.getElementById('feed');
var emoticon = document.getElementById('emoticon');
var fine = document.getElementById('fine');

// addEventListener al click del pulsante del pagamento
buyButton.addEventListener('click',function(){
  if (nome.value === '' || cognome.value === '' || indirizzo.value === '') {
    alert('Si prega di compilare tutti i campi per procedere al pagamento.');
  }else{
    if (credit.value === '' || credit.value.length !== 16 ||  isNaN(parseInt(credit.value))) {
      alert('Si prega di inserire un numero di carta di credito valida.');
    }else {
      // può avvenire il pagamento e passaggio feedback

      console.log(nome.value);
      console.log(cognome.value);
      console.log(indirizzo.value)
      console.log(credit.value);

      checkOne.style.visibility ='visible';
      checkTwo.style.visibility ='visible';
      checkThree.style.visibility ='visible';
      checkFour.style.visibility ='visible';

      alert('Pagamento completato! Il tuo Burger sarà spedito il prima possibile (tempo stimato : 20 - 30 minuti), all\' indirizzo da te scelto : ' + indirizzo.value + '. La preghiamo di lasciare un feedback per farci capire se è soddisfatto del nostro delivery. Grazie per averci scelto e al prossimo Burger!')
      feedBack.style.visibility = 'visible';
      buyButton.style.display ='none';
    }
  }
});

// parte feedback
emoticon.addEventListener('click',function() {
  fine.style.display="block";
});

// reindirizzamento alla homepage
fine.addEventListener('click',function() {
  alert('Grazie per il feedback.')
  location.href ="../index.html";
});
