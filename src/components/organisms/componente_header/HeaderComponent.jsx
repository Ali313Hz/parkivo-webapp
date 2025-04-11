import PropTypes from "prop-types";
import styles from "./Header.module.css";
import { Logo } from "@/components/atoms/Logo";
import ButtonComponentTypes from "@/components/molecules/button_component_types/ButtonTypesComponent";

export default function Componente_Header({ transparent, buttonTypes }) {
  return (
    <header className={`${styles.header} ${transparent ? styles.headerTransparent : styles.headerColor}`}>
      <div className={`${styles.headerContainer}`}>
          <Logo />
          <div className={`${styles.headerNav}`}>
            <ButtonComponentTypes buttonTypes={buttonTypes} />
          </div>
      </div>
    </header>
  );
}

Componente_Header.propTypes = {
  transparent: PropTypes.bool,
  buttonTypes: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      type: PropTypes.oneOf(["primary", "secondary"]).isRequired,
      to: PropTypes.string,
    })
  ),
};