/*************** 
    CODE LISTA DELLA SPESA
***************/

const expenseList = [ //dichiarazione di array con la lista della spesa
    'uova',
    'pane',
    'latte',
    'frutta',
    'verdura',
];
//console.log('Lista della spesa:', expenseList);
let currentProduct = 0; //dichiarazione del prodotto corrente
//console.log('Prodotto corrente:', currentProduct);
let list = '';

/*
* Creo ciclo while per indicare tutti i prodotti
* presenti nell'array
*/

while (currentProduct < expenseList.length){
    list += `<li>${expenseList[currentProduct]}</li>` //scrivo nell'HTML il seguento comando
    currentProduct++; //vado al prossimo prodotto
}

document.querySelector('#expense-list').innerHTML += list; //scrivo nella lista i prodotti