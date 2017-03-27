function addWidgetsflxFormRegistrationOption() {
    flxFormRegistrationOption.setDefaultUnit(kony.flex.DP);
    var flxRegistrationOptionPage = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxRegistrationOptionPage",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxRegistrationOptionPage.setDefaultUnit(kony.flex.DP);
    var flexHomeStaticData = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "25%",
        "id": "flexHomeStaticData",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flexHomeStaticData.setDefaultUnit(kony.flex.DP);
    var imgHdrLogo = new kony.ui.Image2({
        "centerX": "50%",
        "height": "70dp",
        "id": "imgHdrLogo",
        "isVisible": true,
        "src": "newhdrlogo.png",
        "top": "6%",
        "width": "23%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblJumpStart = new kony.ui.Label({
        "centerX": "51%",
        "id": "lblJumpStart",
        "isVisible": true,
        "left": "148dp",
        "text": "Jump Start",
        "top": "4%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flexHomeStaticData.add(imgHdrLogo, lblJumpStart);
    var flxRegOption = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "180dp",
        "id": "flxRegOption",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxRegOption.setDefaultUnit(kony.flex.DP);
    var lblRegisterAs = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblRegisterAs",
        "isVisible": true,
        "left": "151dp",
        "minWidth": "50%",
        "text": "Register as",
        "top": "3%",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var flxRegOptionBtns = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "25.00%",
        "id": "flxRegOptionBtns",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "19dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxRegOptionBtns.setDefaultUnit(kony.flex.DP);
    var btnBusiness = new kony.ui.Button({
        "height": "100%",
        "id": "btnBusiness",
        "isVisible": true,
        "left": "0.04%",
        "text": "Business",
        "top": "0.00%",
        "width": "44%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnVolunteer = new kony.ui.Button({
        "height": "100%",
        "id": "btnVolunteer",
        "isVisible": true,
        "left": "55%",
        "text": "Volunteer",
        "top": "0dp",
        "width": "44%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblOr = new kony.ui.Label({
        "centerX": "50%",
        "height": "100%",
        "id": "lblOr",
        "isVisible": true,
        "left": "155dp",
        "text": "or",
        "top": "0dp",
        "width": "4.41%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flxRegOptionBtns.add(btnBusiness, btnVolunteer, lblOr);
    flxRegOption.add(lblRegisterAs, flxRegOptionBtns);
    var flxHomeLowerBodyLinks = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "27.82%",
        "id": "flxHomeLowerBodyLinks",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "top": "7.32%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHomeLowerBodyLinks.setDefaultUnit(kony.flex.DP);
    var btnCorporatePartnerLink = new kony.ui.Button({
        "centerX": "50%",
        "height": "25dp",
        "id": "btnCorporatePartnerLink",
        "isVisible": true,
        "left": "60dp",
        "top": "15dp",
        "width": "75%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnNeedHelp = new kony.ui.Button({
        "centerX": "50%",
        "height": "20dp",
        "id": "btnNeedHelp",
        "isVisible": true,
        "left": "51dp",
        "top": "12.19%",
        "width": "32.00%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblPoweredBy = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblPoweredBy",
        "isVisible": true,
        "left": "148dp",
        "text": "powered by",
        "top": "10%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblCompanyName = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblCompanyName",
        "isVisible": true,
        "left": "149dp",
        "text": "That Company",
        "top": "0%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flxHomeLowerBodyLinks.add(btnCorporatePartnerLink, btnNeedHelp, lblPoweredBy, lblCompanyName);
    flxRegistrationOptionPage.add(flexHomeStaticData, flxRegOption, flxHomeLowerBodyLinks);
    flxFormRegistrationOption.add(flxRegistrationOptionPage);
};

function flxFormRegistrationOptionGlobals() {
    flxFormRegistrationOption = new kony.ui.Form2({
        "addWidgets": addWidgetsflxFormRegistrationOption,
        "enabledForIdleTimeout": false,
        "id": "flxFormRegistrationOption",
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
    flxFormRegistrationOption.info = {
        "kuid": "bca15f2cafad4b8eaa4bc39ac299bee6"
    };
};