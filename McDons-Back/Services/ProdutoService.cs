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
    ISecurityService security;

    public ProdutoService(EsquizofreniaContext ctx)
    {
        this.ctx = ctx;
    }

    public async Task Create(ProdutoData data)
    {
        Produto produto = new Produto();

        produto.Nome = data.nome;
        produto.Tipo = data.tipo;
        produto.Preco = data.preco;
        produto.Descricao = data.descricao;

        this.ctx.Add(produto);
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

