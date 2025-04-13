import Image from "next/image";
import { Input } from "../atoms/Input";

export function SearchBar({ placeholder = "Busca tu garaje perfecto" }) {
  return (
    <div className="search-bar">
      <Input
        placeholder={placeholder}
        icon={<Image src="/search.svg" alt="search" width={20} height={20} />}
      />
    </div>
  );
}