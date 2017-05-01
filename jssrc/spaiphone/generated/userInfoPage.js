function addWidgetsuserInfoPage() {
    userInfoPage.setDefaultUnit(kony.flex.DP);
    var userInfoPageContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "userInfoPageContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    userInfoPageContainer.setDefaultUnit(kony.flex.DP);
    var infoHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "25%",
        "id": "infoHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    infoHeader.setDefaultUnit(kony.flex.DP);
    var signedInLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "signedInLabel",
        "isVisible": true,
        "skin": "kindlyConfirmLabelSkin",
        "text": "Signed-in using your account from",
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var supplyNationLogo = new kony.ui.Image2({
        "centerX": "50%",
        "id": "supplyNationLogo",
        "isVisible": true,
        "maxHeight": "50dp",
        "skin": "slImage",
        "src": "supplynation.png",
        "top": "12dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var kindlyConfirmLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "kindlyConfirmLabel",
        "isVisible": true,
        "skin": "CopykindlyConfirmLabelSkin0c008d30e330d40",
        "text": "Kindly confirm the information below",
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    infoHeader.add(signedInLabel, supplyNationLogo, kindlyConfirmLabel);
    var infoFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "infoFooter",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    infoFooter.setDefaultUnit(kony.flex.DP);
    var continueButton = new kony.ui.Button({
        "centerX": "50.00%",
        "centerY": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "50dp",
        "id": "continueButton",
        "isVisible": true,
        "onClick": AS_Button_a7b0aead332447b8bef76dcfcc1fdabe,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Continue",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    infoFooter.add(continueButton);
    userInfoPageContainer.add(infoHeader, infoFooter);
    userInfoPage.add(userInfoPageContainer);
};

function userInfoPageGlobals() {
    userInfoPage = new kony.ui.Form2({
        "addWidgets": addWidgetsuserInfoPage,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "id": "userInfoPage",
        "init": AS_Form_0955c260e9cd47709155085e6373b9c2,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": false,
        "skin": "CopyslForm015ab3b9387c447"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
    userInfoPage.info = {
        "kuid": "53d976c79dea4ed4b99b930ec54016aa"
    };
};