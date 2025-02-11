let poll
let polls
let x = 1
let id = 0
let aanet1
let aanet2
let aanet3

function lisaaPoll(){
    if (localStorage.getItem('polls')) {
        polls = JSON.parse(localStorage.getItem('polls'));
    } else {
        polls = [];
    }
    let kysymys = document.getElementById('kysymys').value
    let vastaus1 = document.getElementById('vastaus1').value
    let vastaus2 = document.getElementById('vastaus2').value
    let vastaus3 = document.getElementById('vastaus3').value
    poll = {'questionId': kysymys, 'formName': kysymys,'radioName': kysymys, 'values': [vastaus1, vastaus2, vastaus3], 'votes': [aanet1, aanet2, aanet3]}
    polls.push(poll)
    localStorage.setItem('polls', JSON.stringify(polls))
    location.reload()
}

if (localStorage.getItem('polls')) {
    polls = JSON.parse(localStorage.getItem('polls'));
} else {
    polls = [];
}    


for (i = 0; i < polls.length; i++) {
    var theInput;
    var thisQuestion = polls[i];
    var theValues =   thisQuestion.values;
    var label = document.createElement( 'label'); 
    var theForm = document.createElement("form");
    var theQuestion = document.createElement('p')
    var theButton = document.createElement('button')
    var deleteButton = document.createElement('button')
    theButton.setAttribute('type', 'submit')
    theButton.setAttribute('class', 'btn btn-primary mt-3')
    theButton.innerHTML = 'Äänestä'
    deleteButton.setAttribute('type', 'button')
    deleteButton.setAttribute('class', 'btn btn-danger mt-3')
    deleteButton.innerHTML = 'Poista kysymys'
    deleteButton.setAttribute('onclick', `poista(${id})`)
    theForm.setAttribute('name',thisQuestion.formName);
    theForm.setAttribute('class', 'col-md-4')
    theForm.setAttribute('id', 'kysymys'+id)
    theQuestion.innerText = thisQuestion.formName;
    theForm.appendChild(theQuestion)
    for (q = 0; q < theValues.length; q++) { 
    
        theInput = document.createElement("input");

        theInput.setAttribute('type',"radio");
        theInput.setAttribute('class', 'form-check-input')
        
        theInput.setAttribute('name',thisQuestion.radioName);
        theInput.setAttribute('value',theValues[q]);
        
        label.appendChild(theInput);
        label.innerHTML += "<span class='form-check-label'> " + theValues[q] + "</span><br>";

        theForm.appendChild( label);
        label.classList.add('form-check')
    }
    if(x == 1){
        row = document.createElement('div')
        row.setAttribute('class', 'row')
    }
    theForm.classList.add('div')
    theForm.appendChild(theButton)
    theForm.appendChild(deleteButton)
    row.appendChild(theForm)
    document.body.appendChild(row)
    x++
    if(x == 4){
        x = 1
    }
    id++
}

function poista(index){
    polls.splice(index, 1)
    localStorage.setItem('polls', JSON.stringify(polls))
    location.reload()
}