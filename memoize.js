function myMemoize(fn,context){
    const res={}
    return function(...args){
        var argsCache = JSON.stringify(args)
        if(!res[argsCache]){
            res[argsCache]=fn.call(context|| this , ...args)
        }
        return res[argsCache]
    }
}

const clumsyProduct =(num1,num2)=>{
    for(let i =0;i<1000000;i++){}
    return num1*num2
}
const memomizedClumsyProduct = myMemoize(clumsyProduct)

console.time("First call")
console.log(memomizedClumsyProduct(6789,9876))
console.timeEnd("First call")

console.time("Second call")
console.log(memomizedClumsyProduct(6789,9876))
console.timeEnd("Second call")
