function AS_ListBox_371159d502e8420489b4e69bf9505217(eventobject) {
    gblExistingTaskId = mainPage.startEngagementModalContainer.startEngagementModalHeader.startEngagmentHeaderAssignToTask.assignToExistingTaskListBoxContainer.existingTaskListBox.selectedKeyValue;
    var id = gblExistingTaskId[0];
    //alert(JSON.stringify(gblExistingTaskId));
    kony.store.setItem("gblExistingTaskId", id);
    if (mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskTitleField.text == "Select") {
        mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskTitleField.text = "";
        mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskDetailsTextArea.text = "";
        mainPage.startEngagementModalContainer.startEngagementModalBody.startDateCalendarInput.data = "";
        mainPage.startEngagementModalContainer.startEngagementModalBody.startDateCalendarInput.data = "";
    } else {
        //getBusinessLoadExistingTaskTask();
        BusinessLoadExistingTaskTaskService();
    }
    //var tsetGetID=kony.store.getItem("gblExistingTaskId");
    //alert(tsetGetID);
}