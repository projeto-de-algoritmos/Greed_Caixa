function onlynumber(evt) {
    
    var evento = evt || window.event;
    var key = evento.keyCode || evento.which;
    key = String.fromCharCode( key );
    var regex = /^[0-9.]+$/;
    if( !regex.test(key) ) {
       evento.returnValue = false;
       if(evento.preventDefault) evento.preventDefault();
    }
 }
var total = 0
function addvalue(){
    var add = document.getElementById("add").value
    if(add === ""){
        alert("Entre com um número válido!")
    }
    else {
        add = parseFloat(add)
        var topic = document.createElement("li")
        var topicvalue = document.createTextNode("R$ "+ add.toFixed(2))
        topic.appendChild(topicvalue)
        document.getElementById("values").appendChild(topic)

        total+=  parseFloat(add)
        document.getElementById("total").innerHTML = "Total: R$ " + total.toFixed(2)
    }

    document.getElementById("add").value = ""
}
function pay(){
    var payment = document.getElementById("payment").value

    if(payment === "" || total == 0){
        alert("Entre com um número válido!")
    }
    else if(parseFloat(payment) < total){
        alert("Pagamento insuficiente")
    }
    else {
        document.getElementById("firstbt").disabled = true
        var value = document.createElement("p")
        var topicvalue = document.createTextNode("Troco: R$ " + (payment - total))
        value.appendChild(topicvalue)
        troco = (payment - total).toFixed(2)
        document.getElementById("finalValue").innerHTML = "Troco: R$ " + troco

        cal_change(troco)
    }
    document.getElementById("payment").value = ""
}

function cal_change(total){
    notas = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.10, 0.05, 0.01]
    let troco = {}
    let i
    for(i = 0; i<notas.length; i++){
        troco[notas[i]] = 0
        while(total >= notas[i]){
            total -= notas[i]
            troco[notas[i]]++
        }
        if(troco[notas[i]] == 0){
            delete troco[notas[i]]
        }
    }
    if(Object.values(troco).length !== 0){
        tabelaNota(troco)
    }
}

function tabelaNota(qtdeNotas){
    var tabela = document.getElementById("tabelaTroco")
    document.getElementById("contTabela").style.display = "block"
    for(nota in qtdeNotas){
        console.log(qtdeNotas[nota] + ":" + nota + "\n")
    }
    for(nota in qtdeNotas){
        var linha = tabela.insertRow()

        var cel1 = linha.insertCell()
        var cel2 = linha.insertCell()

        cel1.innerHTML = nota
        cel2.innerHTML = qtdeNotas[nota]
    }
    
}

