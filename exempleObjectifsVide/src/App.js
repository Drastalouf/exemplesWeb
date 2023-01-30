import React from 'react';

import ListeObjectifs from './components/ListeObjectifs';
import './css/App.css';

function App(){
  const objectifsCours = [
    {id: 'cg1', texte: 'Apprendre React', importance:"4"},
    {id: 'cg2', texte: 'Apprendre Node.Js', importance:"4"},
    {id: 'cg3', texte: 'Faire un site Web', importance:"1"},
  ];

  return (
    <div className="course-goals">
      <h2>Objectifs du cours</h2>
      <ListeObjectifs />
    </div>
  );
};

export default App;
