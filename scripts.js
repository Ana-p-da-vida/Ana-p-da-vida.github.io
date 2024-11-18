
let dadosFormulario = [];

function enviarFormulario() {
  
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const sugestao = document.getElementById('sugestao').value;

    const dadosUsuario = [nome, email, cpf, dataNascimento, sugestao];
    dadosFormulario.push(dadosUsuario);
    alert(`Obrigado, ${nome}! Seus dados foram roubados.`);
    console.log(dadosFormulario);
}
