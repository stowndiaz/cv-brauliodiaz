import "./styles.css";

export function App() {
  return (
    <main className="app-shell">
      <header className="site-header" aria-label="Navegacion principal">
        <a className="brand" href="/" aria-label="Volver al inicio">
          <img src="/static/avatar.png" alt="" />
          <span>
            <strong>Braulio</strong> <em>Diaz</em>
          </span>
        </a>
        <nav>
          <a href="#curriculum">Curriculum vitae</a>
          <a href="#portafolio">Portafolio</a>
          <a href="#proyectos">Proyectos personales</a>
        </nav>
        <a className="contact-button" href="#contacto">
          Contactame
        </a>
      </header>

      <section className="starter-view" aria-labelledby="intro-title">
        <p>Soy: Disenador / Desarrollador /</p>
        <h1 id="intro-title">
          Braulio
          <br />
          <em>Diaz.</em>
        </h1>
        <p className="note">
          Base tecnica lista. La siguiente pasada ya puede empezar a traducir
          los mockups a componentes reales.
        </p>
      </section>
    </main>
  );
}
