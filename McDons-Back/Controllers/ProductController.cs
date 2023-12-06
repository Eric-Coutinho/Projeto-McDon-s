using System;
using System.Linq;
using System.Threading.Tasks;
using Trevisharp.Security.Jwt;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using System.Collections.Generic;

using DTO;
using McDons_Back.Model;
using McDons_Back.Services;
using System.Text.Json;
using System.IO;
using Microsoft.EntityFrameworkCore;

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
        if (produto is null)
            errors.Add("É necessário informar um produto.");
        if (errors.Count > 0)
            return BadRequest(errors);

        await service.Create(produto);
        return Ok();
    }

    [HttpGet("getAll")]
    [EnableCors("DefaultPolicy")]
    public IActionResult GetAll(
    [FromServices] IProdutoService service
)
    {
        var produtos = service.GetAll();

        return Ok(produtos);
    }

    [HttpGet("getByType")]
    [EnableCors("DefaultPolicy")]
    public IActionResult GetByType(
    [FromQuery] string tipo,
    [FromServices] IProdutoService service
)
    {
        var produtos = service.GetByType(tipo);

        return Ok(produtos);
    }

    [HttpGet("imagem/{photoId}")]
    [EnableCors("DefaultPolicy")]
    public async Task<IActionResult> GetImage(
           int photoId,
           [FromServices] EsquizofreniaContext ctx
       )
    {
        var query =
            from image in ctx.Imagems
            where image.Id == photoId
            select image;

        var photo = await query.FirstOrDefaultAsync();
        if (photo is null)
            return NotFound();

        return File(photo.Foto, "image/jpeg");
    }

    [DisableRequestSizeLimit]
    [HttpPost("imagem")]
    [EnableCors("DefaultPolicy")]
    public async Task<IActionResult> AddImage(
        [FromServices]CryptoService security
    )
    {
        var jwtData = Request.Form["jwt"];
        var jwtObj = JsonSerializer
            .Deserialize<JwtToken>(jwtData);

        var jwt = jwtObj.jwt;

        var userOjb = security
            .Validate<JwtPayload>(jwt);

        if (userOjb is null)
            return Unauthorized();
        var userId = userOjb.id;

        var files = Request.Form.Files;
        if (files is null || files.Count == 0)
            return BadRequest();

        var file = Request.Form.Files[0];
        if (file.Length < 1)
            return BadRequest();
        
        using MemoryStream ms = new MemoryStream();
        await file.CopyToAsync(ms);
        var data = ms.GetBuffer();

        Imagem img = new Imagem();
        img.Foto = data;

        EsquizofreniaContext ctx = new EsquizofreniaContext();
        ctx.Add(img);
        await ctx.SaveChangesAsync();

        return Ok(new {
            imgID = img.Id
        });
    }

}
