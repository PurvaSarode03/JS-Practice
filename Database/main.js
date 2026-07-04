//step 1=package install
//step 2=passing all parameters
//step 3=connect to db


//step1
const a= require('mysql2')

 // step 2

 const db=a.createConnection({
    host:"localhost",
    user:"root",
    password:"Spurva2006",
    database:"js1"
 })

 //step 3
 function conncetDB(){
    db.connect((err)=>{
        if(err)
            console.log(err);
        else
            console.log("conected..");
            
            
    })
 }

 conncetDB()

 function insertEmp(name,salary){
    const user={name,salary}
    db.query("insert into emp set ?",user,(err)=>{
        if(err)
            console.log(err);
        else
            console.log("inserted..");
            
            
    })
 }
 insertEmp("om",768687)

 function displayEmp(){
    db.query("select * from Emp",(err,result)=>{
        if(err)
            console.log(err);
        else
            console.log(result);
            
            
    })
 }
 displayEmp()

 function update(name,salary,id){
    const user=[name,salary,id]
    db.query("update emp set name=?,salary=? where id=?",user,(err)=>{
        if(err)
            console.log(err);
        else
            console.log("updated..");
            
            
    })
 }
 update("shashank",1878787,4)

 function deleteEmp(id){
    db.query("delete from emp where id =?",id,(err)=>{
        if(err)
            console.log(err);
        else
            console.log("delted..");
            
            
    })
 }
 deleteEmp(7)
