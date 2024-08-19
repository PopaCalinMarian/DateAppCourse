using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.Entities;

[Table("Photos")]
public class Photo
{
    public int Id { get; set; }
    public required string Url { get; set; }
    public bool  IsMain { get; set; }
    public string? PublicId { get; set; }
    //Navigation properties needed for the one to many relation
    public int AppUserId { get; set; }
    public AppUser? AppUser { get; set; } = null;
}