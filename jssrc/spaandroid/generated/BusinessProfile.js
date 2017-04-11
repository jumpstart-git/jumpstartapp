function addWidgetsBusinessProfile() {
    BusinessProfile.setDefaultUnit(kony.flex.DP);
    var businessProfileContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "businessProfileContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0e039fad3ebc644",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    businessProfileContainer.setDefaultUnit(kony.flex.DP);
    var businessProfileDetailsContainer = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "businessProfileDetailsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    businessProfileDetailsContainer.setDefaultUnit(kony.flex.DP);
    var businessProfileHeaderContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "businessProfileHeaderContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyslFbox064b8864c652a4f",
        "top": "3dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    businessProfileHeaderContainer.setDefaultUnit(kony.flex.DP);
    var imgContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "76dp",
        "id": "imgContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "8dp",
        "width": "25%"
    }, {}, {});
    imgContainer.setDefaultUnit(kony.flex.DP);
    var imgBusinessLogo = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "44%",
        "height": "70dp",
        "id": "imgBusinessLogo",
        "isVisible": true,
        "left": "0dp",
        "onTouchStart": AS_Image_d97a71e9637c4514a8b1c7bdf35f416c,
        "skin": "slImage",
        "src": "supplynationlogo.png",
        "top": "0dp",
        "width": "77dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    imgContainer.add(imgBusinessLogo);
    var companyNameContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "95dp",
        "id": "companyNameContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "75%"
    }, {}, {});
    companyNameContainer.setDefaultUnit(kony.flex.DP);
    var tapOnImageTextContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "tapOnImageTextContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    tapOnImageTextContainer.setDefaultUnit(kony.flex.DP);
    var lblTapOnImageText = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblTapOnImageText",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel055c58d2a127346",
        "text": "Tap the icon to change your profile photo",
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
    tapOnImageTextContainer.add(lblTapOnImageText);
    var lblCompanyName = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblCompanyName",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel140Bold",
        "text": "The Supplies  Company",
        "top": "2dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var companyAddressContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "54%",
        "clipBounds": true,
        "id": "companyAddressContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "2dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    companyAddressContainer.setDefaultUnit(kony.flex.DP);
    var imgPinIcon = new kony.ui.Image2({
        "id": "imgPinIcon",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "location.png",
        "top": "0dp",
        "width": "10dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblcompanyAddress = new kony.ui.Label({
        "centerX": "47%",
        "id": "lblcompanyAddress",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "101 Daaling Harbour, Sydney",
        "width": "88%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    companyAddressContainer.add(imgPinIcon, lblcompanyAddress);
    companyNameContainer.add(tapOnImageTextContainer, lblCompanyName, companyAddressContainer);
    businessProfileHeaderContainer.add(imgContainer, companyNameContainer);
    var companyProfileContactOptions = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "companyProfileContactOptions",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    companyProfileContactOptions.setDefaultUnit(kony.flex.DP);
    var CopybusinessProfileBookmark09e59ceb137cb4a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "CopybusinessProfileBookmark09e59ceb137cb4a",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox048f5d0e9995346",
        "top": "0dp",
        "width": "33%"
    }, {}, {});
    CopybusinessProfileBookmark09e59ceb137cb4a.setDefaultUnit(kony.flex.DP);
    var CopybusinessProfileBookmarkImage09db7e0a6b12742 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "20dp",
        "id": "CopybusinessProfileBookmarkImage09db7e0a6b12742",
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
    CopybusinessProfileBookmark09e59ceb137cb4a.add(CopybusinessProfileBookmarkImage09db7e0a6b12742);
    var CopybusinessProfileCall0d0281e1872df41 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "CopybusinessProfileCall0d0281e1872df41",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox048f5d0e9995346",
        "top": "0dp",
        "width": "34%"
    }, {}, {});
    CopybusinessProfileCall0d0281e1872df41.setDefaultUnit(kony.flex.DP);
    CopybusinessProfileCall0d0281e1872df41.add();
    var CopybusinessProfileEmail0b561fe08f37145 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "42dp",
        "id": "CopybusinessProfileEmail0b561fe08f37145",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox048f5d0e9995346",
        "top": "1dp",
        "width": "21.88%"
    }, {}, {});
    CopybusinessProfileEmail0b561fe08f37145.setDefaultUnit(kony.flex.DP);
    var CopybusinessmsgBtn015ca841eb8074d = new kony.ui.Button({
        "centerX": "49%",
        "height": "23dp",
        "id": "CopybusinessmsgBtn015ca841eb8074d",
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
    var CopyimessageFromBusinessProfile092472d95892a4d = new kony.ui.RichText({
        "centerX": "50%",
        "id": "CopyimessageFromBusinessProfile092472d95892a4d",
        "isVisible": true,
        "left": "5dp",
        "skin": "jumpStartRtLink100",
        "text": "<a href=\"#\" style=\"color: #000\">Message</a>",
        "top": "23dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopybusinessProfileEmail0b561fe08f37145.add(CopybusinessmsgBtn015ca841eb8074d, CopyimessageFromBusinessProfile092472d95892a4d);
    companyProfileContactOptions.add(CopybusinessProfileBookmark09e59ceb137cb4a, CopybusinessProfileCall0d0281e1872df41, CopybusinessProfileEmail0b561fe08f37145);
    var contactSupplynationContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "contactSupplynationContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "144dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    contactSupplynationContainer.setDefaultUnit(kony.flex.DP);
    var contactSupplyNationRichText = new kony.ui.RichText({
        "centerX": "50%",
        "id": "contactSupplyNationRichText",
        "isVisible": true,
        "left": "13dp",
        "skin": "contactSupplynationRichText",
        "text": "If you would like to edit your business profile or delete your account, kindly contact Supply Nation",
        "top": "7dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    contactSupplynationContainer.add(contactSupplyNationRichText);
    var LoginDetailsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "LoginDetailsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "13dp",
        "skin": "CopyslFbox0bf0ed6dca93f4e",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    LoginDetailsContainer.setDefaultUnit(kony.flex.DP);
    var lblLoginDetails = new kony.ui.Label({
        "id": "lblLoginDetails",
        "isVisible": true,
        "left": "10dp",
        "skin": "ngnyLargeOrangeLabelText",
        "text": "Login details",
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
    var loginEmailIdContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "loginEmailIdContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "10dp",
        "skin": "slFbox",
        "top": "8dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    loginEmailIdContainer.setDefaultUnit(kony.flex.DP);
    var lblEmail = new kony.ui.Label({
        "id": "lblEmail",
        "isVisible": true,
        "left": "0dp",
        "right": "2%",
        "skin": "CopyslLabel055000dcec51f41",
        "text": "Email:",
        "top": "2dp",
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
    var lblLoggedInEmail = new kony.ui.Label({
        "id": "lblLoggedInEmail",
        "isVisible": true,
        "left": "2dp",
        "skin": "CopyslLabel055000dcec51f41",
        "text": "supplycompany@mail.com",
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
    loginEmailIdContainer.add(lblEmail, lblLoggedInEmail);
    var PasswordContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "33dp",
        "id": "PasswordContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "10dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    PasswordContainer.setDefaultUnit(kony.flex.DP);
    var lblPassword = new kony.ui.Label({
        "id": "lblPassword",
        "isVisible": true,
        "left": "0dp",
        "right": "2%",
        "skin": "CopyslLabel055000dcec51f41",
        "text": "Password:",
        "top": "2dp",
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
    var changePasswordRichText = new kony.ui.RichText({
        "id": "changePasswordRichText",
        "isVisible": true,
        "left": "2dp",
        "onTouchStart": AS_RichText_5b2fab265c874cadaf62f39df2783b03,
        "skin": "CopyslRichText03031643224134b",
        "text": "<u>Change Password</u>\n",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    PasswordContainer.add(lblPassword, changePasswordRichText);
    LoginDetailsContainer.add(lblLoginDetails, loginEmailIdContainer, PasswordContainer);
    var CopyrequestToVolunteerButton0e8d2e749363e47 = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "jump",
        "height": "40dp",
        "id": "CopyrequestToVolunteerButton0e8d2e749363e47",
        "isVisible": false,
        "left": "0dp",
        "skin": "jump",
        "text": "Request to Volunteer",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var aboutCompanyContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50.05%",
        "clipBounds": true,
        "id": "aboutCompanyContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    aboutCompanyContainer.setDefaultUnit(kony.flex.DP);
    var lblAbout = new kony.ui.Label({
        "id": "lblAbout",
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var AboutRichtext = new kony.ui.RichText({
        "id": "AboutRichtext",
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
    var lblMore = new kony.ui.Label({
        "bottom": 10,
        "id": "lblMore",
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
    aboutCompanyContainer.add(lblAbout, AboutRichtext, lblMore);
    var ContactInfoContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "ContactInfoContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "16dp",
        "skin": "CopyslFbox0a00c3d05da4f49",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    ContactInfoContainer.setDefaultUnit(kony.flex.DP);
    var lblContactDetails = new kony.ui.Label({
        "id": "lblContactDetails",
        "isVisible": true,
        "left": "10dp",
        "skin": "ngnyLargeOrangeLabelText",
        "text": "Contact details",
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
        "top": "7dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    contactNumberContainer.setDefaultUnit(kony.flex.DP);
    var phoneImgContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15dp",
        "id": "phoneImgContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    phoneImgContainer.setDefaultUnit(kony.flex.DP);
    var imgTelephone = new kony.ui.Image2({
        "centerX": "50%",
        "height": "15dp",
        "id": "imgTelephone",
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
    phoneImgContainer.add(imgTelephone);
    var phoneNumContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "phoneNumContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "6dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "81.60%",
        "zIndex": 1
    }, {}, {});
    phoneNumContainer.setDefaultUnit(kony.flex.DP);
    var phoneNumRichText = new kony.ui.RichText({
        "id": "phoneNumRichText",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText0514cecac58c549",
        "text": "4564564546\n",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    phoneNumContainer.add(phoneNumRichText);
    contactNumberContainer.add(phoneImgContainer, phoneNumContainer);
    var emailContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "emailContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "3dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    emailContainer.setDefaultUnit(kony.flex.DP);
    var emailImgContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15dp",
        "id": "emailImgContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    emailImgContainer.setDefaultUnit(kony.flex.DP);
    var imgatRate = new kony.ui.Image2({
        "centerX": "50%",
        "height": "15dp",
        "id": "imgatRate",
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
    emailImgContainer.add(imgatRate);
    var emailIdContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "emailIdContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "6dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "81.60%",
        "zIndex": 1
    }, {}, {});
    emailIdContainer.setDefaultUnit(kony.flex.DP);
    var emailIdRichText = new kony.ui.RichText({
        "height": "30dp",
        "id": "emailIdRichText",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText0951e67eefb874e",
        "text": "supplycompay@mail.com\n\n\n",
        "top": "-3dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblBottomAlignMent = new kony.ui.Label({
        "id": "lblBottomAlignMent",
        "isVisible": false,
        "left": "30dp",
        "skin": "CopyslLabel01cbec2e7f72e46",
        "top": "9dp",
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
    emailIdContainer.add(emailIdRichText, lblBottomAlignMent);
    emailContainer.add(emailImgContainer, emailIdContainer);
    ContactInfoContainer.add(lblContactDetails, contactNumberContainer, emailContainer);
    var businessActivityContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "businessActivityContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    businessActivityContainer.setDefaultUnit(kony.flex.DP);
    var lblBusinessActivityContainer = new kony.ui.Label({
        "id": "lblBusinessActivityContainer",
        "isVisible": true,
        "left": "10dp",
        "skin": "ngnyLargeOrangeLabelText",
        "text": "Business activity",
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
    var BusinessActivityRichText = new kony.ui.RichText({
        "id": "BusinessActivityRichText",
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
    businessActivityContainer.add(lblBusinessActivityContainer, BusinessActivityRichText);
    var AffiliationContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "0dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "AffiliationContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    AffiliationContainer.setDefaultUnit(kony.flex.DP);
    var lblAffiliation = new kony.ui.Label({
        "id": "lblAffiliation",
        "isVisible": true,
        "left": "10dp",
        "skin": "ngnyLargeOrangeLabelText",
        "text": "Professional affiliations",
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
    var affiliationRichText = new kony.ui.RichText({
        "id": "affiliationRichText",
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
    AffiliationContainer.add(lblAffiliation, affiliationRichText);
    var businessReachContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "20dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "businessReachContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    businessReachContainer.setDefaultUnit(kony.flex.DP);
    var lblBusinessReach = new kony.ui.Label({
        "id": "lblBusinessReach",
        "isVisible": true,
        "left": "10dp",
        "skin": "ngnyLargeOrangeLabelText",
        "text": "Business reach",
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
    var businessReachrichText = new kony.ui.RichText({
        "id": "businessReachrichText",
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
    businessReachContainer.add(lblBusinessReach, businessReachrichText);
    var continueButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "continueButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    continueButtonContainer.setDefaultUnit(kony.flex.DP);
    var continueButton = new kony.ui.Button({
        "bottom": "20dp",
        "centerX": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "50dp",
        "id": "continueButton",
        "isVisible": true,
        "left": "36dp",
        "onClick": AS_Button_7bf81a92fedc4957be3f7b1a2a109185,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Continue",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    continueButtonContainer.add(continueButton);
    businessProfileDetailsContainer.add(businessProfileHeaderContainer, companyProfileContactOptions, contactSupplynationContainer, LoginDetailsContainer, CopyrequestToVolunteerButton0e8d2e749363e47, aboutCompanyContainer, ContactInfoContainer, businessActivityContainer, AffiliationContainer, businessReachContainer, continueButtonContainer);
    businessProfileContainer.add(businessProfileDetailsContainer);
    var BusinessChangePasswordContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "BusinessChangePasswordContainer",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0c48ec40e8c5d49",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    BusinessChangePasswordContainer.setDefaultUnit(kony.flex.DP);
    var ChangePasswordContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "90%",
        "id": "ChangePasswordContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "43dp",
        "skin": "CopyslFbox06e1de5352b8142",
        "top": "127dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    ChangePasswordContainer.setDefaultUnit(kony.flex.DP);
    var ChangePasswordLabelContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "13%",
        "id": "ChangePasswordLabelContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    ChangePasswordLabelContainer.setDefaultUnit(kony.flex.DP);
    var ChangePasswordLabel = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "ChangePasswordLabel",
        "isVisible": true,
        "left": "126dp",
        "skin": "CopyslLabel0439c14923c3f4a",
        "text": "Change Password",
        "top": "8dp",
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
    ChangePasswordLabelContainer.add(ChangePasswordLabel);
    var ChangePasswordBOdyContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "63%",
        "id": "ChangePasswordBOdyContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "7dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    ChangePasswordBOdyContainer.setDefaultUnit(kony.flex.DP);
    var emailIdLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "emailIdLabel",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel08df28f33a20345",
        "text": "Email address",
        "top": "0dp",
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
    var loggedInBusinessEmailId = new kony.ui.Label({
        "centerX": "50%",
        "height": "40dp",
        "id": "loggedInBusinessEmailId",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel0997599fa25d643",
        "text": "emailname@supplycompany.com",
        "top": "4dp",
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
    var CurrentPasswordLabelContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "CurrentPasswordLabelContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "9dp",
        "skin": "slFbox",
        "top": "8dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    CurrentPasswordLabelContainer.setDefaultUnit(kony.flex.DP);
    var CurrentPasswordContainer = new kony.ui.Label({
        "id": "CurrentPasswordContainer",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel08df28f33a20345",
        "text": "Current password",
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
    var lblStar = new kony.ui.Label({
        "id": "lblStar",
        "isVisible": true,
        "left": "2dp",
        "skin": "CopyslLabel01a66208f3fc94d",
        "text": "*",
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
    CurrentPasswordLabelContainer.add(CurrentPasswordContainer, lblStar);
    var CurrentPasswordInputField = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "CurrentPasswordInputField",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "20dp",
        "secureTextEntry": true,
        "skin": "CopyslTextBox0c1df67e44e2841",
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
    var NewPasswordLabelContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "NewPasswordLabelContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "9dp",
        "skin": "slFbox",
        "top": "8dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    NewPasswordLabelContainer.setDefaultUnit(kony.flex.DP);
    var NewPasswordLabel = new kony.ui.Label({
        "id": "NewPasswordLabel",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel08df28f33a20345",
        "text": "New password",
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
    var newPasswordStarLabel = new kony.ui.Label({
        "id": "newPasswordStarLabel",
        "isVisible": true,
        "left": "2dp",
        "skin": "CopyslLabel01a66208f3fc94d",
        "text": "*",
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
    NewPasswordLabelContainer.add(NewPasswordLabel, newPasswordStarLabel);
    var NewPasswordTextInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "49.95%",
        "height": "40dp",
        "id": "NewPasswordTextInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "20dp",
        "secureTextEntry": true,
        "skin": "CopyslTextBox0c1df67e44e2841",
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
    var lblValidationText = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblValidationText",
        "isVisible": true,
        "skin": "CopyslLabel0414eebbc0e934e",
        "text": "Password must contain 8 characters,1 special and 1 capital letter",
        "top": "1%",
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
    var ReEnterNewPasswordLabelContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "ReEnterNewPasswordLabelContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "9dp",
        "skin": "slFbox",
        "top": "8dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    ReEnterNewPasswordLabelContainer.setDefaultUnit(kony.flex.DP);
    var ReEnterNewpasswordLabel = new kony.ui.Label({
        "id": "ReEnterNewpasswordLabel",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel08df28f33a20345",
        "text": "Re-enter new password",
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
    var ReEnterNewpasswordStarLabel = new kony.ui.Label({
        "id": "ReEnterNewpasswordStarLabel",
        "isVisible": true,
        "left": "2dp",
        "skin": "CopyslLabel01a66208f3fc94d",
        "text": "*",
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
    ReEnterNewPasswordLabelContainer.add(ReEnterNewpasswordLabel, ReEnterNewpasswordStarLabel);
    var ReEnterNewpasswordInputField = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "ReEnterNewpasswordInputField",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "20dp",
        "secureTextEntry": true,
        "skin": "CopyslTextBox0c1df67e44e2841",
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
    ChangePasswordBOdyContainer.add(emailIdLabel, loggedInBusinessEmailId, CurrentPasswordLabelContainer, CurrentPasswordInputField, NewPasswordLabelContainer, NewPasswordTextInput, lblValidationText, ReEnterNewPasswordLabelContainer, ReEnterNewpasswordInputField);
    var ChangePasswordFooterContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "19.14%",
        "id": "ChangePasswordFooterContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "7dp",
        "skin": "slFbox",
        "top": "15dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    ChangePasswordFooterContainer.setDefaultUnit(kony.flex.DP);
    var ChangePasswordButton = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "45dp",
        "id": "ChangePasswordButton",
        "isVisible": true,
        "left": "37dp",
        "onClick": AS_Button_f197f02f5c294e089d477ddb4ef9a33e,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Change Password",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CancelRichText = new kony.ui.RichText({
        "centerX": "50%",
        "id": "CancelRichText",
        "isVisible": true,
        "left": "113dp",
        "onTouchStart": AS_RichText_7f64d44a877a4b07adafaf17065d9086,
        "skin": "CopyslRichText0d0d9178c8f314a",
        "text": "Cancel\n",
        "top": "15%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    ChangePasswordFooterContainer.add(ChangePasswordButton, CancelRichText);
    ChangePasswordContainer.add(ChangePasswordLabelContainer, ChangePasswordBOdyContainer, ChangePasswordFooterContainer);
    BusinessChangePasswordContainer.add(ChangePasswordContainer);
    BusinessProfile.add(businessProfileContainer, BusinessChangePasswordContainer);
};

function BusinessProfileGlobals() {
    BusinessProfile = new kony.ui.Form2({
        "addWidgets": addWidgetsBusinessProfile,
        "enabledForIdleTimeout": false,
        "id": "BusinessProfile",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm0e1c1683ac75249"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
    BusinessProfile.info = {
        "kuid": "e77f50fcef0d46fe9acf13a5e11ac7ea"
    };
};