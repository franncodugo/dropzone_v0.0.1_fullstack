using dropzone.Domain.Entities;

namespace dropzone.Domain.Repositories;

public interface IFileUploadRepository
{
    Task<FileUpload?> GetByIdAsync(Guid id, CancellationToken ct = default);
    Task<List<FileUpload>> ListAllAsync(CancellationToken ct = default);
    Task AddAsync(FileUpload entity, CancellationToken ct = default);
    Task DeleteAsync(Guid id, CancellationToken ct = default);
    Task SaveChangesAsync(CancellationToken ct = default);
}