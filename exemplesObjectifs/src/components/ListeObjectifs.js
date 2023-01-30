import React from 'react';

import '../css/ListeObjectifs.css';

function GoalList ({objectifs}) {
  console.log(objectifs);

  return (
    <ul className="objectif-list">
      {objectifs.map((objectif) => (
        <li key={objectif.id} > {objectif.texte} </li>
      ))}
    </ul>
  );
};

export default GoalList;
