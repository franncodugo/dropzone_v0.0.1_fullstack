namespace dropzone.Application.DTOs;

public record FileUploadDto(Guid Id, string FileName, string FilePath, long Size, string MimeType, DateTime UploadedAt);