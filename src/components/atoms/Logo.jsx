import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="logo">
      <span>PARK</span>
      <span className="logo-highlight-blue">IV</span>
      <span className="logo-highlight-light-blue">O</span>
    </Link>
  );
}
