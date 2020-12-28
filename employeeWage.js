


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
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
let empHours = 0;
let totalEmphrs = 0;
let workingDays = 0;
let empDailyWageArr = new Array();

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}


while ((workingDays < WORKING_DAYS_IN_MONTH) && empHours <= MAX_HOURS_IN_MONTH) {
    workingDays++;
    let employeeCheck = Math.floor(Math.random() * 10 % 3);
    let empHours = getWorkingHours(employeeCheck);
    totalEmphrs+=empHours;
    empDailyWageArr.push(calcDailyWage(empHours));
    empDailyHrsMap.set(workingDays, empHours);
    empDailyWageMap.set(workingDays, calcDailyWage(empHours));
}

console.log(empDailyWageMap);
console.log('UC8 Emp Wage Map totalHours: ' + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));




// UC7-A Calculate total wage using Array forEach Traversal reduce method
let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log('Total Working Days ' + workingDays + ' Total Emp Hours ' + totalEmphrs + ' Employee Monthly Wage ' + totEmpWage);

// reduce method
function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log('Employee Wage with reduce ' + empDailyWageArr.reduce(totalWages, 0));

//UC7-B Show the day along with teh Daily wage using the array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log('Daily Wage Map');
console.log(mapDayWithWageArr);

// UC7-C Use the filter function to find the day Employee worked full time
function fulltimeWage(dailyWage) {
    return dailyWage.includes('160');
    //return dailyWage == '160';
}
let fullDayWageArrayFilter = mapDayWithWageArr.filter(fulltimeWage);
console.log('Daily age filter when FullTime wage earned');
console.log(fullDayWageArrayFilter);

// UC7-D Find the first occurence when full time age as earned using the find function
function findFullTimeWage(dailyWage) {
    return dailyWage.includes('160');
}
console.log('UC7-D - FirstTime full time wage was earned in on day: ' + mapDayWithWageArr.find(findFullTimeWage));


// UC7-E Check if Every Element of Full time wage is holding full time wage
function isEveryFullTimeWage(dailyWage) {
    return dailyWage.includes('160');
}
console.log('UC7-E - Check Every Element have full time Wage: ' + fullDayWageArrayFilter.every(isEveryFullTimeWage));

// UC7-F Check if All Element of Full time wage is holding full time wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes('80');
}
console.log('UC7-F - Check All Element have full time Wage: ' + mapDayWithWageArr.some(isAnyPartTimeWage));

// UC7-G Find number of days Employee worked
function totalDaysWorked(noOfDays, dailyWage) {
    if (dailyWage > 0) {
        return noOfDays + 1;
    }
    return noOfDays;
}

console.log('UC7-G - Number of days Employee Worked: ' + empDailyWageArr.reduce(totalDaysWorked, 0));
