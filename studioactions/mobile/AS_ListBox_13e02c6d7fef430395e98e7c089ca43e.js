function AS_ListBox_13e02c6d7fef430395e98e7c089ca43e(eventobject, x, y) {
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