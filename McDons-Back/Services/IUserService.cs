using System.Threading.Tasks;

namespace McDons_Back.Services;

using DTO;
using Model;

 public interface IUserService
 {
    Task Create(UserData data);
    Task<Usuario> GetByLogin(string Login);
 }

