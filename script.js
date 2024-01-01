window.addEventListener('DOMContentLoaded', init)

let globalVariables = {
    leverage: 1 // default leverage
}

function init() {
    const input = document.getElementById('entry')
    const leverage = document.getElementById('leverage')

    input.addEventListener('keyup', calculationHandler)
    leverage.addEventListener('change', leverageHandler)
}

function leverageHandler(e) {
    let val = e.target.value

    document.querySelector('.leverage').textContent = val
    return globalVariables.leverage = val
}

function calculationHandler(e) {
    let val = e.target.value

    // console.log(longLP(val, globalVariables.leverage))
    const LiquidationPriceDisplay = document.querySelector('.liquidation-price')
    LiquidationPriceDisplay.textContent = longLP(val, globalVariables.leverage)
}

/** @description: Liquidation Price (Long/Buys) */
function longLP(entryPrice, leverage = 1) {
    return entryPrice * (1 - (1 / leverage) + leverage)
}

/** @description: Liquidation Price (Long/Buys) */
// function shortLP(EntryPrice, ) {

// }