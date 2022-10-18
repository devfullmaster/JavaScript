/* Crie uma classe para representar carros.
 Os carros possuem uma marca, uma cor e um gasto médio de combustivel por Kilômetro rodado.
 Crie um método que dado a quantidade de quilómetros e O preço do combustivel nos dē O valor
 gasto em reais para realizar este percurso.

 */

class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }

  calcularGastoPercurso(distanciaEmKm, precoCombustivel) {
    return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
  }

}

const veraCruz = new Carro('Hundai', 'Prata', 1 / 9);
const palio = new Carro('Fiat', 'Preto', 1 / 12);

console.log(veraCruz.calcularGastoPercurso(70, 5));
console.log(palio.calcularGastoPercurso(70, 5));




console.log(palio);
