function AS_Button_3f3ea29874a042e4b234c314c3385d65(eventobject) {
    function SHOW_ALERT_ide_onClick_b7812ce708cc43daa3b1f8296aadf672_True() {
        DeleteVolunteerAccountService.call(this);
    }

    function SHOW_ALERT_ide_onClick_b7812ce708cc43daa3b1f8296aadf672_False() {
        volunteerMyProfilePage.show();
    }

    function SHOW_ALERT_ide_onClick_b7812ce708cc43daa3b1f8296aadf672_Callback(response) {
        if (response == true) {
            SHOW_ALERT_ide_onClick_b7812ce708cc43daa3b1f8296aadf672_True()
        } else {
            SHOW_ALERT_ide_onClick_b7812ce708cc43daa3b1f8296aadf672_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirmation",
        "yesLabel": "Yes",
        "noLabel": "No",
        "alertIcon": "lohourindicator.PNG",
        "message": "Do you really want to delete your account?",
        "alertHandler": SHOW_ALERT_ide_onClick_b7812ce708cc43daa3b1f8296aadf672_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_RIGHT
    })
}