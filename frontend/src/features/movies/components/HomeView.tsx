

export function HomeView() {
  return (
    // space-y-10 agrega separación vertical entre las secciones hijas.
    <div className="space-y-10">
      {/* Encabezado de la página de inicio. */}
      <header>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary">
          MovieLog
        </p>
        <h1 className="mt-2 text-3xl font-bold text-brand-text">
          Tu espacio de cine
        </h1>
        <p className="mt-2 text-brand-muted">
          Descubre qué ver y sigue organizando tus películas.
        </p>
      </header>

      {/*
        section agrupa contenido relacionado.
        Estas secciones quedan preparadas para recibir sus listas mock después.
      */}
      <section aria-labelledby="continue-saga-title">
        <h2
          id="continue-saga-title"
          className="text-xl font-bold text-brand-text"
        >
          Continúa una saga
        </h2>
        <p className="mt-2 text-sm text-brand-muted">
          Aquí aparecerá la siguiente película de una saga que empezaste.
        </p>
      </section>

      <section aria-labelledby="recommendations-title">
        <h2
          id="recommendations-title"
          className="text-xl font-bold text-brand-text"
        >
          Recomendadas para ti
        </h2>
        <p className="mt-2 text-sm text-brand-muted">
          Aquí aparecerán recomendaciones de ejemplo.
        </p>
      </section>

      <section aria-labelledby="watchlist-title">
        <h2
          id="watchlist-title"
          className="text-xl font-bold text-brand-text"
        >
          Por ver
        </h2>
        <p className="mt-2 text-sm text-brand-muted">
          Aquí aparecerán las películas que marques con una estrella.
        </p>
      </section>

    </div>
  )
}