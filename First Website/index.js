function fib(n){
    if (n<=2){
        console.log("jesus")
        return 1

    }else{
        console.log("mary")
        return fib(n -1) + fib(n-2)
    }
}

console.log(fib(6))