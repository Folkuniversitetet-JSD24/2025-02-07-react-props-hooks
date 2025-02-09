import { ReactElement, ReactNode } from 'react';

interface ICustomButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export function CustomButton({ children, onClick }: ICustomButtonProps): ReactElement {
  return (
    <button className="custom-button" onClick={onClick}>
      {children}
    </button>
  );
}
