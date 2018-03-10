let dataStack = []
let minStack = []

function push(node)
{
    dataStack.push(node)
    var minTop = minStack[minStack.length - 1]
    if(minStack.length == 0 || node < minTop){
        minStack.push(node)
    }
    else {
        minStack.push(minTop)
    }
}
function pop()
{
    minStack.pop()
    return dataStack.pop()
}
function top()
{
    return dataStack[dataStack.length - 1]
}
function min()
{
    return minStack[minStack.length - 1]
}

push(4)
push(2)
push(3)
push(4)
console.log("dataStack",dataStack)
console.log("minStack",minStack)
