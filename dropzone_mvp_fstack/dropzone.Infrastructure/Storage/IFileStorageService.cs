namespace dropzone.Infrastructure.Storage;

public interface IFileStorageService
{
    // Save a file stream and return the storage path (relative key).
    Task<string> SaveFileAsync(Stream stream, string filename, CancellationToken ct = default);

    // Delete a file by storage key/path.
    Task DeleteFileAsync(string storagePath, CancellationToken ct = default);

    // Open a read stream if needed.
    Task<Stream> OpenReadAsync(string storagePath, CancellationToken ct = default);
}