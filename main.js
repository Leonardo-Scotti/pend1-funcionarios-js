'use strict'

import employees from './employees.json' with { type: 'json' }

function showDatas(employee) {
    const cards = document.getElementById('cards')
    const div = document.createElement('div')
    const img = document.createElement('img')
    const p = document.createElement('p')
    const span = document.createElement('span')
    const pathImage = `../assets/img/${employee.imagem}`

    img.src = pathImage
    p.textContent = employee.nome
    span.textContent = employee.cargo

    div.appendChild(img)
    div.appendChild(p)
    div.appendChild(span)

    cards.appendChild(div)
    
    console.log(employee.nome)
}

employees.forEach(showDatas)