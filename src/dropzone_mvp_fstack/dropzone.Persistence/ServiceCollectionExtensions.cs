using dropzone.Domain.Repositories;
using dropzone.Persistence.Context;
using dropzone.Persistence.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace dropzone.Persistence;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddPersistence(this IServiceCollection services, IConfiguration configuration)
    {
        var connectionString = configuration.GetConnectionString("DefaultConnection")
                               ?? "Data Source=dropzone.db";

        services.AddDbContext<DropzoneDbContext>(options =>
            options.UseSqlite(connectionString));

        services.AddScoped<IFileUploadRepository, FileUploadRepository>();

        return services;
    }
}