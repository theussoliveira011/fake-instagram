window.addEventListener('load', function(){
  
  /* F U N C T I O N S*/
  function createError(input, mensagem){
    let errorSpan = document.createElement('span');
    errorSpan.classList.add('error');
    errorSpan.innerText = mensagem;
    input.insertAdjacentElement('afterend', errorSpan);
  };
  
  function removeErrors(){
    let errorSpan = document.querySelectorAll('main form.form-auth span.error');
    errorSpan.forEach(span => span.remove());
  };
  /*  */
  
  const form = document.querySelector('.form-auth');
  form.addEventListener('submit', function(event){
    event.preventDefault();
    removeErrors();

    let hasError = false;

    const inputList = document.querySelectorAll('form.form-auth input');
    inputList.forEach(input => {
      if(!input.value){
        hasError = true;
        createError(input, "Campo obrigatorio");
      };
    });

    if(!hasError){
      this.submit();
    };

  });
});

