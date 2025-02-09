import { useState } from 'react';
import { AuthBadge } from './components/AuthBadge';
import { Header } from './components/Header';
import { CustomButton } from './components/CustomButton';

function App() {
  const [count, setCount] = useState(10);
  const [authenticated, setAuthenticated] = useState(false);
  // The first value is the state itself, and the second value is the function that updates the state. In order to update the state you will have to call the update funtion in order for React to work in the right way. The names are up to you, you can name them whatever you want. Pick good names that relates to what you are trying to do.
  // Syntax: const [state, setState] = useState(defaultValue)

  const updateAuthenticated = () => {
    // if (authenticated === false) {
    //   setAuthenticated(true);
    // } else if (authenticated === true) {
    //   setAuthenticated(false);
    // }

    // This callback variant of set-method is useful when we want to BASE the new value ON the old value, like in a calculation or something similar.
    setAuthenticated((prevVal) => !prevVal);

    // Only use the 'regular' variant ( with no callback as argument ) when you want to REPLACE the old value with a new value.
    // setAuthenticated(true) => straight out replaces the old value.
  };

  const decrement = () => {
    setCount((prevVal) => prevVal - 1);
  };

  const increment = () => {
    setCount((prevVal) => prevVal + 1);
  };

  return (
    <>
      <Header authenticated={authenticated} updateAuthenticated={updateAuthenticated} />
      <section className="count-wrapper g-container">
        <CustomButton onClick={decrement}>Decrement</CustomButton>
        <p className="count">{count}</p>
        <CustomButton onClick={increment}>Increment</CustomButton>
        <CustomButton onClick={() => setCount(0)}>Reset</CustomButton>
      </section>
      <AuthBadge authenticated={authenticated} />
    </>
  );
}

export default App;
