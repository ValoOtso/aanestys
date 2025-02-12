let x = 1
let id = 0
let checkedIndex

let kayttaja = localStorage.getItem('username')
document.getElementById('tervetuloa').innerHTML = 'Tervetuloa ' + kayttaja + '!'

function kirjauduUlos(){
    localStorage.removeItem('username')
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
    var labelAndVotes
    var label
    var voteNumDiv
    theButton.setAttribute('type', 'submit')
    theButton.setAttribute('class', 'btn btn-primary mt-3')
    theButton.innerHTML = 'Äänestä'
    theButton.setAttribute('onclick', `aanesta(${id})`)
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