const sujeitos = ["Usuários", "Vagabundos", "Amigos", "Jogadores", "Pessoas", "Políticos"]
const verbos = ["fazem", "compram", "gostam de", "bebem", "odeiam", "usam"]
const substantivos = ["coisas", "água", "comida", "cachorros", "crime", "banana", "bolo", "computador"]
const adjetivos = ["perfeitos", "loucos", "terríveis", "maníacos", "gostosos", "uma ameaça"]
const comentarioCount = document.getElementsByClassName("label_comentario");
const rtCount = document.getElementsByClassName("label_rt");
const likeCount = document.getElementsByClassName("label_like")[0];

function randomizar(){
    //frase
    let frase = "";
    frase += sujeitos[Math.floor(Math.random()*sujeitos.length)] + " que ";
    frase += verbos[Math.floor(Math.random()*verbos.length)] + " ";
    frase += substantivos[Math.floor(Math.random()*substantivos.length)] + " são ";
    frase += adjetivos[Math.floor(Math.random()*adjetivos.length)];
    document.getElementsByClassName("tweetarea")[0].value = frase;
    document.getElementById("tweetar").href = "https://x.com/intent/post?text="+ frase

    //hora
    let time = new Date();
    let hora = adicionarZero(time.getHours());
    let minutos = adicionarZero(time.getMinutes());
    let dia = adicionarZero(time.getDate());
    let mes = adicionarZero(time.getMonth()+1);
    let ano = time.getFullYear();

    document.getElementById("time").innerHTML = `${hora}:${minutos} ${dia}/${mes}/${ano}`
}

function adicionarZero(n){
    return n < 10 ? "0" + n : n
}

function comentario(){
    comentarioCount.innerText = Number(comentarioCount.textContent) + 1;
}