import TextComponent from "@/components/atoms/TextComponent";
import StarRating from "@/components/StarRating";

export default function Componente_Descripcion({titulo, valoracion, calle, precio}){
    return(
        <div className="componente-descripcion">
            <div className="componente-descripcion-izq">
                <TextComponent texto={titulo}/>
            </div>
            <div className="componente-descripcion-drch">
                <StarRating rating={valoracion}/>
            </div>
            <div className="componente-descripcion-izq">
                <TextComponent texto={calle}/>
            </div>
            <div className="componente-descripcion-drch">
                <TextComponent texto={precio}/>
            </div>
        </div>
    )
}