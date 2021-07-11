.. _solid_open_close_principle:

The Open Closed Principle - Принцип открытости/закрытости
=========================================================

Программные сущности должны быть закрыты для изменения и открыты для расширения.


1) **Открыты для расширения.** 
Это означает, что поведение модуля может быть расширено. 
То есть мы можем добавить модулю новое поведение в соответствии с изменившимися требованиями 
к приложению или для удовлетворения нужд новых приложений.

2) **Закрыты для изменений.** 
Исходный код такого модуля неприкасаем. 
Никто не вправе вносить в него изменения.

Способы достижения целей принципа
************************************

- Используйте абстракцию

Механизмом расширения выступают производные классы.
В клиентском коде используются только абстракции.
   
Следующий пример не правилен т.к. при добавлении новой реализации нам придется менять метод отвечающий за отрисовку.

.. code-block:: java
   :linenos:

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

Следующий пример правильный т.к. каждая новая реализация практически не требует изменения клиентского кода.

.. code-block:: java
   :linenos:

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

- Делайте все переменные-члены приватными

 Тем самым мы гарантируем, что данные не будут изменены извне

- Не стоит использовать глобальные переменные т.к. их так же легко изменить "снаружи" логики

- Избегайте `Run Time Type Identification <https://en.wikipedia.org/wiki/Run-time_type_information>`_