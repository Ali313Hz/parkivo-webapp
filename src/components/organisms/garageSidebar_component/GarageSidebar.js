import styles from "./GarageSidebar.module.css";
import InfoGarageComponent from "@/components/organisms/component_garage_info/InfoGarageComponent.jsx";

export default function GarageSidebar({ garages }) {
    return (
        <div className={`sidebar-garage-height ${styles.sidebar}`}>
            {garages.map((garage, index) => (
                <InfoGarageComponent
                    key={index}
                    imagen={garage.imagen}
                    titulo={garage.titulo}
                    valoracion={garage.valoracion}
                    calle={garage.calle}
                    precio={garage.precio}
                    variant="sidebar"
                />
            ))}
        </div>
    );
}