using System;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.DTOs;
using WebApi.Entities;
using WebApi.Interfaces;

namespace WebApi.Controllers;

[Authorize]
public class UsersController(IUserRepository userRepository) : BaseApiController
{
    //private readonly DataContext _context = context;//aici am injectat cu atributul de DataContext
    //locatia unde se face cererea de la client de lista de useri, 

    [HttpGet] // /api/users
    public async Task<ActionResult<IEnumerable<MemberDTO>>> GetUsers()
    {
        var users = await userRepository.GetMembersAsync();
        //var usersToReturn = mapper.Map<IEnumerable<MemberDTO>>(users);//we are using the mapper to map from the selected users into an enum of memberdtos
        return Ok(users);
    }

    [HttpGet("{username}")] // /api/users/3
    public async Task<ActionResult<MemberDTO>> GetUser(string username)
    {
        var user = await userRepository.GetMemberAsync(username);//cautam userul dupa id
        if(user==null) return NotFound();
        return user;//same bullshit as before, we are mapping the user to the memberdto
    } //aici modificam endpointul ca sa nu se bata cap in cap cu endpointul de mai sus
}
