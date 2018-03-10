//solution1
function Fibonacci(n)
{
    if(n == 0){
        return 0
    }
    if(n == 1){
        return 1
    }
    return Fibonacci(n-1) + Fibonacci(n-2)
}
//solution2
function Fibonacci(n)
{
    if(n < 2){
        return n
    }
    let fib1 = 1
    let fib2 = 0
    let fib = 0
    for(let i = 2;i <= n;i++){
        fib = fib1 + fib2
        fib2 = fib1
        fib1 = fib
    }
    return fib
}

log(Fibonacci(9))
