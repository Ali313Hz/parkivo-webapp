import Link from 'next/link';

export function NavLinks() {
  const links = [
    { name: "Inicio", href: "/" },
    { name: "Sobre Nosotros", href: "/about" },
    { name: "Servicios", href: "/services" },
    { name: "Contacto", href: "/contact" },
  ];

  return (
    <nav className="nav">
      {links.map((link) => (
        <Link key={link.name} href={link.href} className="nav-link">
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
