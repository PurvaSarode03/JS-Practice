class Emp{
    name:String
    id: Number
    sal : Number
    address : String

    constructor(name:String,id:Number,sal:Number,address:String){
        this.name=name
        this.id=id;
        this.sal=sal;
        this.address=address
    }

    public displayInfo(): void{
        console.log(this.name);
        console.log(this.id);
        console.log(this.sal);
        console.log(this.address);
        }

}
const emp= new Emp("purva",1,10000,"kandivali")
emp.displayInfo()