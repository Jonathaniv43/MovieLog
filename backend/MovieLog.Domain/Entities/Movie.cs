namespace MovieLog.Domain.Entities

{
    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Director { get; set; } = string.Empty;
        public int ReleaseYear { get; set; }
        public int DurationMinutes { get; set; } // Duration in minutes
        public string? PosterURL { get; set; }   
        public int? SagaId { get; set; } // Nullable to allow movies without a saga
        

    }
}
