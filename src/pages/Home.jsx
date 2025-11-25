import "./Home.css";

export default function Home() {
  return (
    <section id="home" className="home-container">
      <div className="text-content">
        <h1>
          Hola, yo soy <span>Nathaly Núñez</span> <br />
          pero puedes llamarme <span>Nath</span>
        </h1>
        <p>
          Arquitecta • Diseñadora Web • Desarrolladora Front-End
        </p>
        <button className="main-btn">Ver mis proyectos</button>
      </div>
    </section>
  );
}
