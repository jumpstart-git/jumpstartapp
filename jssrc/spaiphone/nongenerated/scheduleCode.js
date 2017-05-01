//Type your code here
//Type your code here
//var scheduleArr=[];
volunteerRegObject.scheduleArray = [];
var finalSchedule = [];
var gblFinalSchedule;

function addSchedule() {
    volunteerRegObject.availability = {
            mon: false,
            tue: false,
            wed: false,
            thu: false,
            fri: false,
            sat: false,
            sun: false,
            startTime: "",
            startMeridiem: "",
            endTime: "",
            endMeridiem: ""
        }
        //start
    if ((scheduleNewForm.listDays.selectedKey == "null") || (scheduleNewForm.listDays.selectedKey == null)) {
        alert("Enter a day");
        return false;
    }
    if ((scheduleNewForm.listFromTime.selectedKey == "null") || (scheduleNewForm.listFromTime.selectedKey == null)) {
        alert("Enter a start time");
        return false;
    }
    if ((scheduleNewForm.listFromTimeMerdidian.selectedKey == "null") || (scheduleNewForm.listFromTimeMerdidian.selectedKey == null)) {
        alert("Enter a start time meridiam");
        return false;
    }
    if ((scheduleNewForm.listToTime.selectedKey == "null") || (scheduleNewForm.listToTime.selectedKey == null)) {
        alert("Enter an end time");
        return false;
    }
    if ((scheduleNewForm.listToTimeMeridian.selectedKey == "null") || (scheduleNewForm.listToTimeMeridian.selectedKey == null)) {
        alert("Enter an end time meridiam");
        return false;
    }
    //end
    var daySelected = scheduleNewForm.listDays.selectedKey;
    var fromTime = scheduleNewForm.listFromTime.selectedKey + " " + scheduleNewForm.listFromTimeMerdidian.selectedKey;
    var toTime = scheduleNewForm.listToTime.selectedKey + " " + scheduleNewForm.listToTimeMeridian.selectedKey;
    var scheduleVal = daySelected + " " + fromTime + " TO " + toTime;
    //alert(scheduleVal);
    //start merin
    switch (daySelected) {
        case "MON":
            {
                volunteerRegObject.availability.mon = true;
            }
            break;
        case "TUE":
            {
                volunteerRegObject.availability.tue = true;
            }
            break;
        case "WED":
            {
                volunteerRegObject.availability.wed = true;
            }
            break;
        case "THU":
            {
                volunteerRegObject.availability.thu = true;
            }
            break;
        case "FRI":
            {
                volunteerRegObject.availability.fri = true;
            }
            break;
        case "SAT":
            {
                volunteerRegObject.availability.sat = true;
            }
            break;
        case "SUN":
            {
                volunteerRegObject.availability.sun = true;
            }
            break;
        default:
            break;
    }
    volunteerRegObject.availability.startTime = scheduleNewForm.listFromTime.selectedKey;
    volunteerRegObject.availability.startMeridiem = scheduleNewForm.listFromTimeMerdidian.selectedKey;
    volunteerRegObject.availability.endTime = scheduleNewForm.listToTime.selectedKey;
    volunteerRegObject.availability.endMeridiem = scheduleNewForm.listToTimeMeridian.selectedKey;
    // alert("volunteerRegObject.availability.startTime"+volunteerRegObject.availability.startTime);
    submitScheduleInfo();
    //end merin
    //volunteerRegObject.scheduleArray.push(scheduleVal);
    //setScheduleSeg();
}

function setScheduleSeg() {
    var localArr = [];
    scheduleNewForm.segSchedule.widgetDataMap = {
        "lblSchedule": "lblSchedule",
        "imgclose": "imgclose"
    }
    for (var i = 0; i < volunteerRegObject.scheduleArray.length; i++) {
        var testObj = {
            lblSchedule: volunteerRegObject.scheduleArray[i],
            imgclose: "cross.png"
        }
        localArr.push(testObj)
    }
    //alert("registration  localArr length"+localArr.length);
    if (localArr.length == "0") {
        scheduleNewForm.segSchedule.removeAll();
    } else {
        scheduleNewForm.segSchedule.setData(localArr);
    }
    // volunteerRegObject.scheduleArray=localArr;
}

function removeSchedule(rowObject) {
    //alert("roww");
    var scheduleToRemove = rowObject.selectedRowItems[0].lblSchedule;
    if (scheduleToRemove) {
        var indexOfScheduleToRemove = volunteerRegObject.scheduleArray.indexOf(scheduleToRemove);
        if (indexOfScheduleToRemove != -1) {
            volunteerRegObject.scheduleArray.splice(indexOfScheduleToRemove, 1);
            setScheduleSeg();
        }
    }
}

function getScheduleFormat() {
    for (var i = 0; i < volunteerRegObject.scheduleArray.length; i++) {
        var str = volunteerRegObject.scheduleArray[i];
        var arr = str.split(" ");
        var day = arr[0];
        var fromTime = arr[1] + " " + arr[2];
        var toTime = arr[4] + " " + arr[5];
        var schedule = {
            "days": day,
            "fromTime": fromTime,
            "toTime": toTime
        };
        finalSchedule.push(schedule);
    }
    //alert(JSON.stringify(finalSchedule));
    gblFinalSchedule = finalSchedule;
    finalSchedule = [];
    if (gblFinalSchedule.length > 0) {
        updateSummaryPageInfo();
        registrationSummaryPage.show();
    } else {
        alert("Please enter at least one available schedule");
    }
}

function validateScheduleInfo() {
    var hasAvailability = validateAvailability(); // true;//validateAvailability();
    if (hasAvailability === false) {
        return false;
    }
    var isCorrectTime = startLessThanEnd();
    var isValidHours = validateVolunteerHours();
    if (hasAvailability && isCorrectTime && isValidHours) {
        updateSummaryPageInfo();
        registrationSummaryPage.show();
    }
    kony.print("__________________________________________$$$$$$$$$$$$$$$$$$$$$$$$$$ DEBUG - START: myString");
    kony.print(volunteerRegObject);
    kony.print("__________________________________________$$$$$$$$$$$$$$$$$$$$$$$$$$ DEBUG - END: myString");
}