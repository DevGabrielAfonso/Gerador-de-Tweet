const sujeitos = ["Usuários", "Vagabundos", "Amigos", "Jogadores", "Pessoas", "Políticos"]
const verbos = ["fazem", "compram", "gostam de", "bebem", "odeiam", "usam"]
const substantivos = ["coisas", "água", "comida", "cachorros", "crime", "banana", "bolo", "computador"]
const adjetivos = ["perfeitos", "loucos", "terríveis", "maníacos", "gostosos", "uma ameaça"]

function randomizar(){
    let frase = "";
    frase += sujeitos[Math.floor(Math.random()*sujeitos.length)];
    frase += " que "
    frase += verbos[Math.floor(Math.random()*verbos.length)];
    frase += " "
    frase += substantivos[Math.floor(Math.random()*substantivos.length)];
    frase += " são "
    frase += adjetivos[Math.floor(Math.random()*adjetivos.length)];
    document.getElementsByClassName("tweetarea")[0].value = frase;
}