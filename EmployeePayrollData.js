class EmployeePayrollData {
    // property
    id;
    name;
    salary;
    gender;
    startDate;

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name() {
        return this._name;
    }
    
    set name(name) {
    this.name = name;
    }

    toString() {
        const options = {
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        const empDate =
          this.startDate == undefined
            ? "undefined"
            : this.startDate.toLocaleDateString("en-US", options);
        return (
          "id=" +
          this.id +
          ", name=" +
          this.name +
          ", salary=" +
          this.salary +
          ", gender=" +
          this.gender +
          ", startdate=" +
          this.startDate
        );
      }
    }


let employeePayrollData = new EmployeePayrollData(1,"Mark",300000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "john";
console.log(employeePayrollData.toString());
let employeePayrollData1 = new EmployeePayrollData(1,"Terrisa",300000,'F',new Date());
console.log(employeePayrollData1.toString());
