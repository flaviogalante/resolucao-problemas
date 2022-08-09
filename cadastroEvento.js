const today = new Date();
dataEvento = new Date("2022-08-10")
console.log("----------")
console.log("Insira a data do evento no formato ano-mês-dia")
if(dataEvento > today) {console.log("Cadastro permitido")}
else {console.log("Cadastro não permitido")}
console.log("----------")

let idade = 18
console.log("Insira a sua idade.")
if(idade>=18) {console.log("Cadastro permitido")}
else {console.log("Cadastro não permitido para menores de idade")}
console.log("----------")

let participantesEvento = 100
console.log("Verificando número de participantes no evento")
if(participantesEvento >= 100) {console.log("Cadastro não permitido. Limite de pessoas atingidos.")}
else {console.log("Cadastro realizado com sucesso")}
console.log("----------")




