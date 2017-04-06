function addWidgetsMyActivityProfiles() {
    MyActivityProfiles.setDefaultUnit(kony.flex.DP);
    var volProfileContainer = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "50%",
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "volProfileContainer",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "10dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox075cf6099ef7d47",
        "top": "10dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {
        "bouncesZoom": true
    });
    volProfileContainer.setDefaultUnit(kony.flex.DP);
    var volProfileHeaderBackButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "6.39%",
        "id": "volProfileHeaderBackButtonContainer",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    volProfileHeaderBackButtonContainer.setDefaultUnit(kony.flex.DP);
    var volBackButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "volBackButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_9daff32972304912a53b138f76c0cd74,
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    volBackButtonContainer.setDefaultUnit(kony.flex.DP);
    var strartEngagemntBackBtn = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "height": "80%",
        "id": "strartEngagemntBackBtn",
        "isVisible": true,
        "left": "18dp",
        "onClick": AS_Button_60cce89b31454d2f8f34f4ffe82d9aa8,
        "skin": "CopyslButtonGlossBlue0c1a6517000b344",
        "top": "0dp",
        "width": "29.63%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    volBackButtonContainer.add(strartEngagemntBackBtn);
    volProfileHeaderBackButtonContainer.add(volBackButtonContainer);
    var volSearchedProfileBackButton = new kony.ui.Button({
        "height": "22dp",
        "id": "volSearchedProfileBackButton",
        "isVisible": false,
        "left": "7dp",
        "onClick": AS_Button_b30aeaef6c39476794ac2f5a8b88eea3,
        "skin": "CopyslButtonGlossBlue0881e97f46a7549",
        "top": "3dp",
        "width": "17dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var volProfileDetailsHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volProfileDetailsHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "1dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    volProfileDetailsHeader.setDefaultUnit(kony.flex.DP);
    var volProfilePic = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volProfilePic",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "7dp",
        "width": "30%"
    }, {}, {});
    volProfilePic.setDefaultUnit(kony.flex.DP);
    var volrProfilePicImage = new kony.ui.Image2({
        "centerX": "60%",
        "height": "70dp",
        "id": "volrProfilePicImage",
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
    volProfilePic.add(volrProfilePicImage);
    var volProfileDetailsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volProfileDetailsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "7dp",
        "width": "70%",
        "zIndex": 1
    }, {}, {});
    volProfileDetailsContainer.setDefaultUnit(kony.flex.DP);
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var volProfileCompanyName = new kony.ui.RichText({
        "id": "volProfileCompanyName",
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var volProfileBusinessUnitRole = new kony.ui.RichText({
        "id": "volProfileBusinessUnitRole",
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    volProfileDetailsContainer.add(volunteerProfileName, volProfileCompanyName, volProfileBusinessUnitRole);
    volProfileDetailsHeader.add(volProfilePic, volProfileDetailsContainer);
    var volProfileContactActions = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volProfileContactActions",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "15dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    volProfileContactActions.setDefaultUnit(kony.flex.DP);
    var volrProfileBookmark = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "volrProfileBookmark",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox048f5d0e9995346",
        "top": "0dp",
        "width": "33%"
    }, {}, {});
    volrProfileBookmark.setDefaultUnit(kony.flex.DP);
    volrProfileBookmark.add();
    var volProfileCall = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "volProfileCall",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox048f5d0e9995346",
        "top": "0dp",
        "width": "34%"
    }, {}, {});
    volProfileCall.setDefaultUnit(kony.flex.DP);
    volProfileCall.add();
    var volProfileEmail = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "44dp",
        "id": "volProfileEmail",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "50dp",
        "onTouchStart": AS_FlexContainer_1fafa4792ceb4465aef1c5c9b74a8e2a,
        "skin": "CopyslFbox048f5d0e9995346",
        "top": "6dp",
        "width": "25.00%"
    }, {}, {});
    volProfileEmail.setDefaultUnit(kony.flex.DP);
    var volProfileMsgBtn = new kony.ui.Button({
        "centerX": "50%",
        "height": "23dp",
        "id": "volProfileMsgBtn",
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
    }, {
        "showProgressIndicator": true
    });
    var imessageFromVolProfile = new kony.ui.RichText({
        "centerX": "49%",
        "id": "imessageFromVolProfile",
        "isVisible": false,
        "left": "5dp",
        "skin": "jumpStartRtLink100",
        "text": "<a style=\"color: #000\">Message</a>",
        "top": "-1dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var IMessageTable = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "17%",
        "id": "IMessageTable",
        "isVisible": true,
        "left": "8dp",
        "skin": "CopyslLabel07af6ceffc57c40",
        "text": "Message",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    volProfileEmail.add(volProfileMsgBtn, imessageFromVolProfile, IMessageTable);
    volProfileContactActions.add(volrProfileBookmark, volProfileCall, volProfileEmail);
    var requestAVolunteerr = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "jump",
        "height": "40dp",
        "id": "requestAVolunteerr",
        "isVisible": false,
        "left": "0dp",
        "onClick": AS_Button_299155e915f7426b899f826f4d634775,
        "skin": "jump",
        "text": "Request For Volunteer",
        "top": "9dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var volProfileLocationContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volProfileLocationContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volProfileLocationContainer.setDefaultUnit(kony.flex.DP);
    var volProfileLocationIconParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volProfileLocationIconParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%"
    }, {}, {});
    volProfileLocationIconParent.setDefaultUnit(kony.flex.DP);
    var volProfileLocationPinImage = new kony.ui.Image2({
        "centerX": "50%",
        "height": "45dp",
        "id": "volProfileLocationPinImage",
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
    volProfileLocationIconParent.add(volProfileLocationPinImage);
    var volProfileLocationAddressParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volProfileLocationAddressParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "20dp",
        "width": "70%"
    }, {}, {});
    volProfileLocationAddressParent.setDefaultUnit(kony.flex.DP);
    var volProfileLocationAddressStateText = new kony.ui.RichText({
        "id": "volProfileLocationAddressStateText",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText02d4fb58a6f0a42",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    volProfileLocationAddressParent.add(volProfileLocationAddressStateText);
    var volunteerProfileLocationDistanceParentt = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfileLocationDistanceParentt",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    volunteerProfileLocationDistanceParentt.setDefaultUnit(kony.flex.DP);
    var volProfileLocationDistanceText = new kony.ui.RichText({
        "id": "volProfileLocationDistanceText",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText08e91f37dd47f48",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    volunteerProfileLocationDistanceParentt.add(volProfileLocationDistanceText);
    volProfileLocationContainer.add(volProfileLocationIconParent, volProfileLocationAddressParent, volunteerProfileLocationDistanceParentt);
    var volProfileAboutContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volProfileAboutContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volProfileAboutContainer.setDefaultUnit(kony.flex.DP);
    var volProfileAboutHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volProfileAboutHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    volProfileAboutHeader.setDefaultUnit(kony.flex.DP);
    var volProfileAboutTextParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volProfileAboutTextParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    volProfileAboutTextParent.setDefaultUnit(kony.flex.DP);
    var volProfileAboutText = new kony.ui.RichText({
        "height": "40dp",
        "id": "volProfileAboutText",
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    volProfileAboutTextParent.add(volProfileAboutText);
    volProfileAboutHeader.add(volProfileAboutTextParent);
    var volProfileAboutBodyl = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "10dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "volProfileAboutBodyl",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volProfileAboutBodyl.setDefaultUnit(kony.flex.DP);
    var volProfileAboutBodyText = new kony.ui.RichText({
        "centerX": "50%",
        "id": "volProfileAboutBodyText",
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    volProfileAboutBodyl.add(volProfileAboutBodyText);
    volProfileAboutContainer.add(volProfileAboutHeader, volProfileAboutBodyl);
    var volProfileContactContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volProfileContactContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyslFbox0a00c3d05da4f49",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volProfileContactContainer.setDefaultUnit(kony.flex.DP);
    var contactAdressLbl = new kony.ui.Label({
        "centerX": "50%",
        "id": "contactAdressLbl",
        "isVisible": true,
        "left": "10dp",
        "skin": "ngnyOrangeLabelText",
        "text": "Contact Details",
        "top": "7dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
    var volunteerContactImg = new kony.ui.Image2({
        "centerX": "50%",
        "height": "13dp",
        "id": "volunteerContactImg",
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
    volContactImgFlex.add(volunteerContactImg);
    var volContactNumberflexx = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volContactNumberflexx",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "81.60%",
        "zIndex": 1
    }, {}, {});
    volContactNumberflexx.setDefaultUnit(kony.flex.DP);
    var volPhoneNum = new kony.ui.RichText({
        "id": "volPhoneNum",
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    volContactNumberflexx.add(volPhoneNum);
    volContactNumflex.add(volContactImgFlex, volContactNumberflexx);
    var volunteerEmailFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerEmailFlex",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "2dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    volunteerEmailFlex.setDefaultUnit(kony.flex.DP);
    var volunteerEmailImgFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerEmailImgFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    volunteerEmailImgFlex.setDefaultUnit(kony.flex.DP);
    var volEmailImgee = new kony.ui.Image2({
        "centerX": "50%",
        "height": "13dp",
        "id": "volEmailImgee",
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
    volunteerEmailImgFlex.add(volEmailImgee);
    var volEmailTxtFlexx = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volEmailTxtFlexx",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "81.60%",
        "zIndex": 1
    }, {}, {});
    volEmailTxtFlexx.setDefaultUnit(kony.flex.DP);
    var volEmailTxtt = new kony.ui.RichText({
        "id": "volEmailTxtt",
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    volEmailTxtFlexx.add(volEmailTxtt);
    volunteerEmailFlex.add(volunteerEmailImgFlex, volEmailTxtFlexx);
    var FlexContainer0ce4cddc1da1d47 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "3dp",
        "id": "FlexContainer0ce4cddc1da1d47",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "16dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "1%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0ce4cddc1da1d47.setDefaultUnit(kony.flex.DP);
    FlexContainer0ce4cddc1da1d47.add();
    volProfileContactContainer.add(contactAdressLbl, volContactNumflex, volunteerEmailFlex, FlexContainer0ce4cddc1da1d47);
    var CopyvolunteerProfileContactContainer0809353de6aee44 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "CopyvolunteerProfileContactContainer0809353de6aee44",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "16dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    CopyvolunteerProfileContactContainer0809353de6aee44.setDefaultUnit(kony.flex.DP);
    var CopyvolunteerProfileContactHeader0f536e4e83a0143 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "CopyvolunteerProfileContactHeader0f536e4e83a0143",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100.00%",
        "zIndex": 1
    }, {}, {});
    CopyvolunteerProfileContactHeader0f536e4e83a0143.setDefaultUnit(kony.flex.DP);
    var CopyContactDetailsHdr0cb7ff3373f3045 = new kony.ui.RichText({
        "height": "40dp",
        "id": "CopyContactDetailsHdr0cb7ff3373f3045",
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    CopyvolunteerProfileContactHeader0f536e4e83a0143.add(CopyContactDetailsHdr0cb7ff3373f3045);
    var CopyvolunteerProfileBodyHeader0445fb641cc2345 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "CopyvolunteerProfileBodyHeader0445fb641cc2345",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "50dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    CopyvolunteerProfileBodyHeader0445fb641cc2345.setDefaultUnit(kony.flex.DP);
    var CopyvolunteerContactTxtArea0ba4f9d32acf54d = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "120dp",
        "id": "CopyvolunteerContactTxtArea0ba4f9d32acf54d",
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
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "showProgressIndicator": false
    });
    var CopyvolunteerEmailTxtArea0aa55b5d9e35545 = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "id": "CopyvolunteerEmailTxtArea0aa55b5d9e35545",
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
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "showProgressIndicator": false
    });
    CopyvolunteerProfileBodyHeader0445fb641cc2345.add(CopyvolunteerContactTxtArea0ba4f9d32acf54d, CopyvolunteerEmailTxtArea0aa55b5d9e35545);
    CopyvolunteerProfileContactContainer0809353de6aee44.add(CopyvolunteerProfileContactHeader0f536e4e83a0143, CopyvolunteerProfileBodyHeader0445fb641cc2345);
    var volProfileAvailabilityContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volProfileAvailabilityContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volProfileAvailabilityContainer.setDefaultUnit(kony.flex.DP);
    var volProfileAvailabilityHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volProfileAvailabilityHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    volProfileAvailabilityHeader.setDefaultUnit(kony.flex.DP);
    var volunteerProfileAvailabilityTextParentt = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfileAvailabilityTextParentt",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    volunteerProfileAvailabilityTextParentt.setDefaultUnit(kony.flex.DP);
    var volunteerProfileAvailabilityTextt = new kony.ui.RichText({
        "height": "40dp",
        "id": "volunteerProfileAvailabilityTextt",
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    volunteerProfileAvailabilityTextParentt.add(volunteerProfileAvailabilityTextt);
    volProfileAvailabilityHeader.add(volunteerProfileAvailabilityTextParentt);
    var volunteerProfileAvailabilityExperienceBodyy = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "10dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileAvailabilityExperienceBodyy",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileAvailabilityExperienceBodyy.setDefaultUnit(kony.flex.DP);
    var CopyvolunteerProfileAvailabilityCalendarParent06b9151bb091b4e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyvolunteerProfileAvailabilityCalendarParent06b9151bb091b4e",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    CopyvolunteerProfileAvailabilityCalendarParent06b9151bb091b4e.setDefaultUnit(kony.flex.DP);
    var CopyvolunteerProfileAvailabilityCalendarImage055cb40c7c1204f = new kony.ui.Image2({
        "height": "40dp",
        "id": "CopyvolunteerProfileAvailabilityCalendarImage055cb40c7c1204f",
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
    CopyvolunteerProfileAvailabilityCalendarParent06b9151bb091b4e.add(CopyvolunteerProfileAvailabilityCalendarImage055cb40c7c1204f);
    var volunteerProfileAvailabilityScheduleParentt = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfileAvailabilityScheduleParentt",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyjumpStartBGBorder023e7eca67fa24c",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileAvailabilityScheduleParentt.setDefaultUnit(kony.flex.DP);
    var volunteerProfileAvailabilityScheduleDayss = new kony.ui.RichText({
        "id": "volunteerProfileAvailabilityScheduleDayss",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText084750cb758f144",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var volunteerProfileAvailabilityScheduleTimeee = new kony.ui.RichText({
        "id": "volunteerProfileAvailabilityScheduleTimeee",
        "isVisible": false,
        "left": "0dp",
        "skin": "CopyslRichText06d89e347b0034c",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    volunteerProfileAvailabilityScheduleParentt.add(volunteerProfileAvailabilityScheduleDayss, volunteerProfileAvailabilityScheduleTimeee);
    volunteerProfileAvailabilityExperienceBodyy.add(CopyvolunteerProfileAvailabilityCalendarParent06b9151bb091b4e, volunteerProfileAvailabilityScheduleParentt);
    volProfileAvailabilityContainer.add(volProfileAvailabilityHeader, volunteerProfileAvailabilityExperienceBodyy);
    var volProfileSkillsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volProfileSkillsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volProfileSkillsContainer.setDefaultUnit(kony.flex.DP);
    var volProfileSkillsHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volProfileSkillsHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    volProfileSkillsHeader.setDefaultUnit(kony.flex.DP);
    var volSkillsTextParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volSkillsTextParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    volSkillsTextParent.setDefaultUnit(kony.flex.DP);
    var volProfileSkillsText = new kony.ui.RichText({
        "height": "40dp",
        "id": "volProfileSkillsText",
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    volSkillsTextParent.add(volProfileSkillsText);
    volProfileSkillsHeader.add(volSkillsTextParent);
    var volProfileSkillsBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "10dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "volProfileSkillsBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volProfileSkillsBody.setDefaultUnit(kony.flex.DP);
    var volProfileSkillsList = new kony.ui.RichText({
        "centerX": "50%",
        "id": "volProfileSkillsList",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText0a3501d11069745",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    volProfileSkillsBody.add(volProfileSkillsList);
    volProfileSkillsContainer.add(volProfileSkillsHeader, volProfileSkillsBody);
    var volProfileWorkExperienceContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "20dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "volProfileWorkExperienceContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volProfileWorkExperienceContainer.setDefaultUnit(kony.flex.DP);
    var volunteerProfileWorkExperienceHeaderr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileWorkExperienceHeaderr",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    volunteerProfileWorkExperienceHeaderr.setDefaultUnit(kony.flex.DP);
    var volunteerProfileWorkExperienceTextParentt = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfileWorkExperienceTextParentt",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    volunteerProfileWorkExperienceTextParentt.setDefaultUnit(kony.flex.DP);
    var volunteerProfileWorkExperienceTextt = new kony.ui.RichText({
        "height": "40dp",
        "id": "volunteerProfileWorkExperienceTextt",
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    volunteerProfileWorkExperienceTextParentt.add(volunteerProfileWorkExperienceTextt);
    volunteerProfileWorkExperienceHeaderr.add(volunteerProfileWorkExperienceTextParentt);
    var volunteerProfileWorkExperience = new kony.ui.RichText({
        "bottom": "20dp",
        "centerX": "50%",
        "id": "volunteerProfileWorkExperience",
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    volProfileWorkExperienceContainer.add(volunteerProfileWorkExperienceHeaderr, volunteerProfileWorkExperience);
    volProfileContainer.add(volProfileHeaderBackButtonContainer, volSearchedProfileBackButton, volProfileDetailsHeader, volProfileContactActions, requestAVolunteerr, volProfileLocationContainer, volProfileAboutContainer, volProfileContactContainer, CopyvolunteerProfileContactContainer0809353de6aee44, volProfileAvailabilityContainer, volProfileSkillsContainer, volProfileWorkExperienceContainer);
    var businessProfileContainerr = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "businessProfileContainerr",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "19dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    businessProfileContainerr.setDefaultUnit(kony.flex.DP);
    var businessProfileDetailsHeaderr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "businessProfileDetailsHeaderr",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    businessProfileDetailsHeaderr.setDefaultUnit(kony.flex.DP);
    var CompanyLogoContainerr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80dp",
        "id": "CompanyLogoContainerr",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "14dp",
        "width": "25%"
    }, {}, {});
    CompanyLogoContainerr.setDefaultUnit(kony.flex.DP);
    var CompanyLogoo = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "44%",
        "height": "70dp",
        "id": "CompanyLogoo",
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
    CompanyLogoContainerr.add(CompanyLogoo);
    var CompanyNameAndAddressContainerr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80dp",
        "id": "CompanyNameAndAddressContainerr",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "75%"
    }, {}, {});
    CompanyNameAndAddressContainerr.setDefaultUnit(kony.flex.DP);
    var BusinessProfileCompanyNameAndAddressContainerr = new kony.ui.Label({
        "id": "BusinessProfileCompanyNameAndAddressContainerr",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CompanyAddressContainerr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20dp",
        "id": "CompanyAddressContainerr",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CompanyAddressContainerr.setDefaultUnit(kony.flex.DP);
    var imageMapIconn = new kony.ui.Image2({
        "height": "20dp",
        "id": "imageMapIconn",
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
    var CompanyAddressLabell = new kony.ui.Label({
        "centerY": "50%",
        "id": "CompanyAddressLabell",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    CompanyAddressContainerr.add(imageMapIconn, CompanyAddressLabell);
    CompanyNameAndAddressContainerr.add(BusinessProfileCompanyNameAndAddressContainerr, CompanyAddressContainerr);
    var businessSearchProfilePageBackButtonn = new kony.ui.Button({
        "height": "22dp",
        "id": "businessSearchProfilePageBackButtonn",
        "isVisible": false,
        "left": "-307dp",
        "onClick": AS_Button_7d08579f0c124d6a9d244a65dab2e06e,
        "skin": "CopyslButtonGlossBlue0881e97f46a7549",
        "top": "8dp",
        "width": "17dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    businessProfileDetailsHeaderr.add(CompanyLogoContainerr, CompanyNameAndAddressContainerr, businessSearchProfilePageBackButtonn);
    var businessProfileContactActionss = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "businessProfileContactActionss",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    businessProfileContactActionss.setDefaultUnit(kony.flex.DP);
    var businessProfileBookmarkk = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "businessProfileBookmarkk",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox048f5d0e9995346",
        "top": "0dp",
        "width": "33%"
    }, {}, {});
    businessProfileBookmarkk.setDefaultUnit(kony.flex.DP);
    var businessProfileBookmarkImagee = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "20dp",
        "id": "businessProfileBookmarkImagee",
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
    businessProfileBookmarkk.add(businessProfileBookmarkImagee);
    var businessProfileCalll = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "businessProfileCalll",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox048f5d0e9995346",
        "top": "0dp",
        "width": "34%"
    }, {}, {});
    businessProfileCalll.setDefaultUnit(kony.flex.DP);
    businessProfileCalll.add();
    var businessProfileEmaill = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "42dp",
        "id": "businessProfileEmaill",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchStart": AS_FlexContainer_e81eff96496c4deebd60d83fd77b0128,
        "skin": "CopyslFbox048f5d0e9995346",
        "top": "1dp",
        "width": "21.88%"
    }, {}, {});
    businessProfileEmaill.setDefaultUnit(kony.flex.DP);
    var businessmsgBtnn = new kony.ui.Button({
        "centerX": "49%",
        "height": "23dp",
        "id": "businessmsgBtnn",
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
    }, {
        "showProgressIndicator": true
    });
    var imessageFromBusinessProfilee = new kony.ui.RichText({
        "centerX": "50%",
        "id": "imessageFromBusinessProfilee",
        "isVisible": false,
        "left": "5dp",
        "onClick": AS_RichText_5ade2461b2cf4f26be5a058568dc9b84,
        "skin": "jumpStartRtLink100",
        "text": "<a href=\"#\" style=\"color: #000\">Message</a>",
        "top": "23dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var iMsgLabel = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "75%",
        "id": "iMsgLabel",
        "isVisible": true,
        "left": "8dp",
        "skin": "CopyslLabel07af6ceffc57c40",
        "text": "Message",
        "top": "23dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    businessProfileEmaill.add(businessmsgBtnn, imessageFromBusinessProfilee, iMsgLabel);
    businessProfileContactActionss.add(businessProfileBookmarkk, businessProfileCalll, businessProfileEmaill);
    var requestToVolunteerButtonn = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "jump",
        "height": "40dp",
        "id": "requestToVolunteerButtonn",
        "isVisible": false,
        "left": "0dp",
        "onClick": AS_Button_df13c25023874207a65c88b802d79b02,
        "skin": "jump",
        "text": "Request To Volunteer",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var businessProfileAboutContainerr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50.00%",
        "clipBounds": true,
        "id": "businessProfileAboutContainerr",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    businessProfileAboutContainerr.setDefaultUnit(kony.flex.DP);
    var businessProfileAboutTitlee = new kony.ui.Label({
        "id": "businessProfileAboutTitlee",
        "isVisible": true,
        "left": "10dp",
        "skin": "ngnyLargeOrangeLabelText",
        "text": "About",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var businessProfileAboutTextt = new kony.ui.RichText({
        "id": "businessProfileAboutTextt",
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var businessProfileAboutMoree = new kony.ui.Label({
        "bottom": 10,
        "id": "businessProfileAboutMoree",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    businessProfileAboutContainerr.add(businessProfileAboutTitlee, businessProfileAboutTextt, businessProfileAboutMoree);
    var businessContactContainerr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "businessContactContainerr",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyslFbox0a00c3d05da4f49",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    businessContactContainerr.setDefaultUnit(kony.flex.DP);
    var AdressLbll = new kony.ui.Label({
        "id": "AdressLbll",
        "isVisible": true,
        "left": "10dp",
        "skin": "ngnyLargeOrangeLabelText",
        "text": "Contact Details",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var contactNumberContainerr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "contactNumberContainerr",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    contactNumberContainerr.setDefaultUnit(kony.flex.DP);
    var contactNumImgContainerr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "contactNumImgContainerr",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    contactNumImgContainerr.setDefaultUnit(kony.flex.DP);
    var phoneImagee = new kony.ui.Image2({
        "centerX": "50%",
        "height": "25dp",
        "id": "phoneImagee",
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
    contactNumImgContainerr.add(phoneImagee);
    var phoneNumberContainerr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "phoneNumberContainerr",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "81.60%",
        "zIndex": 1
    }, {}, {});
    phoneNumberContainerr.setDefaultUnit(kony.flex.DP);
    var businessPhoneNumberr = new kony.ui.RichText({
        "id": "businessPhoneNumberr",
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    phoneNumberContainerr.add(businessPhoneNumberr);
    contactNumberContainerr.add(contactNumImgContainerr, phoneNumberContainerr);
    var emailContainerr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "emailContainerr",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    emailContainerr.setDefaultUnit(kony.flex.DP);
    var emailImageContainerr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "emailImageContainerr",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    emailImageContainerr.setDefaultUnit(kony.flex.DP);
    var emailImagee = new kony.ui.Image2({
        "centerX": "50%",
        "height": "22dp",
        "id": "emailImagee",
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
    emailImageContainerr.add(emailImagee);
    var emailIdContainerr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "emailIdContainerr",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "81.60%",
        "zIndex": 1
    }, {}, {});
    emailIdContainerr.setDefaultUnit(kony.flex.DP);
    var emailTextAreaa = new kony.ui.RichText({
        "id": "emailTextAreaa",
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    emailIdContainerr.add(emailTextAreaa);
    emailContainerr.add(emailImageContainerr, emailIdContainerr);
    businessContactContainerr.add(AdressLbll, contactNumberContainerr, emailContainerr);
    var businessProfileBusinessActivityContainerr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "businessProfileBusinessActivityContainerr",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    businessProfileBusinessActivityContainerr.setDefaultUnit(kony.flex.DP);
    var businessProfileBusinessActivityTitlee = new kony.ui.Label({
        "id": "businessProfileBusinessActivityTitlee",
        "isVisible": true,
        "left": "10dp",
        "skin": "ngnyLargeOrangeLabelText",
        "text": "Business Activity",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var businessProfileBusinessActivityTextt = new kony.ui.RichText({
        "id": "businessProfileBusinessActivityTextt",
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    businessProfileBusinessActivityContainerr.add(businessProfileBusinessActivityTitlee, businessProfileBusinessActivityTextt);
    var businessProfileAffiliationsContainerr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "0dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "businessProfileAffiliationsContainerr",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    businessProfileAffiliationsContainerr.setDefaultUnit(kony.flex.DP);
    var businessProfileAffiliationsTitllee = new kony.ui.Label({
        "id": "businessProfileAffiliationsTitllee",
        "isVisible": true,
        "left": "10dp",
        "skin": "ngnyLargeOrangeLabelText",
        "text": "Professional Affiliations",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var businessProfileAffiliationsTextt = new kony.ui.RichText({
        "id": "businessProfileAffiliationsTextt",
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    businessProfileAffiliationsContainerr.add(businessProfileAffiliationsTitllee, businessProfileAffiliationsTextt);
    var businessProfileReachContainerr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "20dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "businessProfileReachContainerr",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    businessProfileReachContainerr.setDefaultUnit(kony.flex.DP);
    var businessProfileReachTitleee = new kony.ui.Label({
        "id": "businessProfileReachTitleee",
        "isVisible": true,
        "left": "10dp",
        "skin": "ngnyLargeOrangeLabelText",
        "text": "Business Reach",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var businessProfileReachTextt = new kony.ui.RichText({
        "id": "businessProfileReachTextt",
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    businessProfileReachContainerr.add(businessProfileReachTitleee, businessProfileReachTextt);
    businessProfileContainerr.add(businessProfileDetailsHeaderr, businessProfileContactActionss, requestToVolunteerButtonn, businessProfileAboutContainerr, businessContactContainerr, businessProfileBusinessActivityContainerr, businessProfileAffiliationsContainerr, businessProfileReachContainerr);
    MyActivityProfiles.add(volProfileContainer, businessProfileContainerr);
};

function MyActivityProfilesGlobals() {
    MyActivityProfiles = new kony.ui.Form2({
        "addWidgets": addWidgetsMyActivityProfiles,
        "enabledForIdleTimeout": false,
        "id": "MyActivityProfiles",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm0dc3741ba1e1f46"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "button",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "button",
            "labelRightSideView": "Edit"
        },
        "titleBarSkin": "slTitleBar"
    });
    MyActivityProfiles.info = {
        "kuid": "29570dac279248599fde5b3de34f5ca5"
    };
};