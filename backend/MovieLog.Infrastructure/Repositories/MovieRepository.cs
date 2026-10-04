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
    }
}
