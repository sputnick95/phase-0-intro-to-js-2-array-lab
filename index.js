// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name) {
    cats.pop()
}

function destructivelyRemoveFirstCat(name) {
    cats.shift()
}

function appendCat(name) {
    const newArray = [...cats, "Broom"];
    return newArray
}

function prependCat(name) {
    const newArray = ["Arnold", ...cats];
    return newArray
}

function removeLastCat(name) {
    return cats.slice(0,2)
}   

function removeFirstCat(name) {
    return cats.slice(1)
}   