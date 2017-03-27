function AS_Button_e0ba749e1fcb4fc1bdc6a2783b501647(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        BusinessAcceptRequestTasks();
    } else {
        mainPage.eligibiltyCriteriaModalContainer.isVisible = true;
        var originalMsg = kony.store.getItem("busmsge");
        if ((originalMsg != null) && (originalMsg != "null")) {
            mainPage.eligibiltyCriteriaModalContainer.BodyFlex.reqmsgLbl.text = originalMsg;
        }
        //VolNewAcceptTaskBtn();
    }
}