// # Instructions :
// >*En utilisant la methode getElementsByTagName et des methodes de parent/enfant/premier element/dernier element/ etc.. PART 2*


// ### 1. Récupère et affiche le premier enfant de la dernière div
// ### 2. Récupère et affiche le dernier enfant de la dernière div
// ### 3. Récupère l'élément i contenu dans le premier p de la dernière div et affiche le
// ### 4. Récupère l'élément b contenu dans le dernier p de la dernière div et affiche le
// ### 5. Affiche l'élément parent de l'élément i
// ### 6. affiche l'élément parent de l'élément b
// ### 7. affiche l'élément suivant le premier enfant de la dernière div

// //exo1
// let lastDiv = document.getElementsByTagName('div')[2];
// let lastDivFirstElem = lastDiv.firstElementChild;
// console.log(lastDivFirstElem);

// //exo2
// let lastDivLastElem = lastDiv.lastElementChild;
// console.log(lastDivLastElem);

// //exo3
// let firstP = lastDiv.getElementsByTagName('p')[0];
// console.log(firstP);
// let elemI = firstP.getElementsByTagName('i')[0];
// console.log(elemI);

// //exo4
// let lastP = lastDiv.getElementsByTagName('p')[1];
// console.log(lastP);
// let elemB = lastP.getElementsByTagName('b')[0];
// console.log(elemB);

// //exo5
// let parentI = elemI.parentElement;
// console.log(parentI);

// //exo6
// let parentB = elemB.parentElement;
// console.log(parentB);

// //exo7. affiche l'élément suivant le premier enfant de la dernière div
// let firstChild =  lastDiv.firstElementChild;
// console.log(firstChild)
// let suivant = firstChild.nextElementSibling;
// console.log(suivant);

//exo1
let exo1 = document.getElementsByTagName('div')[2].firstElementChild;
console.log(exo1);
//version dynamique
let long = document.getElementsByTagName('div').length -1;
let exo1bis =  document.getElementsByTagName('div')[long].firstElementChild;
console.log(exo1bis)

//exo2
let exo2 = document.getElementsByTagName('div')[2].lastElementChild;
console.log(exo2);
//version dynamique
let long2 = document.getElementsByTagName('div').length-1;
let exo2bis = document.getElementsByTagName('div')[long2].lastElementChild;
console.log(exo2bis);

//exo3
let exo3 = document.getElementsByTagName('div')[2].getElementsByTagName('p')[0];
console.log(exo3.getElementsByTagName('i')[0]);

//methode junior
let i = exo1.nextElementSibling.firstElementChild;

//exo4
let b = i.parentElement.nextElementSibling
.firstElementChild;
console.log(b);

//exo5
let iII = b.parentElement.previousElementSibling;
console.log(iII);

//exo6
let exo6= iII.nextElementSibling;
console.log(exo6);

//exo7
let exo7 = document.getElementsByTagName('div')[2].firstElementChild.nextElementSibling;
console.log(exo7);
