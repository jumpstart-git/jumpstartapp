function AS_Segment_129e92e809394c59bd592175b01d09f1(eventobject, sectionNumber, rowNumber) {
    removeHours.call(this, eventobject);
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": null,
        "yesLabel": "OK",
        "noLabel": "Cancel",
        "message": "Do you really want to remove hours",
        "alertHandler": appUpgrade1
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}