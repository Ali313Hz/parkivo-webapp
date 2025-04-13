import {SearchBar} from "@/components/molecules/SearchBar";
import HeaderComponent from "@/components/organisms/componente_header/HeaderComponent";
import {landingPageButtons} from "@/components/molecules/button_component_types/ButtonTypesComponent";
import Map from "@/components/organisms/map_component/Map"

export default function MainPage({ children }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <HeaderComponent transparent={false} buttonTypes={landingPageButtons} />
            <div className={"map-container1"}>
                <div className={"search-bar-superimposed"}>
                    <SearchBar />
                </div>
                <Map mapType={"fullscreen"} />
            </div>
        </div>
    );
}