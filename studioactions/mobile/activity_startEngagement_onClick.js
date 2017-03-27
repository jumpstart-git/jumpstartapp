function activity_startEngagement_onClick(eventobject) {
    return AS_Button_8937be6ef1c14c11b1799fe6815abc7e(eventobject);
}

function AS_Button_8937be6ef1c14c11b1799fe6815abc7e(eventobject) {
    function SHOW_ALERT__fb69992dd17440ddbecebec1fc81e811_True() {} //indeginousTaskDetails();
    var title = mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskTitleField.text;
    var details = mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskDetailsTextArea.text;
    var endDate = mainPage.startEngagementModalContainer.startEngagementModalBody.endDateCalendarInput.formattedDate;
    var startDate = mainPage.startEngagementModalContainer.startEngagementModalBody.startDateCalendarInput.formattedDate;
    var hours = mainPage.startEngagementModalContainer.startEngagementModalBody.duratationOfEngagementInput.text;
    var endDate1 = kony.store.getItem("todayDate"); //   give todays's date'
    var startdate1 = mainPage.startEngagementModalContainer.startEngagementModalBody.startDateCalendarInput.formattedDate;
    var isValidEndDate = validateDate(startDate, endDate);
    var isValidStartEnd = validateStartDate(startdate1, endDate1);
    if (title === null || title === "" || title === "null") {
        alert("Please enter a task title");
    } else if (details === null || details === "" || details === "null") {
        alert("Please enter task details");
    } else if (hours == null || hours == "null" || hours == "") {
        alert("Please enter hours required to complete the task");
    } else {
        //alert("isValidStartEnd"+isValidStartEnd);
        if (isValidStartEnd === false) {
            validationAlert("Start Date should be greater than or equal to today's date");
        } else if (isValidEndDate === false) {
            validationAlert("End Date should be greater than or equal to start date");
        } else {
            //alert("done");
            indeginousTaskDetails();
        }
    }
}