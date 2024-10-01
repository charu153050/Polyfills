const myDebounce = (cb,d)=>{
    let timer;
    return function(...args){
        if(timer)clearInterval(timer);
     timer=  setTimeout(()=>{
        cb(...args)
     },d)

    }
}