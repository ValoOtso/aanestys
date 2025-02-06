let kayttajanimi
let salasana
let valid
let kayttaja = {}



function kirjaudu(){
    kayttajanimi = document.getElementById('username2').value
    salasana = document.getElementById('password2').value

}



function tallennaTiedot(){
    let kayttajat;
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
            }
        }
    }
}

function poistaIlmoitus(){
    document.getElementById('kirjautumisilmoitus').style.display = 'none'
}
