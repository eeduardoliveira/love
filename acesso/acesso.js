const btn = document.querySelector("#btn");

function send() {
    const usuario = document.querySelector(".usuario").value;
    const senha = document.querySelector(".senha").value;
    const preencha = document.querySelector("#preencha");
    const sucesso = document.querySelector("#sucesso");
    const negado = document.querySelector("#negado"); // Adicione esta linha

    if (usuario.length < 1 || senha.length < 1) {
        preencha.style.display = 'inline';

        setTimeout(() => {
            preencha.style.display = 'none';
        }, 1000);

        return false;
    }

    if (usuario === "adriane" && senha === "07082022") {
        sucesso.style.display = 'inline';

        setTimeout(() => {
            location.href = "home/home.html";
        }, 500);
    } else {
        negado.style.display = 'inline';

        setTimeout(() => {
            location.href = "error/erro.html";
        }, 500);
    }
}

// Adicione um ouvinte de evento de clique ao botão
btn.addEventListener("click", send);
