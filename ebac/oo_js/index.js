function Veiculo(modelo, marca, versao, ano) {
    this.modelo = modelo;
    this.marca = marca;
    this.versao = versao;
    this.ano = ano;
}

function Carro(modelo, marca, versao, ano) {
    Veiculo.call(this, modelo, marca, versao, ano);
}

function Moto(modelo, marca, versao, ano) {
    Veiculo.call(this, modelo, marca, versao, ano);
}

const Carro1 = new Carro('Kwid', 'Renault', 'Zen', 2018);
console.log(Carro1);

const XT_660 = new Moto('XT 660', 'Yamaha', 'R', 2023);
console.log(XT_660);
