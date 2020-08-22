using Microsoft.Extensions.DependencyInjection;

namespace TodoApp.Data.DependencyInjection
{
    public static class ServiceCollectionExtensions
    {
        public static void AddRepositoryFactory<TService, TImplementation>(this IServiceCollection services)
            where TService : class
            where TImplementation : class, TService
        {
            services.AddTransient<TService, TImplementation>();
            services.AddSingleton<IRepositoryFactory, RepositoryFactory>();
        }
    }
}
