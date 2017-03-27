function addWidgetsformMessages() {
    formMessages.setDefaultUnit(kony.flex.DP);
    formMessages.add();
};

function formMessagesGlobals() {
    formMessages = new kony.ui.Form2({
        "addWidgets": addWidgetsformMessages,
        "enabledForIdleTimeout": false,
        "id": "formMessages",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
    formMessages.info = {
        "kuid": "351910faf832487a8c31bd9aa48f1a9a"
    };
};