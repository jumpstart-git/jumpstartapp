function AS_ListBox_40e6cfb5bbb54334bacd88300920c324(eventobject) {
    gblExistingTaskIdBus = searchResultProfile.startEngagementModalContainer.startEngagementHeaderContainer.AssignExistingTaskContainer.assignToExistingTaskListBoxContainer.existingOpenTasksListBox.selectedKeyValue;
    var id = gblExistingTaskIdBus[0];
    var text1 = gblExistingTaskIdBus[1];
    //alert(id);
    //alert(text1);
    //alert(id);
    kony.store.setItem("gblExistingTaskId", id);
    if (text1 == "Select") {
        // alert("Please select a task");
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "alertTitle": null,
            "yesLabel": "OK",
            "noLabel": "No",
            "message": "Please select a task",
            "alertHandler": null
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
        searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TitleInputField.text = "";
        searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TaskDetailsTextArea.text = "";
        searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.CommentsTextArea.text = "";
        searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.SkillsInput.text = "";
        searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.DuratationOfEngagementInput.text = "";
        kony.application.dismissLoadingScreen();
    } else {
        //getBusinessLoadExistingTaskTask();
        BusinessLoadExistingTaskTaskService();
    }
    //var tsetGetID=kony.store.getItem("gblExistingTaskId");
    //alert(tsetGetID);
}