const sujeitos = ["Usuários", "Vagabundos", "Amigos", "Jogadores", "Pessoas", "Políticos"]
const verbos = ["fazem", "compram", "gostam de", "bebem", "odeiam", "usam"]
const substantivos = ["coisas", "água", "comida", "cachorros", "crime", "banana", "bolo", "computador"]
const adjetivos = ["perfeitos", "loucos", "terríveis", "maníacos", "gostosos", "uma ameaça"]
const label = document.getElementsByClassName("label");

function randomizar(){
    //frase
    var frase = "";
    frase += sujeitos[Math.floor(Math.random()*sujeitos.length)] + " que ";
    frase += verbos[Math.floor(Math.random()*verbos.length)] + " ";
    frase += substantivos[Math.floor(Math.random()*substantivos.length)] + " são ";
    frase += adjetivos[Math.floor(Math.random()*adjetivos.length)];
    document.getElementsByClassName("tweetarea")[0].value = frase;
    
    //hora
    let time = new Date();
    let hora = adicionarZero(time.getHours());
    let minutos = adicionarZero(time.getMinutes());
    let dia = adicionarZero(time.getDate());
    let mes = adicionarZero(time.getMonth()+1);
    let ano = time.getFullYear();
    
    document.getElementById("time").innerHTML = `${hora}:${minutos} ${dia}/${mes}/${ano}`
}

function tweetar(){
    const frase = document.getElementsByClassName("tweetarea")[0].value;
    const fraseParaUrl = encodeURIComponent(frase)
    if (fraseParaUrl.length == 0){return 0}
    const url = "https://x.com/intent/post?text="+ encodeURIComponent(frase);
    window.open(url, "_blank");
}

function adicionarZero(n){
    return n < 10 ? "0" + n : n
}

function adicionarContador(n){
    label[n].textContent = Number(label[n].textContent) + 1;
}