function AS_RichText_d6ff08f069db47e1b086860d0827fe7b(eventobject, linktext, attributes, context) {
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        //[D005] [Alerts] "Ensure all Alerts are categorized and updated - whether its:  - Action Required - Warning - Confirmation"(Testing completed)
        "alertTitle": "Confirmation",
        //END of D005
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
