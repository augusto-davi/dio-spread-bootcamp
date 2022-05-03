const pessoa1 = {nome: "Ataide", idade: 20};

const pessoa2 = {nome: "Basilia", idade: 30};

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(pessoa2, 5));
console.log(calculaIdade.apply(pessoa1, [5]));