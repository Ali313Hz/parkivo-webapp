import {SearchBar} from "@/components/molecules/SearchBar";
import HeaderComponent from "@/components/organisms/componente_header/HeaderComponent";
import {landingPageButtons, mainPageButtons} from "@/components/molecules/button_component_types/ButtonTypesComponent";
import Map from "@/components/organisms/map_component/Map"
import GarageSidebar from "@/components/organisms/garageSidebar_component/GarageSidebar";

const garageList = [
    { imagen: "/mock-db/1.jpg", titulo: "Garaje en Madrid", valoracion: 4.5, calle: "Calle de la Libertad, 12", precio: "100€" },
    { imagen: "/mock-db/2.jpg", titulo: "Garaje en Barcelona", valoracion: 4.0, calle: "Calle de la Paz, 5", precio: "120€" },
    { imagen: "/mock-db/3.jpg", titulo: "Garaje en Valencia", valoracion: 3.5, calle: "Calle de la Esperanza, 8", precio: "80€" },
    { imagen: "/mock-db/4.jpg", titulo: "Garaje en Sevilla", valoracion: 4.8, calle: "Calle de la Libertad, 12", precio: "150€" },
    { imagen: "/mock-db/5.jpg", titulo: "Garaje en Bilbao", valoracion: 4.2, calle: "Calle de la Paz, 5", precio: "110€" },
    { imagen: "/mock-db/6.jpg", titulo: "Garaje en Zaragoza", valoracion: 3.9, calle: "Calle de la Esperanza, 8", precio: "90€" },
    { imagen: "/mock-db/7.jpg", titulo: "Garaje en Málaga", valoracion: 4.1, calle: "Calle de la Libertad, 12", precio: "130€" },
    { imagen: "/mock-db/8.jpg", titulo: "Garaje en Murcia", valoracion: 4.3, calle: "Calle de la Paz, 5", precio: "140€" },
    { imagen: "/mock-db/9.jpg", titulo: "Garaje en Palma", valoracion: 4.6, calle: "Calle de la Esperanza, 8", precio: "160€" },
    { imagen: "/mock-db/10.jpg", titulo: "Garaje en Alicante", valoracion: 4.7, calle: "Calle de la Libertad, 12", precio: "170€" },
    { imagen: "/mock-db/11.jpg", titulo: "Garaje en Granada", valoracion: 4.4, calle: "Calle de la Paz, 5", precio: "180€" },
    { imagen: "/mock-db/12.jpg", titulo: "Garaje en Toledo", valoracion: 4.9, calle: "Calle de la Esperanza, 8", precio: "190€" },
];

export default function MainPage({ children }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <HeaderComponent transparent={false} buttonTypes={mainPageButtons} />
            <div className={"map-container1"}>
                <div className={"search-bar-superimposed"}>
                    <SearchBar />
                </div>
                <div className={"sidebar-map"}>
                    <GarageSidebar garages={garageList} />
                </div>
                <Map mapType={"fullscreen"}/>
            </div>
        </div>
    );
}