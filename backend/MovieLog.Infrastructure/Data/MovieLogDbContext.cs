using Microsoft.EntityFrameworkCore;
using MovieLog.Domain.Entities;
namespace MovieLog.Infrastructure.Data
{
    public class MovieLogDBContext : DbContext
    {
        public MovieLogDBContext(DbContextOptions<MovieLogDBContext> options) : base(options)
        {

        }
        public DbSet<Movie> Movies { get; set; }
    }
}
