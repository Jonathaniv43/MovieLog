

export interface Movie {
    id: number;
    title: string;
    description: string;
    director: string;
    releaseYear: number;
    durationMinutes: number;
    posterURL: string | null;
    sagaId: number | null;
}