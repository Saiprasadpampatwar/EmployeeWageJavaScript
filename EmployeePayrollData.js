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
  
    
  
    // method
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
  
  let employeePayrollData = new EmployeePayrollData(
    1,
    "Mark",
    20000,
    "M",
    new Date()
  );
  
 
  try {
    if(employeePayrollData.id<=0) throw "Id is Not correct";
    let regex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if(regex.test(employeePayrollData.name != true)) throw "Name is Incorrect";
    console.log(employeePayrollData.toString());
    if(employeePayrollData.salary<0) throw "Salary is not correct";
    if(employeePayrollData.gender!="M" && employeePayrollData.gender!="F") throw "Gender is not correct";
    if(employeePayrollData.startDate > new Date()) throw "Date is not correct";
  } catch (e) {
    console.error(e);
  }
