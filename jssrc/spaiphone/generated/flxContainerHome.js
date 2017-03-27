function addWidgetsflxContainerHome() {
    flxContainerHome.setDefaultUnit(kony.flex.DP);
    var HomeMainFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "HomeMainFlex",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    HomeMainFlex.setDefaultUnit(kony.flex.DP);
    var flexHomeStaticData = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "31.59%",
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
        "top": "2%",
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
    var lblMainText = new kony.ui.Label({
        "centerX": "50%",
        "height": "26.89%",
        "id": "lblMainText",
        "isVisible": true,
        "left": "0dp",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
        "top": "3%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flexHomeStaticData.add(imgHdrLogo, lblJumpStart, lblMainText);
    var flxHomeMiddlePart = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "35%",
        "id": "flxHomeMiddlePart",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "top": "4%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHomeMiddlePart.setDefaultUnit(kony.flex.DP);
    var btnRegister = new kony.ui.Button({
        "centerX": "50.00%",
        "height": "40dp",
        "id": "btnRegister",
        "isVisible": true,
        "left": "53dp",
        "onClick": AS_Button_2cb58598b9264012bb4ba61fe77ce26a,
        "text": "Register",
        "top": "1.00%",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblOR = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblOR",
        "isVisible": true,
        "left": "140dp",
        "text": "or",
        "top": "5%",
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
    var flxSigninLink = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "35dp",
        "id": "flxSigninLink",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "3%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxSigninLink.setDefaultUnit(kony.flex.DP);
    var lblSignInTxt = new kony.ui.Label({
        "height": "100%",
        "id": "lblSignInTxt",
        "isVisible": true,
        "left": "31%",
        "text": "Using your account with",
        "top": "0dp",
        "width": "66.67%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var Button07df0ca05167048 = new kony.ui.Button({
        "height": "71.43%",
        "id": "Button07df0ca05167048",
        "isVisible": true,
        "left": "8.85%",
        "top": "12%",
        "width": "22.22%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxSigninLink.add(lblSignInTxt, Button07df0ca05167048);
    var imgSupplyNation = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50dp",
        "id": "imgSupplyNation",
        "isVisible": true,
        "left": "70dp",
        "src": "supplynationlogo.png",
        "top": "13dp",
        "width": "225dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxHomeMiddlePart.add(btnRegister, lblOR, flxSigninLink, imgSupplyNation);
    var flxHomeLowerBodyLinks = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "27.05%",
        "id": "flxHomeLowerBodyLinks",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "top": "2.32%",
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
    HomeMainFlex.add(flexHomeStaticData, flxHomeMiddlePart, flxHomeLowerBodyLinks);
    flxContainerHome.add(HomeMainFlex);
};

function flxContainerHomeGlobals() {
    flxContainerHome = new kony.ui.Form2({
        "addWidgets": addWidgetsflxContainerHome,
        "enabledForIdleTimeout": false,
        "id": "flxContainerHome",
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
    flxContainerHome.info = {
        "kuid": "24a2e7600b0f4d2ab1dd7a18a2379c03"
    };
};