setTimeout((a1)=>{
    console.log(a1)
}, 1000, 'foo');

const timeoutId = setTimeout(() => {
    console.log('This message will not be shown');
}, 3000,"hello");

console.log("timeoutId",timeoutId)
