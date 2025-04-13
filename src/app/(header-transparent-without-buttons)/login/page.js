import HeaderComponent from "@/components/organisms/componente_header/HeaderComponent";
import {noButtons} from "@/components/molecules/button_component_types/ButtonTypesComponent";

export default function Login() {
    return (
        <div>
            <div>
                <HeaderComponent transparent={true} buttonTypes={noButtons}/>
            </div>
            <div>
                <h1>Login</h1>
                <p>Login page content goes here.</p>
            </div>
        </div>
    );
}