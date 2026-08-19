import "./styles.css";

export function App() {
  return (
    <>
      <div className="animated-background" aria-hidden="true">
        <span className="gradient-field gradient-field-one" />
        <span className="gradient-field gradient-field-two" />
        <span className="gradient-field gradient-field-three" />
      </div>

      <main className="app-shell">
        <header className="site-header" aria-label="Navegacion principal">
          <a className="brand" href="/" aria-label="Volver al inicio">
            <img src="/static/avatar.png" alt="" />
            <span>
              <strong>Braulio</strong> <em>Díaz</em>
            </span>
          </a>
          <nav>
            <a href="#curriculum">Curriculum vitae</a>
            <a href="#portafolio">Portafolio</a>
            <a href="#proyectos">Proyectos personales</a>
          </nav>
          <a className="contact-button" href="#contacto">
            Contáctame
          </a>
        </header>

        <section className="home-view" aria-labelledby="intro-title">
          <div className="intro-block">
            <p className="role-copy">
              Soy:
              <br />
              Diseñador /
              <br />
              Desarrollador /
            </p>
            <h1 id="intro-title">
              Braulio
              <br />
              <em>Díaz.</em>
            </h1>
          </div>

          <figure className="profile-card" aria-label="Avatar de Braulio Diaz">
            <img src="/static/profile.png" alt="" />
          </figure>

          <button className="easter-egg" type="button">
            <span>Haz Click</span>
            <img src="/static/monitor.svg" alt="" />
          </button>

          <aside className="home-story" aria-label="Presentacion personal">
            <div className="quote-mark" aria-hidden="true">
              “
            </div>
            <button
              className="story-audio"
              type="button"
              aria-label="Reproducir presentacion"
            >
              <span aria-hidden="true" />
            </button>
            <div>
              <p>
                Empecé a diseñar profesionalmente a los 18 años, después de
                descubrir bastante rápido que mi primer trabajo no era lo mío.
              </p>
              <p>
                Con lo que había aprendido de Diseño Gráfico en la preparatoria
                hice mi primer portafolio y empecé a buscar oportunidades. Una
                cosa llevó a la otra: diseño gráfico, frontend, UX, publicidad,
                social media, desarrollo y un montón de cosas en medio.
              </p>
              <p>
                Nunca tuve un plan para hacer de todo. Simplemente me gusta
                aprender, experimentar y hacer que las ideas funcionen.
              </p>
            </div>
          </aside>

          <a className="cv-card" href="#curriculum">
            <span>Currículum vitae</span>
            <span aria-hidden="true">→</span>
          </a>
        </section>
      </main>
    </>
  );
}
