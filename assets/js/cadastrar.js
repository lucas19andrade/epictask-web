document.querySelector("#botao-cadastrar").addEventListener("click", () => { 

    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

    console.log(tarefas)

    const tarefa = {
        nome: document.querySelector("#nome").value,
        pontos:document.querySelector("#pontos").value,
        descricao:document.querySelector("#descricao").value
    }

    tarefas.push(tarefa)

  localStorage.setItem("tarefas", JSON.stringify(tarefas))

  window.location.href = "index.html"
   
})