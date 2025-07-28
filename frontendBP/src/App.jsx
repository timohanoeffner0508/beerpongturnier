import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Lade...');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/hello`)
      .then((res) => res.text())
      .then(setMessage)
      .catch(() => setMessage('Fehler beim Abrufen der Nachricht'));
  }, []);

  return (
    <div>
      <h1>Vite + Express</h1>
      <p>Nachricht vom Backend:</p>
      <strong>{message}</strong>
    </div>
  );
}

export default App;