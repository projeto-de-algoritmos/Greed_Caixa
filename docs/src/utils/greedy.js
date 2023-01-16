function pay(payment, total) {
    if (total === 0) {
        alert("Carrinho vazio!")
    }
    else if (payment < total) {
        alert("Pagamento insuficiente")
    }
    else if(payment===0){
        alert("Entre com um número valido")
    }
    else {
        const troco = (payment - total).toFixed(2)

        return troco;
    }
}

function cal_change(total) {
    const notas = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.10, 0.05, 0.01];

    let trocos = [];
    
    for (let i = 0; i < notas.length; i++) {
        let troco = {
            nota: 0,
            qtd: 0
        };
        
        while (total >= notas[i]) {
            total -= notas[i]
            troco.qtd++
        }
        troco.nota = notas[i];
        if(troco.qtd !== 0){
            trocos.push(troco);
        }
        
    }
    return trocos;
}

function randomPrice(min, max) {
    return Math.random() * (max - min) + min;
}

module.exports = { pay, cal_change, randomPrice }