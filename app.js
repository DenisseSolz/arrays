/*
let numbers = [1, 2, 3, 6];
console.log(numbers.length); //esto da como resultado el numero de elementos, en este caso 4
console.log(numbers[0]); //la pocision de los elemtnos empieza desde el numero "0", eso quiere decir que 0 seria 1, y 1 2, asi sucesivamente
console.log(numbers[numbers.length-1])

for (let i=0 ; i<numbers.length; i++){
        console.log(numbers[i]);
    }


*/
let bebidas = ["coca, fanta, fresca, pepsi, squirt, sprite"];
let comida = ["pizza, hamburguesa, sushi"]

//mutable  --> muta(cambia) la variable
/*
bebidas.push("manzana"); // agrega un elemento mas, y lo coloca al final
bebidas.unshift("arizona"); // agrega un elemento mas, y lo coloca al principio
bebidas.splice(2, 0, "arizona"); // agregar y eliminar elementos

let b = bebidas.pop();
let b2 = bebidas.shift();
console.log(b);
console.log(b2);
*/

//inmutable
const bebidaComida = bebidas.concat(comida);
bebidaComida.puch("galletas");

showDom("array1", bebidas);
showDom("array2", bebidaComida);


function show(arr){
    for(let i=0 ; i<arr.length; i++){
        console.log(arr[i]);
    }
}

function showDom(element, arr){
    document.getElementById(element).innerHTML = "";
   
    for(let i=0 ; i<arr.length; i++){
        document.getElementById(element).innerHTML =+
        '<div>${arr[i]}<div>'; //no se como fregados hacer que esto funcione, intente pegandolo con "+", pero no funciona, y ya busque y busque y NADA! :(
    }
}