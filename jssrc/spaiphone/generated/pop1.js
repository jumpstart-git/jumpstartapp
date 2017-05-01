function addWidgetspop1() {
    var lblUerName = new kony.ui.Label({
        "id": "lblUerName",
        "isVisible": true,
        "skin": "jumpStartLabel10099",
        "text": "Enter username"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var txtUserName = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "id": "txtUserName",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "secureTextEntry": false,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeight": null,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [3, 6, 1, 6],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoComplete": false,
        "autoCorrect": false
    });
    var lblCode = new kony.ui.Label({
        "id": "lblCode",
        "isVisible": true,
        "skin": "jumpStartLabel10099",
        "text": "Enter 5 digit code"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var txtCode = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "id": "txtCode",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "secureTextEntry": false,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeight": null,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [3, 6, 1, 6],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoComplete": false,
        "autoCorrect": false
    });
    var HBox03440b86f6fac43 = new kony.ui.Box({
        "id": "HBox03440b86f6fac43",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slHbox"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 33, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var btnCancel = new kony.ui.Button({
        "focusSkin": "jumpStartGrayButton90",
        "id": "btnCancel",
        "isVisible": true,
        "onClick": AS_Button_fcff7ef4abba402c8f1eae3689255bb4,
        "skin": "jumpStartGrayButton110",
        "text": "Cancel"
    }, {
        "containerWeight": 49,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": false,
        "padding": [4, 4, 4, 4],
        "paddingInPixel": false,
        "vExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btnValidate = new kony.ui.Button({
        "focusSkin": "jump",
        "id": "btnValidate",
        "isVisible": true,
        "onClick": AS_Button_6769340a248d48eabbad10e602c77e6b,
        "skin": "jump",
        "text": "Validate"
    }, {
        "containerWeight": 51,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": false,
        "padding": [4, 4, 4, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    HBox03440b86f6fac43.add(btnCancel, btnValidate);
    pop1.add(lblUerName, txtUserName, lblCode, txtCode, HBox03440b86f6fac43);
};

function pop1Globals() {
    pop1 = new kony.ui.Popup({
        "addWidgets": addWidgetspop1,
        "id": "pop1",
        "isModal": true,
        "skin": "CopyslPopup0d7ee4e1b530945",
        "title": "Validation",
        "transparencyBehindThePopup": 100
    }, {
        "containerWeight": 86,
        "padding": [0, 0, 0, 3],
        "paddingInPixel": false
    }, {
        "inTransitionConfig": {
            "popupTransition": "none"
        }
    });
    pop1.info = {
        "kuid": "852031d92ce24fa7b437c860523b4d7d"
    };
};