let kayttajanimi
let salasana
let kayttajanimi2
let salasana2
let admin
let valid
let kayttaja = {}
let kayttajat;
let poll
let polls
let x = 1

function kirjaudu(){
    kayttajat = JSON.parse(localStorage.getItem('users'))
    kayttajanimi2 = document.getElementById('username2').value
    salasana2 = document.getElementById('password2').value
    admin = document.getElementById('admin2').checked
    for (let i = 0; i < kayttajat.length; i++){
        if (kayttajanimi2 === kayttajat[i]['username'] && salasana2 === kayttajat[i]['password'] && admin === kayttajat[i]['admin']){
            if (admin === true){
                location.replace("/loggedinadmin.html")
                break
            }else{
                location.replace("/loggedin.html")
                break
            }
        }
        if(i+1 === kayttajat.length){
            alert('kirjautuminen epäonnistui')
        }
    }
}

function tallennaTiedot(){
    if (localStorage.getItem('users')) {
        kayttajat = JSON.parse(localStorage.getItem('users'));
    } else {
        kayttajat = [];
    }
    kayttajanimi = document.getElementById('username1').value
    salasana = document.getElementById('password1').value
    kayttaja = {'username': kayttajanimi, 'password': salasana, 'admin': document.getElementById('admin1').checked}
    if(salasana.length === 0 || kayttajanimi.length === 0){
        valid = false
        alert('kirjoita salasana')
        
    }
    if(kayttajat.length > 0){
        for (let i = 0; i < kayttajat.length; i++){
            if (kayttajanimi === kayttajat[i]['username']){
                alert('käyttäjänimi varattu')
                break
            }
            if(i+1 === kayttajat.length){
                kayttajat.push(kayttaja)
                localStorage.setItem('users', JSON.stringify(kayttajat))
                break
            }
        }
    }else{
        kayttajat.push(kayttaja)
        localStorage.setItem('users', JSON.stringify(kayttajat))
    }
}

function poistaIlmoitus(){
    document.getElementById('kirjautumisilmoitus').style.display = 'none'
}

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
    poll = {'questionId': kysymys, 'formName': kysymys,'radioName': kysymys, 'values': [vastaus1, vastaus2, vastaus3]}
    polls.push(poll)
    localStorage.setItem('polls', JSON.stringify(polls))
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
    theButton.setAttribute('type', 'submit')
    theButton.setAttribute('class', 'btn btn-primary mt-3')
    theButton.innerHTML = 'Äänestä'
    theForm.setAttribute('name',thisQuestion.formName);
    theForm.setAttribute('class', 'col-md-3')
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
    if(x == 5){
        x = 1
    }
    
}