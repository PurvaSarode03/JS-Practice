const emp=[
    {name:"purva",sal:15567576},
    {name:"abvv",sal:678},
    {name:"jjk",sal:7687}
]
const findsal=emp.filter((emp)=>{
    return emp.sal>678
})
console.log(findsal);
