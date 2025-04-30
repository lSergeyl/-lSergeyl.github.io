const tg = window.Telegram.WebApp;
tg.expand();

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

function submitLogin() {
  const email = document.getElementById("login_email").value.trim();
  const password = document.getElementById("login_password").value.trim();

  if (!email || !password) {
    alert("Пожалуйста, заполните все поля.");
    return;
  }

  tg.sendData(JSON.stringify({
    action: "login",
    email,
    password
  }));
}

function submitRegister() {
  const first_name = document.getElementById("reg_first_name").value.trim();
  const last_name = document.getElementById("reg_last_name").value.trim();
  const email = document.getElementById("reg_email").value.trim();
  const password = document.getElementById("reg_password").value.trim();
  const confirm = document.getElementById("reg_confirm").value.trim();
  const position = document.getElementById("reg_position").value.trim();

  if (!first_name || !last_name || !email || !password || !confirm || !position) {
    alert("Пожалуйста, заполните все поля.");
    return;
  }

  if (password !== confirm) {
    alert("Пароли не совпадают.");
    return;
  }

  tg.sendData(JSON.stringify({
    action: "register",
    first_name,
    last_name,
    email,
    password,
    position
  }));
}
