import HeaderComponent from "@/components/organisms/componente_header/HeaderComponent";
import {noButtons} from "@/components/molecules/button_component_types/ButtonTypesComponent";

export default function Register() {
    return (
        <div>
            <div>
                <HeaderComponent transparent={true} buttonTypes={noButtons}/>
            </div>
            <div>
                <h1>Register</h1>
                <p>Register page content goes here.</p>
            </div>
        </div>
    );
}