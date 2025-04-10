import Componente_Texto from "@/components/atoms/Componente_Texto";
import StarRating from "@/components/StarRating";

export default function Componente_Descripcion({titulo, valoracion, calle, precio}){
    return(
        <div className="componente-descripcion">
            <div className="componente-descripcion-izq">
                <Componente_Texto texto={titulo}/>
            </div>
            <div className="componente-descripcion-drch">
                <StarRating rating={valoracion}/>
            </div>
            <div className="componente-descripcion-izq">
                <Componente_Texto texto={calle}/>
            </div>
            <div className="componente-descripcion-drch">
                <Componente_Texto texto={precio}/>
            </div>
        </div>
    )
}