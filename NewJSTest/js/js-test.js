

describe("1. findFactorial", function() {
function test1(number) {
it("Вычисляет факториал числа  " + number + ", результат: " + findFactorial(number), function() {
assert.equal(findFactorial(number), findFactorial(number));
});
}


test1(6);
});

describe("2. findLongest", function() {
function test2(str) {
it("Возвращает длину самого длинного слова в строке:  " + str + ", результат: " + findLongest(str), function() {
assert.equal(findLongest(str), findLongest(str));
});
}

test2('Я размышлял о жизни');
});

describe("3. findLargestOfArrays", function() {
function test3(arr) {
it("Возвращает массив из наибольших чисел каждого введенного подмассива  " + arr + ", результат: " + findLargestOfArrays(arr), function() {
assert.equal(findLargestOfArrays(arr), findLargestOfArrays(arr));
});
}

test3([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39]]);
});

describe("4. cutString", function() {
function test4(str, maxLength) {
it("Обрезает строку  " + str + " при условии что ее длина больше заданного числа " + maxLength + ", результат: " + cutString(str, maxLength), function() {
assert.equal(cutString(str, maxLength), cutString(str, maxLength));
});
}

test4('Я размышлял о многом', 11);
});


describe("5. changeStringToUpperCase", function() {
function test5(str) {
it("Возвращает строку: " + str + " в формате: каждое слово с заглавной буквы, остальные в нижнем регистре, результат: " + changeStringToUpperCase(str), function() {
assert.equal(changeStringToUpperCase(str), changeStringToUpperCase(str));
});
}

test5('Я о многом размышлял');
});


describe("6. combineArrays", function() {
function test6(arr1, arr2, n) {
it("Копирует каждый элемент массива [" + arr1 + "] в массив [" + arr2 + "] начиная с индекса " + n +  " второго масиива, результат: " + combineArrays(arr1, arr2, n), function() {
assert.equal(combineArrays(arr1, arr2, n), combineArrays(arr1, arr2, n));
});
}


test6([23, 15, 34, 6, 7], [2, 35, 67, 78], 3);
});


describe("7. deleteFalsy", function() {
function test7(arr) {
it("Удаляет ложные значения в массиве  [" + arr + "], результат: " + deleteFalsy(arr), function() {
assert.equal(deleteFalsy(arr), deleteFalsy(arr));
});
}


test7([25, 6, 67, 28, 30, 0, false]);
});

describe("8. checkString", function() {
function test8(arr) {
it("Возвращает true, если строка в  первом элементе массива [" + arr + "] содержит все буквы строки во втором элементе массива, результат: " + checkString(arr), function() {
assert.equal(checkString(arr), checkString(arr));
});
}


test8(['результат', 'реат']);
});

describe("9. splitArray", function() {
function test9(arr, size) {
it("Разбивает массив  [" + arr + "] на группы длиной " + size +  " и возвращает в виде двумерного массива, результат: " + splitArray(arr, size), function() {
assert.equal(splitArray(arr, size), splitArray(arr, size));
});
}


test9([34, 23, 56, 76, 34, 26, 87, 92], 2);
});

describe("10. createRecurMass", function() {
function test10(arr, n) {
it("Заполняет массив [" + arr + "] числами от " + n + " до 1, результат: " + createRecurMass(arr, n), function() {
assert.equal(createRecurMass(arr, n), createRecurMass(arr, n));
});
}


test10([], 5);
});

