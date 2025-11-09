using dropzone.Application.DTOs;
using Microsoft.AspNetCore.Http;
namespace dropzone.Application.Services;

public interface IFileService
{
    Task<FileUploadDto> UploadAsync(IFormFile file, Guid? userId = null, CancellationToken ct = default);
    Task<List<FileUploadDto>> ListAllAsync(CancellationToken ct = default);
    Task DeleteAsync(Guid id, CancellationToken ct = default);
    Task<Stream> OpenReadAsync(Guid id, CancellationToken ct = default);
}