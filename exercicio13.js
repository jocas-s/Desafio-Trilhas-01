function calcularArea(raio) {
  return Math.PI * (raio * raio)
}

let raio = prompt ("Digite o raio do Circulo:")
let area = calcularArea(raio)
alert (`A área do circulo é: ${area}.`)