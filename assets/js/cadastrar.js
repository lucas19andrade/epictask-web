document.querySelector("#botao-cadastrar").addEventListener("click",function () { 

    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

    console.log(tarefas)

    const tarefa = {
       id: Date.now(),
        nome: document.querySelector("#nome").value,
        pontos:document.querySelector("#idade").value,
        descricao:document.querySelector("#descricao").value,
        concluida: false
    }

    tarefas.push(tarefa)

  localStorage.setItem("tarefas", JSON.stringify(tarefas))

  window.location.href = "index.html"
  calcularEstatistica()
   
})
