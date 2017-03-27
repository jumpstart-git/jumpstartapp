function AS_Button_cb231915dbe44c6eb5422fe91909bba0(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        notificationServiceforVolunteer();
    } else {
        BusinessNotificationService();
    }
}