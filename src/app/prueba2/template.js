import Image from "next/image";
import Header from "@/components/organisms/Header";

export default function Home({children}) {
    return (
        <div>
            <div>{children}</div>

            <Header clean="1"/>
        </div>
    );
}
