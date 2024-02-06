import './App.css';

//Topic : Composition

import React from 'react';

// Spell component
const Spell = ({ name, effect }) => (
  <div>
    <h2>{name}</h2>
    <p>Effect: {effect}</p>
  </div>
);

// Wizard component using Spell component
const Wizard = ({ name, spells }) => (
  <div>
    <h1>{name}</h1>
    <p>Known Spells:</p>
    <ul>
      {spells.map((spell, index) => (
        <li key={index}>
          <Spell name={spell.name} effect={spell.effect} />
        </li>
      ))}
    </ul>
  </div>
);

// App component using Wizard component
const App = () => {
  const harryPotterSpells = [
    { name: 'Expelliarmus', effect: 'Disarming spell' },
    { name: 'Lumos', effect: 'Creates light' },
  ];

  return (
    <div>
      <h1>Harry Potter's Spellbook</h1>
      <Wizard name="Harry Potter" spells={harryPotterSpells} />
    </div>
  );
};

export default App;


/* 

In this example:

1. We have a Spell component that represents a single spell with a name and effect.
2. The Wizard component uses the Spell component to display a list of spells for a wizard.
3. The App component creates an instance of the Wizard component for Harry Potter, passing in his name and a list of spells.

This code creates a simple Harry Potter-themed React application using composition, where smaller components (Spell) are composed 
within a larger one (Wizard). The App component then uses the Wizard component to display information about Harry Potter's spellbook.
This structure promotes reusability and makes the code easy to understand for beginners.

*/
