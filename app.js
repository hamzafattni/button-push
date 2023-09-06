const div = document.querySelector('div')
const pera = document.querySelector("p")
const body = document.querySelector('body')

list = ['Apple' , 'Grapes' , 'Kiwi' , 'Banana' , 'Orange' , 'Watermelon' , 'Melon' , 'Mango' , 'Peach' , 'Cherry' , 'Balackberry' ]

for (let i = 0; i < list.length; i++) {
pera.innerHTML +=`<button onclick ="ListChng(${i})">${list[i]}</button>`   
}


function ListChng(i) {
    pera.innerHTML += `, ${list[i]}`
}

