/// завдання

let q1 = document.querySelector('.quest1')
let q2 = document.querySelector('.quest2')
let q3 = document.querySelector('.quest3')
let q4 = document.querySelector('.quest4')
let q5 = document.querySelector('.quest5')
let q6 = document.querySelector('.quest6')


/// вірні і не вірні завдання

let t1 = document.getElementById('true1')
let t2 = document.getElementById('true2')
let t3 = document.getElementById('true3')
let t4 = document.getElementById('true4')
let t5 = document.getElementById('true5')


let f = document.querySelectorAll('#fulse')
//// перехід з рівня на рівень
t1.onclick = function(){
    q1.style.display = 'none'
    q2.style.display = 'block'
}

t2.onclick = function(){
    q2.style.display = 'none'
    q3.style.display = 'block'
}

t3.onclick = function(){
    q3.style.display = 'none'
    q4.style.display = 'block'
}

t4.onclick = function(){
    q4.style.display = 'none'
    q5.style.display = 'block'
}

t5.onclick = function(){
    q5.style.display = 'none'
    q6.style.display = 'block'
}
//// виведеня помилки
f.forEach(button => {
    button.addEventListener('click', () => {
      alert('Помилка! Повторіть спробу')
    });
  });