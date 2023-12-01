using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace McDons_Back.Services;

using System.Threading.Tasks;
using DTO;
using Model;

public class UserService: IUserService
{
    EsquizofreniaContext ctx;
    ISecurityService security;

    public UserService(EsquizofreniaContext ctx, ISecurityService security)
    {
        this.ctx = ctx;
        this.security = security;
    }

    public async Task Create(UserData data)
    {
        Usuario usuario = new Usuario();
        var salt = await security.GenerateSalt();

        usuario.Nome = data.login;
        usuario.IsAdm = data.isAdm;
        usuario.Senha = await security.HashPassword(data.password, salt);
        usuario.Salt = salt;

        this.ctx.Add(usuario);
        await this.ctx.SaveChangesAsync();
    }

    public async Task<Usuario> GetByLogin(string login)
    {
        var query = 
            from u in this.ctx.Usuarios
            where u.Nome == login
            select u;

        return await query.FirstOrDefaultAsync();
    }

}