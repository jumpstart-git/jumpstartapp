function AS_Button_c744708682c64883bbf34dca04f06842(eventobject) {
    function SHOW_ALERT_ide_onClick_7272bc2e3404439d8c28d210983015cc_True() {}
    var title = mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppTitleInputLabel.text;
    var details = mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppDetailsInputLabel.text;
    var endDate = mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppEndDateCalendarInput.formattedDate;
    var startDate = mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppStartDateCalendarInput.formattedDate;
    var hours = mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppHoursInputLabel.text;
    var skills = mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppSkillsInputLabel.text;
    var endDate1 = kony.store.getItem("todayDate"); //   give todays's date'
    var startdate1 = mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppStartDateCalendarInput.formattedDate;
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
            validationAlert("Start Date should be greater than or equal to today's date");
        } else if (isValidEndDate === false) {
            validationAlert("End Date should be greater than or equal to start date");
        } else {
            //alert("done");
            UpdateOpportunity();
        }
    }
}