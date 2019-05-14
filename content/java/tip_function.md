# Подсказка по функциям (java.util.function) 

# Java 8

### Function, BiFunction, ...Function

```java

Function<T, R>            - R apply(T t)

IntFunction<T, R>         - R apply(int value)
LongFunction<T, R>        - R apply(long value)
DoubleFunction<T, R>      - R apply(double value)

IntToDoubleFunction       - double applyAsDouble(int value)
IntToLongFunction         - long applyAsLong(int value)
LongToDoubleFunction      - double applyAsDouble(long value)
LongToIntFunction         - int applyAsInt(long value)
DoubleToIntFunction       - int applyAsInt(double value)
DoubleToLongFunction      - long applyAsInt(double value)

ToDoubleFunction<T>       - double applyAsDouble(T value)
ToIntFunction<T>          - int applyAsInt(T value)
ToLongFunction<T>         - long applyAsLong(T value)

BiFunction<T,U,R>         - R apply(T t, U u)

ToDoubleBiFunction<T,U>   - double applyAsDouble(T t, U u)
ToIntBiFunction<T,U>      - int applyAsInt(T t, U u) 
ToLongBiFunction<T,U>     - long applyAsLong(T t, U u)

```

### Consumer, BiConsumer, ...Consumer
```java

Consumer<T>           - void accept(T t)

DoubleConsumer<T>     - void accept(double T)
IntConsumer<T>        - void accept(int T)
LongConsumer<T>       - void accept(long T)

BiConsumer<T, U>      - void accept(T t, U u) 

ObjDoubleConsumer<T>  - void accept(T t, double value) 
ObjIntrConsumer<T>    - void accept(T t, int value) 
ObjLongConsumer<T>    - void accept(T t, long value) 

```

### Other
```java
Supplier<T>           - T get()
//TODO

Predicate<T>          - bool test(T t)
// TODO
```
