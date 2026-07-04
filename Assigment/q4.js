class Hotel{
  hotelname
  hotelid
  hotelPrice


  constructor(hotelname,hotelid,hotelPrice){
    this.hotelname=hotelname
    this.hotelid=hotelid
    this.hotelPrice=hotelPrice
}


displayInfo(){
    console.log(this.hotelname);
    console.log(this.hotelid);
    console.log(this.hotelPrice);
    }
}

const ob= new Hotel("abc",1,1000)
ob.displayInfo()