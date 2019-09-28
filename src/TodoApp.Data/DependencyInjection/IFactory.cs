using System;
using System.Collections.Generic;
using System.Text;

namespace TodoApp.Data.DependencyInjection
{
    public interface IFactory<T>
    {
        T Create();
    }
}
