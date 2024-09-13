
function gerarNumerosLotofacil() {
    const numeros = [];
    while (numeros.length < 15) {
        const numeroAleatorio = Math.floor(Math.random() * 25) + 1;
        // Verifica se o número já está no conjunto, senão, então adiciona.
        if (!numeros.includes(numeroAleatorio)) {
            numeros.push(numeroAleatorio);
        }
    }
    return numeros.sort((a, b) => a - b);
}

document.getElementById('gerar-btn').addEventListener('click', function() {
    const numeros = gerarNumerosLotofacil();
    const numerosDiv = document.querySelector('.numeros');
    numerosDiv.innerHTML = '';
    numeros.forEach(numero => {
        const numeroSpan = document.createElement('span');
        numeroSpan.className = 'numero'
        numeroSpan.textContent = numero;
        numerosDiv.appendChild(numeroSpan);
    });
});