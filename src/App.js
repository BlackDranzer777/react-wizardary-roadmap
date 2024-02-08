import './App.css';

//Topic : Composition

import React, { useState } from 'react';

// Functional Component with Conditional Rendering
const MagicalContent = ({ hasWand }) => {
  return (
    <div>
      {hasWand ? (
        <p>You can cast spells with your wand! Lumos!</p>
      ) : (
        <p>Oh no! You need a wand to perform magic. Visit Ollivanders!</p>
      )}
    </div>
  );
};

// Main App component
const App = () => {
  const [hasWand, setHasWand] = useState(true);

  return (
    <div>
      <h1>Wizarding Conditional Rendering</h1>
      <button onClick={() => setHasWand(!hasWand)}>
        {hasWand ? 'Leave your wand at Ollivanders' : 'Get a new wand from Ollivanders'}
      </button>
      <MagicalContent hasWand={hasWand} />
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
