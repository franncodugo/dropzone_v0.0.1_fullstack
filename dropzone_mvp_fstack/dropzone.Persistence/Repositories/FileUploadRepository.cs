using dropzone.Domain.Entities;
using dropzone.Domain.Repositories;
using dropzone.Persistence.Context;
using Microsoft.EntityFrameworkCore;

namespace dropzone.Persistence.Repositories;

public sealed class FileUploadRepository(DropzoneDbContext db) : IFileUploadRepository
{
    public async Task AddAsync(FileUpload entity, CancellationToken ct = default)
    {
        await db.FileUploads.AddAsync(entity, ct);
    }

    public async Task DeleteAsync(Guid id, CancellationToken ct = default)
    {
        var e = await db.FileUploads.FirstOrDefaultAsync(x => x.Id == id, ct);
        if (e != null) db.FileUploads.Remove(e);
    }

    public async Task<FileUpload?> GetByIdAsync(Guid id, CancellationToken ct = default)
    {
        return await db.FileUploads.FirstOrDefaultAsync(x => x.Id == id, ct);
    }

    public async Task<List<FileUpload>> ListAllAsync(CancellationToken ct = default)
    {
        return await db.FileUploads.OrderByDescending(x => x.UploadedAt).ToListAsync(ct);
    }

    public Task SaveChangesAsync(CancellationToken ct = default)
    {
        return db.SaveChangesAsync(ct);
    }
}