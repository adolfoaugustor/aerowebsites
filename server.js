const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3080;

// Servir arquivos estáticos do diretório public
app.use(express.static(path.join(__dirname, 'public')));

// Tratar qualquer outra rota não encontrada redirecionando para a index (SPA fallback se necessário)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso em http://localhost:${PORT}`);
});
