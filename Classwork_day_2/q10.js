function checkAge(age){
    if(age<18){
        try {
            throw new Error("age is valid")
        } catch (error) {
            console.log(error.name +":" + error.message);
            
        }
        finally{
            console.log("executed..");
            
        }
    }
    else{
        console.log("age is valid");
        
    }
}
checkAge(10)