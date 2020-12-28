


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

function calcDailyWage(empHrs) {
    return empHrs*WAGE_PER_HOUR;
    
}
const WORKING_DAYS_IN_MONTH = 20;
const MAX_HOURS_IN_MONTH = 160;
empHours = 0;
let totalEmphrs = 0;
let workingDays = 0;
let empDailyWageArr = new Array();
while ((workingDays < WORKING_DAYS_IN_MONTH) && empHours <= MAX_HOURS_IN_MONTH) {
    workingDays++;
    let employeeCheck = Math.floor(Math.random() * 10 % 3);
    let empHours = getWorkingHours(employeeCheck);
    totalEmphrs+=empHours;
    empDailyWageArr.push(calcDailyWage(empHours));
}


let empWage = calcDailyWage(totalEmphrs);
console.log('UC-6 Total Working Days ' + workingDays + ' Total Emp Hours ' + totalEmphrs + ' Employee Monthly Wage ' + empWage);

