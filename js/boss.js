/// тема

// Перевірка наявності збереженої теми з localStorage або cookie
const body = document.body;

// Функція для встановлення теми
function setTheme(theme) {
  if (theme === "dark") {
    body.classList.add("dark-theme-body");
  } else {
    body.classList.remove("dark-theme-body");
  }
}

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

// Функція для отримання теми з cookie
function getThemeCookie() {
  const match = document.cookie.match(new RegExp('(^| )' + 'theme' + '=([^;]+)'));
  if (match) return match[2];
  return null;
}

// Встановлення теми при завантаженні сторінки
const savedTheme = getSavedTheme();
setTheme(savedTheme);

/// битва с босом

let draco = document.querySelector('.boss')
let hp = 10
let hpB = document.querySelector('#hp')

draco.onclick = function () {
  hp = hp - 1
  console.log(hp)
  hpB.textContent = hp

  if(hp == 0){
    window.location.href = 'last.html'
  }
};
