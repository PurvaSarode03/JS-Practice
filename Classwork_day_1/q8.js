const Tsale=[
{product:"watch" ,sale:6565},
{product:"phone", sale:7678},
{product:"laptop" ,sale:7698}
]

const totalSale=Tsale.reduce((tot,Tsale)=>{
     return tot+=Tsale.sale
    },0)

console.log(totalSale);
