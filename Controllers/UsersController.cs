using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Entities;

namespace WebApi.Controllers;

[ApiController]//decorator for this controller
[Route("api/[controller]")] //api/users
public class UsersController(DataContext context) : ControllerBase
{
    //private readonly DataContext _context = context;//aici am injectat cu atributul de DataContext
    //locatia unde se face cererea de la client de lista de useri, 

    [HttpGet] // /api/users
    public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
    {
        var users = await context.Users.ToListAsync();

        return users;
    }

    [HttpGet("{id:int}")] // /api/users/3
    public async Task<ActionResult<AppUser>> GetUser(int id)
    {
        var user = await context.Users.FindAsync(id);//cautam userul dupa id
        if(user==null) return NotFound();
        return user;
    } //aici modificam endpointul ca sa nu se bata cap in cap cu endpointul de mai sus
}
