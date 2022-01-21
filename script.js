let objInserido = []
var numInserido = document.getElementById('numeroInserido')
var res = document.getElementById('res')

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else{
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false
    }
}


function adicionar() {
      if (isNumero(numInserido.value) && !inLista(numInserido.value, objInserido)) {
        let tab = document.getElementById('numAdicionado')
        let objItem = document.createElement('option')
        objInserido.push(Number(numInserido.value))
        tab.appendChild(objItem)
        objItem.text = `O valor inserido foi: ${numInserido.value}`
        objInserido.sort()
    }else {
        window.alert('Valor inválido ou já adicionado')
    }
    res.innerHTML = ''
    numInserido.value = ''
    numInserido.focus()

}
function finalizar() {
    if(objInserido.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
    let tot = objInserido.length
    let maior = objInserido[0]
    let menor = objInserido[0]
    let soma = 0
    let media = 0
    for(let pos in objInserido) {
        soma += objInserido[pos]
        if(objInserido[pos] > maior)
            maior = objInserido[pos]

            if (objInserido[pos] < menor)
            menor = objInserido[pos]
    }
    media = soma / tot
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado é ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado é ${menor}</p>`
    res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
    res.innerHTML += `<p>A média dos valores é ${media}</p>`
}
}