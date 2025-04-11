import {SearchBar} from "@/components/molecules/SearchBar";
import Componente_InfoGaraje from "@/components/organisms/Componente_InfoGaraje";
import HeaderComponent from "@/components/organisms/componente_header/HeaderComponent";
import {mainPageButtons} from "@/components/molecules/button_component_types/ButtonTypesComponent";

export default function MainPage({ children }) {
    return (
        <div>
            <HeaderComponent transparent={false} buttonTypes={mainPageButtons} />
            <div className={"between-header-and-content"}>
                <SearchBar />
            </div>
            <div className={"lista-garajes"}>
                <Componente_InfoGaraje imagen={"/mock-db/1.jpg"} titulo={"Garaje en Madrid"} valoracion={4.5} calle={"Calle de la Libertad, 12"} precio={"100€"} />
                <Componente_InfoGaraje imagen={"/mock-db/2.jpg"} titulo={"Garaje en Barcelona"} valoracion={4.0} calle={"Calle de la Paz, 5"} precio={"120€"} />
                <Componente_InfoGaraje imagen={"/mock-db/3.jpg"} titulo={"Garaje en Valencia"} valoracion={3.5} calle={"Calle de la Esperanza, 8"} precio={"80€"} />
                <Componente_InfoGaraje imagen={"/mock-db/4.jpg"} titulo={"Garaje en Sevilla"} valoracion={4.8} calle={"Calle de la Libertad, 12"} precio={"150€"} />
                <Componente_InfoGaraje imagen={"/mock-db/5.jpg"} titulo={"Garaje en Bilbao"} valoracion={4.2} calle={"Calle de la Paz, 5"} precio={"110€"} />
                <Componente_InfoGaraje imagen={"/mock-db/6.jpg"} titulo={"Garaje en Zaragoza"} valoracion={3.9} calle={"Calle de la Esperanza, 8"} precio={"90€"} />
                <Componente_InfoGaraje imagen={"/mock-db/7.jpg"} titulo={"Garaje en Málaga"} valoracion={4.1} calle={"Calle de la Libertad, 12"} precio={"130€"} />
                <Componente_InfoGaraje imagen={"/mock-db/8.jpg"} titulo={"Garaje en Murcia"} valoracion={4.3} calle={"Calle de la Paz, 5"} precio={"140€"} />
                <Componente_InfoGaraje imagen={"/mock-db/9.jpg"} titulo={"Garaje en Palma"} valoracion={4.6} calle={"Calle de la Esperanza, 8"} precio={"160€"} />
                <Componente_InfoGaraje imagen={"/mock-db/10.jpg"} titulo={"Garaje en Alicante"} valoracion={4.7} calle={"Calle de la Libertad, 12"} precio={"170€"} />
                <Componente_InfoGaraje imagen={"/mock-db/11.jpg"} titulo={"Garaje en Granada"} valoracion={4.4} calle={"Calle de la Paz, 5"} precio={"180€"} />
                <Componente_InfoGaraje imagen={"/mock-db/12.jpg"} titulo={"Garaje en Toledo"} valoracion={4.9} calle={"Calle de la Esperanza, 8"} precio={"190€"} />
            </div>
        </div>
    );
}