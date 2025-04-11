import Link from 'next/link';
import { Button } from '../atoms/ButtonComponent';

export function AuthButtons() {
  return (
    <div className="auth-buttons">
      <Link href="/login" className="nav-link">
        Iniciar Sesión
      </Link>
      <Link href="/register">
        <Button variant="primary">
          Registrarse
        </Button>
      </Link>
    </div>
  );
}
