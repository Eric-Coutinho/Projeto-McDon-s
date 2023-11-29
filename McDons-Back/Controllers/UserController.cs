using System.Threading.Tasks;
using DTO;
using McDons_Back.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Trevisharp.Security.Jwt;

namespace McDons_Back.Controllers;

[ApiController]
[Route("user")]

public class UserController : ControllerBase
{
    [HttpPost("login")]
    [EnableCors("DefaultPolicy")]

    public async Task<ActionResult> Login(
        [FromBody]UserData user,
        [FromServices]IUserService service,
        [FromServices]ISecurityService security,
        [FromServices]CryptoService crypto)
        {
            var loggedUser = await service
                .GetByLogin(user.Login);

            if(loggedUser == null)
                return Unauthorized("Usuário não existe.");

            var password = await security.HashPassword(
                user.Senha, loggedUser.Salt
            );
            var realPassword = loggedUser.Senha;

            if(password != realPassword)
                return Unauthorized("Senha Incorreta.");

            var jwt = crypto.GetToken(new {
                id = loggedUser.Id,
                isAdm = loggedUser.IsAdm
            });

            return Ok(new {jwt});
        }
}