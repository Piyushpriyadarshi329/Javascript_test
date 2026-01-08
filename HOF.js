




function HOF(x){


    return (num)=>{
        return num*x
    }
}



const double= HOF(2)


console.log(double(5))