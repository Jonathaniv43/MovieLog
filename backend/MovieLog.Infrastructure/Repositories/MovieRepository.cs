using Microsoft.EntityFrameworkCore;
using MovieLog.Application.Interfaces;
using MovieLog.Domain.Entities;
using MovieLog.Infrastructure.Data;

namespace MovieLog.Infrastructure.Repositories
{
    public class MovieRepository : IMovieRepository
    {
        private readonly MovieLogDBContext _context;
        public MovieRepository(MovieLogDBContext context) {
            _context = context;
        }
          
        public async Task<IEnumerable<Movie>> GetAllAsync()
        {
           return await _context.Movies.ToListAsync();
        }

        public async Task<Movie> AddAsync(Movie movie)
        {
            _context.Movies.Add(movie);
            await _context.SaveChangesAsync();
            return movie;
        }
        public async Task<Movie?> GetByIdAsync(int id)
        {
            return await _context.Movies.FindAsync(id);
        }

        public async Task UpdateAsync(Movie movie)
        {
            _context.Movies.Update(movie);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Movie movie)
        {
            _context.Movies.Remove(movie);
            await _context.SaveChangesAsync();
        }
    }
}
