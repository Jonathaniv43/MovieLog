using FluentValidation;
using MovieLog.Application.Features.Movies.DTOs;

namespace MovieLog.Application.Features.Movies.Validators
{
    public class UpdateMovieValidator : AbstractValidator<MovieUpdateDTO>
    {
        public UpdateMovieValidator()
        {
            RuleFor(x => x.Title)
                .NotEmpty()
                .WithMessage("El título de la película es obligatorio.")
                .MinimumLength(2)
                .WithMessage("El título debe tener al menos 2 caracteres.")
                .MaximumLength(200)
                .WithMessage("El título no puede superar los 200 caracteres.");

            RuleFor(x => x.Description)
                .NotEmpty()
                .WithMessage("La descripción es obligatoria.");

            RuleFor(x => x.Director)
                .NotEmpty()
                .WithMessage("El director es obligatorio.");

            RuleFor(x => x.ReleaseYear)
                .GreaterThan(1888)
                .WithMessage("El año de estreno no es válido.");

            RuleFor(x => x.DurationMinutes)
                .GreaterThan(0)
                .WithMessage("La duración debe ser mayor que cero.");
        }
    }
}
