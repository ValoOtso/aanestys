let kayttajanimi
let salasana
let valid
const kayttajat = []
let kayttaja = {}

localStorage.setItem('users', JSON.stringify(kayttajat))

let valo = 'valo'
let pass = '1234'

let esimerkki = {username: valo, password: pass}
kayttajat.push(esimerkki)


function kirjaudu(){
    kayttajanimi = document.getElementById('username2').value
    salasana = document.getElementById('password2').value

}

function tallennaTiedot(){
    valid = true
    kayttajanimi = document.getElementById('username1').value
    salasana = document.getElementById('password1').value
    console.log(kayttajanimi)
    console.log(salasana)
    kayttaja = {username: kayttajanimi, password: salasana, admin: document.getElementById('admin1').checked}
    console.log(kayttaja)
    if(salasana.length === 0 || kayttajanimi.length === 0){
        valid = false
        alert('kirjoita salasana')
        return valid
    }
    for (let i = 0; i < kayttajat.length; i++){
        if (kayttajanimi === kayttajat[i]['username']){
            alert('käyttäjänimi varattu')
            valid = false
        }
        if(i+1 === kayttajat.length){
            console.log(kayttaja)
            kayttajat.push(kayttaja)
            valid = true
            return valid
        }
    }
    return valid
}

function poistaIlmoitus(){
    document.getElementById('kirjautumisilmoitus').style.display = 'none'
}

localStorage.setItem('users', JSON.stringify(kayttajat))

console.log({...localStorage})
console.log(kayttajat.length)

console.log(kayttajat[0]['username'])
