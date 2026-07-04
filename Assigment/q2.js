function ageCheck(age){
    if(age<10){
        try {
           throw new Error("teenage")
            
        } catch (error) {
            console.log(error.name +":" + error.message);
            
            
        }
    }
else{
   console.log("adult");
    
}
}
ageCheck(9)