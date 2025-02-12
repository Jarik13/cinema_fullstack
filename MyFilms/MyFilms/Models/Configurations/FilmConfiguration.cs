using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace MyFilms.Models.Configurations
{
    public class FilmConfiguration : IEntityTypeConfiguration<Film>
    {
        public void Configure(EntityTypeBuilder<Film> builder)
        {
            builder.HasKey(x => x.Id);

            //M:N
            builder.HasMany(f => f.Genres)
                    .WithMany(g => g.Films)
                    .UsingEntity(j => j.ToTable("FilmGenres")); ;
        }
    }
}
