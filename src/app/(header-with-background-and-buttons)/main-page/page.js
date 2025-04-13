import { SearchBar } from "@/components/molecules/SearchBar";
import HeaderComponent from "@/components/organisms/componente_header/HeaderComponent";
import { mainPageButtons } from "@/components/molecules/button_component_types/ButtonTypesComponent";
import InfoGarageComponent from "@/components/organisms/component_garage_info/InfoGarageComponent";
import { Search } from "@/components/search-bar";

export default function MainPage({ children }) {
    return (
        <div>
            <HeaderComponent transparent={false} buttonTypes={mainPageButtons} />
            <div className={"between-header-and-content"}>
                <Search />
            </div>
            <div className={"lista-garajes"}>
                <InfoGarageComponent imagen={"/mock-db/1.jpg"} titulo={"Garaje en Madrid"} valoracion={4.5} calle={"Calle de la Libertad, 12"} precio={"100€"} />
                <InfoGarageComponent imagen={"/mock-db/2.jpg"} titulo={"Garaje en Barcelona"} valoracion={4.0} calle={"Calle de la Paz, 5"} precio={"120€"} />
                <InfoGarageComponent imagen={"/mock-db/3.jpg"} titulo={"Garaje en Valencia"} valoracion={3.5} calle={"Calle de la Esperanza, 8"} precio={"80€"} />
                <InfoGarageComponent imagen={"/mock-db/4.jpg"} titulo={"Garaje en Sevilla"} valoracion={4.8} calle={"Calle de la Libertad, 12"} precio={"150€"} />
                <InfoGarageComponent imagen={"/mock-db/5.jpg"} titulo={"Garaje en Bilbao"} valoracion={4.2} calle={"Calle de la Paz, 5"} precio={"110€"} />
                <InfoGarageComponent imagen={"/mock-db/6.jpg"} titulo={"Garaje en Zaragoza"} valoracion={3.9} calle={"Calle de la Esperanza, 8"} precio={"90€"} />
                <InfoGarageComponent imagen={"/mock-db/7.jpg"} titulo={"Garaje en Málaga"} valoracion={4.1} calle={"Calle de la Libertad, 12"} precio={"130€"} />
                <InfoGarageComponent imagen={"/mock-db/8.jpg"} titulo={"Garaje en Murcia"} valoracion={4.3} calle={"Calle de la Paz, 5"} precio={"140€"} />
                <InfoGarageComponent imagen={"/mock-db/9.jpg"} titulo={"Garaje en Palma"} valoracion={4.6} calle={"Calle de la Esperanza, 8"} precio={"160€"} />
                <InfoGarageComponent imagen={"/mock-db/10.jpg"} titulo={"Garaje en Alicante"} valoracion={4.7} calle={"Calle de la Libertad, 12"} precio={"170€"} />
                <InfoGarageComponent imagen={"/mock-db/11.jpg"} titulo={"Garaje en Granada"} valoracion={4.4} calle={"Calle de la Paz, 5"} precio={"180€"} />
                <InfoGarageComponent imagen={"/mock-db/12.jpg"} titulo={"Garaje en Toledo"} valoracion={4.9} calle={"Calle de la Esperanza, 8"} precio={"190€"} />
            </div>
        </div>
    );
}