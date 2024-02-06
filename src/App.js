import './App.css';

//Topic : Creating and nesting components

// Updated Wizard component with Wand
function Wizard(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <Spell spellName={props.spell} />
      <Wand wand={props.wand} />
    </div>
  );
}

// Spell component
function Spell(props) {
  return <p>Spell: {props.spellName}</p>;
}

// Wand component
function Wand(props) {
  return <p>Wand: {props.wand}</p>;
}


// Updated App component with wand information
function App() {
  return (
    <div>
      <Wizard name="Harry Potter" spell="Expelliarmus" wand="Holly and Phoenix Feather" />
      <Wizard name="Hermione Granger" spell="Lumos" wand="Vine and Dragon Heartstring" />
      <Wizard name="Ron Weasley" spell="Wingardium Leviosa" wand="Willow and Unicorn Hair" />
    </div>
  );
}


export default App;
