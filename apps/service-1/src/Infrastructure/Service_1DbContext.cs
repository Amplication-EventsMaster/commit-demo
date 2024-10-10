using Microsoft.EntityFrameworkCore;

namespace Service_1.Infrastructure;

public class Service_1DbContext : DbContext
{
    public Service_1DbContext(DbContextOptions<Service_1DbContext> options)
        : base(options) { }
}
