using System.Linq;
using System.Threading.Tasks;
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
        Produto produto = new Produto();

        produto.Nome = data.nome;
        produto.Tipo = data.tipo;
        produto.Preco = data.preco;
        produto.Descricao = data.descricao;

        this.ctx.Add(produto);
        await this.ctx.SaveChangesAsync();
    }
}

