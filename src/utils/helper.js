import moment from "moment";

const getThaiDateString = (date) => {
    let dayString = "";
    let monthString = "";
    let yearString = "";
    if (date != "") {
        const dateStringArr = date.split("/");
        if (dateStringArr[0]) {
            dayString = dateStringArr[0];
        }

        if (dateStringArr[1]) {
            monthString = dateStringArr[1];
            // case dateStringArr[1]
            // when
            switch (dateStringArr[1]) {
                case "01":
                    monthString = "มกราคม";
                    break;
                case "02":
                    monthString = "กุมภาพันธ์";
                    break;
                case "03":
                    monthString = "มีนาคม";
                    break;
                case "04":
                    monthString = "เมษายน";
                    break;
                case "05":
                    monthString = "พฤษภาคม";
                    break;
                case "06":
                    monthString = "มิถุนายน";
                    break;
                case "07":
                    monthString = "กรกฎาคม";
                    break;
                case "08":
                    monthString = "สิงหาคม";
                    break;
                case "09":
                    monthString = "กันยายน";
                    break;
                case "10":
                    monthString = "ตุลาคม";
                    break;
                case "11":
                    monthString = "พฤศจิกายน";
                    break;
                case "12":
                    monthString = "ธันวาคม";
                    break;
                default:
                    monthString = dateStringArr[1];
            }
        }

        if (dateStringArr[2]) {
            yearString = (Number(dateStringArr[2]) + 543).toString();
        }
    }
    return `${dayString} ${monthString} ${yearString}`
};

const getThaiDateAgeFromNowString = (date) => {
    const myDate = moment(date, 'DD/MM/YYYY').toDate();
    var yearAge = 0;

    //extract the year, month, date from user date input
    var dobYear = myDate.getFullYear();
    var dobMonth = myDate.getMonth();
    var dobDate = myDate.getDate();

    //get the current date from the system
    var now = new Date();
    //extract the year, month, date from current date
    var currentYear = now.getFullYear();
    var currentMonth = now.getMonth();
    var currentDate = now.getDate();

    //declare a variable to collect the age in year, month, days
    var age = {};
    var ageString = "";

    //get years
    yearAge = currentYear - dobYear;

    //get months
    if (currentMonth >= dobMonth)
        //get months when current month is greater
        var monthAge = currentMonth - dobMonth;
    else {
        yearAge--;
        var monthAge = 12 + currentMonth - dobMonth;
    }

    //get days
    if (currentDate >= dobDate)
        //get days when the current date is greater
        var dateAge = currentDate - dobDate;
    else {
        monthAge--;
        var dateAge = 31 + currentDate - dobDate;

        if (monthAge < 0) {
            monthAge = 11;
            yearAge--;
        }
    }
    //group the age in a single variable
    age = {
        years: yearAge,
        months: monthAge,
        days: dateAge
    };


    if ((age.years > 0) && (age.months > 0) && (age.days > 0))
        ageString = "อายุ " + age.years + " ปี " + age.months + " เดือน " + age.days + " วัน";
    else if ((age.years == 0) && (age.months == 0) && (age.days > 0))
        ageString = "อายุ " + age.days + " วัน";
    //when current month date is same as birth date month
    else if ((age.years > 0) && (age.months == 0) && (age.days == 0))
        ageString = "อายุ " + age.years + " ปี";
    else if ((age.years > 0) && (age.months > 0) && (age.days == 0))
        ageString = "อายุ " + age.years + " ปี " + age.months + " เดือน";
    else if ((age.years == 0) && (age.months > 0) && (age.days > 0))
        ageString = "อายุ " + age.months + " เดือน " + age.days + " วัน";
    else if ((age.years > 0) && (age.months == 0) && (age.days > 0))
        ageString = "อายุ " + age.years + " ปี " + age.days + " วัน";
    else if ((age.years == 0) && (age.months > 0) && (age.days == 0))
        ageString = "อายุ " + age.months + " เดือน";
    //when current date is same as dob(date of birth)
    else ageString = "อายุ 1 วัน";


    return ageString
};

