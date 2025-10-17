/*
Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

    keep order of values like in input array
if type is not presented in input, no corresponding property are expected

    So, for this input:

            ['a', 1, 2, false, 'b']
        expected output is:

        {
            number: [1, 2],
                string: ['a', 'b'],
            boolean: [false]
        }
*/
function separateTypes(input) {
    // Создаем пустой объект для результата/Creating an empty object for the result
    const result = {};
    // Проходим по каждому элементу массива/We go through each element of the array
    input.forEach(item => {
        // Определяем тип текущего элемента/Defining the type of the current element
        const type = typeof item;
        // Приводим тип к нужному названию свойства/Converting the type to the desired property name
        let key = type;
        if (key === 'boolean') {
            key = 'boolean';
        } else if (key === 'number') {
            key = 'number';
        } else if (key === 'string') {
            key = 'string';
        }
        // Если такого типа еще нет в объекте, создаем пустой массив/If this type is not already in the object, create an empty array
        if (!result[key]) {
            result[key] = [];
        }
        // Добавляем элемент в соответствующий массив/Adding an element to the corresponding array
        result[key].push(item);
    });
    return result;
}
/*
Sample Tests:
    const chai = require("chai");
    const assert = chai.assert;
    chai.config.truncateThreshold = 0;

    describe("separateTypes", function() {
        it("given ['a', 1, 2, false, 'b']", function() {
            assert.deepEqual(separateTypes(['a', 1, 2, false, 'b']), {number: [1, 2],  string: ['a', 'b'], boolean: [false]});
        });

        it("given ['a', 1, 2 ]", function() {
            assert.deepEqual(separateTypes(['a', 1, 2 ]), {number: [1, 2],  string: ['a']});
        });
    });
*/
