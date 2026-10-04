
using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using MovieLog.Application.Features.Movies.DTOs;
using MovieLog.Application.Features.Movies.Validators;
using MovieLog.Application.Interfaces;
using MovieLog.Domain.Entities;



namespace MovieLog.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MoviesController : ControllerBase
{
    private readonly IMovieRepository _repository;
    private readonly IValidator<MovieCreateDTO> _createValidator;
    private readonly IValidator<MovieUpdateDTO> _updateValidator;

    public MoviesController(
        IMovieRepository repository,
        IValidator<MovieCreateDTO> createValidator,
        IValidator<MovieUpdateDTO> updateValidator      
        )
    {
        _repository = repository;
        _createValidator = createValidator;
        _updateValidator = updateValidator;
    }

    // GET : api/movies
    [HttpGet]
    public async Task<IActionResult> GetMovies()
    {
        var movies = await _repository.GetAllAsync();
        var response = movies.Select(movie => new MovieResponseDTO
        {
            Id = movie.Id,
            Title = movie.Title,
            Description = movie.Description,
            Director = movie.Director,
            ReleaseYear = movie.ReleaseYear,
            DurationMinutes = movie.DurationMinutes,
            PosterURL = movie.PosterURL,
            SagaId = movie.SagaId
        });


        return Ok(movies); 
    }

    // POST: /api/movies
    [HttpPost]
    public async Task<IActionResult> CreateMovie(
        [FromBody] MovieCreateDTO request)
    {
        var validationResult = await _createValidator.ValidateAsync(request);
        if (!validationResult.IsValid)
        {
            return BadRequest(validationResult.Errors);
        }

        var movie = new Movie
        {
            Title = request.Title,
            Description = request.Description,
            Director = request.Director,
            ReleaseYear = request.ReleaseYear,
            DurationMinutes = request.DurationMinutes,
            PosterURL = request.PosterURL,
            SagaId = request.SagaId
        };

        var movieCreated = await _repository.AddAsync(movie);

        var response = new MovieResponseDTO
        {
            Id = movieCreated.Id,
            Title = movieCreated.Title,
            Description = movieCreated.Description,
            Director = movieCreated.Director,
            ReleaseYear = movieCreated.ReleaseYear,
            DurationMinutes = movieCreated.DurationMinutes,
            PosterURL = movieCreated.PosterURL,
            SagaId = movieCreated.SagaId
        };

        return CreatedAtAction(
            nameof(GetMovies),
            new { id = response.Id },
            response);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateMovie(
    int id,
    [FromBody] MovieUpdateDTO request)
    {
        var validationResult =
            await _updateValidator.ValidateAsync(request);

        if (!validationResult.IsValid)
        {
            return BadRequest(validationResult.Errors);
        }

        var movie = await _repository.GetByIdAsync(id);

        if (movie is null)
        {
            return NotFound("La película no fue encontrada.");
        }

        movie.Title = request.Title;
        movie.Description = request.Description;
        movie.Director = request.Director;
        movie.ReleaseYear = request.ReleaseYear;
        movie.DurationMinutes = request.DurationMinutes;
        movie.PosterURL = request.PosterURL;

        await _repository.UpdateAsync(movie);

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteMovie(int id)
    {
        var movie = await _repository.GetByIdAsync(id);

        if (movie is null)
        {
            return NotFound("La película no fue encontrada.");
        }

        await _repository.DeleteAsync(movie);

        return NoContent();
    }

}
