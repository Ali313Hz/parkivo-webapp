import PropTypes from "prop-types";
import Image from "next/image";

export function LogoComponent({ size }) {
  const logoSize = size || LogoComponent.defaultProps.size;

  return (
    <div>
      <Image src="/logo.svg" width={logoSize} height={logoSize} alt="logo" />
    </div>
  );
}

LogoComponent.propTypes = {
  size: PropTypes.number,
};

LogoComponent.defaultProps = {
  size: 200,
};