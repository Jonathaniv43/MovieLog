namespace MovieLog.Domain.Entities
{
    public class WatchedMovie
    {
        public int Id { get; set; }
        public int MovieId { get; set; }
        public int UserId { get; set; }
        public DateTime WatchedDate { get; set; }
        // Rating is optional, so we use a nullable int
        public int? Rating { get; set; } 

    }
}
