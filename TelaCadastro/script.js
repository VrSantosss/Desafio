// Array para armazenar os usuários
var usuarios = [];

// Função para criar um novo usuário
function criarUsuario(email, senha) {
    var novoUsuario = { email: email, senha: senha };
    usuarios.push(novoUsuario);
}

// Event listener para o envio do formulário de cadastro
document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    
    // Obtém os dados do formulário
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    
    // Cria um novo usuário com os dados fornecidos
    criarUsuario(email, senha);
    
    // Redireciona para a tela principal
    window.location.href = 'http://127.0.0.1:5500/tela%20principal/index.html';
});

// Event listener para o envio do formulário de login
document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    
    // Obtém os dados do formulário
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    
    // Verifica se os campos foram preenchidos
    if (!email || !senha) {
        document.getElementById('mensagem').textContent = 'Por favor, preencha todos os campos.';
        return;
    }
    
    // Verifica se o login é válido
    var usuarioValido = usuarios.some(function(usuario) {
        return usuario.email === email && usuario.senha === senha;
    });
    
    // Se for válido, redireciona para a tela principal
    if (usuarioValido) {
        window.location.href = 'http://127.0.0.1:5500/tela%20principal/index.html';
    } else {
        // Se não, exibe mensagem de erro
        document.getElementById('mensagem').textContent = 'Credenciais inválidas. Por favor, tente novamente.';
    }
});
