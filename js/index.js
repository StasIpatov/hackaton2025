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

//////////////////// Перемикач теми

const checkbox = document.getElementById("input");
let mh = [
  document.querySelector('header'),
  document.querySelector('main')
];
const body = document.body;

// Функція для встановлення теми
function setTheme(theme) {
  if (theme === "dark") {
    body.classList.add("dark-theme-body");
    checkbox.checked = true;
  } else {
    body.classList.remove("dark-theme-body");
    checkbox.checked = false;
  }
  // Зберігаємо тему в localStorage
  localStorage.setItem("theme", theme);
  // Зберігаємо тему в cookie
  setThemeCookie(theme);
}

// Встановлення теми при завантаженні сторінки
const savedTheme = getSavedTheme(); // Використовуємо функцію для перевірки cookie та localStorage
setTheme(savedTheme);

// Обробка перемикача
checkbox.addEventListener("change", () => {
  const newTheme = checkbox.checked ? "dark" : "light";
  setTheme(newTheme);
});

// Функція для отримання збереженої теми (перевіряє cookie і localStorage)
function getSavedTheme() {
  // Перевірка cookie
  const themeFromCookie = getThemeCookie();
  if (themeFromCookie) {
    return themeFromCookie;
  }

  // Перевірка localStorage
  return localStorage.getItem("theme") || "light"; // Якщо тема не знайдена в cookie, використовуємо localStorage
}

// Функція для збереження теми в cookie
function setThemeCookie(theme) {
  const date = new Date();
  date.setFullYear(date.getFullYear() + 1); // Термін дії cookie - 1 рік
  document.cookie = `theme=${theme}; expires=${date.toUTCString()}; path=/`;
}

// Функція для отримання теми з cookie
function getThemeCookie() {
  const match = document.cookie.match(new RegExp('(^| )' + 'theme' + '=([^;]+)'));
  if (match) return match[2];
  return null;
}
