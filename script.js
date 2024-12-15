document.getElementById('supportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let produto = document.getElementById('produto').value;
    let tipoAtendimento = document.querySelector('input[name="tipoAtendimento"]:checked').value;
    let contatoEmail = document.getElementById('contatoEmail').checked;
    let contatoTelefone = document.getElementById('contatoTelefone').checked;
    let mensagem = document.getElementById('mensagem').value;
    let anexo = document.getElementById('anexo').files[0];

    if (!nome || !sobrenome || !email || !telefone || !produto || !tipoAtendimento || !mensagem) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Simulação de envio de dados
    console.log({
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        telefone: telefone,
        produto: produto,
        tipoAtendimento: tipoAtendimento,
        contatoEmail: contatoEmail ? 'E-mail selecionado' : 'E-mail não selecionado',
        contatoTelefone: contatoTelefone ? 'Telefone selecionado' : 'Telefone não selecionado',
        mensagem: mensagem,
        anexo: anexo ? anexo.name : 'Nenhum arquivo escolhido'
    });

    alert('Formulário enviado com sucesso!');
});

// Atualizar status do anexo quando um arquivo é selecionado
document.getElementById('anexo').addEventListener('change', function(event) {
    let anexoStatus = document.getElementById('anexoStatus');
    if (event.target.files.length > 0) {
        anexoStatus.textContent = event.target.files[0].name;
    } else {
        anexoStatus.textContent = 'Nenhum arquivo escolhido';
    }
});
