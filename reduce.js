Array.prototype.myReduce = function(cb,initalValue){
    var accumulator = initalValue
    for(let i =0 ;i<this.length;i++){
        accumulator = accumulator?cb(accumulator,this[i],i,this):this[i]
    }
    return accumulator;
}

const nums = [1, 2, 3, 4];
const sum = nums.myReduce((acc,curr,i,nums)=>{
    return acc+curr;
},0)
console.log(sum)