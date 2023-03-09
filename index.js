// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name){
    name = cats.push("Ralph");
}

function destructivelyPrependCat(name){
    name = cats.unshift("Bob");
    
}

function destructivelyRemoveLastCat(name){
    name = cats.pop(-1);
}

function destructivelyRemoveFirstCat(name){
    name = cats.shift(0);
}

function appendCat(name){
    name = [...cats,"Broom"];
    return name;
}

function prependCat(name){
    name = ["Arnold", ...cats];
    return name;
}

function removeLastCat(){
    return cats.slice(0, cats.length - 1);
}

function removeFirstCat(){

    return cats.slice(1);
}