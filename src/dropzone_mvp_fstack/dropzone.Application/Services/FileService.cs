using dropzone.Application.DTOs;
using dropzone.Domain.Entities;
using dropzone.Domain.Interfaces;
using dropzone.Domain.Repositories;
using Microsoft.AspNetCore.Http;

namespace dropzone.Application.Services;

public sealed class FileService: IFileService
{
    private readonly IFileUploadRepository _repo;
        private readonly IFileStorageService _storage;

        public FileService(IFileUploadRepository repo, IFileStorageService storage)
        {
            _repo = repo;
            _storage = storage;
        }

        public async Task<FileUploadDto> UploadAsync(IFormFile file, Guid? userId = null, CancellationToken ct = default)
        {
            await using var stream = file.OpenReadStream();
            var storagePath = await _storage.SaveFileAsync(stream, file.FileName, ct);

            var entity = new FileUpload
            {
                FileName = file.FileName,
                FilePath = storagePath,
                MimeType = file.ContentType ?? "application/octet-stream",
                Size = file.Length,
                UploadedAt = DateTime.UtcNow,
                UploadedById = userId
            };

            await _repo.AddAsync(entity, ct);
            await _repo.SaveChangesAsync(ct);

            return new FileUploadDto(entity.Id, entity.FileName, entity.FilePath, entity.Size, entity.MimeType, entity.UploadedAt);
        }

        public async Task DeleteAsync(Guid id, CancellationToken ct = default)
        {
            var e = await _repo.GetByIdAsync(id, ct);
            if (e == null) return;
            await _storage.DeleteFileAsync(e.FilePath, ct);
            await _repo.DeleteAsync(id, ct);
            await _repo.SaveChangesAsync(ct);
        }

        public async Task<List<FileUploadDto>> ListAllAsync(CancellationToken ct = default)
        {
            var list = await _repo.ListAllAsync(ct);
            return list.Select(x => new FileUploadDto(x.Id, x.FileName, x.FilePath, x.Size, x.MimeType, x.UploadedAt)).ToList();
        }

        public async Task<Stream> OpenReadAsync(Guid id, CancellationToken ct = default)
        {
            var e = await _repo.GetByIdAsync(id, ct) ?? throw new FileNotFoundException();
            return await _storage.OpenReadAsync(e.FilePath, ct);
        }
}