const oddNumbers = (num1, num2) => {
    let arr = []
    for (let i = num1; i <= num2; i++) {
        if (i % 2 != 0) {
            arr = [...arr, i]
        }
    }
    return arr
}

console.log(oddNumbers(3, 15))

const uniqueChars = (sting) => {
    const words = sting.split('');
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[i] == words[j]) {
                return "нет Уникальности букв"
            }
        }
    }
    return "Все буквы Уникальны"
}

console.log(uniqueChars('afdsfsdgg'))
console.log(uniqueChars('qwe'))
