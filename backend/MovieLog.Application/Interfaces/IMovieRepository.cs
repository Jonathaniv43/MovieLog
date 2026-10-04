using MovieLog.Domain.Entities;

namespace MovieLog.Application.Interfaces
{
    public interface IMovieRepository
    {
        Task<IEnumerable<Movie>> GetAllAsync();
    }
}
