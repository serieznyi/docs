# Отдаем файлы эффективно с помощью PHP

Если Вам потребовалось отдавать файлы не напрямую веб сервером, а с помощью 
PHP (например для сбора статистики скачиваний)

1. Используем readfile()

  Метод хорош тем, что работает из коробки. Надо только написать свою функцию 
  отправки файла (немного измененный пример из официальной документации): 

  ```php
  function file_force_download($file) {
    if (file_exists($file)) {
      // сбрасываем буфер вывода PHP, чтобы избежать переполнения памяти выделенной под скрипт
      // если этого не сделать файл будет читаться в память полностью!
      if (ob_get_level()) {
        ob_end_clean();
      }
      // заставляем браузер показать окно сохранения файла
      header('Content-Description: File Transfer');
      header('Content-Type: application/octet-stream');
      header('Content-Disposition: attachment; filename=' . basename($file));
      header('Content-Transfer-Encoding: binary');
      header('Expires: 0');
      header('Cache-Control: must-revalidate');
      header('Pragma: public');
      header('Content-Length: ' . filesize($file));
      // читаем файл и отправляем его пользователю
      readfile($file);
      exit;
    }
  }
  ```

  Таким способом можно отправлять даже большие файлы, так как PHP будет читать файл 
  и сразу отдавать его пользователю по частям. В документации четко сказано, 
  что readfile() не должен создавать проблемы с памятью.

  Особенности:
  * Скрипт ждет пока весь файл будет прочитан и отдан пользователю.
  * Файл читается в внутренний буфер функции readfile(), размер которого составляет 
  8кБ

2. Читаем и отправляем файл вручную

  Метод использует тот же Drupal при отправке файлов из приватной файловой системы 
  (файлы недоступны напрямую по ссылкам):

  ```php
  function file_force_download($file) {
    if (file_exists($file)) {
      // сбрасываем буфер вывода PHP, чтобы избежать переполнения памяти выделенной под скрипт
      // если этого не сделать файл будет читаться в память полностью!
      if (ob_get_level()) {
        ob_end_clean();
      }
      // заставляем браузер показать окно сохранения файла
      header('Content-Description: File Transfer');
      header('Content-Type: application/octet-stream');
      header('Content-Disposition: attachment; filename=' . basename($file));
      header('Content-Transfer-Encoding: binary');
      header('Expires: 0');
      header('Cache-Control: must-revalidate');
      header('Pragma: public');
      header('Content-Length: ' . filesize($file));
      // читаем файл и отправляем его пользователю
      if ($fd = fopen($file, 'rb')) {
        while (!feof($fd)) {
          print fread($fd, 1024);
        }
        fclose($fd);
      }
      exit;
    }
  }
  ```

  Особенности:
  * Скрипт ждет пока весь файл будет прочитан и отдан пользователю.
  * Позволяет сэкономить память сервера

3. Используем Nginx

  Nginx умеет отправлять файлы из коробки через специальный заголовок.

  Для корректной работы нужно запретить доступ к папку напрямую через конфигурационный файл:

  ```
  location /protected/ {
    internal;
    root   /some/path;
  }
  ```
  Пример отправки файла (файл должен находиться в директории /some/path/protected):

  ```php
  function file_force_download($file) {
    if (file_exists($file)) {
      header('X-Accel-Redirect: ' . $file);
      header('Content-Type: application/octet-stream');
      header('Content-Disposition: attachment; filename=' . basename($file));
      exit;
    }
  }
  ```

  Больше информации на странице [официальной документации](http://wiki.nginx.org/NginxXSendfile)

Особенности:
* Скрипт завершается сразу после выполнения всех инструкций
* Физически файл отправляется модулем самого веб сервера, а не PHP
* Минимальное потребление памяти и ресурсов сервера
* Максимальное быстродействие

Совет.
Лучше слать не application/octet-stream, а реальный mime type файла. 
Например, это позволит браузеру подставить нужные программы в диалог сохранение файла.

Источник: [Habr](https://habrahabr.ru/post/151795/)
