function AS_Segment_cc1833b9062c482fb8b23f76f61ef7ac(eventobject, sectionNumber, rowNumber) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        getBusinessNotificationDetails();
    } else {
        getVolunteerNotificationDetails();
    }
}