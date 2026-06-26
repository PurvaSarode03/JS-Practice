//map
const arr=[1,2,3,4,5,6,8]

const square=arr.map((arr)=>{
    return arr*arr
})
console.log(square);

//Filter

const odd= arr.filter((arr)=>{
    return arr%2!=0
})

console.log(odd);


// Reduce

const sum=arr.reduce((arr,tot)=>{
 return tot+=arr
})

console.log(sum);
