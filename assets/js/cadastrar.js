document.querySelector("#botao-cadastrar").addEventListener("click",function () { 

    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

    console.log(tarefas)

    const tarefa = {
       id: Date.now(),
        nome: document.querySelector("#nome").value,
        idade:document.querySelector("#idade").value,
        descricao:document.querySelector("#descricao").value,
        concluida: true
    }

    tarefas.push(tarefa)

  localStorage.setItem("tarefas", JSON.stringify(tarefas))

  window.location.href = "index.html"
   
})
