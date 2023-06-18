//O script estava carregando antes dos elementos HTML e estava dando problema, por isso o uso da função window.onload.

window.onload = function(){
    const form = document.getElementById('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (checarForm()) {
            form.submit();
        };
    });
};

function checarForm() {
    let flag = true;
    // Impedir mais de uma mensagem de erro por input
    for (let errorMessage of document.querySelectorAll('.error-text')) {
        errorMessage.remove();
    }

    for (let inputElement of document.querySelectorAll('.input-field')) {
        const inputName = inputElement.previousElementSibling.innerText;
        // Checar input vazio
        if (!inputElement.value) {
            notificarErro(inputElement, `${inputName} não pode estar vazio.`);
            flag = false;
        };
        // Checar caracteres de ID
        if (inputElement.classList.contains('id')) {
            if (inputElement.value.match(/[^A-Za-z0-9]/i)) {
                notificarErro(inputElement, `${inputName} usa um caractere inválido.`);
                flag = false;
            }
        };
        // Checar compatibilidade de senhas
        if (inputElement.classList.contains('senha')) {
            flag = isPasswordValid();
            if (!flag) {
                notificarErro(inputElement, `${inputName}S não batem. Tente novamente!`);
            };
        };
    };
    return flag;
};

function notificarErro(input, mensagem) {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = mensagem;
    newDiv.classList.add('error-text');
    input.insertAdjacentElement('afterend', newDiv);
};

function isPasswordValid() {
    if (document.querySelector('.senha').value != document.querySelector('.confirma-senha').value) {
        return false;
    } else {
        return true;
    };
};
