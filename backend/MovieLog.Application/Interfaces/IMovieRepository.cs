using MovieLog.Domain.Entities;

namespace MovieLog.Application.Interfaces
{
    public interface IMovieRepository
    {
        Task<IEnumerable<Movie>> GetAllAsync();
        Task<Movie> AddAsync(Movie movie);
        Task<Movie?> GetByIdAsync(int id);
        Task UpdateAsync(Movie movie);
        Task DeleteAsync(Movie movie);
    }
}
