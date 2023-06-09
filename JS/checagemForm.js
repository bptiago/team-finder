//O script estava carregando antes dos elementos HTML e estava dando problema, por isso o uso da função window.onload.

window.onload = function(){
    const form = document.getElementById('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (checarForm()) {
            form.submit();
        }
    })
}

function checarForm() {
    const listOfInputs = document.querySelectorAll('.input-field');
    let flag = true;

    for (let inputElement of listOfInputs) {
        const inputName = inputElement.previousElementSibling.innerText;
        if (!inputElement.value) {
            notificarErro(inputElement, `${inputName} não pode estar vazio.`);
            flag = false;
        }
    }
    return flag;
};

function notificarErro(input, mensagem) {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = mensagem;
    newDiv.classList.add('error-text')
    input.insertAdjacentElement('afterend', newDiv);
};
