function payment(status){
    return new Promise((resolve, reject) => {
      if (status) {
        resolve("payment is done")
      } else {
        reject("not done")
      }
    })
}

payment(false).then((result) => {
    console.log(result);
    
}).catch((err) => {
    console.log(err);
    
});
