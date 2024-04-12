let numbers = [1, 10, -4, 5, 100];

console.log(sortNumberArray(numbers))

function sortNumberArray(arr) {
    if (Array.isArray(arr)) {
        return arr.sort((a, b) => a - b)
    }
    return "Переданное число не является массивом"

}


