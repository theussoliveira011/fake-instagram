window.addEventListener("load", function () {
  const form = document.querySelector(".form-auth");
  const inputList = document.querySelectorAll("form.form-auth input");
  let hasError = false;
  let hasFormErrors = false;

  /* F U N C T I O N S*/
  function createError(input, mensagem, errorType) {
    if (errorType === "form") {
      hasFormErrors = true;
    } else {
      hasError = true;
    }
    let errorSpan = document.createElement("span");
    errorSpan.classList.add("error");
    errorSpan.innerText = mensagem;
    input.insertAdjacentElement("afterend", errorSpan);
  };

  function removeErrors(errorType) {
    if (errorType === "form") {
      hasFormErrors = false;
    } else {
      hasError = false;
    }

    let errorSpan = document.querySelectorAll("main form.form-auth span.error");
    errorSpan.forEach((span) => span.remove());
  };

  function validateEmail(input) {
    const { value } = input;
    if (value.includes("@") && value.includes(".")) {
    } else {
      createError(input, "O campo deve conter @ e .", "input");
    }
  };

  function validateLength(input, min, max) {
    const { value } = input;
    if (value.length > min && value.length < max) {
      return;
    } else {
      createError(
        input,
        `O campo deve ter no minimo ${min} caracteres`,
        "input"
      );
    }
  };

  function validateDate(input, min, max){
    const { value } = input;
    let ano = value.split('/')[0];
    let idade = new Date().getFullYear() - parseInt(ano);

    if(idade >= min && idade < max){
      return;
    } else {
      createError(input, `Idade minima exigida: ${min}`, 'input');
    };
  };
  /*  */

  /* Eventos */
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    removeErrors("form");

    inputList.forEach((input) => {
      if (!input.value) {
        hasFormErrors = true;
        createError(input, "Campo obrigatorio", "form");
      }
    });

    if (!hasError && !hasFormErrors) {
      this.submit();
    }
  });

  inputList.forEach((input) => {
    input.addEventListener("change", function () {
      removeErrors("input");

      switch(input.name){
        case "email":
          validateLength(input, 10, 120);
          validateEmail(input);
          break;

        case "name":
          validateLength(input, 10, 80);
          break;

        case "surname":
          validateLength(input, 10, 100);
          break;

        case "username":
          validateLength(input, 8, 100);
          break;

        case "password":
          validateLength(input, 8, 100);
          break;

        case 'date':
          validateDate(input, 16, 120);
          break;

        default:
          break;
      };
    });
  });
});