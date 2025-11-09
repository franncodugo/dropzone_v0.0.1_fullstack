using Microsoft.Extensions.DependencyInjection;

namespace dropzone.Application;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddScoped<Services.IFileService, Services.FileService>();
        return services;
    }
}