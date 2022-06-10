

const user = "Vitória Moser";
const password = "24052022";

for ( let tentativas = 3; tentativas > 0; tentativas--) {
    var sentry = prompt("Insira O Nome Do Usuário");
    var checker = prompt("Insira A Senha");
    if (sentry == user && checker == password) {
        alert("Sucesso No Cadastro");
        break;
    }
    else {
        alert("Usuário e/ou senha invalidos!")
    }
}

if (sentry != user || checker != password) {
    alert("Você foi bloqueado.");
}
