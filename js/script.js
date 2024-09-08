function gerarNumerosLotofacil() {
    const numeros = [];
    while (numeros.length < 15) {
        const numeroAleatorio = Math.floor(Math.random() * 25) + 1;
        // Verifica se o número já está no conjunto, se não, então adiciona.
        if (!numeros.includes(numeroAleatorio)) {
            numeros.push(numeroAleatorio);
        }
    }
    return numeros.sort((a, b) => a - b);
}

document.getElementById('gerar-btn').addEventListener('click', function() {
    const numeros = gerarNumerosLotofacil();
    const numerosDiv = document.getElementById('numeros');
    numerosDiv.innerHTML = '';
    numeros.forEach(function(numero) {
        const numeroSpan = document.createElement('span');
        numeroSpan.classList.add('numero');
        numeroSpan.textContent = numero;
        numerosDiv.appendChild(numeroSpan);
    });
});