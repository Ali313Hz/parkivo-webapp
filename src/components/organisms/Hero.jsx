import { SearchBar } from "../molecules/SearchBar";

export function Hero() {
  return (
    <section className="hero-section">
      {/* Background with gradient overlay */}
      <div className="hero-overlay" />

      {/* Background image */}
      <div
        className="hero-bg"
        style={{
          backgroundImage: "url('/hero-garage.jpg')"
        }}
      />

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Encuentra el garaje perfecto para tu vehículo
        </h1>
        <p className="hero-description">
          Conectamos propietarios de garajes con conductores que necesitan un espacio seguro para estacionar
        </p>

        <SearchBar />
      </div>
    </section>
  );
}
