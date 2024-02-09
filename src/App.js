import './App.css';
import React, { useState, useEffect } from 'react';
//Topic : Composition

const MagicalCreatureEncounter = () => {
  const [currentCreature, setCurrentCreature] = useState(null);

  useEffect(() => {
    // Simulating encountering magical creatures
    const magicalCreatures = ['Hippogriff', 'Thestral', 'Blast-Ended Skrewt', 'Niffler'];

    const randomCreatureIndex = Math.floor(Math.random() * magicalCreatures.length);
    const newCreature = magicalCreatures[randomCreatureIndex];

    setCurrentCreature(newCreature);

    // Cleanup function (optional)
    return () => {
      console.log(`Farewell, ${currentCreature}!`);
    };
  }, [currentCreature]); // Empty dependency array means the effect runs once on mount

  return (
    <div>
      <h1>Magical Creature Encounter</h1>
      <p>{currentCreature ? `You encounter a ${currentCreature}!` : 'No creatures around.'}</p>
    </div>
  );
};

// Main App component
const App = () => {

  return (
    <div>
      <MagicalCreatureEncounter/>
    </div>
  );
};

export default App;



/* 

In this magical example:

1. The MagicalContent component uses conditional rendering to display different messages based on whether the wizard has a wand.

2. The WizardingApp component manages a state variable hasWand with the help of the useState hook, indicating whether the wizard currently possesses a wand.

3.Clicking the button toggles the value of hasWand, and the content of the magical message changes accordingly.

Feel free to cast your own magical spells by toggling the button and watching the enchanting messages change! 🪄✨

*/
