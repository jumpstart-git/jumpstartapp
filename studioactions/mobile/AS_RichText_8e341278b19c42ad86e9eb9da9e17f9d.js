function AS_RichText_8e341278b19c42ad86e9eb9da9e17f9d(eventobject, linktext, attributes, context) {
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirmation",
        "yesLabel": "Yes",
        "noLabel": "No",
        "message": "Do you really want to remove the brief?",
        "alertHandler": appUpgradeCloseOpp
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_RIGHT
    });

    function appUpgradeCloseOpp(response) {
        if (response == true) {
            unAssignedTaskSegData1();
        } else {}
    }
}