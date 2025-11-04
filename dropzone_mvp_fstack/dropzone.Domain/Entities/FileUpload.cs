namespace dropzone.Domain.Entities;

public sealed class FileUpload
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string FileName { get; set; } = null!;
    public string FilePath { get; set; } = null!; 
    public long Size { get; set; }
    public string MimeType { get; set; } = null!;
    public DateTime UploadedAt { get; set; } = DateTime.UtcNow;

    // Optional
    // public Guid? UploadedById { get; set; }
}