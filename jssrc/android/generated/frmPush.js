function addWidgetsfrmPush() {
    frmPush.setDefaultUnit(kony.flex.DP);
    var Button0e906fdb0e2b94f = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "Button0e906fdb0e2b94f",
        "isVisible": true,
        "left": "85dp",
        "onClick": AS_Button_eb96d11911454d8e91cb3994fb686bf4,
        "skin": "slButtonGlossBlue",
        "text": "Button",
        "top": "112dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmPush.add(Button0e906fdb0e2b94f);
};

function frmPushGlobals() {
    frmPush = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmPush,
        "enabledForIdleTimeout": false,
        "id": "frmPush",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};