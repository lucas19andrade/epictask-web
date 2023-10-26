function calcularEstatistica(){

const tarefa = JSON.parse (localStorage.getItem("tarefas")) || []

const pendentes = tarefa.filter(t => t.concluida == false )
const qtdePendente = pendentes.length
document.querySelector("#qtde-pendente").innerHTML = qtdePendente

const concluidas = tarefa.filter(t => t.concluida == true)
const qtdeConcluida = concluidas.length
document.querySelector("#qtde-concluida").innerHTML = qtdeConcluida

const totalPontos = tarefa.reduce((total, t ) => total += +t.pontos, 0)
document.querySelector("#total-pontos").innerHTML = totalPontos

const meusPontos = concluidas.reduce((total, t ) => total += +t.pontos, 0)
document.querySelector("#meus-pontos").innerHTML = meusPontos

}

calcularEstatistica()
