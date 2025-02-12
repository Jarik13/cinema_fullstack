using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace MyFilms.Models.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasKey(x => x.Id);

            //1:N
            builder.HasMany(u => u.Tickets)
                    .WithOne(t => t.User)
                    .HasForeignKey(k => k.UserId);

            //1:N
            builder.HasMany(u => u.Reviews)
                    .WithOne(r => r.User)
                    .HasForeignKey(k => k.UserId);
        }
    }
}
