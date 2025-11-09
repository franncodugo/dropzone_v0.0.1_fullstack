using dropzone.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace dropzone.Persistence.Context;

public class DropzoneDbContext : DbContext
{
    public DropzoneDbContext(DbContextOptions<DropzoneDbContext> options) : base(options) { }

    public DbSet<User> Users => Set<User>();
    public DbSet<FileUpload> FileUploads => Set<FileUpload>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<User>(b =>
        {
            b.HasKey(x => x.Id);
            b.Property(x => x.Email).IsRequired();
        });

        modelBuilder.Entity<FileUpload>(b =>
        {
            b.HasKey(x => x.Id);
            b.Property(x => x.FileName).IsRequired();
            b.Property(x => x.FilePath).IsRequired();
        });
    }
}