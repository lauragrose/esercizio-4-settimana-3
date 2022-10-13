// PARTE UNO

const fraseIniziale = 'Sto imparando JavaScript';

document.getElementById('maiuscola').innerHTML = fraseMaiuscola = fraseIniziale.toUpperCase();
document.getElementById('minuscola').innerHTML = fraseMinuscola = fraseIniziale.toLowerCase();
document.getElementById('strArray').innerHTML = fraseVirgole = fraseIniziale.split('');
document.getElementById('estraiCaratteri').innerHTML = estraiCar = fraseIniziale.substring(2,3) + fraseIniziale.substring(1,2) + fraseIniziale.substring(14, 15) + fraseIniziale.substring(18, 19);
document.getElementById('concatena').innerHTML = fraseConcatenata = fraseIniziale.concat(' JS');
document.getElementById('estraiStringa').innerHTML = estraistringa1 = fraseIniziale.slice(5 , 9);

// PARTE DUE

const persone = ['Giovanni','Carla','Piero','Mirtilla'];

document.getElementById('array').innerHTML = persone;
document.getElementById('lunghezza').innerHTML = persone.length;
document.getElementById('elemento').innerHTML = persone[2];
document.getElementById('ultimo').innerHTML = persone[3];
persone.splice(2,1,'Massimo') ;
document.getElementById('modificato').innerHTML = persone;

// PARTE TRE

const aNascita = [2001, 1990, 1987, 2018, 2010]
const calcolaAnni = function (aNascita) {
    return 2022 - aNascita;
}
var stringaAnni =  ' anni.'
const eta1 = calcolaAnni(aNascita[0]);
const eta2 = calcolaAnni(aNascita[1]);
const eta3 = calcolaAnni(aNascita[2]);
const eta4 = calcolaAnni(aNascita[3]);
const eta5 = calcolaAnni(aNascita[4]);
document.getElementById('eta1').innerHTML += eta1 + stringaAnni;
document.getElementById('eta2').innerHTML += eta2 + stringaAnni;
document.getElementById('eta3').innerHTML += eta3 + stringaAnni;
document.getElementById('eta4').innerHTML += eta4 + stringaAnni;
document.getElementById('eta5').innerHTML += eta5 + stringaAnni;

const array = [eta1 , eta2, eta3 , eta4 , eta5] ;
document.getElementById('arrayEta').innerHTML += array;

// PARTE QUATTRO

const animali = ['coniglio','cane','gatto','criceto'];

document.getElementById('intero').innerHTML = animali;

animali.push('leone');
document.getElementById('aggiunto').innerHTML = animali; 

animali.pop('leone');
document.getElementById('estratto').innerHTML = animali;

document.getElementById('verifica1').innerHTML = animali.includes('cane');

document.getElementById('verifica2').innerHTML = animali.includes('canguro');