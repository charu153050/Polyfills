let car ={
    color :"Red",
    company:"ferrari"
}
function purchaseCar(currency,price){
    console.log(`I have purchased ${this.color}- from ${this.company} car for ${currency} ${price}`)
}

Function.prototype.myBind = function(context ={},...args){
    if(typeof this !== "function"){
        throw new Error(this+"cannot be bound and it is nor callable")
    }

    context.fn = this
    return function(...newArgs){
        return context.fn(...args ,...newArgs)
    }
}
const newFunc = purchaseCar.myBind(car)
console.log(newFunc("$","500K"))