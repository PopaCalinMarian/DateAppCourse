using System;

namespace WebApi.Entities;

public class AppUser
{
    public int Id { get; set; }
    public required string UserName { get; set; }

    public required byte[] PasswordHash { get; set; } // the hashed password of user's

    public required byte[] PasswordSalt { get; set; } //the salted(scrambled) hashed password
}
