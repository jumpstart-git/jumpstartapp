function addWidgetssearchResultProfile() {
    searchResultProfile.setDefaultUnit(kony.flex.DP);
    var volunteerProfileContainer = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "volunteerProfileContainer",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox075cf6099ef7d47",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileContainer.setDefaultUnit(kony.flex.DP);
    var VolProfileHeaderBackButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "6.39%",
        "id": "VolProfileHeaderBackButtonContainer",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    VolProfileHeaderBackButtonContainer.setDefaultUnit(kony.flex.DP);
    var CopybackButtonContainer0c23230ebca4140 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopybackButtonContainer0c23230ebca4140",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_1c1575f8331942b6a160b360ec272579,
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    CopybackButtonContainer0c23230ebca4140.setDefaultUnit(kony.flex.DP);
    var CopystrartEngageBackBtn078e5fee30bf94b = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "height": "80%",
        "id": "CopystrartEngageBackBtn078e5fee30bf94b",
        "isVisible": true,
        "left": "18dp",
        "onClick": AS_Button_31c2aa437d8441008cc35e55dcb8e99e,
        "skin": "CopyslButtonGlossBlue0c1a6517000b344",
        "top": "0dp",
        "width": "29.63%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopybackButtonContainer0c23230ebca4140.add(CopystrartEngageBackBtn078e5fee30bf94b);
    VolProfileHeaderBackButtonContainer.add(CopybackButtonContainer0c23230ebca4140);
    var volunteerSearchedProfileBackButton = new kony.ui.Button({
        "height": "22dp",
        "id": "volunteerSearchedProfileBackButton",
        "isVisible": false,
        "left": "7dp",
        "onClick": AS_Button_74795edb55fd42e9a72a9ba442f85b36,
        "skin": "CopyslButtonGlossBlue0881e97f46a7549",
        "top": "3dp",
        "width": "17dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var volunteerProfileDetailsHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfileDetailsHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "1dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileDetailsHeader.setDefaultUnit(kony.flex.DP);
    var volunteerProfilePic = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfilePic",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "7dp",
        "width": "30%"
    }, {}, {});
    volunteerProfilePic.setDefaultUnit(kony.flex.DP);
    var volunteerProfilePicImage = new kony.ui.Image2({
        "centerX": "60%",
        "height": "70dp",
        "id": "volunteerProfilePicImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "imgseglogo.png",
        "top": "0dp",
        "width": "70dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerProfilePic.add(volunteerProfilePicImage);
    var volunteerProfileDetailsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfileDetailsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "7dp",
        "width": "70%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileDetailsContainer.setDefaultUnit(kony.flex.DP);
    var volunteerProfileName = new kony.ui.Label({
        "id": "volunteerProfileName",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0af134fa002934b",
        "top": "0dp",
        "width": "95%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var volunteerProfileCompanyName = new kony.ui.RichText({
        "id": "volunteerProfileCompanyName",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText0364e2453c4f842",
        "top": "0dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var volunteerProfileBusinessUnitRole = new kony.ui.RichText({
        "id": "volunteerProfileBusinessUnitRole",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText0364e2453c4f842",
        "top": "0dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerProfileDetailsContainer.add(volunteerProfileName, volunteerProfileCompanyName, volunteerProfileBusinessUnitRole);
    volunteerProfileDetailsHeader.add(volunteerProfilePic, volunteerProfileDetailsContainer);
    var volunteerProfileContactActions = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfileContactActions",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "15dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileContactActions.setDefaultUnit(kony.flex.DP);
    var volunteerProfileBookmark = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "volunteerProfileBookmark",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox048f5d0e9995346",
        "top": "0dp",
        "width": "33%"
    }, {}, {});
    volunteerProfileBookmark.setDefaultUnit(kony.flex.DP);
    volunteerProfileBookmark.add();
    var volunteerProfileCall = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "volunteerProfileCall",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox048f5d0e9995346",
        "top": "0dp",
        "width": "34%"
    }, {}, {});
    volunteerProfileCall.setDefaultUnit(kony.flex.DP);
    volunteerProfileCall.add();
    var volunteerProfileEmail = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "44dp",
        "id": "volunteerProfileEmail",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "50dp",
        "onTouchStart": AS_FlexContainer_f07e8bd82ca64434b48d0add088a5563,
        "skin": "CopyslFbox048f5d0e9995346",
        "top": "6dp",
        "width": "25.00%"
    }, {}, {});
    volunteerProfileEmail.setDefaultUnit(kony.flex.DP);
    var volunteerProfileMsgBtn = new kony.ui.Button({
        "centerX": "50%",
        "height": "23dp",
        "id": "volunteerProfileMsgBtn",
        "isVisible": true,
        "left": "41dp",
        "skin": "CopyslButtonGlossBlue0bbe038774fa543",
        "top": "3dp",
        "width": "29dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imessageFromVolunteerProfile = new kony.ui.RichText({
        "centerX": "49%",
        "id": "imessageFromVolunteerProfile",
        "isVisible": true,
        "left": "5dp",
        "skin": "jumpStartRtLink100",
        "text": "<a style=\"color: #37b3b1\">Message</a>",
        "top": "-1dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerProfileEmail.add(volunteerProfileMsgBtn, imessageFromVolunteerProfile);
    volunteerProfileContactActions.add(volunteerProfileBookmark, volunteerProfileCall, volunteerProfileEmail);
    var requestAVolunteer = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "40dp",
        "id": "requestAVolunteer",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_f3075a508e024615b2e365abb06ea12b,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Request for volunteer",
        "top": "9dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var volunteerProfileLocationContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileLocationContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileLocationContainer.setDefaultUnit(kony.flex.DP);
    var volunteerProfileLocationIconParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfileLocationIconParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%"
    }, {}, {});
    volunteerProfileLocationIconParent.setDefaultUnit(kony.flex.DP);
    var volunteerProfileLocationPinImage = new kony.ui.Image2({
        "centerX": "50%",
        "height": "45dp",
        "id": "volunteerProfileLocationPinImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "location.png",
        "top": "0dp",
        "width": "100%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerProfileLocationIconParent.add(volunteerProfileLocationPinImage);
    var volunteerProfileLocationAddressParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfileLocationAddressParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "20dp",
        "width": "70%"
    }, {}, {});
    volunteerProfileLocationAddressParent.setDefaultUnit(kony.flex.DP);
    var volunteerProfileLocationAddressStateText = new kony.ui.RichText({
        "id": "volunteerProfileLocationAddressStateText",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText02d4fb58a6f0a42",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerProfileLocationAddressParent.add(volunteerProfileLocationAddressStateText);
    var volunteerProfileLocationDistanceParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfileLocationDistanceParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    volunteerProfileLocationDistanceParent.setDefaultUnit(kony.flex.DP);
    var volunteerProfileLocationDistanceText = new kony.ui.RichText({
        "id": "volunteerProfileLocationDistanceText",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText08e91f37dd47f48",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerProfileLocationDistanceParent.add(volunteerProfileLocationDistanceText);
    volunteerProfileLocationContainer.add(volunteerProfileLocationIconParent, volunteerProfileLocationAddressParent, volunteerProfileLocationDistanceParent);
    var volunteerProfileAboutContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileAboutContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileAboutContainer.setDefaultUnit(kony.flex.DP);
    var volunteerProfileAboutHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileAboutHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    volunteerProfileAboutHeader.setDefaultUnit(kony.flex.DP);
    var volunteerProfileAboutTextParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfileAboutTextParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    volunteerProfileAboutTextParent.setDefaultUnit(kony.flex.DP);
    var volunteerProfileAboutText = new kony.ui.RichText({
        "height": "40dp",
        "id": "volunteerProfileAboutText",
        "isVisible": true,
        "left": "0dp",
        "skin": "ngnyOrangeHeaderText",
        "text": "About Nick Giles",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerProfileAboutTextParent.add(volunteerProfileAboutText);
    volunteerProfileAboutHeader.add(volunteerProfileAboutTextParent);
    var volunteerProfileAboutBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "10dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileAboutBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileAboutBody.setDefaultUnit(kony.flex.DP);
    var volunteerProfileAboutBodyText = new kony.ui.RichText({
        "centerX": "50%",
        "id": "volunteerProfileAboutBodyText",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartRT100Black",
        "text": "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam</p>\n<br>\n<p>erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse </p>",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerProfileAboutBody.add(volunteerProfileAboutBodyText);
    volunteerProfileAboutContainer.add(volunteerProfileAboutHeader, volunteerProfileAboutBody);
    var volunteerProfileContactContainer1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfileContactContainer1",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "16dp",
        "skin": "CopyslFbox0a00c3d05da4f49",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileContactContainer1.setDefaultUnit(kony.flex.DP);
    var contactAdressLbl = new kony.ui.Label({
        "id": "contactAdressLbl",
        "isVisible": true,
        "left": "10dp",
        "skin": "ngnyOrangeLabelText",
        "text": "Contact Details",
        "top": "7dp",
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
    var volContactNumflex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volContactNumflex",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "7dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    volContactNumflex.setDefaultUnit(kony.flex.DP);
    var volContactImgFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volContactImgFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    volContactImgFlex.setDefaultUnit(kony.flex.DP);
    var volContactImg = new kony.ui.Image2({
        "centerX": "50%",
        "height": "13dp",
        "id": "volContactImg",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "landline1.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volContactImgFlex.add(volContactImg);
    var volContactNumberflex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volContactNumberflex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "81.60%",
        "zIndex": 1
    }, {}, {});
    volContactNumberflex.setDefaultUnit(kony.flex.DP);
    var volunteerPhoneNum = new kony.ui.RichText({
        "id": "volunteerPhoneNum",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText0514cecac58c549",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volContactNumberflex.add(volunteerPhoneNum);
    volContactNumflex.add(volContactImgFlex, volContactNumberflex);
    var volEmailFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volEmailFlex",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "2dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    volEmailFlex.setDefaultUnit(kony.flex.DP);
    var volEmailImgFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volEmailImgFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    volEmailImgFlex.setDefaultUnit(kony.flex.DP);
    var volEmailImg = new kony.ui.Image2({
        "centerX": "50%",
        "height": "13dp",
        "id": "volEmailImg",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "atrateimg.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volEmailImgFlex.add(volEmailImg);
    var volEmailTxtFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volEmailTxtFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "81.60%",
        "zIndex": 1
    }, {}, {});
    volEmailTxtFlex.setDefaultUnit(kony.flex.DP);
    var volEmailTxt = new kony.ui.RichText({
        "id": "volEmailTxt",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText0951e67eefb874e",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volEmailTxtFlex.add(volEmailTxt);
    volEmailFlex.add(volEmailImgFlex, volEmailTxtFlex);
    volunteerProfileContactContainer1.add(contactAdressLbl, volContactNumflex, volEmailFlex);
    var volunteerProfileContactContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileContactContainer",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "16dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileContactContainer.setDefaultUnit(kony.flex.DP);
    var volunteerProfileContactHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileContactHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100.00%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileContactHeader.setDefaultUnit(kony.flex.DP);
    var ContactDetailsHdr = new kony.ui.RichText({
        "height": "40dp",
        "id": "ContactDetailsHdr",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText0f2fad47b2b1647",
        "text": "Contact Details",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerProfileContactHeader.add(ContactDetailsHdr);
    var volunteerProfileBodyHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileBodyHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "50dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileBodyHeader.setDefaultUnit(kony.flex.DP);
    var volunteerContactTxtArea = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "120dp",
        "id": "volunteerContactTxtArea",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "numberOfVisibleLines": 3,
        "skin": "CopyslTextArea0eb1b8bb9a92442",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "autoCorrect": false
    });
    var volunteerEmailTxtArea = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "id": "volunteerEmailTxtArea",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "numberOfVisibleLines": 3,
        "skin": "CopyslTextArea0135b8534750c41",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "40dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "autoCorrect": false
    });
    volunteerProfileBodyHeader.add(volunteerContactTxtArea, volunteerEmailTxtArea);
    volunteerProfileContactContainer.add(volunteerProfileContactHeader, volunteerProfileBodyHeader);
    var volunteerProfileAvailabilityContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileAvailabilityContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileAvailabilityContainer.setDefaultUnit(kony.flex.DP);
    var volunteerProfileAvailabilityHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileAvailabilityHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    volunteerProfileAvailabilityHeader.setDefaultUnit(kony.flex.DP);
    var volunteerProfileAvailabilityTextParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfileAvailabilityTextParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    volunteerProfileAvailabilityTextParent.setDefaultUnit(kony.flex.DP);
    var volunteerProfileAvailabilityText = new kony.ui.RichText({
        "height": "40dp",
        "id": "volunteerProfileAvailabilityText",
        "isVisible": true,
        "left": "0dp",
        "skin": "ngnyOrangeHeaderText",
        "text": "Schedule of availability",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerProfileAvailabilityTextParent.add(volunteerProfileAvailabilityText);
    volunteerProfileAvailabilityHeader.add(volunteerProfileAvailabilityTextParent);
    var volunteerProfileAvailabilityExperienceBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "10dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileAvailabilityExperienceBody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileAvailabilityExperienceBody.setDefaultUnit(kony.flex.DP);
    var volunteerProfileAvailabilityCalendarParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfileAvailabilityCalendarParent",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    volunteerProfileAvailabilityCalendarParent.setDefaultUnit(kony.flex.DP);
    var volunteerProfileAvailabilityCalendarImage = new kony.ui.Image2({
        "height": "40dp",
        "id": "volunteerProfileAvailabilityCalendarImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "calendaricon.png",
        "top": "0dp",
        "width": "40dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerProfileAvailabilityCalendarParent.add(volunteerProfileAvailabilityCalendarImage);
    var volunteerProfileAvailabilityScheduleParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfileAvailabilityScheduleParent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyjumpStartBGBorder023e7eca67fa24c",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileAvailabilityScheduleParent.setDefaultUnit(kony.flex.DP);
    var volunteerProfileAvailabilityScheduleDays = new kony.ui.RichText({
        "id": "volunteerProfileAvailabilityScheduleDays",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText084750cb758f144",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var volunteerProfileAvailabilityScheduleTime = new kony.ui.RichText({
        "id": "volunteerProfileAvailabilityScheduleTime",
        "isVisible": false,
        "left": "0dp",
        "skin": "CopyslRichText06d89e347b0034c",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerProfileAvailabilityScheduleParent.add(volunteerProfileAvailabilityScheduleDays, volunteerProfileAvailabilityScheduleTime);
    volunteerProfileAvailabilityExperienceBody.add(volunteerProfileAvailabilityCalendarParent, volunteerProfileAvailabilityScheduleParent);
    volunteerProfileAvailabilityContainer.add(volunteerProfileAvailabilityHeader, volunteerProfileAvailabilityExperienceBody);
    var volunteerProfileSkillsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileSkillsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileSkillsContainer.setDefaultUnit(kony.flex.DP);
    var volunteerProfileSkillsHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileSkillsHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    volunteerProfileSkillsHeader.setDefaultUnit(kony.flex.DP);
    var volunteerSkillsTextParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerSkillsTextParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    volunteerSkillsTextParent.setDefaultUnit(kony.flex.DP);
    var volunteerProfileSkillsText = new kony.ui.RichText({
        "height": "40dp",
        "id": "volunteerProfileSkillsText",
        "isVisible": true,
        "left": "0dp",
        "skin": "ngnyOrangeHeaderText",
        "text": "Skills\n",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerSkillsTextParent.add(volunteerProfileSkillsText);
    volunteerProfileSkillsHeader.add(volunteerSkillsTextParent);
    var volunteerProfileSkillsBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "10dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileSkillsBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileSkillsBody.setDefaultUnit(kony.flex.DP);
    var volunteerProfileSkillsList = new kony.ui.RichText({
        "centerX": "50%",
        "id": "volunteerProfileSkillsList",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText0a3501d11069745",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerProfileSkillsBody.add(volunteerProfileSkillsList);
    volunteerProfileSkillsContainer.add(volunteerProfileSkillsHeader, volunteerProfileSkillsBody);
    var volunteerProfileWorkExperienceContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "20dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileWorkExperienceContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileWorkExperienceContainer.setDefaultUnit(kony.flex.DP);
    var volunteerProfileWorkExperienceHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileWorkExperienceHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    volunteerProfileWorkExperienceHeader.setDefaultUnit(kony.flex.DP);
    var volunteerProfileWorkExperienceTextParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfileWorkExperienceTextParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    volunteerProfileWorkExperienceTextParent.setDefaultUnit(kony.flex.DP);
    var volunteerProfileWorkExperienceText = new kony.ui.RichText({
        "height": "40dp",
        "id": "volunteerProfileWorkExperienceText",
        "isVisible": true,
        "left": "0dp",
        "skin": "ngnyOrangeHeaderText",
        "text": "Work Experience",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerProfileWorkExperienceTextParent.add(volunteerProfileWorkExperienceText);
    volunteerProfileWorkExperienceHeader.add(volunteerProfileWorkExperienceTextParent);
    var volunteerProfileWorkExperienceRT = new kony.ui.RichText({
        "bottom": "20dp",
        "centerX": "50%",
        "id": "volunteerProfileWorkExperienceRT",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartRT100Black",
        "text": "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam</p>\n<br>\n<p>erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse </p>",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerProfileWorkExperienceContainer.add(volunteerProfileWorkExperienceHeader, volunteerProfileWorkExperienceRT);
    volunteerProfileContainer.add(VolProfileHeaderBackButtonContainer, volunteerSearchedProfileBackButton, volunteerProfileDetailsHeader, volunteerProfileContactActions, requestAVolunteer, volunteerProfileLocationContainer, volunteerProfileAboutContainer, volunteerProfileContactContainer1, volunteerProfileContactContainer, volunteerProfileAvailabilityContainer, volunteerProfileSkillsContainer, volunteerProfileWorkExperienceContainer);
    var businessProfileContainer = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "businessProfileContainer",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "9dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    businessProfileContainer.setDefaultUnit(kony.flex.DP);
    var businessProfileDetailsHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "businessProfileDetailsHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    businessProfileDetailsHeader.setDefaultUnit(kony.flex.DP);
    var CompanyLogoContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80dp",
        "id": "CompanyLogoContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "14dp",
        "width": "25%"
    }, {}, {});
    CompanyLogoContainer.setDefaultUnit(kony.flex.DP);
    var CompanyLogo = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "44%",
        "height": "70dp",
        "id": "CompanyLogo",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "supplynationlogo.png",
        "top": "0dp",
        "width": "77dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CompanyLogoContainer.add(CompanyLogo);
    var CompanyNameAndAddressContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80dp",
        "id": "CompanyNameAndAddressContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "75%"
    }, {}, {});
    CompanyNameAndAddressContainer.setDefaultUnit(kony.flex.DP);
    var BusinessProfileCompanyNameAndAddressContaine = new kony.ui.Label({
        "id": "BusinessProfileCompanyNameAndAddressContaine",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel140Bold",
        "text": "The Supplies  Company",
        "top": "25%",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CompanyAddressContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20dp",
        "id": "CompanyAddressContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CompanyAddressContainer.setDefaultUnit(kony.flex.DP);
    var imageMapIcon = new kony.ui.Image2({
        "height": "20dp",
        "id": "imageMapIcon",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "location.png",
        "top": "0dp",
        "width": "20dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CompanyAddressLabel = new kony.ui.Label({
        "centerY": "50%",
        "id": "CompanyAddressLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "101 Daaling Harbour, Sydney",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CompanyAddressContainer.add(imageMapIcon, CompanyAddressLabel);
    CompanyNameAndAddressContainer.add(BusinessProfileCompanyNameAndAddressContaine, CompanyAddressContainer);
    var businessSearchProfilePageBackButton = new kony.ui.Button({
        "height": "22dp",
        "id": "businessSearchProfilePageBackButton",
        "isVisible": false,
        "left": "-307dp",
        "onClick": AS_Button_e3f18ef59ddf4515966024449034031a,
        "skin": "CopyslButtonGlossBlue0881e97f46a7549",
        "top": "8dp",
        "width": "17dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    businessProfileDetailsHeader.add(CompanyLogoContainer, CompanyNameAndAddressContainer, businessSearchProfilePageBackButton);
    var businessProfileContactActions = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "businessProfileContactActions",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    businessProfileContactActions.setDefaultUnit(kony.flex.DP);
    var businessProfileBookmark = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "businessProfileBookmark",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox048f5d0e9995346",
        "top": "0dp",
        "width": "33%"
    }, {}, {});
    businessProfileBookmark.setDefaultUnit(kony.flex.DP);
    var businessProfileBookmarkImage = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "20dp",
        "id": "businessProfileBookmarkImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "bookmarkoff.png",
        "top": "0dp",
        "width": "20dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    businessProfileBookmark.add(businessProfileBookmarkImage);
    var businessProfileCall = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "businessProfileCall",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox048f5d0e9995346",
        "top": "0dp",
        "width": "34%"
    }, {}, {});
    businessProfileCall.setDefaultUnit(kony.flex.DP);
    businessProfileCall.add();
    var businessProfileEmail = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "42dp",
        "id": "businessProfileEmail",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox048f5d0e9995346",
        "top": "1dp",
        "width": "21.88%"
    }, {}, {});
    businessProfileEmail.setDefaultUnit(kony.flex.DP);
    var businessmsgBtn = new kony.ui.Button({
        "centerX": "49%",
        "height": "23dp",
        "id": "businessmsgBtn",
        "isVisible": true,
        "left": "36dp",
        "skin": "CopyslButtonGlossBlue0b0903efb7af440",
        "top": "1dp",
        "width": "30dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imessageFromBusinessProfile = new kony.ui.RichText({
        "centerX": "50%",
        "id": "imessageFromBusinessProfile",
        "isVisible": true,
        "left": "5dp",
        "onClick": AS_RichText_a3a624758d274a41a0dcb1677cc67447,
        "skin": "jumpStartRtLink100",
        "text": "<a  style=\"color: #37b3b1\">Message</a>",
        "top": "23dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    businessProfileEmail.add(businessmsgBtn, imessageFromBusinessProfile);
    businessProfileContactActions.add(businessProfileBookmark, businessProfileCall, businessProfileEmail);
    var requestToVolunteerButton = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "40dp",
        "id": "requestToVolunteerButton",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_d9548a946ba24ef5a52b3107c5a81fe9,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Request to volunteer",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var businessProfileAboutContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50.00%",
        "clipBounds": true,
        "id": "businessProfileAboutContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    businessProfileAboutContainer.setDefaultUnit(kony.flex.DP);
    var businessProfileAboutTitle = new kony.ui.Label({
        "id": "businessProfileAboutTitle",
        "isVisible": true,
        "left": "10dp",
        "skin": "ngnyOrangeLabelText",
        "text": "About",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var businessProfileAboutText = new kony.ui.RichText({
        "id": "businessProfileAboutText",
        "isVisible": true,
        "left": "0",
        "skin": "jumpStartRT120",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "top": "0",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 3, 3, 3],
        "paddingInPixel": false
    }, {});
    var businessProfileAboutMore = new kony.ui.Label({
        "bottom": 10,
        "id": "businessProfileAboutMore",
        "isVisible": false,
        "left": "10dp",
        "skin": "jumpStartLabelGreen120",
        "text": "more",
        "top": "0dp",
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
    businessProfileAboutContainer.add(businessProfileAboutTitle, businessProfileAboutText, businessProfileAboutMore);
    var businessContactContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "businessContactContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "16dp",
        "skin": "CopyslFbox0a00c3d05da4f49",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    businessContactContainer.setDefaultUnit(kony.flex.DP);
    var AdressLbl = new kony.ui.Label({
        "id": "AdressLbl",
        "isVisible": true,
        "left": "10dp",
        "skin": "ngnyOrangeLabelText",
        "text": "Contact Details",
        "top": "10dp",
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
    var contactNumberContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "contactNumberContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    contactNumberContainer.setDefaultUnit(kony.flex.DP);
    var contactNumImgContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "contactNumImgContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    contactNumImgContainer.setDefaultUnit(kony.flex.DP);
    var phoneImage = new kony.ui.Image2({
        "centerX": "50%",
        "height": "25dp",
        "id": "phoneImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "landline1.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    contactNumImgContainer.add(phoneImage);
    var phoneNumberContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "phoneNumberContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "81.60%",
        "zIndex": 1
    }, {}, {});
    phoneNumberContainer.setDefaultUnit(kony.flex.DP);
    var businessPhoneNumber = new kony.ui.RichText({
        "id": "businessPhoneNumber",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText0514cecac58c549",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    phoneNumberContainer.add(businessPhoneNumber);
    contactNumberContainer.add(contactNumImgContainer, phoneNumberContainer);
    var emailContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "emailContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    emailContainer.setDefaultUnit(kony.flex.DP);
    var emailImageContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "emailImageContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    emailImageContainer.setDefaultUnit(kony.flex.DP);
    var emailImage = new kony.ui.Image2({
        "centerX": "50%",
        "height": "22dp",
        "id": "emailImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "atrateimg.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    emailImageContainer.add(emailImage);
    var emailIdContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "emailIdContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "81.60%",
        "zIndex": 1
    }, {}, {});
    emailIdContainer.setDefaultUnit(kony.flex.DP);
    var emailTextArea = new kony.ui.RichText({
        "id": "emailTextArea",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText0951e67eefb874e",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    emailIdContainer.add(emailTextArea);
    emailContainer.add(emailImageContainer, emailIdContainer);
    businessContactContainer.add(AdressLbl, contactNumberContainer, emailContainer);
    var businessProfileBusinessActivityContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "businessProfileBusinessActivityContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    businessProfileBusinessActivityContainer.setDefaultUnit(kony.flex.DP);
    var businessProfileBusinessActivityTitle = new kony.ui.Label({
        "id": "businessProfileBusinessActivityTitle",
        "isVisible": true,
        "left": "10dp",
        "skin": "ngnyOrangeLabelText",
        "text": "Business Activity",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var businessProfileBusinessActivityText = new kony.ui.RichText({
        "id": "businessProfileBusinessActivityText",
        "isVisible": true,
        "left": "0",
        "skin": "jumpStartRT120",
        "text": "Electrical Equipment & Components & Supplies (3912)",
        "top": "0",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 3, 3, 3],
        "paddingInPixel": false
    }, {});
    businessProfileBusinessActivityContainer.add(businessProfileBusinessActivityTitle, businessProfileBusinessActivityText);
    var businessProfileAffiliationsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "0dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "businessProfileAffiliationsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    businessProfileAffiliationsContainer.setDefaultUnit(kony.flex.DP);
    var businessProfileAffiliationsTitle = new kony.ui.Label({
        "id": "businessProfileAffiliationsTitle",
        "isVisible": true,
        "left": "10dp",
        "skin": "ngnyOrangeLabelText",
        "text": "Professional Affiliations",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var businessProfileAffiliationsText = new kony.ui.RichText({
        "id": "businessProfileAffiliationsText",
        "isVisible": true,
        "left": "0",
        "skin": "jumpStartRT120",
        "text": "Australian Institute of Company Directors, Law Institute of Victoria",
        "top": "0",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 3, 3, 3],
        "paddingInPixel": false
    }, {});
    businessProfileAffiliationsContainer.add(businessProfileAffiliationsTitle, businessProfileAffiliationsText);
    var businessProfileReachContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "20dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "businessProfileReachContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    businessProfileReachContainer.setDefaultUnit(kony.flex.DP);
    var businessProfileReachTitle = new kony.ui.Label({
        "id": "businessProfileReachTitle",
        "isVisible": true,
        "left": "10dp",
        "skin": "ngnyOrangeLabelText",
        "text": "Business Reach",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var businessProfileReachText = new kony.ui.RichText({
        "id": "businessProfileReachText",
        "isVisible": true,
        "left": "0",
        "skin": "jumpStartRT120",
        "text": "International, Australia-wide",
        "top": "0",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 3, 3, 3],
        "paddingInPixel": false
    }, {});
    businessProfileReachContainer.add(businessProfileReachTitle, businessProfileReachText);
    businessProfileContainer.add(businessProfileDetailsHeader, businessProfileContactActions, requestToVolunteerButton, businessProfileAboutContainer, businessContactContainer, businessProfileBusinessActivityContainer, businessProfileAffiliationsContainer, businessProfileReachContainer);
    var volunteerRequestContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "volunteerRequestContainer",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "myProfileModalBG",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    volunteerRequestContainer.setDefaultUnit(kony.flex.DP);
    var requestToVolunteerModal = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "90%",
        "id": "requestToVolunteerModal",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartModalSkin",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    requestToVolunteerModal.setDefaultUnit(kony.flex.DP);
    var requestToVolunteerHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "requestToVolunteerHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    requestToVolunteerHeader.setDefaultUnit(kony.flex.DP);
    var volunteerRequestModalTitle = new kony.ui.Label({
        "centerX": "50%",
        "id": "volunteerRequestModalTitle",
        "isVisible": true,
        "skin": "jumpStartLabelOrange150new",
        "text": "Request to Volunteer",
        "top": "10%",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var requestRoleTitle = new kony.ui.RichText({
        "centerX": "50%",
        "id": "requestRoleTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartRT100Black",
        "text": "Please enter a message for the business",
        "top": "8%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    requestToVolunteerHeader.add(volunteerRequestModalTitle, requestRoleTitle);
    var AssignToExistingCardContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "20%",
        "id": "AssignToExistingCardContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "22dp",
        "skin": "slFbox",
        "top": "4dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    AssignToExistingCardContainer.setDefaultUnit(kony.flex.DP);
    var assignToExistingTaskLabel = new kony.ui.Label({
        "id": "assignToExistingTaskLabel",
        "isVisible": true,
        "left": "15dp",
        "skin": "CopyslLabel039bc639e3f7046",
        "text": "Request for existing task",
        "top": "14dp",
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
    var assignToExistingTaskListBox = new kony.ui.ListBox({
        "centerX": "50%",
        "focusSkin": "CopyslListBox0ed7d71030ee641",
        "height": "40dp",
        "id": "assignToExistingTaskListBox",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["lb1", "Listbox One"],
            ["lb2", "Listbox Two"],
            ["lb3", "Listbox Three"]
        ],
        "skin": "CopyslListBox0f7e61fd23c5c44",
        "top": "39%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    AssignToExistingCardContainer.add(assignToExistingTaskLabel, assignToExistingTaskListBox);
    var requestToVolunteerBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "requestToVolunteerBody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    requestToVolunteerBody.setDefaultUnit(kony.flex.DP);
    var requestRoleInput = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "jumpStartTextAreaSkin",
        "height": "70dp",
        "id": "requestRoleInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "numberOfVisibleLines": 3,
        "skin": "jumpStartTextAreaSkin",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "autoCorrect": false
    });
    var requestVolunteerInfo = new kony.ui.RichText({
        "centerX": "50%",
        "id": "requestVolunteerInfo",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartRT100Black",
        "text": "A volunteer request notification will be sent to the company along with your available time indicated in your profile.",
        "top": "5%",
        "width": "85%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var requestAvailableDays = new kony.ui.Label({
        "centerX": "50%",
        "id": "requestAvailableDays",
        "isVisible": true,
        "skin": "jumpStartLabelGreen120",
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
    var requestAvailableTime = new kony.ui.Label({
        "centerX": "50%",
        "id": "requestAvailableTime",
        "isVisible": true,
        "skin": "jumpStartLabelGreen120",
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
    requestToVolunteerBody.add(requestRoleInput, requestVolunteerInfo, requestAvailableDays, requestAvailableTime);
    var requestToVolunteerFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "requestToVolunteerFooter",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    requestToVolunteerFooter.setDefaultUnit(kony.flex.DP);
    var sendVolunteerRequestButton = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "40dp",
        "id": "sendVolunteerRequestButton",
        "isVisible": true,
        "onClick": AS_Button_0d87a87ab5bd4552a60cca8b24ed2876,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Submit Request",
        "top": "5%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var cancelVolunteerRequestButton = new kony.ui.Label({
        "centerX": "50%",
        "id": "cancelVolunteerRequestButton",
        "isVisible": true,
        "skin": "jumpStartLabelGreen120",
        "text": "Cancel",
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
    requestToVolunteerFooter.add(sendVolunteerRequestButton, cancelVolunteerRequestButton);
    requestToVolunteerModal.add(requestToVolunteerHeader, AssignToExistingCardContainer, requestToVolunteerBody, requestToVolunteerFooter);
    var requestAVolunteerModal = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "90%",
        "id": "requestAVolunteerModal",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartModalSkin",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    requestAVolunteerModal.setDefaultUnit(kony.flex.DP);
    var requestAVolunteerHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "requestAVolunteerHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    requestAVolunteerHeader.setDefaultUnit(kony.flex.DP);
    var requestAVolunteerTitle = new kony.ui.Label({
        "centerX": "50%",
        "id": "requestAVolunteerTitle",
        "isVisible": true,
        "skin": "jumpStartLabelOrange150new",
        "text": "Request For Volunteer",
        "top": "10%",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var requestAVolunteerInfo = new kony.ui.RichText({
        "centerX": "50%",
        "id": "requestAVolunteerInfo",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartRT100Black",
        "text": "Please enter a message for the volunteer",
        "top": "8%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    requestAVolunteerHeader.add(requestAVolunteerTitle, requestAVolunteerInfo);
    var assignExistingTask = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "20%",
        "id": "assignExistingTask",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "22dp",
        "skin": "slFbox",
        "top": "4dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    assignExistingTask.setDefaultUnit(kony.flex.DP);
    var existingTaskLabel = new kony.ui.Label({
        "id": "existingTaskLabel",
        "isVisible": true,
        "left": "15dp",
        "skin": "CopyslLabel039bc639e3f7046",
        "text": "Request for existing task",
        "top": "14dp",
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
    var existingTaskListBox = new kony.ui.ListBox({
        "centerX": "50%",
        "focusSkin": "CopyslListBox0ed7d71030ee641",
        "height": "40dp",
        "id": "existingTaskListBox",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["lb1", "Listbox One"],
            ["lb2", "Listbox Two"],
            ["lb3", "Listbox Three"]
        ],
        "skin": "CopyslListBox0f7e61fd23c5c44",
        "top": "39%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    assignExistingTask.add(existingTaskLabel, existingTaskListBox);
    var requestAVolunteerBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "35%",
        "id": "requestAVolunteerBody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "4dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    requestAVolunteerBody.setDefaultUnit(kony.flex.DP);
    var requestAVolunteerMessageInput = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "jumpStartTextAreaSkin",
        "height": "70dp",
        "id": "requestAVolunteerMessageInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "numberOfVisibleLines": 3,
        "skin": "jumpStartTextAreaSkin",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "autoCorrect": false
    });
    var requestAVolunteerMessageInfo = new kony.ui.RichText({
        "centerX": "50%",
        "id": "requestAVolunteerMessageInfo",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartRT100Black",
        "text": "A request notification will be sent to the volunteer.",
        "top": "5%",
        "width": "85%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    requestAVolunteerBody.add(requestAVolunteerMessageInput, requestAVolunteerMessageInfo);
    var requestAVolunteerFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "requestAVolunteerFooter",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    requestAVolunteerFooter.setDefaultUnit(kony.flex.DP);
    var requestAVolunteerSubmit = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "40dp",
        "id": "requestAVolunteerSubmit",
        "isVisible": true,
        "onClick": AS_Button_084a6e37b3e34b0c848a45390f3b841a,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Submit Request",
        "top": "5%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var requestAVolunteerCancel = new kony.ui.Label({
        "centerX": "50%",
        "id": "requestAVolunteerCancel",
        "isVisible": true,
        "skin": "jumpStartLabelGreen120",
        "text": "Cancel",
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
    requestAVolunteerFooter.add(requestAVolunteerSubmit, requestAVolunteerCancel);
    requestAVolunteerModal.add(requestAVolunteerHeader, assignExistingTask, requestAVolunteerBody, requestAVolunteerFooter);
    volunteerRequestContainer.add(requestToVolunteerModal, requestAVolunteerModal);
    var opprtunitiesReadOnlyContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "95%",
        "id": "opprtunitiesReadOnlyContainer",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartModalSkin",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    opprtunitiesReadOnlyContainer.setDefaultUnit(kony.flex.DP);
    var oppurtunityDetailsHdrModal = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "oppurtunityDetailsHdrModal",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    oppurtunityDetailsHdrModal.setDefaultUnit(kony.flex.DP);
    var oppurtunitiesHeaderDetails1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "oppurtunitiesHeaderDetails1",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "CopyslFbox0a77c6594ae9247",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    oppurtunitiesHeaderDetails1.setDefaultUnit(kony.flex.DP);
    var opprtunitiesBackBtnModal = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "opprtunitiesBackBtnModal",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_dfe2d02d41954550ba9a40c142ef5fca,
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    opprtunitiesBackBtnModal.setDefaultUnit(kony.flex.DP);
    var opportunitiesImg = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "40dp",
        "id": "opportunitiesImg",
        "isVisible": false,
        "left": "0dp",
        "skin": "slImage",
        "src": "previous.png",
        "top": "0dp",
        "width": "40dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var opprtunitiesBackBtn = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "height": "35%",
        "id": "opprtunitiesBackBtn",
        "isVisible": true,
        "left": "14dp",
        "onClick": AS_Button_dd04d69205504c73bb854cc564373e7a,
        "skin": "CopyslButtonGlossBlue06279fedfcf8e4d",
        "top": "16dp",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    opprtunitiesBackBtnModal.add(opportunitiesImg, opprtunitiesBackBtn);
    var opprtunitiesHeadingModal = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "opprtunitiesHeadingModal",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    opprtunitiesHeadingModal.setDefaultUnit(kony.flex.DP);
    var opprtunitiesHeading = new kony.ui.Label({
        "centerX": "50%",
        "id": "opprtunitiesHeading",
        "isVisible": true,
        "left": 0,
        "skin": "jumpStartLabel90",
        "text": "Brief available with:",
        "top": "10dp",
        "width": "60%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var opportunityBusinessName = new kony.ui.Label({
        "centerX": "51%",
        "centerY": "35%",
        "id": "opportunityBusinessName",
        "isVisible": true,
        "left": "61%",
        "skin": "CopyslLabel07dc0a944e51b41",
        "top": "0dp",
        "width": "35%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    opprtunitiesHeadingModal.add(opprtunitiesHeading, opportunityBusinessName);
    oppurtunitiesHeaderDetails1.add(opprtunitiesBackBtnModal, opprtunitiesHeadingModal);
    oppurtunityDetailsHdrModal.add(oppurtunitiesHeaderDetails1);
    var oppurtunity1DetailsBodyModalContainer = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "50%",
        "clipBounds": true,
        "enableScrolling": true,
        "height": "75%",
        "horizontalScrollIndicator": true,
        "id": "oppurtunity1DetailsBodyModalContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "jumpStartFlexScrollBG242",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    oppurtunity1DetailsBodyModalContainer.setDefaultUnit(kony.flex.DP);
    var availabilityContainer = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "50%",
        "clipBounds": true,
        "enableScrolling": true,
        "height": "35%",
        "horizontalScrollIndicator": true,
        "id": "availabilityContainer",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox0d782e1182de14a",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    availabilityContainer.setDefaultUnit(kony.flex.DP);
    var availabiltyHdr = new kony.ui.Label({
        "centerX": "50%",
        "id": "availabiltyHdr",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0ba1dfb03eb2b47",
        "text": "Schedule Availability",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var availabiltyTxt = new kony.ui.Label({
        "centerX": "50%",
        "id": "availabiltyTxt",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0e08bb2e4efca42",
        "top": "40%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    availabilityContainer.add(availabiltyHdr, availabiltyTxt);
    var oppurtunities1ListModal = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "20%",
        "id": "oppurtunities1ListModal",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "4dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    oppurtunities1ListModal.setDefaultUnit(kony.flex.DP);
    var assignToExistingTaskLabel1 = new kony.ui.Label({
        "centerX": "50%",
        "id": "assignToExistingTaskLabel1",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel039bc639e3f7046",
        "text": "Brief/Tasks",
        "top": "10%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var assignToExistingTaskListBox1 = new kony.ui.ListBox({
        "centerX": "50%",
        "focusSkin": "CopyslListBox0ed7d71030ee641",
        "height": "40%",
        "id": "assignToExistingTaskListBox1",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["Key385", "Select"]
        ],
        "onSelection": AS_ListBox_2f77ddc1d1f44df68125d83f467a39d9,
        "selectedKey": "Key385",
        "selectedKeyValue": ["Key385", "Select"],
        "skin": "CopyslListBox0f7e61fd23c5c44",
        "top": "40%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    oppurtunities1ListModal.add(assignToExistingTaskLabel1, assignToExistingTaskListBox1);
    var TaskDetailsHdrFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "20%",
        "id": "TaskDetailsHdrFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0db107654f31e40",
        "top": "4dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    TaskDetailsHdrFlex.setDefaultUnit(kony.flex.DP);
    var taskTitleLbl = new kony.ui.Label({
        "centerX": "50%",
        "id": "taskTitleLbl",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Task Title",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var taskTitleTxtLbl = new kony.ui.Label({
        "centerX": "50%",
        "height": "40%",
        "id": "taskTitleTxtLbl",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel80",
        "top": "50%",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    TaskDetailsHdrFlex.add(taskTitleLbl, taskTitleTxtLbl);
    var taskDetailsModalFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "20%",
        "id": "taskDetailsModalFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0db107654f31e40",
        "top": "4dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    taskDetailsModalFlex.setDefaultUnit(kony.flex.DP);
    var taskDetailsLbl = new kony.ui.Label({
        "centerX": "50%",
        "id": "taskDetailsLbl",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Task Details",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var taskDetailsRichTxt = new kony.ui.Label({
        "centerX": "50%",
        "height": "40%",
        "id": "taskDetailsRichTxt",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel80",
        "top": "50%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    taskDetailsModalFlex.add(taskDetailsLbl, taskDetailsRichTxt);
    var taskskillsFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "20%",
        "id": "taskskillsFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0db107654f31e40",
        "top": "4dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    taskskillsFlex.setDefaultUnit(kony.flex.DP);
    var skillsLbl = new kony.ui.Label({
        "centerX": "50%",
        "id": "skillsLbl",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Skills",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var skillsTxtLbl = new kony.ui.Label({
        "centerX": "50%",
        "height": "40%",
        "id": "skillsTxtLbl",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel80",
        "top": "50%",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    taskskillsFlex.add(skillsLbl, skillsTxtLbl);
    var hoursFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "20%",
        "id": "hoursFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0db107654f31e40",
        "top": "4dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    hoursFlex.setDefaultUnit(kony.flex.DP);
    var hoursLbl = new kony.ui.Label({
        "centerX": "50%",
        "id": "hoursLbl",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Duration of Engagement",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var hoursTxtLbl = new kony.ui.Label({
        "centerX": "50%",
        "height": "40%",
        "id": "hoursTxtLbl",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel80",
        "top": "50%",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    hoursFlex.add(hoursLbl, hoursTxtLbl);
    var startDateModalFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "20%",
        "id": "startDateModalFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox087609f16e0a84e",
        "top": "4dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    startDateModalFlex.setDefaultUnit(kony.flex.DP);
    var startDateLbl = new kony.ui.Label({
        "centerX": "50%",
        "id": "startDateLbl",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Start Date",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var startDateTxt = new kony.ui.Label({
        "centerX": "50%",
        "height": "40%",
        "id": "startDateTxt",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabelReadOnly99",
        "top": "50%",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    startDateModalFlex.add(startDateLbl, startDateTxt);
    var endDateFlexModal = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "20%",
        "id": "endDateFlexModal",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox09cc3de9511714b",
        "top": "4dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    endDateFlexModal.setDefaultUnit(kony.flex.DP);
    var endDateLbl = new kony.ui.Label({
        "centerX": "50%",
        "id": "endDateLbl",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "End Date",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var endDateTxtLbl = new kony.ui.Label({
        "bottom": "10dp",
        "centerX": "50%",
        "height": "40%",
        "id": "endDateTxtLbl",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabelReadOnly99",
        "top": "50%",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    endDateFlexModal.add(endDateLbl, endDateTxtLbl);
    var commentsModal = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "10%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "40%",
        "id": "commentsModal",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox075a01a0effe24b",
        "top": 4,
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    commentsModal.setDefaultUnit(kony.flex.DP);
    var commentsLbl = new kony.ui.Label({
        "centerX": "50%",
        "id": "commentsLbl",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Comments*",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var commentsTxtBox = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "CopyslTextArea0e0221f7b634049",
        "height": "80%",
        "id": "commentsTxtBox",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "numberOfVisibleLines": 3,
        "skin": "CopyslTextArea0e0221f7b634049",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "20%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "autoCorrect": false
    });
    commentsModal.add(commentsLbl, commentsTxtBox);
    oppurtunity1DetailsBodyModalContainer.add(availabilityContainer, oppurtunities1ListModal, TaskDetailsHdrFlex, taskDetailsModalFlex, taskskillsFlex, hoursFlex, startDateModalFlex, endDateFlexModal, commentsModal);
    var opportunitiesFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "opportunitiesFooter",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    opportunitiesFooter.setDefaultUnit(kony.flex.DP);
    var opprtunitiesAcceptBtn = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "40dp",
        "id": "opprtunitiesAcceptBtn",
        "isVisible": true,
        "onClick": AS_Button_fbfed737da454414aae15fab452e5c5c,
        "right": "10dp",
        "skin": "ngnyPrimaryGreenButton",
        "text": "Request to volunteer",
        "top": "15dp",
        "width": "45%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var opportunitiesCancelBtn = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "jumpStartGrayButton110",
        "height": "40dp",
        "id": "opportunitiesCancelBtn",
        "isVisible": true,
        "left": 10,
        "onClick": AS_Button_d481b806b36a447bbe557989bb1baadc,
        "skin": "jumpStartGrayButton110",
        "text": "Cancel",
        "top": "15dp",
        "width": "45%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    opportunitiesFooter.add(opprtunitiesAcceptBtn, opportunitiesCancelBtn);
    opprtunitiesReadOnlyContainer.add(oppurtunityDetailsHdrModal, oppurtunity1DetailsBodyModalContainer, opportunitiesFooter);
    var startEngagementModalContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "95%",
        "id": "startEngagementModalContainer",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartModalSkin",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    startEngagementModalContainer.setDefaultUnit(kony.flex.DP);
    var startEngagementHeaderContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "startEngagementHeaderContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    startEngagementHeaderContainer.setDefaultUnit(kony.flex.DP);
    var topHeaderContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "topHeaderContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    topHeaderContainer.setDefaultUnit(kony.flex.DP);
    var backButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "backButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_6d072d31e9b64506a9a31d54df005a82,
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    backButtonContainer.setDefaultUnit(kony.flex.DP);
    var strartEngageBackBtn = new kony.ui.Button({
        "height": "40.54%",
        "id": "strartEngageBackBtn",
        "isVisible": true,
        "left": "18dp",
        "onClick": AS_Button_9d588442ab7041769289fca605b1f361,
        "skin": "CopyslButtonGlossBlue0c1a6517000b344",
        "top": "16dp",
        "width": "29.63%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    backButtonContainer.add(strartEngageBackBtn);
    var EngagementHasStartedContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "EngagementHasStartedContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "-2dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "80%"
    }, {}, {});
    EngagementHasStartedContainer.setDefaultUnit(kony.flex.DP);
    var engagementHasStaertedLabel = new kony.ui.Label({
        "centerX": "45%",
        "id": "engagementHasStaertedLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel90",
        "text": "Engagement has started with:",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var nameLabel = new kony.ui.Label({
        "centerX": "45%",
        "id": "nameLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel120Bold",
        "top": "3dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    EngagementHasStartedContainer.add(engagementHasStaertedLabel, nameLabel);
    topHeaderContainer.add(backButtonContainer, EngagementHasStartedContainer);
    var headerContactActionContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30.78%",
        "id": "headerContactActionContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "jumpStartBG249",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    headerContactActionContainer.setDefaultUnit(kony.flex.DP);
    var viewProfileContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "viewProfileContainer",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "34%"
    }, {}, {});
    viewProfileContainer.setDefaultUnit(kony.flex.DP);
    var profileImg = new kony.ui.Image2({
        "centerX": "50%",
        "height": "30dp",
        "id": "profileImg",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "imgseglogo.png",
        "top": "10dp",
        "width": "30dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var viewProfileRichText = new kony.ui.RichText({
        "centerX": "50%",
        "id": "viewProfileRichText",
        "isVisible": true,
        "left": "5dp",
        "onClick": AS_RichText_dfc77110fa9c4e878d108a5fc8bdd84e,
        "skin": "jumpStartRtLink100",
        "text": "<a href=\"#\" style=\"color: #37b3b1\">View Profile</a>",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    viewProfileContainer.add(profileImg, viewProfileRichText);
    var callContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "callContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyslFbox09b5cf0ea585340",
        "top": "0dp",
        "width": "50%"
    }, {}, {});
    callContainer.setDefaultUnit(kony.flex.DP);
    var InnerCallContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "95.66%",
        "id": "InnerCallContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "19dp",
        "onTouchStart": AS_FlexContainer_bb249642e7b74097b99a85b6d0e0bbdb,
        "skin": "slFbox",
        "top": "0dp",
        "width": "52.55%",
        "zIndex": 1
    }, {}, {});
    InnerCallContainer.setDefaultUnit(kony.flex.DP);
    var callImg = new kony.ui.Image2({
        "centerX": "50%",
        "height": "30dp",
        "id": "callImg",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "callicon.png",
        "top": "6dp",
        "width": "30dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var callRichText = new kony.ui.RichText({
        "centerX": "50%",
        "id": "callRichText",
        "isVisible": true,
        "left": "5dp",
        "skin": "jumpStartRtLink100",
        "text": "<u>Call\n</u>",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    InnerCallContainer.add(callImg, callRichText);
    callContainer.add(InnerCallContainer);
    var messageContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "messageContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyslFbox0551af1d9eda24e",
        "top": "0dp",
        "width": "50%"
    }, {}, {});
    messageContainer.setDefaultUnit(kony.flex.DP);
    var MessageInnerContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "95.66%",
        "id": "MessageInnerContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "19dp",
        "onTouchStart": AS_FlexContainer_f5aa90b7b6a4452682fd1b327a59e6cf,
        "skin": "slFbox",
        "top": "0dp",
        "width": "61.22%",
        "zIndex": 1
    }, {}, {});
    MessageInnerContainer.setDefaultUnit(kony.flex.DP);
    var iMesageImg = new kony.ui.Image2({
        "centerX": "50%",
        "height": "30dp",
        "id": "iMesageImg",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "messageicon.png",
        "top": "6dp",
        "width": "30dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var messageRichText = new kony.ui.RichText({
        "centerX": "50%",
        "id": "messageRichText",
        "isVisible": true,
        "left": "5dp",
        "skin": "jumpStartRtLink100",
        "text": "<u> Message</u>",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    MessageInnerContainer.add(iMesageImg, messageRichText);
    messageContainer.add(MessageInnerContainer);
    headerContactActionContainer.add(viewProfileContainer, callContainer, messageContainer);
    var AssignExistingTaskContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "40%",
        "id": "AssignExistingTaskContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    AssignExistingTaskContainer.setDefaultUnit(kony.flex.DP);
    var assignExistingTaskLabelContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "25dp",
        "id": "assignExistingTaskLabelContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5dp",
        "width": "97.04%",
        "zIndex": 1
    }, {}, {});
    assignExistingTaskLabelContainer.setDefaultUnit(kony.flex.DP);
    var lblAssigntoExistingTask = new kony.ui.Label({
        "id": "lblAssigntoExistingTask",
        "isVisible": true,
        "left": "1dp",
        "skin": "jumpStartLabel90",
        "text": "Assign existing task",
        "top": "5dp",
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
    assignExistingTaskLabelContainer.add(lblAssigntoExistingTask);
    var assignToExistingTaskListBoxContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "44.72%",
        "id": "assignToExistingTaskListBoxContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "2dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    assignToExistingTaskListBoxContainer.setDefaultUnit(kony.flex.DP);
    var existingOpenTasksListBox = new kony.ui.ListBox({
        "centerX": "50%",
        "focusSkin": "CopyslListBox070ac863d00c94c",
        "height": "30dp",
        "id": "existingOpenTasksListBox",
        "isVisible": true,
        "left": "1dp",
        "masterData": [
            ["lb1", "Select"]
        ],
        "onSelection": AS_ListBox_40e6cfb5bbb54334bacd88300920c324,
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "Select"],
        "skin": "jumpStartDropDown100",
        "top": "3dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyyesButtonContainer035056a9fe46b49 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "CopyyesButtonContainer035056a9fe46b49",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "-217dp",
        "skin": "jumpStartBG215",
        "top": "4dp",
        "width": "16.45%",
        "zIndex": 1
    }, {}, {});
    CopyyesButtonContainer035056a9fe46b49.setDefaultUnit(kony.flex.DP);
    var CopyLabel056d81c56eefc49 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel056d81c56eefc49",
        "isVisible": false,
        "left": "0dp",
        "skin": "jumpStartLabel200Bold",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CopybtnIsExistingTask0a6a3128411754b = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed08abba14bc86e4c",
        "height": "100%",
        "id": "CopybtnIsExistingTask0a6a3128411754b",
        "isVisible": false,
        "left": "0dp",
        "skin": "CopyslButtonGlossBlue0e5dc43ec76eb47",
        "text": "Yes",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyyesButtonContainer035056a9fe46b49.add(CopyLabel056d81c56eefc49, CopybtnIsExistingTask0a6a3128411754b);
    assignToExistingTaskListBoxContainer.add(existingOpenTasksListBox, CopyyesButtonContainer035056a9fe46b49);
    AssignExistingTaskContainer.add(assignExistingTaskLabelContainer, assignToExistingTaskListBoxContainer);
    startEngagementHeaderContainer.add(topHeaderContainer, headerContactActionContainer, AssignExistingTaskContainer);
    var startEngagementBodyContainer = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "50.00%",
        "clipBounds": true,
        "enableScrolling": true,
        "height": "50%",
        "horizontalScrollIndicator": true,
        "id": "startEngagementBodyContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "jumpStartFlexScrollBG242",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    startEngagementBodyContainer.setDefaultUnit(kony.flex.DP);
    var TaskTitleLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "TaskTitleLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Task title*",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var TitleInputField = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "TitleInputField",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "18dp",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0a31600a67fd64b",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "4dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoComplete": false,
        "autoCorrect": false
    });
    var TaskDetailsLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "TaskDetailsLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Task details*",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var TaskDetailsTextArea = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "jumpStartTextAreaSkin",
        "height": "120dp",
        "id": "TaskDetailsTextArea",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_CHAT,
        "numberOfVisibleLines": 3,
        "skin": "jumpStartTextAreaSkin",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "5dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "autoCorrect": false
    });
    var SkillsLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "SkillsLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Skills*",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var SkillsInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "SkillsInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "18dp",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0a31600a67fd64b",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "4dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoComplete": false,
        "autoCorrect": false
    });
    var HoursRequiredLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "HoursRequiredLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Duration of engagement*",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var DuratationOfEngagementInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "DuratationOfEngagementInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "18dp",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0a31600a67fd64b",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "4dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoComplete": false,
        "autoCorrect": false
    });
    var CommentsLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "CommentsLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Comments*",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CommentsTextArea = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "jumpStartTextAreaSkin",
        "height": "120dp",
        "id": "CommentsTextArea",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_CHAT,
        "numberOfVisibleLines": 3,
        "skin": "jumpStartTextAreaSkin",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "5dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "autoCorrect": false
    });
    var StartDateLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "StartDateLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Start date*",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var StartDateCalendarInput = new kony.ui.Calendar({
        "calendarIcon": "calendaricon.png",
        "centerX": "50%",
        "dateComponents": [28, 10, 2016, 0, 0, 0],
        "dateFormat": "dd/MM/yyyy",
        "day": 28,
        "focusSkin": "jumpStartCalendarSkin",
        "formattedDate": "28/10/2016",
        "height": "40dp",
        "hour": 0,
        "id": "StartDateCalendarInput",
        "isVisible": true,
        "left": "0dp",
        "minutes": 0,
        "month": 10,
        "seconds": 0,
        "skin": "jumpStartCalendarSkin",
        "top": "5dp",
        "viewConfig": {},
        "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
        "width": "90%",
        "year": 2016,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var EndDateLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "EndDateLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "End date*",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var EndDateCalendarInput = new kony.ui.Calendar({
        "bottom": "15dp",
        "calendarIcon": "calendaricon.png",
        "centerX": "50%",
        "dateComponents": [28, 10, 2016, 0, 0, 0],
        "dateFormat": "dd/MM/yyyy",
        "day": 28,
        "focusSkin": "jumpStartCalendarSkin",
        "formattedDate": "28/10/2016",
        "height": "40dp",
        "hour": 0,
        "id": "EndDateCalendarInput",
        "isVisible": true,
        "left": "0dp",
        "minutes": 0,
        "month": 10,
        "seconds": 0,
        "skin": "jumpStartCalendarSkin",
        "top": "5dp",
        "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
        "width": "90%",
        "year": 2016,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    startEngagementBodyContainer.add(TaskTitleLabel, TitleInputField, TaskDetailsLabel, TaskDetailsTextArea, SkillsLabel, SkillsInput, HoursRequiredLabel, DuratationOfEngagementInput, CommentsLabel, CommentsTextArea, StartDateLabel, StartDateCalendarInput, EndDateLabel, EndDateCalendarInput);
    var startEngagementFooterContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "startEngagementFooterContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    startEngagementFooterContainer.setDefaultUnit(kony.flex.DP);
    var CancelButton = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "jumpStartGrayButton110",
        "height": "40dp",
        "id": "CancelButton",
        "isVisible": true,
        "left": 1,
        "onClick": AS_Button_5a822dd9fa4343f19cd554abbbb01fb3,
        "skin": "jumpStartGrayButton110",
        "text": "Cancel",
        "top": "15dp",
        "width": "48%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var StartEngagementButton = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "40dp",
        "id": "StartEngagementButton",
        "isVisible": true,
        "left": "3dp",
        "onClick": AS_Button_99e8fcfe74224ca997ce775e4cafcdc1,
        "right": "10dp",
        "skin": "ngnyPrimaryGreenButton",
        "text": "Start",
        "top": "15dp",
        "width": "48%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    startEngagementFooterContainer.add(CancelButton, StartEngagementButton);
    startEngagementModalContainer.add(startEngagementHeaderContainer, startEngagementBodyContainer, startEngagementFooterContainer);
    searchResultProfile.add(volunteerProfileContainer, businessProfileContainer, volunteerRequestContainer, opprtunitiesReadOnlyContainer, startEngagementModalContainer);
};

function searchResultProfileGlobals() {
    searchResultProfile = new kony.ui.Form2({
        "addWidgets": addWidgetssearchResultProfile,
        "enabledForIdleTimeout": false,
        "id": "searchResultProfile",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "preShow": AS_Form_42a11d3c371641b28b461909f0aad3b7,
        "skin": "CopyslForm0136e23bcf68b48"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
    searchResultProfile.info = {
        "notesId": "38e026ceda214cf88e999137a5268792",
        "kuid": "38e026ceda214cf88e999137a5268792"
    };
};