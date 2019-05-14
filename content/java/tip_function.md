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
// TODO

Supplier<T>           - T get()
//TODO

Predicate<T>          - bool test(T t)
// TODO

```
