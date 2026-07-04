function check(status){
    return new Promise((resolve, reject) => {
      if(status){
        resolve("solved")
      }
      else{
        reject("unsolved")
      }
    })

}
check(true).then((result) => {
        console.log(result);
        
    }).catch((err) => {
        console.log(err);
        
    });


  //async await
  async function  test(){
    try {
        const data = await check(true)
    } catch (error) {
        console.log(error);
        
    }
    
  }  
  test()