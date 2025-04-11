import PropTypes from "prop-types";
import Image from "next/image";
import ButtonComponent from "@/components/atoms/button_component/ButtonComponent";

export const mainPageButtons = [
  {
    label: "Añade tu garaje",
    type: "secondary",
    to: "/garages/add",
  },
  {
    label: <Image src="/perfil.svg" width={20} height={20} alt={"Perfil"} />,
    type: "primary",
    to: "/perfil",
  },
];

export const landingPageButtons = [
    {
      label: "Register",
      type: "primary",
      to: "/register",
    },
    {
      label: "Login",
      type: "secondary",
      to: "/login",
    }
];

export default function ButtonComponentTypes({ buttonTypes }) {
  const buttons = buttonTypes || mainPageButtons;

  return (
    <div>
      {buttons.map((button, index) => (
        <ButtonComponent
          key={index}
          label={button.label}
          type={button.type}
          to={button.to}
        />
      ))}
    </div>
  );
}

ButtonComponentTypes.propTypes = {
  buttonTypes: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      type: PropTypes.oneOf(["primary", "secondary"]).isRequired,
      to: PropTypes.string,
    })
  ),
};