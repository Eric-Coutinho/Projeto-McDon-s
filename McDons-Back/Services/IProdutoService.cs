using System.Threading.Tasks;
using System.Collections.Generic;

namespace McDons_Back.Services;

using DTO;
using Model;

 public interface IProdutoService
 {
    Task Create(ProdutoData data);

    List<Produto> GetAll();
    List<Produto> GetByType(string tipo);
}

