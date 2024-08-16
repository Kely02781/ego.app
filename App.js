import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/nasa-photo')
      .then(response => response.json())
      .then(data => setPhoto(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {photo ? (
          <>
            <h1>{photo.title}</h1>
            <img src={photo.url} alt={photo.title} />
            <p>{photo.explanation}</p>
          </>
        ) : (
          <p>Cargando...</p>
        )}
      </header>
    </div>
  );
}

export default App;
