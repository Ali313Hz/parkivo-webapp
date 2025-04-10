import { Logo } from "../atoms/Logo";
import { AuthButtons } from "../molecules/AuthButtons";
import {Button} from "@/components/atoms/Button";
import Image from "next/image";

export default function Header({children}) {
  return (
    <header className="header">
        <div className="header-container">
            <Logo />
            <div className="header-buttons">
                {children}
            </div>
        </div>
    </header>
  );
}
