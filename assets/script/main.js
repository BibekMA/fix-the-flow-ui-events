
/* button 1 */
let frontend = document.querySelector('a:nth-of-type(1)')

frontend.addEventListener('click', function(){
  frontend.classList.toggle('btn1')
})


let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('dblclick', function(){
  design.classList.toggle('btn2')
})


let and = document.querySelector('a:nth-of-type(3)')

and.addEventListener('mouseover', function (){
  and.classList.toggle('btn3')
})

let development = document.querySelector('a:nth-of-type(4)')

development.addEventListener('mouseleave', function (){
  development.classList.toggle('btn4')
})

let sprint = document.querySelector('a:nth-of-type(5)')

document.addEventListener('keydown', key1)

function key1(event){
  if (event.key === "1") {
    sprint.classList.toggle("btn5")
  }
}

let fix = document.querySelector('a:nth-of-type(6)')

document.addEventListener('keyup', key2)

function key2(event){
  if (event.key === "2") {
    fix.classList.toggle('btn6')
  }
}


