class Cache extends Map<string, any> {
  createCache = <T>(cachename?: string) => {
    const typeCache = new Map<string, T>();
    if (cachename && !this.has(cachename)) {
      this.set(cachename, typeCache);
    }
    const add = (key: string, value: T) => {
      typeCache.set(key, value);
    };
    const remove = (key: string) => {
      typeCache.delete(key);
    };
    const getCaches = (): typeof typeCache => {
      return typeCache;
    };
    const clearCaches = () => {
      typeCache.clear();
    };
    return {
      add,
      remove,
      getCaches,
      clearCaches,
    };
  };
}

const cache = new Cache();

export default cache;
