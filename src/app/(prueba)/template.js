import Image from "next/image";
import Header from "../../components/organisms/Header";

export default function Home({children}) {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    );
}
