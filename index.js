let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let car1 = document.querySelector(".c1")
let car2 = document.querySelector(".c2")
let road = document.querySelector(".road")
let score = 10
let bet = 0
let stopCars = false
let choise

let winner = (c) => {
  if (bet <= 0 || score <= 0) {
    alert ("Твоя ставка не может быть пустой")
  } else {
    stopCars = false
    speedCar(car1, 'c1')
    speedCar(car2, 'c2')
    choise = c
    score = score - bet
    document.querySelector('.score').innerHTML = score
  }
}

function betChangePlus() {
  if (score == 0 || score <= bet){
    plus.disabled = true
  } else {
    bet++
    minus.disabled = false
  }

  document.querySelector('.bet').innerHTML = 'Твоя ставка: ' + bet
}

function betChangeMinus() {
if(bet > 0){
  bet--
  plus.disabled = false
} else {
  minus.disabled = true
}
  document.querySelector('.bet').innerHTML = 'Твоя ставка: ' + bet
}

plus.onclick = function() {
  return betChangePlus()
}
minus.onclick = function() {
  return betChangeMinus()
}

let speedCar = (car, c) => {
  let margin = 0
  let interval = setInterval(() => {
    let speed = Math.random()*0.1
    margin = margin + speed
    car.style.marginLeft = margin + '%'
  
    if( margin >= 100 ) {
      stopCars = true
      if (choise == c){
        score = score + (bet*2)
        document.querySelector('.score').innerHTML = score
        alert('You won ' + (bet*2))
      } else {
        score = score 
        document.querySelector('.score').innerHTML = score
        alert('You lost')
      }    
    }
    if(stopCars == true){
      clearInterval(interval)
    }
  }, 2)
}



