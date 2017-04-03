function AS_ListBox_2f77ddc1d1f44df68125d83f467a39d9(eventobject) {
    //alert("select:"+searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.oppurtunities1ListModal.assignToExistingTaskListBox1.selectedKey);
    if ((searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.oppurtunities1ListModal.assignToExistingTaskListBox1.selectedKey === "Select") || (searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.oppurtunities1ListModal.assignToExistingTaskListBox1.selectedKey === "")) {
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "alertTitle": null,
            "yesLabel": "OK",
            "noLabel": "No",
            "message": "Please send message to indigenous business to express interest to volunteer as you currently don't have any briefs available to volunteer",
            "alertHandler": "null"
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
        //alert("Please send message to indigenous business to express interest to volunteer as you currently don't have any briefs available to volunteer");
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.TaskDetailsHdrFlex.taskTitleTxtLbl.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskDetailsModalFlex.taskDetailsRichTxt.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.startDateModalFlex.startDateTxt.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.endDateFlexModal.endDateTxtLbl.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskskillsFlex.skillsTxtLbl.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.hoursFlex.hoursTxtLbl.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.commentsModal.commentsTxtBox.text = "";
        return false;
    } else {
        //D013: Add code snippet to display task details on valid selection
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.TaskDetailsHdrFlex.isVisible = true;
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskDetailsModalFlex.isVisible = true;
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskskillsFlex.isVisible = true;
        //D013: End of addition
        gblExistingBusTaskId = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.oppurtunities1ListModal.assignToExistingTaskListBox1.selectedKeyValue;
        var id = gblExistingBusTaskId[0];
        //alert(JSON.stringify(gblExistingBusTaskId));
        kony.store.setItem("gblExistingBusTaskId", id);
    }
    if (searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.oppurtunities1ListModal.assignToExistingTaskListBox1.selectedKey === "Select") {
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.TaskDetailsHdrFlex.taskTitleTxtLbl.text = " ";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskDetailsModalFlex.taskDetailsRichTxt.text = " ";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.startDateModalFlex.startDateTxt.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.endDateFlexModal.endDateTxtLbl.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskskillsFlex.skillsTxtLbl.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.hoursFlex.hoursTxtLbl.text = "";
    } else {
        BusinessLoadExistingTaskTaskService99();
    }
}