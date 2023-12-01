using System;
using System.Threading.Tasks;
using Trevisharp.Security.Jwt;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using System.Collections.Generic;

using DTO;
using McDons_Back.Services;
using McDons_Back.Model;

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
                .GetByLogin(user.login);

            if(loggedUser == null)
                return Unauthorized("Usuário não existe.");

            var password = await security.HashPassword(
                user.password, loggedUser.Salt
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

        [HttpPost("register")]
        [EnableCors("DefaultPolicy")]
        public async Task<IActionResult> Create(
            [FromBody] UserData user,
            [FromServices] IUserService service)
            {
                Console.WriteLine(user.login);
                var errors = new List<string>();
                if(user is null || user.login is null)
                    errors.Add("É necessário informar um login.");
                if(user.login.Length < 5)
                    errors.Add("O login deve ter pelo menos 5 caracteres.");
                if(errors.Count > 0)
                    return BadRequest(errors);

                await service.Create(user);
                return Ok();
            }
}
