function AS_Button_fa2abf49a3a141279bfa919c7d225271(eventobject) {
    function SHOW_ALERT_ide_onClick_97d723e00d084d3b8a1afb5850e26e43_True() {} //indeginousTaskDetails();
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