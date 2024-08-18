using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApi.Data;
using WebApi.Entities;

namespace WebApi.Controllers;

public class BuggyController(DataContext context) : BaseApiController
{
    [Authorize]
    [HttpGet("auth")]
    public ActionResult<string> GetAuth()
    {
        return "secret text";
    }//creating endpoint
    [HttpGet("not-found")]
    public ActionResult<AppUser> GetNotFound()
    {
        var thing = context.Users.Find(-1);

        if (thing == null) return NotFound();

        return thing;
    }//creating endpoint

    [HttpGet("server-error")]
    public ActionResult<AppUser> GetServerError()
    {//apparently null does not have a tostring method attached
        
        var thing = context.Users.Find(-1) ?? throw new Exception("a disaster may happen");

        return thing;
    }//creating endpoint

    [HttpGet("bad-request")]
    public ActionResult<string> GetBadRequest()
    {
        return BadRequest("very bad request");
    }//creating endpoint
}
