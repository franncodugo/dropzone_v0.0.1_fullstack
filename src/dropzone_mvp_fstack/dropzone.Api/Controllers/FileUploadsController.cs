using dropzone.Application.Services;
using Microsoft.AspNetCore.Mvc;

namespace dropzone.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FileUploadsController(IFileService fileService, ILogger<FileUploadsController> logger)
    : ControllerBase
{
    private readonly ILogger<FileUploadsController> _logger = logger;

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var list = await fileService.ListAllAsync();
        return Ok(list);
    }

    [HttpGet("{id:guid}")]
    public async Task<IActionResult> Get(Guid id)
    {
        var stream = await fileService.OpenReadAsync(id);
        return File(stream, "application/octet-stream", enableRangeProcessing: true);
    }

    [HttpPost]
    [RequestSizeLimit(200_000_000)] // 200 MB
    public async Task<IActionResult> Upload([FromForm] IFormFile file)
    {
        if (file == null || file.Length == 0) return BadRequest("No file provided");

        var dto = await fileService.UploadAsync(file);
        return CreatedAtAction(nameof(Get), new { id = dto.Id }, dto);
    }

    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        await fileService.DeleteAsync(id);
        return NoContent();
    }
}