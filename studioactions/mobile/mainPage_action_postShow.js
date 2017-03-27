function mainPage_action_postShow(eventobject) {
    return AS_Form_c073dd72101c4b70836933a7f19d254a(eventobject);
}

function AS_Form_c073dd72101c4b70836933a7f19d254a(eventobject) {
    setGroupsToClose.call(this);
    notificationService.call(this);
    setSegData.call(this, null);
}