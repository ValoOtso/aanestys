let kayttajanimi
let salasana
let kayttajanimi2
let salasana2
let admin
let valid
let kayttaja = {}
let kayttajat;
let x = 1
let id = 0

function kirjaudu(){
    kayttajat = JSON.parse(localStorage.getItem('users'))
    kayttajanimi2 = document.getElementById('username2').value
    salasana2 = document.getElementById('password2').value
    admin = document.getElementById('admin2').checked
    for (let i = 0; i < kayttajat.length; i++){
        if (kayttajanimi2 === kayttajat[i]['username'] && salasana2 === kayttajat[i]['password'] && admin === kayttajat[i]['admin']){
            localStorage.setItem('username', kayttajanimi2)
            if (admin === true){
                location.replace("./loggedinadmin.html")
                break
            }else{
                location.replace("./loggedin.html")
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
    var labelAndVotes
    var label
    var voteNumDiv
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
    row.appendChild(theForm)
    document.body.appendChild(row)
    x++
    if(x == 4){
        x = 1
    }
    id++
}