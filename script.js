
var botaoEnviar = document.querySelector("#enviar");

botaoEnviar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#formulario");

    var nome = form.nome.value;
    var pedido = form.pedido.value;
    var opniao  = form.opniao.value;
    var satisfacao = form.satisfacao.value;

    var depoimentos = document.querySelector("#depoimentos");

    var exemploDiv = document.createElement("div");

    document.getElementById("depoimentos").appendChild(exemploDiv);
     
    var nomeH3 = document.createElement("h3");
    var pedidoH4 = document.createElement("h4");
    var opniaoHp = document.createElement("p");
    var satisfacaoH5 = document.createElement("h5");

    nomeH3.innerText = nome;
    pedidoH4.textContent = pedido;
    opniaoHp.textContent = opniao;
    satisfacaoH5.textContent = satisfacao;

    exemploDiv.appendChild(nomeH3);
    exemploDiv.appendChild(pedidoH4);
    exemploDiv.appendChild(opniaoHp);
    exemploDiv.appendChild(satisfacaoH5);

});