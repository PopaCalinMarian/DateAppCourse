using System;
using WebApi.Entities;
using WebApi.Interfaces;
using System.IdentityModel.Tokens;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;

namespace WebApi.Services;

public class TokenService(IConfiguration config) : ITokenService
{
    public string CreateToken(AppUser user)
    {
        var tokenKey = config["TokenKey"] ?? throw new Exception("Cannot access tokenKey from appsettings");
        if(tokenKey.Length < 64) throw new Exception("You tokenKey needs to be longer");
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenKey));
        //generating symmetric key to later sign the jwt

        var claims = new List<Claim>
        {
            new Claim(ClaimTypes.NameIdentifier, user.UserName)
        };

        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
        //specifing how the jwt will be signed
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(claims),//associating the claim defined above
            Expires = DateTime.UtcNow.AddDays(7),//setting expirations date
            SigningCredentials = creds//attaching the signin creds
        };//defining the context & properties of the token

        var tokenHandler = new JwtSecurityTokenHandler();//creting and validating the jwt
        var token = tokenHandler.CreateToken(tokenDescriptor);//creating the actual token based on the properties above

        return tokenHandler.WriteToken(token);//converting the token to a string then returning it
    }
}
