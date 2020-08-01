

const studentCards = [
    {
        name: "Ginny Weasley",
        house: "Gryffindor",
    },
    {
        name: "Ginny Weasley",
        house: "Gryffindor",
    },
    {
        name: "Ginny Weasley",
        house: "Gryffindor",
    },
    {
        name: "Ginny Weasley",
        house: "Gryffindor",
    }
]

const houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff']


const buildForm = () => {
    
    let domString = ''; 
    domString += `<h2>Enter First Year's Name</h2>`
    domString += `<form class=“form-inline”>
    <div class=“form-group mb-2">
    <label for=“staticStudent” class=“sr-only”>Student</label>
      <input type=“text” readonly class=“form-control-plaintext” id=“staticStudent” value=“Student:“>
    </div>
   <div class=“form-group mx-sm-3 mb-2”>
   <label for=“inputStudent" class=“sr-only”>Student Name</label>
    <input type=“text” class=“form-control” id=“inputStudent” placeholder=“Hermione Granger”>
    </div>
  <button type=“submit” class=“btn btn-primary mb-2”>Sort!</button>
</form>`

  printToDom('form', domString);
    
}




const buildCards = () => {
    const randomHouse = houses[Math.floor(Math.random() * houses.length)]; 
    let domString = '';

    

    domString += `<div class="card" style="width: 18rem;">
                <img class="card-img-top" src=".../100px180/" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${inputStudent}</h5>
                <p class="card-text">${randomHouse}</p>
                <a href="#" class="btn btn-primary">Expel</a>
                </div>
                </div>`

printToDom('student-cards', domString);
}

   

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}


const buttonEvents = () => {
    document.getElementById('jumbotron-btn').addEventListener('click', buildForm);
    document.getElementById('form-btn').addEventListener('click', buildCards)
}


buttonEvents();