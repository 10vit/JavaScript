// metodo querySelector

const btn = document.querySelector('.btn');
btn.style.background = 'red';

// busca pelos elementos do formulario

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#horario');
const msg = document.querySelector('.msg');
const msg_email = document.querySelector('.msg_email');
const userList = document.querySelector('#users');

// metodo addeventlisatener
myForm.addEventListener('submit', onSubmit);

//funçao onSubmit
function onSubmit(e) {
    e.preventDeFault();
    //
    if (nameInput === '' || emailInput.value === '')
    {
        // alert(por favor preencha os dados)
        msg.classList.add('error');
        msg.innerHTML = 'por favor, preencha os dados';
        setTimeout(() => msg.remove(), 3000);
    }  else {
        // console.log('sucess')
        const li = document.createElement('li');
        li.appendChild(
            document.createTextNode(
                `${nameInput} : ${emailInput.value} : ${horario.value}`
            )
        );
        userList.appendChild(li);
        //limpa o formulario
        nameInput = '';
        emailInput.value = '';
        horario.getElementsByTagName('option')[0].selected = 'selected';
        nameInput.focus(); //coloca o foco no elemento
    }
}
// validando e-mail
emailInput.addEventListener('change', (e) => {
    let padrao = new RegExp(/.*@.*\..*/i);
    if (!padrao.test(emailInput.value)) {
        msg_email.classList.add('error');
        msg_email.innerHTML = 'por favor,insira um e-mail valido';
        setTimeout(() => msg.remove(), 3000);
    } 
})