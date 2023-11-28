function calcularSomatorio() {
    const numeroInput = document.getElementById('numero');
    const resultadoDiv = document.getElementById('resultado');
    const numerosDivisiveisDiv = document.getElementById('numerosDivisiveis');

    const numero = parseInt(numeroInput.value);
    if (isNaN(numero) || numero < 0) {
        resultadoDiv.innerHTML = 'Digite um número válido.';
        return;
    }

    const { somatorio, numerosDivisiveis } = somatorioDivisiveis(numero);

    resultadoDiv.innerHTML = `A somatório de ${numero} é: ${somatorio}`;

    if (numerosDivisiveis.length > 0) {
        numerosDivisiveisDiv.innerHTML = `Números que foram somados: ${numerosDivisiveis.join(', ')}`;
    } else {
        numerosDivisiveisDiv.innerHTML = 'Não há números divisíveis.';
    }
}

function somatorioDivisiveis(numero) {
    let somatorio = 0;
    const numerosDivisiveis = [];

    for (let i = 1; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            somatorio += i;
            numerosDivisiveis.push(i);
        }
    }

    return { somatorio, numerosDivisiveis };
}
