let x = 1

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
    theButton.setAttribute('type', 'submit')
    theButton.setAttribute('class', 'btn btn-primary mt-3')
    theButton.innerHTML = 'Äänestä'
    theForm.setAttribute('name',thisQuestion.formName);
    theForm.setAttribute('class', 'col-md-4')
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
    row.appendChild(theForm)
    document.body.appendChild(row)
    x++
    if(x == 4){
        x = 1
    }
    
}