using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace McDons_Back.Services;

using DTO;
using Model;

public class ProdutoService: IProdutoService
{
    EsquizofreniaContext ctx;

    public ProdutoService(EsquizofreniaContext ctx)
    {
        this.ctx = ctx;
    }

    public async Task Create(ProdutoData data)
    {
        Produto produto = new()
        {
            Nome = data.nome,
            Tipo = data.tipo,
            Preco = data.preco,
            Descricao = data.descricao,
            ImagemId = data.ImagemId
        };

        this.ctx.Produtos.Add(produto);
        await this.ctx.SaveChangesAsync();
    }

    public List<Produto> GetAll()
    {
        return ctx.Produtos.ToList();
    }

    public List<Produto> GetByType(string tipo)
    {
        return ctx.Produtos.Where(p => p.Tipo == tipo).ToList();
    }
}

