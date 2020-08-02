'use strict'

const studentArray = []


const houseArray = [
    'Gryffindor',
    'Hufflepuff',
    'Ravenclaw',
    'Slytherin'
]

const buildForm = () => {
  let domString = '';

  domString += `<h2 id="firstYear">Enter First Year's Name</h2>`
  domString += `<div class="form-inline">
    <div class="form-group mb-2">
      <label for="staticStudent" class="sr-only">Student</label>
      <input type="text" readonly class="form-control-plaintext" id="staticStudent" value="Student:">
    </div>
    <div class="form-group mx-sm-3 mb-2">
      <label for="inputStudent" class="sr-only">Student</label>
      <input type="text" class="form-control" id="inputStudent" placeholder="Your Name">
    </div>
    <button type="submit" class="btn btn-primary mb-2" id="formBtn">Sort!</button>
    </div>`

  printToDom('studentForm', domString);
}

const buildStudent = (e) => {
  let buttonId = e.target.id;
  let randomHouse = houseArray[Math.floor(Math.random() * houseArray.length)];
  let domString = '';
  
  if (buttonId === 'formBtn') {
    if (inputStudent.value === '') {
      domString += `<p>Sort Machine Error: Enter Name</p>`
      printToDom('errorMessage', domString);
    } else {
      studentArray.push({name: inputStudent.value, house: randomHouse})
    }
  }
  buildCards(studentArray);
}

const buildCards = (arrayGrabber) => {
  let domString = ''
    
  for (let i = 0; i < arrayGrabber.length; i++) {
    domString += `<div class="card" style="width: 18rem;" id="${i}">
    <div class="card-body">
    <h5 class="card-name">${arrayGrabber[i].name}</h5>
    <p class="card-text">${arrayGrabber[i].house}</p>
    <button type="button" class="btn btn-primary" id="${i}">Expel</button>
    </div>
    </div>`
  }

  printToDom('studentCard', domString)
  document.getElementById('inputStudent').value = '';
}

const expelStudent = (e) => {
  const expelType = e.target.type;
  const target = e.target.id;
  
  if (expelType === 'button') {
    studentArray.splice(target, 1);

    buildCards(studentArray)
  }
}

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
}

const buttonEvents = () => {
  document.querySelector('#startBtn').addEventListener('click', buildForm)
  document.querySelector('#studentForm').addEventListener('click', buildStudent)
  document.querySelector('#studentCard').addEventListener('click', expelStudent)
}

const init = () => {
  buttonEvents();
}

init();