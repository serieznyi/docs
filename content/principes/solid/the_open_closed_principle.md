# The Open Closed Principle - Принцип открытости/закрытости

> Програмные сущности должены быть закрыты для изменения и открыты для расширения.


1) **Открыты для расширения.** 
Это означает, что поведение модуля может быть расширено. 
То есть мы можем добавить модулю новое поведение в соответствии с изменившимися требованиями 
к приложению или для удовлетворения нужд новых приложений.

2) **Закрыты для изменений.** 
Исходный код такого модуля неприкасаем. 
Никто не вправе вносить в него изменения.

## Способы достижения целей принципа
 - **Абстракция**
    Механизмом расширения выступают производные классы. 
    В клиентском коде используются только абстракции.
   
   Не правильно
   ```java
    final class Rectangle {
        public void drawRectangle() {}
    }
   
    final class Circle {
        public void drawCircle() {}
    }
   
    final class Main {
      public static void main(String[] args){
       List<Object> shapes = List.of(
           new Rectangle(), 
           new Circle() 
       ); 

       drawAll(shapes);
      }
  
      private void drawAll(List<Object> shapes) {
          for (Object object : shapes) {
               if (object instanceof Rectangle) {
                   ((Rectangle) object).drawRectangle();
               } else if (object instanceof Circle) {
                   ((Circle) object).drawCircle();
               } else {
                   throw new RutimeException("No allowed shape"); 
               }
          }
      }
   }
   ```
   
   Правильно
      ```java
       abstract class Shape {}
          
       final class Rectangle extends Shape {
           public void draw() {}
       }
      
       final class Circle extends Shape {
           public void draw() {}
       }
      
       final class Main {
          public static void main(String[] args){
           List<Shape> shapes = List.of(
               new Rectangle(), 
               new Circle() 
           ); 
   
           drawAll(shapes);
          }
      
          private void drawAll(List<Shape> shapes) {
              for (Shape s : shapes) {
                   s.draw();
              }
          }
       }
      ```
 - Делайте все переменные-члены приватными
    
    Тем самым мы гарантируем, что данные не будут изменены извне
     
 - Не стоит использовать глобальные переменные
 
 - Избегайте RTTI (Run Time Type Identification)