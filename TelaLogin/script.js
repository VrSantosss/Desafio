document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    
    // Obtém os dados do formulário
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    
    // Array de exemplos de usuários
    var usuarios = [
        { email: 'usuario1@example.com', senha: 'senha1' },
        { email: 'usuario2@example.com', senha: 'senha2' },
        { email: 'usuario3@example.com', senha: 'senha3' }
    ];

    // Verifica se o e-mail e a senha correspondem a algum usuário de exemplo
    var usuarioValido = usuarios.some(function(usuario) {
        return usuario.email === email && usuario.senha === senha;
    });
    
    // Se as credenciais forem válidas, redireciona para a tela principal
    if (usuarioValido) {
        window.location.href = 'http://127.0.0.1:5500/tela%20principal/index.html';
    } else {
        // Se não, exibe mensagem de erro
        document.getElementById('mensagem').textContent = 'Credenciais inválidas. Por favor, tente novamente.';
    }
});
