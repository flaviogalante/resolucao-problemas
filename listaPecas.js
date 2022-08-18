const listaDePecas = ['Lanterna', 'Roda', 'Po']

console.log("-----------------------------")
console.log("Início do processamento")
console.log("-----------------------------")

let pesoPeca = 100
if (pesoPeca > 100) {console.log("Peso permitido. Cadastro de peça aprovado")}
else {console.log("Cadastro não permitido")}

console.log("-----------------------------")
console.log("Fim do processamento")
console.log("-----------------------------")
console.log("Início do processamento")
console.log("-----------------------------")

let qtDePeca = 10
if (qtDePeca > 10) {console.log("Ultrapassou o limite da caixa")}
else {console.log("Caixa liberada")}

console.log("-----------------------------")
console.log("Fim do processamento")
console.log("-----------------------------")
console.log("Início do processamento")
console.log("-----------------------------")

for (let index = 0; index < listaDePecas.length; index++) {
    const nomePeca = listaDePecas[index];
//let nomePeca = listaDePecas[0]
if (nomePeca.length < 3) {console.log("Erro no processamento")}
else {console.log("Nome permitido")}
}

console.log("-----------------------------")
console.log("Fim do processamento")
console.log("-----------------------------")