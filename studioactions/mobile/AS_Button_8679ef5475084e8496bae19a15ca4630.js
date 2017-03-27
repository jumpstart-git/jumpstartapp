function AS_Button_8679ef5475084e8496bae19a15ca4630(eventobject) {
    function SHOW_ALERT__9d760812b3114c0599b4a30364b41319_True() {
        DeleteVolunteerAccountService.call(this);
    }

    function SHOW_ALERT__9d760812b3114c0599b4a30364b41319_False() {
        volunteerMyProfilePage.show();
    }

    function SHOW_ALERT__9d760812b3114c0599b4a30364b41319_Callback(response) {
        if (response == true) {
            SHOW_ALERT__9d760812b3114c0599b4a30364b41319_True()
        } else {
            SHOW_ALERT__9d760812b3114c0599b4a30364b41319_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirm",
        "yesLabel": "Yes",
        "noLabel": "No",
        "alertIcon": "lohourindicator.PNG",
        "message": "Do you really want to delete your account?",
        "alertHandler": SHOW_ALERT__9d760812b3114c0599b4a30364b41319_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_RIGHT
    })
}