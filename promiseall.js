function getSquare(n, delay) {
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            if (n % 2 == 0) res(n * n)
            else rej("cant calculate sqaure for odd numbers")
        }, delay)
    })
    return promise
}
Promise.myAll = function(listOfPromise){
    return new Promise((res,rej)=>{
        const result =[]
        let c=0
        for(let i=0;i<listOfPromise.length;i++){
            Promise.resolve(listOfPromise[i]).then(data=>{
                result[i]=data
                c++
                if(c == listOfPromise.length){
                    res(result)
                }
            }).catch(err=>rej(err))
        }
    })

}


async function getData(){
    const result = await Promise.myAll(
        [getSquare(2,2000),getSquare(4,1000)]
    )
    console.log(result)
}
getData()