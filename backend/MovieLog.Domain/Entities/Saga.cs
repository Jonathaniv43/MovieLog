

namespace MovieLog.Domain.Entities
{
    public class Saga
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;

        public List<Movie> Movies { get; set; } = new List<Movie>();
    }
}
