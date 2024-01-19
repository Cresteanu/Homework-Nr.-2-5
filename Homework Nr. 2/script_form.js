// Secțiunea 2: Formular de înregistrare

const form = document.querySelector(".form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");
const submit = document.querySelector("#submit");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");
const confirmError = document.querySelector("#confirm-error");

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

// Definim funcția pentru a valida e-mailul

function validateEmail() {
  const emailValue = email.value;
  if (emailValue === "") {
    emailError.textContent = "E-mailul nu poate fi gol.";
    return false;
  }
  else if (!emailRegex.test(emailValue)) {
    emailError.textContent = "E-mailul nu este valid.";
    return false;
  }
  else {
    emailError.textContent = "";
    return true;
  }
}

// Definim funcția pentru a valida parola
function validatePassword() {
   const passwordValue = password.value;
  if (passwordValue === "") {
    passwordError.textContent = "Parola nu poate fi goală.";
    return false;
  }
  else if (!passwordRegex.test(passwordValue)) {
    passwordError.textContent = "Parola trebuie să aibă cel puțin 8 caractere, o literă mare, o literă mică, o cifră și un caracter special.";
    return false;
  }
  else {
    passwordError.textContent = "";
    return true;
  }
}

// Definim funcția pentru a valida confirmarea parolei
function validateConfirm() {
  const confirmValue = confirm.value;
  if (confirmValue === "") {
    confirmError.textContent = "Confirmarea parolei nu poate fi goală.";
    return false;
  }
  else if (confirmValue !== password.value) {
    confirmError.textContent = "Parolele nu se potrivesc.";
    return false;
  }
  else {
    confirmError.textContent = "";
    return true;
  }
}

// Definim funcția pentru a trimite formularul
function submitForm(e) {
  e.preventDefault();
  const emailValid = validateEmail();
  const passwordValid = validatePassword();
  const confirmValid = validateConfirm();
  if (emailValid && passwordValid && confirmValid) {
     alert("Formularul a fost trimis cu succes.");
    form.reset();
  }
}

email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
confirm.addEventListener("input", validateConfirm);
submit.addEventListener("click", submitForm);

document.addEventListener("click", (e) => {
    if (!e.target.closest(".form")) {
      emailError.textContent = "";
      passwordError.textContent = "";
      confirmError.textContent = "";
    }
  });