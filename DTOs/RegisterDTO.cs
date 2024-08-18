using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace WebApi.Data;

public class RegisterDTO
{
    [Required]
    [MaxLength(100)]
    [JsonPropertyName("username")] // Ensures that the JSON key is lowercase "username"
    public string UserName { get; set; } = string.Empty;

    [Required]
    [StringLength(8, MinimumLength = 4)]
    public string Password { get; set; } = string.Empty;
}
