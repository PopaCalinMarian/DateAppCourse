using System;
using WebApi.Extensions;

namespace WebApi.Entities;

public class AppUser
{
    public int Id { get; set; }
    public required string UserName { get; set; }

    public byte[] PasswordHash { get; set; } = []; // the hashed password of user's

    public byte[] PasswordSalt { get; set; } = []; 
    //the salted(scrambled) hashed password
    public DateOnly DateOfBirth { get; set; }

    public required string KnownAs { get; set; }

    public DateTime Created { get; set; } = DateTime.UtcNow;//setting the date time to the current time
    public DateTime LastActive { get; set; } = DateTime.UtcNow;
    public required string Gender { get; set; }
    public string? Introduction { get; set; }
    public string? Interests { get; set; }
    public string? LookingFor { get; set; }
    public required string City { get; set; }
    public required string Country { get; set; }
    public List<Photo> Photos { get; set; } = [];
    /*public int GetAge()
    {
       return DateOfBirth.Calculateage(); 
    }*/
}
