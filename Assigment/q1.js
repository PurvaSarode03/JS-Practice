class InvalidAge extends Error{
    constructor(message){
        super(message)
        this.message=message
    }

         validAge(age) {
   if(age<18)
    try {
        throw new InvalidAge("age is valid")
    } catch (error) {
        console.log(error.name + ":" +error.message);
        
    }
       else{
        console.log("age is not valid");
        
       } 
    }
}

const a= new InvalidAge()
a.validAge(20)



