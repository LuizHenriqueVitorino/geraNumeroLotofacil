
function gerarNumerosLotofacil() {
    const numeros = [];
    while (numeros.length < 15) {
        const numeroAleatorio = Math.floor(Math.random() * 25) + 1;
        if (!numeros.includes(numeroAleatorio)) {
            numeros.push(numeroAleatorio);
        }
    }
    return numeros.sort((a, b) => a - b);
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    try {
        document.getElementById('gerar-btn').addEventListener('click', function() {
            const numeros = gerarNumerosLotofacil();
            const numerosDiv = document.querySelector('.numeros');
            const historicoDiv = document.querySelector('.historico');

            if (numerosDiv.firstChild) {
                const historicoLine = document.createElement('div');
                historicoLine.textContent = Array.from(numerosDiv.firstChild.children).map(el => el.textContent).join(', ');
                historicoDiv.insertBefore(historicoLine, historicoDiv.firstChild);
            }

            numerosDiv.innerHTML = '';
            const lineDiv = document.createElement('div');
            numeros.forEach(numero => {
                const numeroSpan = document.createElement('span');
                numeroSpan.className = 'numero';
                numeroSpan.textContent = numero;
                lineDiv.appendChild(numeroSpan);
            });
            numerosDiv.appendChild(lineDiv);
        });

        document.getElementById('limpar-btn').addEventListener('click', function() {
            const numerosDiv = document.querySelector('.numeros');
            const historicoDiv = document.querySelector('.historico');
            numerosDiv.innerHTML = '';
            historicoDiv.innerHTML = '';
        });
    } catch (e) {
        console.log(e);
    }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = { gerarNumerosLotofacil };
}