let car ={
    color :"Red",
    company:"ferrari"
}
function purchaseCar(currency,price){
    console.log(`I have purchased ${this.color}- from ${this.company} car for ${currency} ${price}`)
}

Function.prototype.myApply = function(context={},args=[]){
    if(typeof this !== "function"){
        throw newError(this + "Its not callable")
    }
    if(!Array.isArray(args)){
        throw newError("Create List from array like")
    }

    context.fn = this
    context.fn(...args)
}

purchaseCar.myApply(car,["$", "100k"])