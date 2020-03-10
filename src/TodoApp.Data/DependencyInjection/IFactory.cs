namespace TodoApp.Data.DependencyInjection
{
    public interface IFactory<out T>
    {
        T Create();
    }
}
