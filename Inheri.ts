class Employee {
    protected EmpId: number;
    protected Name: string;
    protected BasicSalary: number;

    constructor(EmpId: number, Name: string, BasicSalary: number) {
        this.EmpId = EmpId;
        this.Name = Name;
        this.BasicSalary = BasicSalary;
    }

    display() {
        console.log("Eid:" + this.EmpId + " Name:" + this.Name +
            " Basic Salary:" + this.BasicSalary);
    }
}

class Lecturer extends Employee {
    
protected Subject: string;    

constructor(EmpId: number, Name: string, BasicSalary: number,
        Subject: string) {
        super(EmpId, Name, BasicSalary);
        this.Subject = Subject;
    }

    display() {
        super.display();
        console.log("Subject:" + this.Subject);
    }
}

var LecturerObj=new Lecturer(413,"Raheem",4000,"English");
LecturerObj.display();