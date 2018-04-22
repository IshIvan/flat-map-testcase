'use strict';

// тестовый массив
const arr = [1, 2, [1, 2, [12, 1, [1, [2]]], [12, 2, [123123, [123123, [123123], [123123], 123]]]]];

/**
 * Основная логика:
 * если текущий элемент типа Array,
 * то мы расширяем массив, одновременно запуская рекурсию по внутренним элементам.
 * иначе отдаем то же самое значение.
 */
const recursiveFlatMap = (element) => {
    return element instanceof Array
        ? [].concat(...element.map(e => recursiveFlatMap(e)))
        : element;
};

// результативный массив
const newArray = recursiveFlatMap(arr);
console.log(newArray);