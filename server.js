const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();

app.use(express.json());

let db = new sqlite3.Database('./usuarios.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Conectado ao banco de dados SQLite.');
});

// Endpoint para obter detalhes do usuário pelo ID
app.get('/usuario/:id', (req, res) => {
    const userId = req.params.id;
    db.get('SELECT * FROM usuarios WHERE id = ?', [userId], (err, usuario) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        if (!usuario) {
            res.status(404).json({ "error": "Usuário não encontrado" });
            return;
        }
        res.json(usuario);
    });
});

// Endpoint para deletar um usuário pelo ID
app.delete('/usuarios/:id', (req, res) => {
    const userId = req.params.id;
    db.run('DELETE FROM usuarios WHERE id = ?', userId, function (err) {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({ message: 'Usuário excluído com sucesso!', changes: this.changes });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
