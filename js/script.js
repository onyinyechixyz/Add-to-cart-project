const total = document.getElementById('totalPrice')

const plus1 = document.getElementById('plus-1')
const plus2 = document.getElementById('plus-2')
const plus3 = document.getElementById('plus-3')

const minus1 = document.getElementById('minus-1')
const minus2 = document.getElementById('minus-2')
const minus3 = document.getElementById('minus-3')

const quantity1 = document.getElementById('quantity-1')
const quantity2 = document.getElementById('quantity-2')
const quantity3 = document.getElementById('quantity-3')

const heart1 = document.getElementById('heart-1')
const heart2 = document.getElementById('heart-2')
const heart3 = document.getElementById('heart-3')

const unitPrice1 = document.getElementById('unit-price1')
const unitPrice2 = document.getElementById('unit-price2')
const unitPrice3 = document.getElementById('unit-price3')


function product1(){
    let n = 0
    let price = 100
    plus1.onclick = () =>{
       ++n
       quantity1.textContent = n
      
        let newPrice = n * price
        unitPrice1.textContent = `$${newPrice}`
    }

    minus1.onclick = () => {
      if(n > 0){
        --n
        quantity1.textContent = n

       let newPrice = price + (n -1) * price
        unitPrice1.textContent = `$${newPrice}`

      }
    }

    document.querySelector('.heart1').onclick = () =>{
        heart1.style.color = heart1.style.color === "red" ? "black":"red"
    }
}

product1()

function product2(){
    let n = 0
    let price = 20
    plus2.onclick = () =>{
       ++n
       quantity2.textContent = n

        let newPrice = n * price
        unitPrice2.textContent = `$${newPrice}`
    }

    minus2.onclick = () => {
      if(n > 0){
        --n
        quantity2.textContent = n

       let newPrice = price + (n -1) * price
        unitPrice2.textContent = `$${newPrice.toFixed(2)}`
        
      }
    }

    document.querySelector('.heart2').onclick = () =>{
        heart2.style.color = heart2.style.color === "red" ? "black":"red"
    }
}

product2()

function product3(){
    let n = 0
    let price = 50

    plus3.onclick = () =>{
       ++n
       quantity3.textContent = n

   let newPrice = n * price
        unitPrice3.textContent = `$${newPrice}`
    }

    minus3.onclick = () => {
      if(n > 0){
        --n
        quantity3.textContent = n

       let newPrice = price + (n-1) * price
        unitPrice3.textContent = newPrice
        
      }
    }

    document.querySelector('.heart3').onclick = () =>{
        heart3.style.color = heart3.style.color === "red" ? "black":"red"
    }
}

product3()
