let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let car1 = document.querySelector(".c1")
let car2 = document.querySelector(".c2")
let road = document.querySelector(".road")
let score = 10
let bet = 0
let stopCars = false

let margin
let choise


// function carMove1() {
//   margin = 0
//   setInterval(() => {
//     speed = Math.random()
//     margin = margin + speed
//     car1.style.marginLeft = margin + '%'
//   }, 100)
// }

// function carMove2() {
//   margin = 0
//   setInterval(() => {
//     speed = Math.random()
//     margin = margin + speed
//     car2.style.marginLeft = margin + '%'
//   }, 100)
// }

// document.querySelector('.cars').onclick = function() {
//   return carMove1(), carMove2()
// }

// function winerCheck() {
//   if (car1.margin >= 100 + '%'){
//     winner = car1
//   } else if (car2.margin >= 100 + '%'){
//     winner = car2
//   }
// }

// function carChoise() {
//   car = document.querySelector('.car')
//   choise = event.target
//   choise.addEventListener('click', car)

// }

// function scoreCount() {
//   if (choise === winner) {
//     alert ("Ставка сыграла! \n Твой выйгрыш составил: " + bet)
//     score = score + bet
//   } else {
//     alert ("Ты проиграл!")
//     if (score > bet){
//     score = score - bet
//     } else {
//       score = 0
//     }
//   }
// }
let winner = (c) => {
  if (bet <= 0 || score <= 0) {
    alert ("Твоя ставка не может быть пустой")
  } else {
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
  margin = 0
  let interval = setInterval(() => {
    speed = Math.random()
    margin = margin + speed
    car.style.marginLeft = margin + '%'
  

    if( margin >= 100 ) {
      if (choise == c){
        score = score + (bet*2)
        document.querySelector('.score').innerHTML = score
      } else if(choise != c){
        score = score 
        document.querySelector('.score').innerHTML = score
      }
      clearInterval(interval)
      
  }

  }, 10)
}



