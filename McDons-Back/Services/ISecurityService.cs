using System.Threading.Tasks;

namespace McDons_Back.Services;

public interface ISecurityService
{
    Task<string> GerateSalt();
    Task<string> HashPassword(string password, string salt);

}