class Student {
 name : String
 id : Number

  constructor(name:String,id :Number){
    this.name=name
    this.id=id
  }
}

class Store{
    static totalProduct :any=0
    studentList : Student[]=[]

    displayInfo(student:Student): void{
        this.studentList.push(student)
        Store.totalProduct++

    }

 static totalCount() : Number{
    return Store.totalProduct
 }

}


const s= new Student("om" ,1)
const s2= new Student("abc" ,2)
const s3= new Student("pov" ,3)
const sc= new Store()

