function AS_Button_99e8fcfe74224ca997ce775e4cafcdc1(eventobject) {
    function SHOW_ALERT_ide_onClick_a621a81c51954e3e800cc0a08a12c5ab_True() {}
    var title2 = searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TitleInputField.text;
    var details2 = searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TaskDetailsTextArea.text;
    var endDate2 = searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.EndDateCalendarInput.formattedDate;
    var startDate2 = searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.StartDateCalendarInput.formattedDate;
    var hours2 = searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.DuratationOfEngagementInput.text;
    var skills2 = searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.SkillsInput.text;
    var messge2 = searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.CommentsTextArea.text;
    var endDate3 = kony.store.getItem("todayDate"); //   give todays's date'
    var startdate3 = searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.StartDateCalendarInput.formattedDate;
    var isValidEndDate = validateDate(startDate2, endDate2);
    var isValidStartEnd = validateStartDate(startdate3, endDate3);
    if (title2 === null || title2 === "" || title2 === "null") {
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "alertTitle": null,
            "yesLabel": "OK",
            "noLabel": "No",
            "message": "Please enter a task title",
            "alertHandler": "null"
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
        //alert("Please enter a task title");
    } else if (details2 === null || details2 === "" || details2 === "null") {
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "alertTitle": null,
            "yesLabel": "OK",
            "noLabel": "No",
            "message": "Please enter task details",
            "alertHandler": "null"
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
        // alert("Please enter task details");
    } else if (skills2 == null || skills2 == "null" || skills2 == "") {
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "alertTitle": null,
            "yesLabel": "OK",
            "noLabel": "No",
            "message": "Please enter skill required to complete the task",
            "alertHandler": "null"
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
        // alert("Please enter skill required to complete the task");
    } else if (hours2 == null || hours2 == "null" || hours2 == "") {
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "alertTitle": null,
            "yesLabel": "OK",
            "noLabel": "No",
            "message": "Please enter hours required to complete the task",
            "alertHandler": "null"
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
        // alert("Please enter hours required to complete the task");
    } else if (messge2 == null || messge2 == "null" || messge2 == "") {
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "alertTitle": null,
            "yesLabel": "OK",
            "noLabel": "No",
            "message": "Please enter message",
            "alertHandler": "null"
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
        // alert("Please enter message");
    } else {
        //alert("isValidStartEnd"+isValidStartEnd);
        if (isValidStartEnd === false) {
            kony.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                //D040: changed alertTitle from null to "Action Required"
                "alertTitle": "Action Required",
                "yesLabel": "OK",
                "noLabel": "No",
                "message": "Please enter today/future date for this engagement",
                "alertHandler": "null"
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
            //validationAlert("Please enter today/future date for this engagement");
        } else if (isValidEndDate === false) {
            kony.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                //D040: chenged alertTitle from null to "Action Required"
                "alertTitle": "Action Required",
                "yesLabel": "OK",
                "noLabel": "No",
                "message": "End date should be a future date",
                "alertHandler": "null"
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
            //   validationAlert("End date should be a future date");
        } else {
            //alert("done");
            BusinessRequestVolunteerTasks();
        }
    }
}