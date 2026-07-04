function meth(){
    const pi=3.14
    console.log(pi);

    pi=2.2
    console.log(pi);
    }

   function meth1(){
     meth()
   }
   
   function meth2(){{
    try {
        meth1()
    } catch (error) {
       console.log(error.name +":" +error.message);
        
    }
   }}

   meth2()