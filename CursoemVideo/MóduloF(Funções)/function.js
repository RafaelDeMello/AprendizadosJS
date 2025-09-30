function parimpar(n){
    if (n % 2 == 0){
        return 'par'
    } else {
        return 'impar'
    }
}

let res = parimpar(12)
console.log("-".repeat(20) + ">")
console.log(res)
console.log("-".repeat(20))