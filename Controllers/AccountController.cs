using System;
using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.DTOs;
using WebApi.Entities;
using WebApi.Interfaces;

namespace WebApi.Controllers;

public class AccountController(DataContext context, ITokenService tokenService) : BaseApiController
{
    [HttpPost("register")] //account/register

    public async Task<ActionResult<UserDTO>> Register(RegisterDTO registerdto)
    {
        if(await UserExists(registerdto.UserName)) 
        return BadRequest("Username is taken");

        using var hmac = new HMACSHA512();

        var user = new AppUser{
            UserName = registerdto.UserName.ToLower(),
            PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerdto.Password)),
            PasswordSalt = hmac.Key
        };

        context.Users.Add(user);
        await context.SaveChangesAsync();
        return new UserDTO
        {
            UserName = user.UserName,
            Token = tokenService.CreateToken(user)
        };
    }

    [HttpPost("login")]
    public async Task<ActionResult<UserDTO>> Login(LoginDTO logindto)
    {
        var user = await context.Users.FirstOrDefaultAsync(x => x.UserName == logindto.Username.ToLower());
        if(user == null) return Unauthorized("Invalid username");

        using var hmac = new HMACSHA512(user.PasswordSalt);
        var ComputeHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(logindto.Password));

        for(int i=0; i<ComputeHash.Length; i++)
        {
            if(ComputeHash[i] != user.PasswordHash[i])
            return Unauthorized("Invalid password");
        }
        return new UserDTO{
            UserName = user.UserName,
            Token = tokenService.CreateToken(user)
        };
    }
    private async Task<bool> UserExists(string username)
    {
        return await context.Users.AnyAsync(x => x.UserName.ToLower() == username.ToLower()); 
    }
}
