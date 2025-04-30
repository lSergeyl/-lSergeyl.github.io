console.log("✅ script.js загружен");
console.log("window.Telegram:", window.Telegram);
console.log("window.Telegram.WebApp:", window.Telegram?.WebApp);

const tg = window.Telegram.WebApp;
tg.expand();

// Переключение вкладок
document.getElementById("loginTab").addEventListener("click", () => {
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("registerForm").classList.add("hidden");
  document.getElementById("loginTab").classList.add("active");
  document.getElementById("registerTab").classList.remove("active");
});
document.getElementById("registerTab").addEventListener("click", () => {
  document.getElementById("registerForm").classList.remove("hidden");
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("registerTab").classList.add("active");
  document.getElementById("loginTab").classList.remove("active");
});

// Функция отправки данных при входе
function submitLogin() {
  const email    = document.getElementById("login_email").value.trim();
  const password = document.getElementById("login_password").value.trim();

  if (!email || !password) {
    alert("Пожалуйста, заполните оба поля для входа.");
    return;
  }

  const payload = { action: "login", email, password };
  console.log("👉 Отправка в бот (login):", payload);
  tg.sendData(JSON.stringify(payload));
}

// Функция отправки данных при регистрации
function submitRegister() {
  const first_name = document.getElementById("reg_first_name").value.trim();
  const last_name  = document.getElementById("reg_last_name").value.trim();
  const email      = document.getElementById("reg_email").value.trim();
  const password   = document.getElementById("reg_password").value.trim();
  const confirm    = document.getElementById("reg_confirm").value.trim();
  const position   = document.getElementById("reg_position").value.trim();

  if (!first_name || !last_name || !email || !password || !confirm || !position) {
    alert("Пожалуйста, заполните все поля для регистрации.");
    return;
  }
  if (password !== confirm) {
    alert("Пароли не совпадают.");
    return;
  }

  const payload = {
    action:     "register",
    first_name,
    last_name,
    email,
    password,
    position
  };
  console.log("👉 Отправка в бот (register):", payload);
  tg.sendData(JSON.stringify(payload));
}
