import type {Movie} from "../types/movie.types.ts"

export const  getMoviesCatalogAsync = (): Promise<Movie[]> =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const movieCatalog: Movie[] =[
                {
                    id: 1,
                    title: 'Interestelar',
                    description: 'Un equipo viaja más allá de nuestra galaxia.',
                    director: 'Christopher Nolan',
                    releaseYear: 2014,
                    durationMinutes: 169,
                    posterURL:
                        'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
                    sagaId: null

                },
                {
                    id: 2,
                    title: 'La llegada',
                    description: 'Una lingüista intenta comunicarse con visitantes.',
                    director: 'Denis Villeneuve',
                    releaseYear: 2016,
                    durationMinutes: 116,
                    posterURL:
                        'https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg',
                    sagaId: null
                },
                {
                    id: 3,
                    title: 'El viaje de Chihiro',
                    description: 'Una niña entra en un mundo habitado por espíritus.',
                    director: 'Hayao Miyazaki',
                    releaseYear: 2001,
                    durationMinutes: 125,
                    posterURL:
                        'https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
                    sagaId: null
                },

            ]
            resolve(movieCatalog)
        }, 1000)
    })
}