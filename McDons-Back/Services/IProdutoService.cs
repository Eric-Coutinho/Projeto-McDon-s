using System.Threading.Tasks;

namespace McDons_Back.Services;

using DTO;
using Model;

 public interface IProdutoService
 {
    Task Create(ProdutoData data);
}

