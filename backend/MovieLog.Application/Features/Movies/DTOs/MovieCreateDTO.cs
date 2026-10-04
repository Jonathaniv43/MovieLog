namespace MovieLog.Application.Features.Movies.DTOs
{
    public class MovieCreateDTO
    {
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Director { get; set; } = string.Empty;
        public int ReleaseYear { get; set; }
        public int DurationMinutes { get; set; }
        public string? PosterURL { get; set; }
        public int? SagaId { get; set; }
    }
}
