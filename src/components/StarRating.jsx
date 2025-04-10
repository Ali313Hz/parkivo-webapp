const StarRating = ({ rating }) => {
  const estrella = "★";
  const estrellaVacia = "☆";
  let puntuacion = "";

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      puntuacion += estrella;
    } else {
      puntuacion += estrellaVacia;
    }
  }

  return <span>{puntuacion}</span>;
};

export default StarRating;