let poll
let polls
let x = 1
let id = 0
let aanet1
let aanet2
let aanet3

let kayttaja = localStorage.getItem('username')
document.getElementById('tervetuloa').innerHTML = 'Tervetuloa ' + kayttaja + '!'

function kirjauduUlos(){
    localStorage.removeItem('username')
}

function lisaaPoll(){
    if (localStorage.getItem('polls')) {
        polls = JSON.parse(localStorage.getItem('polls'));
    } else {
        polls = [];
    }
    aanet1 = 0.0
    aanet2 = 0.0
    aanet3 = 0.0
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
    let answerIndex = 0
    var theInput;
    var thisQuestion = polls[i];
    var theValues =   thisQuestion.values;
    var theVotes = thisQuestion.votes;
    var theDiv = document.createElement( 'div'); 
    var theForm = document.createElement("form");
    var theQuestion = document.createElement('p')
    var theButton = document.createElement('button')
    var deleteButton = document.createElement('button')
    var labelAndVotes
    var label
    var voteNumDiv
    theButton.setAttribute('type', 'submit')
    theButton.setAttribute('class', 'btn btn-primary mt-3')
    theButton.innerHTML = 'Äänestä'
    theButton.setAttribute('onclick', `aanesta(${id})`)
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
        voteNumDiv = document.createElement('div')
        labelAndVotes = document.createElement('div')
        label = document.createElement('label')
        theInput = document.createElement("input");
        labelAndVotes.setAttribute('id', 'labelandvotes')

        theInput.setAttribute('type',"radio");
        theInput.setAttribute('class', 'form-check-input')
        theInput.setAttribute('name',thisQuestion.radioName);
        theInput.setAttribute('value',theValues[q]);
        theInput.setAttribute('id', 'vastaus'+id+answerIndex)
        
        label.setAttribute('class', 'form-check-label')
        label.innerHTML = theValues[q]

        voteNumDiv.innerHTML = polls[id].votes[answerIndex]

        labelAndVotes.appendChild(label)
        labelAndVotes.appendChild(voteNumDiv)

        theDiv.appendChild(theInput);
        theDiv.appendChild(labelAndVotes)
        theForm.appendChild(theDiv);
        
        theDiv.classList.add('form-check')
        answerIndex++
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

function aanesta(index){
    let checked
    if (document.getElementById('vastaus'+index+'0').checked){
        checked = 0
    }
    if (document.getElementById('vastaus'+index+'1').checked){
        checked = 1
    }
    if (document.getElementById('vastaus'+index+'2').checked){
        checked = 2
    }
    polls[index].votes[checked] += 1
    localStorage.setItem('polls', JSON.stringify(polls))
    location.reload()
}

function poista(index){
    polls.splice(index, 1)
    localStorage.setItem('polls', JSON.stringify(polls))
    location.reload()
}