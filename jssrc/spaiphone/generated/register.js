function addWidgetsregister() {
    register.setDefaultUnit(kony.flex.DP);
    register.add();
};

function registerGlobals() {
    register = new kony.ui.Form2({
        "addWidgets": addWidgetsregister,
        "enabledForIdleTimeout": false,
        "id": "register",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm073478c814c2e4b"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
    register.info = {
        "kuid": "8563a052e13947fbb7a42363065789bd"
    };
};