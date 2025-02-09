import { ReactElement } from 'react';
import { CustomButton } from './CustomButton';

interface IHeaderProps {
  authenticated: boolean;
  updateAuthenticated: () => void;
}

// The return type comes after the colon, in this case the component must return a ReactElement. ReactElement is a specifc type that includes many other types, like strings, boolean, other components and such things.
export function Header({ authenticated, updateAuthenticated }: IHeaderProps): ReactElement {
  // A derived variable is just something that is dependant on something else, usually a useState variable. This regular variable will be recreated with every rerender of this component.
  const derivedButtonText = authenticated ? 'Sign out' : 'Sign in';

  return (
    <header className="header g-container">
      <h1>React Lecture</h1>
      <div className="header-actions">
        <CustomButton onClick={updateAuthenticated}>{derivedButtonText}</CustomButton>
      </div>
    </header>
  );
}
