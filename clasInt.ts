class Department{
    private owner: string;
    id: number;
    workers: Array <string> = [];
    constructor(owner: string, id: number){
        this.owner = owner;
        this.id = id;
    }
    createWorker(a:string){
        this.workers.push(a)
    }
    showEmployeesInfo(){
        console.log(`La cantidad de empleados que hay en el departamento son: ${this.workers.length}`);
        console.log(this.workers)
    }
    verow():string{
        return this.owner;
    }
}
let departamento1 = new Department("Maritza Chipana Copa", 1)
departamento1.createWorker("empleado1")
departamento1.createWorker("empleado2")
departamento1.createWorker("empleado3")
departamento1.showEmployeesInfo();


class CEODeparment extends Department{
    admins: Array<string> = [];
    constructor (owner: string, id: number, admins: string[]){
        super(owner, id);
        this.admins = admins;
    }
}
let ins = new CEODeparment ("Maria", 2, ["AUTHOR", "ADMIN", "ADM"]);
console.log(ins.admins)


class ReportsDepartment extends Department{
    private reports: Array<string> = [];
    constructor(owner: string, id: number){
        super (owner, id);
    }
    addReport(a:string){
        this.reports.push(a);
    }
    verRepor():string[]{
        return this.reports;
    }
    greet(){
        console.log(`Hello ${this.verow()} there are ${this.reports.length} reports`)
    }
}
let ins2 = new ReportsDepartment("maria2", 3);
//ins2.reports.push("task 004 failed");
ins2.addReport("task 004 failed");
ins2.addReport("succeeded");
ins2.addReport("Task timed out after 3.00 seconds");
console.log(ins2.verRepor())
ins2.greet();



class Person implements person1 {
    Name: string = "Mari";
    age: number = 22;
    constructor(Name: string, age: number){
        this.Name = Name;
        this.age = age;
    }
    greet (){
        console.log (`Hola ${this.Name} de ${this.age}`)
    }
}

interface person1{
    Name: string;
    age: number;
    greet ():void
}
interface Data{
    Name: string;
    age: number;
    lastname?: string;
}
interface Greeting extends Data{
    greet ():void
}