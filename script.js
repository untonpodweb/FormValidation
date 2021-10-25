const form = document.getElementById("form"),
  username = document.getElementById("username"),
  email = document.getElementById("email"),
  password = document.getElementById("password"),
  password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim(),
    emailValue = email.value.trim(),
    passwordValue = password.value.trim(),
    password2Value = password2.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Поле ввода не может быть пустым");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Поле ввода не может быть пустым");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Указанный адрес электронной почты неверен");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Поле ввода не может быть пустым");
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Поле ввода не может быть пустым");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Пароль не совпадает");
  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const formItem = input.parentElement,
    small = formItem.querySelector("small");

  small.innerText = message;
  formItem.className = "form__item error";
}

function setSuccessFor(input) {
  const formItem = input.parentElement;
  formItem.className = "form__item success";
}

function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// const btnSubmit = document.getElementById("btnSubmit");

const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0);
  document.body.style.backgroundColor = "#" + randomColor;
  // btnSubmit.style.backgroundColor = "#" + randomColor;
};

btnColor.addEventListener("click", setBg);
setBg();

let txt = {
  ru: {
    "label-title": "Создать Аккаунт",
    "label-name": "Ваше Имя",
    "label-email": "Ваша почта",
    "label-password": "Пароль",
    "label-password2": "Пароль повторить",
    btnSubmit: "Отправить",
  },
  eng: {
    "label-title": "Create Account",
    "label-name": "Username",
    "label-email": "Email",
    "label-password": "Password",
    "label-password2": "Password check",
    btnSubmit: "Submit",
  },
};
const langRu = document.getElementById("lang-ru");
const langEng = document.getElementById("lang-eng");

langRu.addEventListener("click", function () {
  username.setAttribute("placeholder", "Антон");
  email.setAttribute("placeholder", "example@mail.com");
  password.setAttribute("placeholder", "Пароль");
  password2.setAttribute("placeholder", "Пароль повторить");
});
langEng.addEventListener("click", function () {
  username.setAttribute("placeholder", "Anton");
  email.setAttribute("placeholder", "example@mail.com");
  password.setAttribute("placeholder", "password");
  password2.setAttribute("placeholder", "password");
});

langRu.addEventListener("click", setLang.bind(null, "ru"));
langEng.addEventListener("click", setLang.bind(null, "eng"));

function setLang(lang) {
  let p;
  if (!txt.hasOwnProperty(lang)) return;
  if (window.hasOwnProperty("localStorage"))
    window.localStorage.setItem("lang", lang);
  for (p in txt[lang]) {
    document.getElementById(p).innerText = txt[lang][p];
  }
}

let lang =
  window.hasOwnProperty("localStorage") &&
  window.localStorage.getItem("lang") &&
  window.localStorage.getItem("placeholder");
setLang(lang);
