import { ReactElement } from 'react';

interface IAuthBadgeProps {
  authenticated: boolean;
}

export function AuthBadge({ authenticated }: IAuthBadgeProps): ReactElement {
  return (
    <article className="auth-badge">Authenticated: {authenticated ? 'true' : 'false'}</article>
  );
}
