let arr = [1,2,1,2,3,5,4,5,3,4,4,4,4]
let result = arr.sort().reduce((init, curr) => {
    if(init.length == 0 || init[init.length - 1] != curr){
        init.push(curr)
    }
    return init
}, [])