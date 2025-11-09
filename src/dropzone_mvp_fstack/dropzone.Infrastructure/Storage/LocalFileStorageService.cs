using dropzone.Domain.Interfaces;
using Microsoft.Extensions.Configuration;

namespace dropzone.Infrastructure.Storage;

public sealed class LocalFileStorageService : IFileStorageService
{
    private readonly string _root;

    public LocalFileStorageService(IConfiguration configuration)
    {
        var root = configuration.GetValue<string>("Storage:Local:RootPath");
        _root = string.IsNullOrWhiteSpace(root) ? Path.Combine(AppContext.BaseDirectory, "UploadedFiles") : root;
        Directory.CreateDirectory(_root);
    }

    public async Task DeleteFileAsync(string storagePath, CancellationToken ct = default)
    {
        var full = Path.Combine(_root, storagePath);
        if (File.Exists(full)) File.Delete(full);
        await Task.CompletedTask;
    }

    public Task<Stream> OpenReadAsync(string storagePath, CancellationToken ct = default)
    {
        var full = Path.Combine(_root, storagePath);
        Stream stream = File.OpenRead(full);
        return Task.FromResult(stream);
    }

    public async Task<string> SaveFileAsync(Stream stream, string filename, CancellationToken ct = default)
    {
        var safeName = $"{Guid.NewGuid():N}_{Path.GetFileName(filename)}";
        var full = Path.Combine(_root, safeName);

        using (var fs = new FileStream(full, FileMode.CreateNew))
        {
            await stream.CopyToAsync(fs, ct);
        }

        return safeName; // storage key / relative path
    }
}