using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using MovieLog.Infrastructure.Data;
using MovieLog.Application.Interfaces;
using MovieLog.Infrastructure.Repositories;

namespace MovieLog.Infrastructure
{
    public static class DependencyInjection
    {
    public static IServiceCollection AddInfrastructure(
    this IServiceCollection services,
    string connectionString)
        {
            services.AddDbContext<MovieLogDBContext>(options =>
            options.UseNpgsql(connectionString));

            services.AddScoped<IMovieRepository, MovieRepository>();
            return services;

        }
    }
}
