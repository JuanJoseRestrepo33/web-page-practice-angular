const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8080;

// Servir archivos estáticos del build de Angular
const distPath = path.join(__dirname, 'dist', 'cards-app');
const browserPath = path.join(distPath, 'browser');

// Angular 19 con application builder genera en /browser
const staticPath = fs.existsSync(browserPath) ? browserPath : distPath;
app.use(express.static(staticPath));

// SPA: todas las rutas devuelven index.html para que el router de Angular funcione
app.get('*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
