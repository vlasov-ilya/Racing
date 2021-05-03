let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let car1 = document.querySelector(".c1")
let car2 = document.querySelector(".c2")
let road = document.querySelector(".road")
let score = 0
let bet = 0
let margin
let winner
let choise


function carMove1() {
  margin = 0
  setInterval(() => {
    speed = Math.random()
    margin = margin + speed
    car1.style.marginLeft = margin + '%'
  }, 100)
}
function carMove2() {
  margin = 0
  setInterval(() => {
    speed = Math.random()
    margin = margin + speed
    car2.style.marginLeft = margin + '%'
  }, 100)
}

document.querySelector('.cars').onclick = function() {
  return carMove1(), carMove2()
}

function winerCheck() {
  if (car1.margin >= 100 + '%'){
    winner = car1
  } else if (car2.margin >= 100 + '%'){
    winner = car2
  }
}

function betChangePlus() {
  if (score == 0){
    bet = 1 
  } else {
    bet++
  }

  document.querySelector('.bet').innerHTML = 'Твоя ставка: ' + bet
}

function betChangeMinus() {
if(bet > 0){
  bet--
} else (
  alert ("ставка не может быть меньше 0")
)
  document.querySelector('.bet').innerHTML = 'Твоя ставка: ' + bet
}

plus.onclick = function() {
  return betChangePlus()
}
minus.onclick = function() {
  return betChangeMinus()
}

// function carChoise() {
//   car = document.querySelector('.car')
//   choise = event.target
//   choise.addEventListener('click', car)

// }

function scoreCount() {
  if (choise === winner) {
    alert ("Ставка сыграла! \n Твой выйгрыш составил: " + bet)
    score = score + bet
  } else {
    alert ("Ты проиграл!")
    if (score > bet){
    score = score - bet
    } else {
      score = 0
    }
  }
}


document.querySelector('.score').innerHTML = 'Твой счет: ' + score



