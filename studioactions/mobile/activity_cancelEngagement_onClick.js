function activity_cancelEngagement_onClick(eventobject) {
    return AS_Button_6c414d0da69e45eb9e18a50ec0d9274d(eventobject);
}

function AS_Button_6c414d0da69e45eb9e18a50ec0d9274d(eventobject) {
    mainPage.startEngagementModalContainer.isVisible = false;
    mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskTitleField.text = "";
    mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskDetailsTextArea.text = "";
    //mainPage.show();
}