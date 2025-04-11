import styles from "./GarageInfo.module.css";
import DescriptionComponent from "@/components/molecules/description_component/DescriptionComponent";

export default function InfoGarageComponent({imagen, titulo, valoracion, calle, precio}){
    return(
    <div className={`${styles.componenteGaraje}`}>
        <div className={`${styles.componenteGarajeImg}`}>
                <img src={imagen} alt="?"/>
            </div>
            <DescriptionComponent titulo={titulo} valoracion={valoracion} calle={calle} precio={precio}/>
        </div>
    )
}