document.addEventListener("DOMContentLoaded", function() {
  const regForm = document.querySelector("form#register");
  const errors_el = document.querySelector("form#register .errors");

  regForm.addEventListener("submit", validateRegisterForm);

  function validateRegisterForm(e) {
    e.preventDefault();
    const name = document.querySelector("#firstName");
    const surname = document.querySelector("#surName");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    const email_reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    errors = [];

    if (name.value == "") {
      errors.push({ text: "firstname", el: name });
    }
    if (surname.value == "") {
      errors.push({ text: "surname", el: surname });
    }
    if (email.value == "" || !email_reg.test(email.value)) {
      errors.push({ text: "email", el: email });
    }
    if (password.value == "" || !pass_reg.test(password.value)) {
      errors.push({ text: "password", el: password });
    }

    if (errors.length > 0) {
      handle_errors(errors);
      return false;
    }
    alert("Submitted");
    return true;
  }

  function handle_errors(errs) {
    let str = "You have errors with the following fields; ";

    errs.map(er => {
      er.el.classList.add("error");
      str += er.text + ", ";
    });

    let error_el = document.createElement("div");
    error_el.classList.add("error");
    error_el.innerText = str;

    error_el.addEventListener("click", function() {
      errors_el.removeChild(error_el);
    });

    errors_el.appendChild(error_el);
  }
});
