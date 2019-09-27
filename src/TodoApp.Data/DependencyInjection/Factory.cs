using System;
using System.Collections.Generic;
using System.Text;

namespace TodoApp.Data.DependencyInjection
{
    public class Factory<T> : IFactory<T>
    {
        readonly Func<T> initFunc;

        public Factory(Func<T> initFunc)
        {
            this.initFunc = initFunc;
        }

        public T Create()
        {
            return initFunc();
        }
    }
}
