function AS_Button_2dd078c72d6d4317a70a98ff6984381a(eventobject) {
    function SHOW_ALERT_ide_onClick_69039044e9e542dda64ea828c76ebbed_True() {} //indeginousTaskDetails();
    var title = mainPage.CreateOpportunityContainer.BodyContainer.opportunityTitleInputContainer.text;
    var details = mainPage.CreateOpportunityContainer.BodyContainer.opportunityDetailsInputContainer.text;
    var endDate = mainPage.CreateOpportunityContainer.BodyContainer.opportunityEndateCalendarInput.formattedDate;
    var startDate = mainPage.CreateOpportunityContainer.BodyContainer.opportunityStartDateCalendarInput.formattedDate;
    var hours = mainPage.CreateOpportunityContainer.BodyContainer.hoursInput.text;
    var skills = mainPage.CreateOpportunityContainer.BodyContainer.skillsInput.text;
    var endDate1 = kony.store.getItem("todayDate"); //   give todays's date'
    var startdate1 = mainPage.CreateOpportunityContainer.BodyContainer.opportunityStartDateCalendarInput.formattedDate;
    var isValidEndDate = validateDate(startDate, endDate);
    var isValidStartEnd = validateStartDate(startdate1, endDate1);
    if (title === null || title === "" || title === "null") {
        alert("Please enter a task title");
    } else if (details === null || details === "" || details === "null") {
        alert("Please enter task details");
    } else if (skills === null || skills === "" || skills === "null") {
        alert("Please enter required skills");
    } else if (hours == null || hours == "null" || hours == "") {
        alert("Please enter hours required to complete the task");
    } else {
        //alert("isValidStartEnd"+isValidStartEnd);
        if (isValidStartEnd === false) {
            validationAlert("Please enter today/future date for this engagement");
        } else if (isValidEndDate === false) {
            validationAlert("End date should be a future date");
        } else {
            //alert("done");
            createOpportunity();
        }
    }
}