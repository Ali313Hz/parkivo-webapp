import PropTypes from "prop-types";
import styles from "./Button.module.css";
import Link from "next/link";

export default function ButtonComponent({ label, type, to }) {
  if (to) {
    return (
      <Link className={`${styles.btn} ${type === "primary" ? styles.primary : styles.secondary}`} href={to}>
        {label}
      </Link>
    );
  }

  return (
    <button className={`${styles.btn} ${type ? styles.primary : styles.secondary}`}>
      {label}
    </button>
  );
}

ButtonComponent.propTypes = {
  label: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"]),
  to: PropTypes.string
};