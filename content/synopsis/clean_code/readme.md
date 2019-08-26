# Чистый код. Создание, анализ и рефакторинг

## Глава 1. Чистый код

Каким должен быть "чистый код" ?

- Элегантным (его приятно читать)
- Хорошо решает одну задачу (**S**ingle **R**esponsibility **P**rinciple)
- Прямолинейным (Должен содержать только то, что необходимо)
- Код должен быть написан в такой форме, чтобы он хорошо читался людьми
- Тщательным (Код не должен содержать никаких очевидных возможностей для его улучшения)
- Протестированный (Имеет модульные тесты)
- Содержит простые абстракции
- Каждая функция делает примерно то, что вы ожидали

## Глава 2. Содержательные имена

### Имена должны передавать намерения программиста

Названия переменных не вызывают у нас вопросов о назначении переменных.

Не правильно
```
int d; // Прошедшее время
```

Правильно
```
int daysSinceModification;;
```

### Избегайте дезинформации

* Не используйте слова со скрытыми значениями, отличными от предполагаемого.

```
int hp; // нахвание ассоциируется с абревиатурой HP (Hewlett-Packard)
int aix; // название ассоциируется с Advanced Interactive eXecutive - UNIX-подобной операционной системой компании IBM. 
```

или

```
Map<Account> accountList; // название говорит о том, что переменная хранит список, хотя на самом деле это map 
```
В этом примере лучше подойдет имя accountGroup или даже просто accounts

* Остерегайтесь малозаметных различий в именах

```
Controller XYZControllerForEfficientHandlingOfStrings;
Controller XYZControllerForEfficientStorageOfStrings;
```

* Не используйте прописные `L` и `O` из-за их схожестки с `0` и `1`

```
int a = l;
if ( O == l )
a = O1;
else
l = 01;
```

### Используйте осмысленные различия

* Такая функция будет читаться намного лучше, если присвоить аргументам имена `source` и `destination`.

```
public static void copyChars(char a1[], char a2[]) {
  for (int i = 0; i < a1.length; i++) {
    a2[i] = a1[i];
  }
}
```

* Одно и тоже по смыслу

```
Product product;
ProductData productData;
ProductInfo produtcInfo;

List<Account> getActiveAccount();
List<Account> getActiveAccounts();
List<Account> getActiveAccountInfo();

String theMessage;
String message;

float moneyAmountr;
float money;
```

## Используйте удобопроизносимые имена

