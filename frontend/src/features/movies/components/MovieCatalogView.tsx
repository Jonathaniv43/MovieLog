import { useEffect, useState } from 'react'
import type { Movie } from '../types/movie.types'
import { getMoviesCatalogAsync } from '../api/movieApi'
import { MovieCard } from './MovieCard'

export function MovieCatalogView() {
      // --- ZONA 3: CEREBRO DEL MÓDULO --
    const [movies, setMovies] = useState<Movie[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [searchTerm, setSearchTerm] = useState('')
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')
    const [selectedYear, setSelectedYear] = useState('all')
    useEffect(() => {  
       getMoviesCatalogAsync()
      .then((catalog) => {
        setMovies(catalog)
      })
      .catch(() => {
        setError('No se pudo cargar el catálogo.')
      })
      .finally(() => {
        setIsLoading(false)
      })   

    }, [])
    useEffect(() => {
        const timerId = window.setTimeout(() => {
        setDebouncedSearchTerm(searchTerm)
        }, 300)
        return () => {
        window.clearTimeout(timerId)
        }
    }, [searchTerm])
    
    const releaseYears = [...new Set(movies.map((movie) => movie.releaseYear))]
            .sort((yearA, yearB) => yearB - yearA)
    const normalizedSearch = debouncedSearchTerm.trim().toLowerCase()
    const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title.toLowerCase().includes(normalizedSearch)

    const matchesYear =
        selectedYear === 'all' || movie.releaseYear === Number(selectedYear)

    return matchesTitle && matchesYear
    })
    // --- ZONA 4: RENDERIZADO  ---
    return (
         <section id="catalogo">
             <header className="mb-8">
                <p className="text-2xl font-semibold uppercase tracking-widest text-brand-primary">
                    MovieLog
                </p>
                <h1 className="mt-2 text-3xl font-bold text-brand-text">
                    Catálogo de películas
                </h1>
                <p className="mt-2 text-brand-muted">
                    Explora tus películas vistas y pendientes.
                </p>

             </header>
             <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end">
                <div className="flex flex-col">
        
                <label
                    htmlFor="movie-search"
                    className="text-sm font-medium text-brand-text"
                >
                    Buscar película
                </label>

                <input
                    id="movie-search"
                    type="search"
                    value={searchTerm}
                    // Cada escritura actualiza el estado y React vuelve a renderizar.
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Escribe un título..."
                    className="mt-2 w-full rounded-lg border border-brand-border bg-brand-surface px-4 py-3 text-brand-text placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-primary sm:max-w-md"
                />
                </div>
                <div>
                    <label className="flex flex-col gap-2 text-sm font-medium text-brand-text">
                    Año de estreno

                        <select
                        value={selectedYear}
                        onChange={(event) => setSelectedYear(event.target.value)}
                        className="rounded-lg border border-brand-border bg-brand-surface px-4 py-3 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        >
                        <option value="all">Todos los años</option>

                        {releaseYears.map((year) => (
                            <option key={year} value={year}>
                            {year}
                            </option>
                        ))}
                        </select>
                    </label>
                </div>
                
             </div>
             
             {isLoading ? (
                <p role="status" className="text-brand-muted">
                Cargando películas...
                </p>
                ) : error ? (
                    <p role="alert" className="text-brand-danger">
                        {error}
                    </p>
            ) : (
                    
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {filteredMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                    </div>
            )}
         </section>
    )
}