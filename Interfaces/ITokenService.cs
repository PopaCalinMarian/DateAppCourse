using System;
using WebApi.Entities;

namespace WebApi.Interfaces;

public interface ITokenService
{
    string CreateToken(AppUser user); //method for creating jwt token
}
