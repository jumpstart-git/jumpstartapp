function AS_Button_fbfed737da454414aae15fab452e5c5c(eventobject) {
    if (gblIsOpp == true) {
        var title9 = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.TaskDetailsHdrFlex.taskTitleTxtLbl.text;
        var details9 = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskDetailsModalFlex.taskDetailsRichTxt.text;
        var endDate9 = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.endDateFlexModal.endDateTxtLbl.text;
        var startDate9 = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.startDateModalFlex.startDateTxt.text;
        var hours9 = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.hoursFlex.hoursTxtLbl.text;
        var skills9 = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskskillsFlex.skillsTxtLbl.text;
        var messge9 = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.commentsModal.commentsTxtBox.text
        if (title9 === null || title9 === "" || title9 === "null") {
            kony.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                //[D005] [Alerts] "Ensure all Alerts are categorized and updated - whether its:  - Action Required - Warning - Confirmation"
                "alertTitle": "Action Required",
                //End of D005
                "yesLabel": "OK",
                "noLabel": "No",
                "message": "Please send message to indigenous business to express interest to volunteer as you currently don't have any briefs available to volunteer",
                "alertHandler": null
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
            // alert("Please send message to indigenous business to express interest to volunteer as you currently don't have any briefs available to volunteer");
            return false;
        } else if (details9 === null || details9 === "" || details9 === "null") {
            alert("Please enter task details");
            return false;
        } else if (skills9 == null || skills9 == "null" || skills9 == "") {
            alert("Please enter skill required to complete the task");
            return false;
        } else if (hours9 == null || hours9 == "null" || hours9 == "") {
            alert("Please enter hours required to complete the task");
            return false;
        } else if (messge9 == null || messge9 == "null" || messge9 == "") {
            alert("Please enter message");
            return false;
        }
        //alert("isValidStartEnd"+isValidStartEnd);
        else {
            //alert("done");
            BusinessRequestToVolunteerAcceptTaskOpp();
        }
    } else {
        var title9 = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.TaskDetailsHdrFlex.taskTitleTxtLbl.text;
        var details9 = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskDetailsModalFlex.taskDetailsRichTxt.text;
        var endDate9 = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.endDateFlexModal.endDateTxtLbl.text;
        var startDate9 = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.startDateModalFlex.startDateTxt.text;
        var hours9 = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.hoursFlex.hoursTxtLbl.text;
        var skills9 = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskskillsFlex.skillsTxtLbl.text;
        var messge9 = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.commentsModal.commentsTxtBox.text
        if (title9 === null || title9 === "" || title9 === "null") {
            kony.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                //[D005] [Alerts] "Ensure all Alerts are categorized and updated - whether its:  - Action Required - Warning - Confirmation"
                "alertTitle": "Action Required",
                //End of D005
                "yesLabel": "OK",
                "noLabel": "No",
                "message": "Please send message to indigenous business to express interest to volunteer as you currently don't have any briefs available to volunteer",
                "alertHandler": null
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
            // alert("Please send message to indigenous business to express interest to volunteer as you currently don't have any briefs available to volunteer");
            return false;
        } else if (details9 === null || details9 === "" || details9 === "null") {
            alert("Please enter task details");
            return false;
        } else if (skills9 == null || skills9 == "null" || skills9 == "") {
            alert("Please enter skill required to complete the task");
            return false;
        } else if (hours9 == null || hours9 == "null" || hours9 == "") {
            alert("Please enter hours required to complete the task");
            return false;
        } else if (messge9 == null || messge9 == "null" || messge9 == "") {
            alert("Please enter message");
            return false;
        }
        BusinessRequestToVolunteerAcceptTasks99();
    }
}