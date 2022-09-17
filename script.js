let cadeiaNumerica = []

function adicionaNumbers() {
    let inputNumber = document.getElementById('input-number')
    let number = inputNumber.value
    let alerta = document.getElementById('alerta')
    if(!number){
        alerta.style.display = 'inline-block'
    }else{
        alerta.style.display = 'none'
        let campoRes = document.getElementById('res')
        let elementoCriado = document.createElement('p')
        elementoCriado.setAttribute('id',`elementoLista-${number}`)
        campoRes.appendChild(elementoCriado)
        elementoCriado.innerText = number
        agrupandoNumbers(number)
        inputNumber.value = ''
        inputNumber.focus()
    }
    
}

function agrupandoNumbers(x){
    cadeiaNumerica.push(x)
}

function AnalisaNumbers(){
    let numbers = cadeiaNumerica
    let quantNumbers = numbers.length
    let maior = Math.max.apply(null, numbers)
    let menor = Math.min.apply(null, numbers)
    let soma = 0
    for(i = 0; i < numbers.length; i++) {
        soma = soma + Number(numbers[i])
    }
    let media = soma / quantNumbers

    let campoQuantNumbers = document.getElementById('quant-num')
    let campoMaiorNumber = document.getElementById('maior-num')
    let campoMenorNumber = document.getElementById('menor-num')
    let campoSomaNumbers = document.getElementById('soma-num')
    let campoMediaNumbers = document.getElementById('media-num')

    campoQuantNumbers.innerHTML = `Quantidade de números cadastrados é <strong>${quantNumbers}</strong>`
    campoMaiorNumber.innerHTML = `Maior valor informado é <strong>${maior}</strong>`
    campoMenorNumber.innerHTML = `Menor valor informado é <strong>${menor}</strong>`
    campoSomaNumbers.innerHTML = `A soma de todos os valores é <strong>${soma}</strong>`
    campoMediaNumbers.innerHTML = `a média dos valores informados é <strong>${media}</strong>`
    abrePopUp()
}

let buttonFecharPop = document.getElementById('fecha-pop-up')
let backgroundPopUp = document.querySelector('.pop-up-scren')

function fecharPopUp() {
    backgroundPopUp.style.visibility = 'hidden'
}

function abrePopUp() {
    backgroundPopUp.style.visibility = 'visible'
}

buttonFecharPop.addEventListener('click', fecharPopUp) 