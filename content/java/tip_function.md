# Подсказка по функциям (java.util.function) 

# Java 8

```java

Consumer<T>           - void accept(T t)
DoubleConsumer<T>     - void accept(double T)
IntConsumer<T>        - void accept(int T)
LongConsumer<T>       - void accept(long T)

BiConsumer<T, U>      - void accept(T t, U u) 
ObjDoubleConsumer<T>  - void accept(T t, double value) 
ObjIntrConsumer<T>    - void accept(T t, int value) 
ObjLongConsumer<T>    - void accept(T t, long value) 


Function<T, R>        - R apply(T t)
IntFunction<T, R>     - R apply(int value)
LongFunction<T, R>    - R apply(long value)
DoubleFunction<T, R>  - R apply(double value)

DoubleToIntFunction   - int applyAsInt(double value)
DoubleToLongFunction  - long applyAsInt(double value)
LongToDoubleFunction  - double applyAsDouble(long value)
LongToIntFunction     - int applyAsInt(long value)
IntToDoubleFunction   - double applyAsDouble(int value)
IntToLongFunction     - long applyAsLong(int value)


BiFunction<T,U,R>     - R apply(T t, U u)

Supplier<T>           - T get()
//TODO

Predicate<T>          - bool test(T t)
// TODO

```
