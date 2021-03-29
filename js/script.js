// Al click devo inserire il nome,cognome, etc....
var generateButton = document.getElementById('generate-button');
generateButton = generateButton.addEventListener('click', function(){

    // far apparire il div passeggero
    var hidddenClass = document.getElementById ('ticket-result');
    hidddenClass.className = "your-ticket";

    // nome e cognome
    var nomeUtente = document.getElementById('nome-utente').value;
    console.log (nomeUtente);

    var cognomeUtente = document.getElementById('cognome-utente').value;
    console.log (cognomeUtente);

    // km da percorrere:
    var kmUtente = document.getElementById('km-percorrere').value;
    console.log(kmUtente);


    // fascia età: creo un if per le fasce:
    var etaUtente = document.getElementById('fascia-eta').value;
    var valutaOfferta= 'prezzo standard';
    console.log(etaUtente);

    if(etaUtente == 'minorenne'){
        valutaOfferta = "sconto20";
        prezzoFinale = prezzoFinale - (prezzoFinale * 0.2);

    }else if(etaUtente =='over'){
        valutaOfferta = "Sconto Silver";
        prezzoFinale = prezzoFinale - (prezzoFinale * 0.4);
        
    }
    console.log(valutaOfferta);

    // prezzo finale:
    var kmUtente = document.getElementById('km-percorrere').value;
    var kmUtenteNumero=parseInt(kmUtente);

    var prezzoFinale = kmUtenteNumero * 0.21;

    // carrozza:
    var numerocarrozza = Math.floor(Math.random() * 10) + 1;
    document.getElementById("result-carrozza-passeggero").innerHTML = numerocarrozza;

    

    // codice CP:
    var numeroCodiceCp = Math.floor(Math.random() * 10000) + 1000;
    document.getElementById("result-codice-cp-passeggero").innerHTML = numeroCodiceCp;



    // STAMPA:
    document.getElementById("result-nome-passeggero").innerHTML = nomeUtente + ' ' + cognomeUtente;
    document.getElementById("result-offerta-passeggero").innerHTML = valutaOfferta;
    document.getElementById("result-prezzo-finale-passeggero").innerHTML = prezzoFinale.toFixed(2) + ' €';
});