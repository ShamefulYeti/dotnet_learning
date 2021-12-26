using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class UsersController : ControllerBase
  {
    private readonly DataContext _context;
    public UsersController(DataContext context)
    {
      _context = context;
    }

    //  api/users
    [HttpGet]
    public ActionResult<IEnumerable<AppUser>> GetUsers()
    {
      var users = _context.Users.ToList();
      return users;
    }
    //  api/users/2
    [HttpGet("{id}")]
    public ActionResult<AppUser> GetUser(int id)
    {
      return _context.Users.Find(id);
    }
  }
}