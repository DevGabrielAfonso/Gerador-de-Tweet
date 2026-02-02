function randomizar(){
    let text = document.getElementsByClassName("tweetarea")[0].value;
    let finalText = text.trim().split(/\s+/);  
    for (let i = finalText.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [finalText[i], finalText[j]] = [finalText[j], finalText[i]];
    }
    document.getElementsByClassName("tweetarea")[0].value = finalText.join(' ');
}