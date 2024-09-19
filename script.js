document.getElementById("loveButton").addEventListener("click", function() {
    const message = "Te amo meu bem, você é linda, perfeita e maravilhosa, meus dias com você são os melhores, " +
                    "seu sorriso me encanta e seu beijo me enche de amor (e tesão), seu cheiro me alegra e sua voz me acalma, " +
                    "obrigado por estar na minha vida, você é meu mundo. Com amor, Rhaiky Lorran El Romântico.";
    
    const messageElement = document.getElementById("message");
    messageElement.innerText = message;
    messageElement.style.display = "block";
});
