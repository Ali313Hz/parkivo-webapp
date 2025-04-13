import styles from "./GarageInfo.module.css";
import DescriptionComponent from "@/components/molecules/description_component/DescriptionComponent";

export default function InfoGarageComponent({imagen, titulo, valoracion, calle, precio, variant = "default"}){
    const isSidebar = variant === "sidebar";

    return (
        <div className={`${styles.componenteGaraje} ${isSidebar ? styles.sidebarVariant : ""}`}>
            <div className={styles.componenteGarajeImg}>
                <img src={imagen} alt="Imagen del garaje" />
            </div>
            <DescriptionComponent
                titulo={titulo}
                valoracion={valoracion}
                calle={calle}
                precio={precio}
            />
        </div>
    );
}