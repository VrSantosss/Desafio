const usuario = document.getElementById('nome-professor');
const tabelaTurmas = document.querySelector('tbody');
const botaoCadastrarTurma = document.getElementById('cadastrar-turma');
const botaoSair = document.getElementById('sair');

// Carregar dados do professor e turmas
fetch('/professor')
    .then(response => response.json())
    .then(data => {
        usuario.textContent = data.nome;
        preencherTabelaTurmas(data.turmas);
    })
    .catch(error => {
        console.error('Erro ao carregar dados do professor:', error);
    });

// Função para preencher a tabela de turmas
function preencherTabelaTurmas(turmas) {
    tabelaTurmas.innerHTML = '';
    turmas.forEach(turma => {
        const linha = document.createElement('tr');
        const numeroCelula = document.createElement('td');
        const nomeCelula = document.createElement('td');
        const acaoCelula = document.createElement('td');

        numeroCelula.textContent = turma.numero;
        nomeCelula.textContent = turma.nome;

        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.addEventListener('click', () => excluirTurma(turma.id));

        const botaoVisualizar = document.createElement('button');
        botaoVisualizar.textContent = 'Visualizar';
        botaoVisualizar.addEventListener('click', () => visualizarTurma(turma.id));

        acaoCelula.appendChild(botaoExcluir);
        acaoCelula.appendChild(botaoVisualizar);

        linha.appendChild(numeroCelula);
        linha.appendChild(nomeCelula);
        linha.appendChild(acaoCelula);

        tabelaTurmas.appendChild(linha);
    });
}

// Função para excluir turma
function excluirTurma(idTurma) {
    fetch(`/turmas/${idTurma}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao excluir turma');
        }
        return response.json();
    })
    .then(data => {
        // Remover a turma da tabela
        const index = Array.from(tabelaTurmas.children).findIndex(linha => linha.firstChild.textContent == idTurma);
        if (index > -1) {
            tabelaTurmas.removeChild(tabelaTurmas.children[index]);
        }
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}

// Função para visualizar turma
function visualizarTurma(idTurma) {
    // Implementar lógica de visualização da turma
    console.log(`Visualizar turma ${idTurma}`);
}

// Evento para o botão "Sair"
botaoSair.addEventListener('click', () => {
    // Redirecionar para a tela de login
    window.location.href = 'http://127.0.0.1:5500/TelaLogin/index.html';
});

// Adicionar evento ao botão de cadastrar turma
botaoCadastrarTurma.addEventListener('click', () => {
    // Implemente aqui a lógica para cadastrar uma nova turma
    // Por exemplo, você pode abrir um modal de cadastro de turma ou redirecionar para uma página de cadastro de turma
    console.log('Cadastrar nova turma');
});
document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    
    // Obtém os dados do formulário
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    
    // Array de exemplos de usuários
    var usuarios = [
        { email: 'usuario1@example.com', senha: 'senha1', nome: 'Nome do Usuário 1' },
        { email: 'usuario2@example.com', senha: 'senha2', nome: 'Nome do Usuário 2' },
        { email: 'usuario3@example.com', senha: 'senha3', nome: 'Nome do Usuário 3' }
    ];

    // Verifica se o e-mail e a senha correspondem a algum usuário de exemplo
    var usuarioValido = usuarios.find(function(usuario) {
        return usuario.email === email && usuario.senha === senha;
    });
    
    // Se as credenciais forem válidas, redireciona para a tela principal
    if (usuarioValido) {
        // Armazena os dados do usuário no localStorage
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioValido));
        window.location.href = 'http://127.0.0.1:5500/tela%20principal/index.html';
    } else {
        // Se não, exibe mensagem de erro
        document.getElementById('mensagem').textContent = 'Credenciais inválidas. Por favor, tente novamente.';
    }
});
// Carrega os dados do usuário logado do localStorage
var usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

// Verifica se o usuário está logado
if (usuarioLogado) {
    // Exibe o nome do usuário na tela principal
    var usuarios = document.getElementById('nome-professor');
    if (nomeProfessor) {
        nomeProfessor.textContent = usuarioLogado.nome;
    }
} else {
    // Se o usuário não estiver logado, redireciona para a tela de login
    window.location.href = 'http://127.0.0.1:5500/TelaLogin/index.html';
}
