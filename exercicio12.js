let numero = 0
alert ("Esses são os números pares entre 0 e 20:")
while (numero <= 20) {
  if (numero% 2 === 0) {
    alert (`${numero}`)
    numero++
  }
  numero++
}