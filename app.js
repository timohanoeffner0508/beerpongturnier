const express = require('express');
const path = require('path');
const app = express();

console.log('Starte Beerpongturnier App');

const PORT = process.env.PORT;
console.log('PORT:', PORT);

if (!PORT) {
  console.error('Kein Port gesetzt! App bricht ab.');
  process.exit(1);
}

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
  res.status(404).send('Seite nicht gefunden.');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});