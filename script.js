let kayttajanimi
let salasana
let valid = true
const kayttajanimet = []
const salasanat = []


function kirjaudu(){
    kayttajanimi = document.getElementById('username2').value
    salasana = document.getElementById('password2').value
    if(kayttajanimet.indexOf(kayttajanimi) == -1){
        document.getElementById('login').addEventListener('submit', function(event){
            event.preventDefault()
        })
    }else if(kayttajanimet.indexOf(kayttajanimi) != salasanat.indexOf(salasana)){
        document.getElementById('login').addEventListener('submit', function(event){
            event.preventDefault()
        })
    }else{
        //kirjautuminen onnistuu ja siitä tulee viesti sekä kirjautumisikkuna katoaa
        document.getElementById('kirjautumisilmoitus').innerHTML = 'Kirjautuminen onnistui!'
        setTimeout(poistaIlmoitus, 10000)
    }

}

function tallennaTiedot(){
    kayttajanimi = document.getElementById('username1').value
    salasana = document.getElementById('password1').value
    if(kayttajanimet.indexOf(kayttajanimi) != -1 || kayttajanimi.length == 0){
        document.getElementById('signup').addEventListener('submit', function(event){
            event.preventDefault()
        })
        document.getElementById('error-signup').innerHTML = 'Käyttäjänimi on jo olemassa!'
    }else{
        kayttajanimet.push(kayttajanimi)
        salasanat.push(salasana)
        document.getElementById('kirjautumisilmoitus').innerHTML = 'Rekisteröityminen onnistui!'
        setTimeout(poistaIlmoitus, 10000)
    }
    
}

function poistaIlmoitus(){
    document.getElementById('kirjautumisilmoitus').style.display = 'none'
}