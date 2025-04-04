let rodada = 1;

function logMessage(message) {
    let consoleDiv = document.getElementById("consoleOutput");
    consoleDiv.innerHTML += `<p>> ${message}</p>`;
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

function jogar(escolhaJogador) {
    if (rodada > 3) {
        logMessage("Jogo já foi concluído. Recarregue a página para tentar novamente.");
        return;
    }
    
    let pisoQuebrado = Math.floor(Math.random() * 3) + 1;
    logMessage(`Rodada ${rodada}: Você escolheu a Ponte ${escolhaJogador}`);
    
    if (escolhaJogador === pisoQuebrado) {
        logMessage("ALERTA! O vidro quebrou! Você foi detectado!");
        alert("Você perdeu! Seu hacker foi descoberto.");
        rodada = 4;
    } else {
        logMessage("SUCESSO! Você passou! O vidro quebrado estava na ponte " + pisoQuebrado);
        rodada++;
        if (rodada > 3) {
            logMessage("VOCÊ VENCEU! Hack concluído com sucesso!");
            alert("Parabéns, você venceu o desafio hacker!");
        }
    }
}
