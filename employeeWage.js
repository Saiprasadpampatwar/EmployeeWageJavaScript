{
    const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random()*2) % 2;
if(empCheck == IS_ABSENT){
    console.log("employee is absent");
    return;
}else{
    console.log("employee is present");
}
}


{
    const IS_PART_TIME = 1;
	const IS_FULL_TIME = 2;
	const PART_TIME_HOURS = 4;
	const FULL_TME_HOURS = 8;
	const WAGE_PER_HOUR = 20;

    function getWorkingHours(employeeCheck) {
        switch (employeeCheck) {
            case IS_PART_TIME:
                return PART_TIME_HOURS
                break;
            case IS_FULL_TIME:
                return FULL_TME_HOURS;
                break;
            default:
                return 0;
        }
    }
    const WORKING_DAYS_IN_MONTH = 20;
	const MAX_HOURS_IN_MONTH = 160;
	empHours = 0;
	let workingDays = 0;
	while ((workingDays < WORKING_DAYS_IN_MONTH) && empHours <= MAX_HOURS_IN_MONTH) {
		workingDays++;
		let employeeCheck = Math.floor(Math.random() * 10 % 3);
		empHours += getWorkingHours(employeeCheck);
	}

	let empWage = empHours * WAGE_PER_HOUR;
	console.log('Total Working Days ' + workingDays + ' Total Emp Hours ' + empHours + ' Employee Monthly Wage ' + empWage);
}
