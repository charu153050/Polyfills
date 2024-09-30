let car ={
    color :"Red",
    company:"ferrari"
}
function purchaseCar(currency,price){
    console.log(`I have purchased ${this.color}- from ${this.company} car for ${currency} ${price}`)
}

Function.prototype.myCall = function(context={},...args){
    if(typeof this !== "function"){
        throw newError(this + "Its not callable")
    }

    context.fn = this
    context.fn(...args)
}

purchaseCar.myCall(car,"$", "100k")



