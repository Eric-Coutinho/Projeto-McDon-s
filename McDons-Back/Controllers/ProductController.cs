using System;
using System.Threading.Tasks;
using Trevisharp.Security.Jwt;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using System.Collections.Generic;

using DTO;
using McDons_Back.Model;
using McDons_Back.Services;

namespace McDons_Back.Controllers;

[ApiController]
[Route("produto")]
public class ProductController : ControllerBase
{
        [HttpPost("create")]
        [EnableCors("DefaultPolicy")]
        public async Task<IActionResult> Create(
            [FromBody] ProdutoData produto,
            [FromServices] IProdutoService service)
            {
                var errors = new List<string>();
                if(produto is null)
                    errors.Add("É necessário informar um produto.");
                if(errors.Count > 0)
                    return BadRequest(errors);

                await service.Create(produto);
                return Ok();
            }
}
