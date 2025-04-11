import PropTypes from "prop-types";

export default function TextComponent({ texto }) {
    return (
        <div className="componente-texto">
            {texto}
        </div>
    );
}

TextComponent.propTypes = {
    texto: PropTypes.string.isRequired,
};