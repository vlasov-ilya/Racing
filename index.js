let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let car1 = document.querySelector(".c1")
let car2 = document.querySelector(".c2")
let road = document.querySelector(".road")
let score = 0
let bet = 0
let margin


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



function betChange() {
  if (plus){
    bet = bet + 1 
  }else if(minus  && bet > 0){
    bet = bet - 1
  } else (
    alert ("ставка не может быть меньше 0")
  )
  document.querySelector('.bet').innerHTML = 'Твоя ставка: ' + bet
}

document.querySelector('.score').innerHTML = 'Твой счет: ' + score

document.querySelector('.cars').onclick = function() {
  return carMove1(), carMove2()}

document.querySelector('button').onclick = function() {
  return betChange()
}