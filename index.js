// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Variables</h1>`;

let name = 'Curtis'

let language = 'JavaScript'

console.log(name)
console.log(language)

const nameDiv = document.getElementById('name')
nameDiv.innerHTML = `<p>${name}</p>`

const langDiv = document.getElementById('language')
langDiv.innerHTML = `<p>${language}</p>`


let addition = 10 + 10

console.log(addition)

const add = document.getElementById('add')
add.innerHTML = `<p>${addition}</p>`