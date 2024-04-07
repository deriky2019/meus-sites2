let numero  = Number (document.getElementById("numero").value)

let numeroh= Math.floor(Math.random() * 10) + 1; // Gera um número aleatório de 1 a 10

var numeroSorteado = document.getElementById('resultado');


function verificar() {
      if (numero === numeroh) {
        numeroSorteado.innerHTML = 'Parabéns! Você acertou!';
    } else {
        numeroSorteado.innerHTML = 'Que pena! Você errou. O número correto era ' + randomNumber + '.';
    }
}
