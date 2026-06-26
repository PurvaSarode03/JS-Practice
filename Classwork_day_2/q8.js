class InvalidAge extends Error{
constructor(message){
    super(message)
    this.name="InvalidAge"
}
}
function validage(age){
    if(age<18){
    try {
        throw new InvalidAge("age is not valid")
    } catch (error) {
        console.log(error.name +":" +error.message);
        
    }
    finally{
        console.log("executed..");
        
    }
        
    }

    else{
        console.log("age is valid");
        
    }
}
validage(17)