function AS_Button_c8c845e7a2c347cea5d422f4843ef41a(eventobject) {
    function SHOW_ALERT_ide_onClick_c59ef14647f44f55a09b2e79dabc0781_True() {
        DeleteVolunteerAccountService.call(this);
    }

    function SHOW_ALERT_ide_onClick_c59ef14647f44f55a09b2e79dabc0781_False() {
        volunteerMyProfilePage.show();
    }

    function SHOW_ALERT_ide_onClick_c59ef14647f44f55a09b2e79dabc0781_Callback(response) {
        if (response == true) {
            SHOW_ALERT_ide_onClick_c59ef14647f44f55a09b2e79dabc0781_True()
        } else {
            SHOW_ALERT_ide_onClick_c59ef14647f44f55a09b2e79dabc0781_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirmation",
        "yesLabel": "Yes",
        "noLabel": "No",
        "alertIcon": "lohourindicator.PNG",
        "message": "Do you really want to delete your account?",
        "alertHandler": SHOW_ALERT_ide_onClick_c59ef14647f44f55a09b2e79dabc0781_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_RIGHT
    })
}