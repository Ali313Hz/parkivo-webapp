import { Logo } from "../atoms/Logo";
import { NavLinks } from "../molecules/NavLinks";
import { AuthButtons } from "../molecules/AuthButtons";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Logo />
        <div className="hidden md:block">
          <NavLinks />
        </div>
        <AuthButtons />
      </div>
    </header>
  );
}
