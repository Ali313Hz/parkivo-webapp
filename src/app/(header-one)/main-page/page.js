import Header from "@/components/organisms/Header";
import {Button} from "@/components/atoms/Button";
import Image from "next/image";
import {SearchBar} from "@/components/molecules/SearchBar";
import Componente_InfoGaraje from "@/components/organisms/Componente_InfoGaraje";

export default function MainPage({ children }) {
    return (
        <div>
            <Header>
                <div className={"header-nav"}>
                    <Button variant={"secondary"}>Añade tu garaje</Button>
                    <Button variant={"primary"}>
                        <Image src="/vercel.svg" width={24} height={24}  alt={"Perfil"}/>
                    </Button>
                </div>
            </Header>
            <div className={"between-header-and-content"}>
                <SearchBar />
            </div>
            <div className={"lista-garajes"}>
                <Componente_InfoGaraje imagen={"/favicon.ico"} titulo={"Garaje en Madrid"} valoracion={4.5} calle={"Calle de la Libertad, 12"} precio={"100€"} />
                <Componente_InfoGaraje imagen={"/favicon.ico"} titulo={"Garaje en Barcelona"} valoracion={4.0} calle={"Calle de la Paz, 5"} precio={"120€"} />
                <Componente_InfoGaraje imagen={"/favicon.ico"} titulo={"Garaje en Valencia"} valoracion={3.5} calle={"Calle de la Esperanza, 8"} precio={"80€"} />
                <Componente_InfoGaraje imagen={"/favicon.ico"} titulo={"Garaje en Sevilla"} valoracion={4.8} calle={"Calle de la Libertad, 12"} precio={"150€"} />
                <Componente_InfoGaraje imagen={"/favicon.ico"} titulo={"Garaje en Bilbao"} valoracion={4.2} calle={"Calle de la Paz, 5"} precio={"110€"} />
                <Componente_InfoGaraje imagen={"/favicon.ico"} titulo={"Garaje en Zaragoza"} valoracion={3.9} calle={"Calle de la Esperanza, 8"} precio={"90€"} />
                <Componente_InfoGaraje imagen={"/favicon.ico"} titulo={"Garaje en Málaga"} valoracion={4.1} calle={"Calle de la Libertad, 12"} precio={"130€"} />
                <Componente_InfoGaraje imagen={"/favicon.ico"} titulo={"Garaje en Murcia"} valoracion={4.3} calle={"Calle de la Paz, 5"} precio={"140€"} />
                <Componente_InfoGaraje imagen={"/favicon.ico"} titulo={"Garaje en Palma"} valoracion={4.6} calle={"Calle de la Esperanza, 8"} precio={"160€"} />
                <Componente_InfoGaraje imagen={"/favicon.ico"} titulo={"Garaje en Alicante"} valoracion={4.7} calle={"Calle de la Libertad, 12"} precio={"170€"} />
                <Componente_InfoGaraje imagen={"/favicon.ico"} titulo={"Garaje en Granada"} valoracion={4.4} calle={"Calle de la Paz, 5"} precio={"180€"} />
                <Componente_InfoGaraje imagen={"/favicon.ico"} titulo={"Garaje en Toledo"} valoracion={4.9} calle={"Calle de la Esperanza, 8"} precio={"190€"} />
            </div>
        </div>
    );
}