import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    fetch('https://intern-task-py.onrender.com/api/facts/')
      .then(response => response.json())
      .then(data => setFacts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Django & React Integration</h1>
        <p>Fetching data from Django REST Framework</p>
        <div className="card-container">
          {facts.length > 0 ? (
            <ul className="fact-list">
              {facts.map((fact, index) => (
                <li key={index} className="fact-item">{fact}</li>
              ))}
            </ul>
          ) : (
            <p>Loading facts...</p>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
