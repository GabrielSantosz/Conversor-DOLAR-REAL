let dolar = 6.07

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl")
})

brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd")
})

usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value)
})

brlInput.addEventListener("blur", () => {
    brlInput.value = formatCurrency(brlInput.value)
})

usdInput.value = "0"
convert("usd-to-brl")


//Funções

function formatCurrency(value) {
    let fixedValue = fixValue(value)
    let options = {
        usegrouping: false,
        minimumFractionDigits: 2
    }

    let formatter = new Intl.NumberFormat("pt-BR", options)
    return formatter.format(fixedValue)

}

function fixValue(value) {
    let fixedValue = value.replace(",", ".")
    let floatValue = parseFloat(fixedValue)
    if (floatValue == NaN) {
        floatValue = 0
    }
    return floatValue
}

function convert(type) {
    if (type == "usd-to-brl") {
        let fixedValue = fixValue(usdInput.value)// ajustar o valor
        let result = fixedValue * dolar//converte o valor
        result = result.toFixed(2)

        brlInput.value = formatCurrency(result)  // mostra no campo de real
    }



    if (type == "brl-to-usd") {
        let fixedValue = fixValue(brlInput.value) // ajustar o valor

        let result = fixedValue / dolar
        result = result.toFixed(2)  //converte o valor

        usdInput.value = formatCurrency(result) // mostra no campo de dolar
    }

}
