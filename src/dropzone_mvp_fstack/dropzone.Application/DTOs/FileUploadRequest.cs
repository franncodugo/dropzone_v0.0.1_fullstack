using Microsoft.AspNetCore.Http;

namespace dropzone.Application.DTOs;

public sealed class FileUploadRequest
{
    public IFormFile File { get; set; } = null!;
}