import styles from "./Description.module.css";
import TextComponent from "@/components/atoms/TextComponent";
import StarRating from "@/components/StarRating";


export default function DescriptionComponent({titulo, valoracion, calle, precio}){
    return(
        <div className={`${styles.descripcion}`}>
            <div className={`${styles.izq}`}>
                <TextComponent texto={titulo}/>
            </div>
            <div className={`${styles.drch}`}>
                <StarRating rating={valoracion}/>
            </div>
            <div className={`${styles.izq}`}>
                <TextComponent texto={calle}/>
            </div>
            <div className={`${styles.drch}`}>
                <TextComponent texto={precio}/>
            </div>
        </div>
    )
}