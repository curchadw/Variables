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


//numbers
let num = 2

//should equal 4
num += 2

console.log(num)

//should equal 4 squared

console.log(num*num)

let name2;

let studentId = 4;

let myFunction = function(name2 ='Curtis' , studentId) {
  return `name: ${name2}, studentID: " + ${studentId}`;
};

console.log(name2); 		// What is the output?

console.log(studentId); 	// What is the output?

console.log(myFunction(name2, studentId)); 	// What is the output?

console.log(myFunction("Jeff", 7)); 	// What is the output?

let weekDay;

weekDay = 9

const dayOfTheWeek = (weekDay)=>{


if(weekDay === 0)
  console.log('Sun')
else if(weekDay === 1)
  console.log('Mon')
else if(weekDay === 2)
  console.log('Tues')
else if(weekDay === 3)
  console.log('Wed')
else if(weekDay === 4)
  console.log('Thurs')
else if(weekDay === 5)
  console.log('Fri')
else if(weekDay === 6)
  console.log('Sat')
else
  console.log('Maybe on another planet')

}


