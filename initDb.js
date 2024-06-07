const sqlite3 = require('sqlite3').verbose();

// Abrir uma conexão de banco de dados
let db = new sqlite3.Database('./usuarios.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Conectado ao banco de dados SQLite.');
});

// Criar a tabela de usuários
db.run(`CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    senha TEXT NOT NULL
)`);

// Fechar a conexão de banco de dados
db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Fechada a conexão do banco de dados SQLite.');
});
