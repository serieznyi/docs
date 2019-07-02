# Обработка исключений

> Ключевые слова
> `try`, `catch`, `throw`, `throws`, `finally`

## Пример использования блока исключений

```java

try {
  ...
} catch (Runtime exception) {
  ...
} finally {
  ...
}

```

**Заметки**
* Порядок выполнения исключений зависит от положения класса исключения в цепочке наследования, а не от порядка блоков catch

## Управление ресурсами с помощью try (>= JDK 7 )

```java
try (java.io.AutoCloseabe resource1 = new SomeStream(); java.io.AutoCloseabe resource2 = new SomeStream();) {
   
} 
```

**Заметки**
* Что бы использовтаь ресурс в блоке try - он должен реализовывать интерйейс `java.io.AutoCloseabe`
