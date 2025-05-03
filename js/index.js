// анімація при запуску сайту

anime({
    targets: 'body', 
    scale: [0, 1], 
    rotate: '1turn',
    duration: 1000, 
    delay: 50, 
    easing: 'easeInOutQuad'  
})

//// перехід на останій рівень

let btn = document.querySelector('.checkLast')

btn.onclick = function(){
    let pass = '12AP25'
    let lastQ = document.getElementById('lastQuest').value

    if(lastQ == pass){
        window.location.href = 'last.html'
    } else {
        alert('Помилка!')
    }
}

