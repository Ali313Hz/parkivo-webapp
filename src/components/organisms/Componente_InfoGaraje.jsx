import Componente_Descripcion from "../molecules/Componente_Descripcion";

export default function Componente_InfoGaraje({imagen, titulo, valoracion, calle, precio}){
    return(
        <div className="componente-garaje">
            <div className={"componente-garaje-img"}>
                <img src={imagen} alt="?"/>
            </div>
            <Componente_Descripcion titulo={titulo} valoracion={valoracion} calle={calle} precio={precio}/>
        </div>
    )
}