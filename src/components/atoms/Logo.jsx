import Link from 'next/link';
import Image from "next/image";

export function Logo() {
  return (
      <div>
          <Image src={"/logo.svg"} width={200} height={200} alt={"logo"}></Image>
      </div>
  );
}
