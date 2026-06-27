function payment(staus){
    return new Promise((resolve, reject) => {
      if (staus) {
        resolve("payment is done ")
      } else {
        reject("not done")
      }
    })
}

async function  test() {
    try {
        const data= await payment(true);
        if (data) {
            console.log(data);
            
            
        }
    } catch (error) {
        console.log(error);
        
    }
    
}
test();