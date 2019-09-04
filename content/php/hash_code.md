# Реализация hashCode с хорошим распределением

```php
/**
 * Simulates java hashCode function
 * hash a string to 32 bit
 * @param str the string to hash
 * @return hashed 32 bit integer
 */
function hashCode($str) {
    $str = (string)$str;
    $hash = 0;
    $len = strlen($str);
    if ($len == 0 )
        return $hash;

    for ($i = 0; $i < $len; $i++) {
        $h = $hash << 5;
        $h -= $hash;
        $h += ord($str[$i]);
        $hash = $h;
        $hash &= 0xFFFFFFFF;
    }
    return $hash;
};
```
