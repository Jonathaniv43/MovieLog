import type { Movie } from '../types/movie.types'

interface MovieCardProps {
  movie: Movie
}

export function MovieCard({movie}: MovieCardProps) {
    return (
        <article className = "overflow-hidden rounded-2xl border border-brand-border bg-brand-surface shadow-md transition-transform duration-200 hover:-translate-y-1">
            {movie.posterURL ?
                (
                <img
                src={movie.posterURL}
                alt = {`Poster de ${movie.title}`}
                className="aspect-[2/3] w-full object-cover"
            />): (
                <div className="flex  aspect-[2/3] items-center justify-center bg-brand-background p-4 text-center text-brand-muted">
                    Póster no disponible
                </div>
            )}
            <div className="p-4">
                <p className="text-sm text-brand-muted">
                    {movie.releaseYear} · {movie.durationMinutes} min
                </p>

                <h2 className="mt-1 text-lg font-bold text-brand-text">
                    {movie.title}
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                    {movie.description}
                </p>

                <p className="mt-3 text-sm text-brand-muted">
                    Dirección: {movie.director}
                </p>
            </div>
        </article>
    )
}
