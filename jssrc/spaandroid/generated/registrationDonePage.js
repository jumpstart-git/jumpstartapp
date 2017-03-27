function addWidgetsregistrationDonePage() {
    registrationDonePage.setDefaultUnit(kony.flex.DP);
    var registrationDonePageHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "registrationDonePageHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    registrationDonePageHeader.setDefaultUnit(kony.flex.DP);
    var registrationDonePageThankYou = new kony.ui.RichText({
        "centerX": "50%",
        "id": "registrationDonePageThankYou",
        "isVisible": true,
        "skin": "jumpStartRTOrange160",
        "text": "Thank you!",
        "top": "40dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    registrationDonePageHeader.add(registrationDonePageThankYou);
    var registrationDonePageBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "registrationDonePageBody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    registrationDonePageBody.setDefaultUnit(kony.flex.DP);
    var registrationDonePageInfo = new kony.ui.RichText({
        "centerX": "50%",
        "id": "registrationDonePageInfo",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartRT100Black",
        "text": "We're glad to have you on board and we hope we can add more value to the Indigenous Community",
        "top": "10dp",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var registrationDonePageContinue = new kony.ui.Button({
        "centerX": "50.00%",
        "focusSkin": "jumpStartGreenButton120",
        "height": "50dp",
        "id": "registrationDonePageContinue",
        "isVisible": true,
        "onClick": AS_Button_a468a95fbe7e4cafbd454fc5ec558d92,
        "skin": "jumpStartGreenButton110",
        "text": "Continue",
        "top": "30dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    registrationDonePageBody.add(registrationDonePageInfo, registrationDonePageContinue);
    registrationDonePage.add(registrationDonePageHeader, registrationDonePageBody);
};

function registrationDonePageGlobals() {
    registrationDonePage = new kony.ui.Form2({
        "addWidgets": addWidgetsregistrationDonePage,
        "enableScrolling": true,
        "enabledForIdleTimeout": false,
        "id": "registrationDonePage",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": false,
        "skin": "jumpStartFormBGFFF"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
    registrationDonePage.info = {
        "kuid": "5f8dd29658ec45b489d5e0dfa91b4580"
    };
};