const getThaiDateAgeFromInputString = (date, InputDate) => {
    const myDate = moment(date, 'DD/MM/YYYY').toDate();
    var yearAge = 0;

    //extract the year, month, date from user date input
    var dobYear = myDate.getFullYear();
    var dobMonth = myDate.getMonth();
    var dobDate = myDate.getDate();

    //get the current date from the system
    const inputDate = moment(InputDate, 'DD/MM/YYYY').toDate();
    //extract the year, month, date from current date
    var currentYear = inputDate.getFullYear();
    var currentMonth = inputDate.getMonth();
    var currentDate = inputDate.getDate();

    //declare a variable to collect the age in year, month, days
    var age = {};
    var ageString = "";

    //get years
    yearAge = currentYear - dobYear;

    //get months
    if (currentMonth >= dobMonth)
        //get months when current month is greater
        var monthAge = currentMonth - dobMonth;
    else {
        yearAge--;
        var monthAge = 12 + currentMonth - dobMonth;
    }

    //get days
    if (currentDate >= dobDate)
        //get days when the current date is greater
        var dateAge = currentDate - dobDate;
    else {
        monthAge--;
        var dateAge = 31 + currentDate - dobDate;

        if (monthAge < 0) {
            monthAge = 11;
            yearAge--;
        }
    }
    //group the age in a single variable
    age = {
        years: yearAge,
        months: monthAge,
        days: dateAge
    };


    if ((age.years > 0) && (age.months > 0) && (age.days > 0))
        ageString = "อายุ " + age.years + " ปี " + age.months + " เดือน " + age.days + " วัน";
    else if ((age.years == 0) && (age.months == 0) && (age.days > 0))
        ageString = "อายุ " + age.days + " วัน";
    //when current month date is same as birth date month
    else if ((age.years > 0) && (age.months == 0) && (age.days == 0))
        ageString = "อายุ " + age.years + " ปี";
    else if ((age.years > 0) && (age.months > 0) && (age.days == 0))
        ageString = "อายุ " + age.years + " ปี " + age.months + " เดือน";
    else if ((age.years == 0) && (age.months > 0) && (age.days > 0))
        ageString = "อายุ " + age.months + " เดือน " + age.days + " วัน";
    else if ((age.years > 0) && (age.months == 0) && (age.days > 0))
        ageString = "อายุ " + age.years + " ปี " + age.days + " วัน";
    else if ((age.years == 0) && (age.months > 0) && (age.days == 0))
        ageString = "อายุ " + age.months + " เดือน";
    //when current date is same as dob(date of birth)
    else ageString = "อายุ 1 วัน";


    return ageString
};

const getThaiDateAgeFromInput = (date, InputDate) => {
    const myDate = moment(date, 'DD/MM/YYYY').toDate();
    var yearAge = 0;

    //extract the year, month, date from user date input
    var dobYear = myDate.getFullYear();
    var dobMonth = myDate.getMonth();
    var dobDate = myDate.getDate();

    //get the current date from the system
    const inputDate = moment(InputDate, 'DD/MM/YYYY').toDate();
    //extract the year, month, date from current date
    var currentYear = inputDate.getFullYear();
    var currentMonth = inputDate.getMonth();
    var currentDate = inputDate.getDate();

    //declare a variable to collect the age in year, month, days
    var age = {};
    var ageString = "";

    //get years
    yearAge = currentYear - dobYear;

    //get months
    if (currentMonth >= dobMonth)
        //get months when current month is greater
        var monthAge = currentMonth - dobMonth;
    else {
        yearAge--;
        var monthAge = 12 + currentMonth - dobMonth;
    }

    //get days
    if (currentDate >= dobDate)
        //get days when the current date is greater
        var dateAge = currentDate - dobDate;
    else {
        monthAge--;
        var dateAge = 31 + currentDate - dobDate;

        if (monthAge < 0) {
            monthAge = 11;
            yearAge--;
        }
    }
    //group the age in a single variable
    age = {
        years: yearAge,
        months: monthAge,
        days: dateAge
    };
    return age
};

export {
    getThaiDateString,
    getThaiDateAgeFromNowString,
    getThaiDateAgeFromInputString,
    getThaiDateAgeFromInput
}