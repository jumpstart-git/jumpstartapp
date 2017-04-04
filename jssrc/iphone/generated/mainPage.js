function addWidgetsmainPage() {
    mainPage.setDefaultUnit(kony.flex.DP);
    var mainPageBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "mainPageBody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    mainPageBody.setDefaultUnit(kony.flex.DP);
    var searchBarContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "searchBarContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "jumpStartBGFFF",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    searchBarContainer.setDefaultUnit(kony.flex.DP);
    var sideBarToggleContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "sideBarToggleContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchEnd": AS_FlexContainer_e942b364329c4bfdb7027d857cb5692b,
        "skin": "slFbox",
        "top": "0dp",
        "width": "12.00%",
        "zIndex": 1
    }, {}, {});
    sideBarToggleContainer.setDefaultUnit(kony.flex.DP);
    var sideBarToggle = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "30dp",
        "id": "sideBarToggle",
        "isVisible": true,
        "left": "8dp",
        "skin": "slImage",
        "src": "sidebar.png",
        "top": "0dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    sideBarToggleContainer.add(sideBarToggle);
    var appHeaderTitleContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "appHeaderTitleContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "-2dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "70%",
        "zIndex": 1
    }, {}, {});
    appHeaderTitleContainer.setDefaultUnit(kony.flex.DP);
    var appPageProfilePic = new kony.ui.Image2({
        "centerY": "50%",
        "height": "40dp",
        "id": "appPageProfilePic",
        "isVisible": true,
        "left": "2%",
        "skin": "slImage",
        "src": "imgseglogo.png",
        "top": "0dp",
        "width": "40dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var appPageGreeting = new kony.ui.Label({
        "centerY": "50%",
        "id": "appPageGreeting",
        "isVisible": true,
        "left": "5dp",
        "skin": "CopyslLabel05bf6920b75014c",
        "text": "Hello",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblBusorVolName = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblBusorVolName",
        "isVisible": true,
        "left": "3dp",
        "skin": "CopyslLabel05bf6920b75014c",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    appHeaderTitleContainer.add(appPageProfilePic, appPageGreeting, lblBusorVolName);
    var searchButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "99.51%",
        "id": "searchButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "14dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "15.07%",
        "zIndex": 1
    }, {}, {});
    searchButtonContainer.setDefaultUnit(kony.flex.DP);
    var searchButton = new kony.ui.Button({
        "centerX": "38%",
        "centerY": "50%",
        "height": "38%",
        "id": "searchButton",
        "isVisible": true,
        "left": "10dp",
        "onClick": AS_Button_3d555c25db1f4257a45b1f9c9ba15f18,
        "skin": "CopyslButtonGlossBlue05f7e1311090944",
        "text": "Button",
        "top": "15dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    searchButtonContainer.add(searchButton);
    searchBarContainer.add(sideBarToggleContainer, appHeaderTitleContainer, searchButtonContainer);
    var navBarScroller = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": false,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "8%",
        "horizontalScrollIndicator": true,
        "id": "navBarScroller",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
        "skin": "jumpStartBG222",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "99.93%",
        "zIndex": 1
    }, {}, {});
    navBarScroller.setDefaultUnit(kony.flex.DP);
    var activityNavContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "activityNavContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "onTouchStart": AS_FlexContainer_b74bf0ca08354ac482d50767e3733d00,
        "skin": "slFbox",
        "top": "0dp",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    activityNavContainer.setDefaultUnit(kony.flex.DP);
    var navMyActivity = new kony.ui.Label({
        "height": "95%",
        "id": "navMyActivity",
        "isVisible": true,
        "left": "0dp",
        "onTouchEnd": AS_Label_66b927334c324dd6a7ca90f1ab686138,
        "skin": "CopyslLabel06969984165bf40",
        "text": "Activity",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var activityIndicator = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "5%",
        "id": "activityIndicator",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "jumpStartBGOrange",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    activityIndicator.setDefaultUnit(kony.flex.DP);
    activityIndicator.add();
    activityNavContainer.add(navMyActivity, activityIndicator);
    var navEvents = new kony.ui.Label({
        "height": "100%",
        "id": "navEvents",
        "isVisible": false,
        "left": "0dp",
        "onTouchEnd": AS_Label_aa89a83117354a428c60df29bee9a46c,
        "skin": "CopyslLabel06969984165bf40",
        "text": "Events",
        "top": "0dp",
        "width": "35%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var navNews = new kony.ui.Label({
        "height": "100%",
        "id": "navNews",
        "isVisible": false,
        "left": "0dp",
        "onTouchEnd": AS_Label_aa89a83117354a428c60df29bee9a46c,
        "skin": "CopyslLabel06969984165bf40",
        "text": "News",
        "top": "0dp",
        "width": "35%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var navMessages = new kony.ui.Label({
        "height": "100%",
        "id": "navMessages",
        "isVisible": false,
        "left": "-8dp",
        "onTouchEnd": AS_Label_98407b61245b427f89b9495b7effe858,
        "skin": "CopyslLabel06969984165bf40",
        "text": "Messages",
        "top": "0dp",
        "width": "35.94%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var notificationNavContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "notificationNavContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": 0,
        "onTouchStart": AS_FlexContainer_249850a57d2f494dacacd0e20957c063,
        "skin": "slFbox",
        "top": 0,
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    notificationNavContainer.setDefaultUnit(kony.flex.DP);
    var navNotifications = new kony.ui.Label({
        "height": "95%",
        "id": "navNotifications",
        "isVisible": true,
        "left": "0dp",
        "onTouchEnd": AS_Label_b4172a3037a7474c862e44f90dacb3f2,
        "onTouchStart": AS_Label_23df805b483e437dbbf7b2c98f49f344,
        "skin": "CopyslLabel06969984165bf40",
        "text": "Notifications",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var notificationIndicator = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "5%",
        "id": "notificationIndicator",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "jumpStartBGOrange",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    notificationIndicator.setDefaultUnit(kony.flex.DP);
    notificationIndicator.add();
    notificationNavContainer.add(navNotifications, notificationIndicator);
    var endorsementsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "endorsementsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": 0,
        "onTouchStart": AS_FlexContainer_6b4ca0e1ddef4db0915b830860773aa2,
        "skin": "slFbox",
        "top": 0,
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    endorsementsContainer.setDefaultUnit(kony.flex.DP);
    var navEndorsements = new kony.ui.Label({
        "height": "95%",
        "id": "navEndorsements",
        "isVisible": true,
        "left": "0dp",
        "onTouchEnd": AS_Label_b4172a3037a7474c862e44f90dacb3f2,
        "onTouchStart": AS_Label_23df805b483e437dbbf7b2c98f49f344,
        "skin": "CopyslLabel06969984165bf40",
        "text": "Endorsements",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var endorsementsIndicator = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "5%",
        "id": "endorsementsIndicator",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "jumpStartBGOrange",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    endorsementsIndicator.setDefaultUnit(kony.flex.DP);
    endorsementsIndicator.add();
    endorsementsContainer.add(navEndorsements, endorsementsIndicator);
    var recommendationNavContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "recommendationNavContainer",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "onTouchStart": AS_FlexContainer_b30e39e791ae4bbd88105a50997e9a96,
        "skin": "slFbox",
        "top": "0dp",
        "width": "45%",
        "zIndex": 1
    }, {}, {});
    recommendationNavContainer.setDefaultUnit(kony.flex.DP);
    var navRecommendations = new kony.ui.Label({
        "height": "95%",
        "id": "navRecommendations",
        "isVisible": true,
        "left": "0dp",
        "onTouchEnd": AS_Label_016ee17f3d7848ff84abe81557b8e9ad,
        "skin": "CopyslLabel06969984165bf40",
        "text": "Recommendations",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var recommendationIndicator = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "5%",
        "id": "recommendationIndicator",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "jumpStartBGOrange",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    recommendationIndicator.setDefaultUnit(kony.flex.DP);
    recommendationIndicator.add();
    recommendationNavContainer.add(navRecommendations, recommendationIndicator);
    var navMessageConversation = new kony.ui.Label({
        "id": "navMessageConversation",
        "isVisible": false,
        "left": "48dp",
        "skin": "CopyslLabel06562a29303514e",
        "text": "Label",
        "top": "53dp",
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
    navBarScroller.add(activityNavContainer, navEvents, navNews, navMessages, notificationNavContainer, endorsementsContainer, recommendationNavContainer, navMessageConversation);
    var mainPageContentParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "82%",
        "id": "mainPageContentParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "jumpStartBG249",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    mainPageContentParent.setDefaultUnit(kony.flex.DP);
    var myActivity = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "94.25%",
        "horizontalScrollIndicator": true,
        "id": "myActivity",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyjumpStartFlexScrollBG0c91b1a0a454f4e",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%"
    }, {}, {});
    myActivity.setDefaultUnit(kony.flex.DP);
    var CreateOpportunityButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "CreateOpportunityButtonContainer",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    CreateOpportunityButtonContainer.setDefaultUnit(kony.flex.DP);
    var MyActivityCreateOpportunityButton = new kony.ui.Button({
        "focusSkin": "jumpStartGreenButton100",
        "height": "100%",
        "id": "MyActivityCreateOpportunityButton",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_f5ed84b5ee7648ca8b37b2f668ad41e1,
        "skin": "jumpStartGreenButton100",
        "text": "Create a brief",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    CreateOpportunityButtonContainer.add(MyActivityCreateOpportunityButton);
    var RefreshContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "27dp",
        "id": "RefreshContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "21dp",
        "skin": "slFbox",
        "top": "6dp",
        "width": "89.38%",
        "zIndex": 1
    }, {}, {});
    RefreshContainer.setDefaultUnit(kony.flex.DP);
    var refreshButton = new kony.ui.Button({
        "height": "129.63%",
        "id": "refreshButton",
        "isVisible": false,
        "left": "255dp",
        "onClick": AS_Button_ef9d782efbb843a2af32d76859191241,
        "skin": "CopyslButtonGlossBlue0772af87d4a3c4d",
        "top": "-5dp",
        "width": "12.02%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var refreshRichText = new kony.ui.RichText({
        "centerX": "50%",
        "id": "refreshRichText",
        "isVisible": true,
        "left": "95dp",
        "onTouchStart": AS_RichText_61ea1e6a537b4f45a68bb7675000343f,
        "skin": "ngnyGreenLinkText",
        "text": "<u>Refresh results</u>",
        "top": "6dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    RefreshContainer.add(refreshButton, refreshRichText);
    var myAcceptedRequests = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "myAcceptedRequests",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "myAcceptedRequestsOverallContainer",
        "top": "15dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    myAcceptedRequests.setDefaultUnit(kony.flex.DP);
    var myAcceptedRequestsHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "myAcceptedRequestsHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onTouchStart": AS_FlexContainer_cfd527e91ca24efb98abe8143d3d09f8,
        "skin": "ngnyGreenFlexBG",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    myAcceptedRequestsHeader.setDefaultUnit(kony.flex.DP);
    var myAcceptedRequestsExpandImageParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "myAcceptedRequestsExpandImageParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    myAcceptedRequestsExpandImageParent.setDefaultUnit(kony.flex.DP);
    var myAcceptedRequestsExpandImage = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "25dp",
        "id": "myAcceptedRequestsExpandImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "expand_task.png",
        "top": "0dp",
        "width": "25dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    myAcceptedRequestsExpandImageParent.add(myAcceptedRequestsExpandImage);
    var myAcceptedRequestsHeaderLabelParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "myAcceptedRequestsHeaderLabelParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    myAcceptedRequestsHeaderLabelParent.setDefaultUnit(kony.flex.DP);
    var myAcceptedRequestsHeaderLabel = new kony.ui.Label({
        "centerY": "50%",
        "id": "myAcceptedRequestsHeaderLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabelWhite130",
        "text": "Requests",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    myAcceptedRequestsHeaderLabelParent.add(myAcceptedRequestsHeaderLabel);
    myAcceptedRequestsHeader.add(myAcceptedRequestsExpandImageParent, myAcceptedRequestsHeaderLabelParent);
    var myAcceptedRequestsListContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "myAcceptedRequestsListContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "35dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    myAcceptedRequestsListContainer.setDefaultUnit(kony.flex.DP);
    var acceptedRequestsSegment = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "ActaulMessage": "",
            "acceptTask": "",
            "acceptedRequestBusinessName": "",
            "acceptedRequestImage": "",
            "acceptedRequestLabel": "",
            "acceptedRequestStatus": "",
            "cancelRequest": "",
            "contactRequest": "",
            "lblRequestId": "",
            "requestMessage": ""
        }],
        "groupCells": false,
        "id": "acceptedRequestsSegment",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "jumpStartSegmentSkin",
        "rowTemplate": FBox05b71795fc3da47,
        "scrollingEvents": {
            "onPull": AS_Segment_515264bd371548348504c5441bf9abb5
        },
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "acceptTask": "acceptTask",
            "acceptedRequestBusinessName": "acceptedRequestBusinessName",
            "acceptedRequestImage": "acceptedRequestImage",
            "acceptedRequestImageParent": "acceptedRequestImageParent",
            "acceptedRequestInfoParent": "acceptedRequestInfoParent",
            "acceptedRequestLabel": "acceptedRequestLabel",
            "acceptedRequestStatus": "acceptedRequestStatus",
            "acceptedRequestsBottom": "acceptedRequestsBottom",
            "acceptedRequestsTop": "acceptedRequestsTop",
            "cancelRequest": "cancelRequest",
            "contactRequest": "contactRequest",
            "lblRequestId": "lblRequestId"
        },
        "width": "100%"
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_NONE,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    myAcceptedRequestsListContainer.add(acceptedRequestsSegment);
    myAcceptedRequests.add(myAcceptedRequestsHeader, myAcceptedRequestsListContainer);
    var mySentRequests = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "mySentRequests",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "myAcceptedRequestsOverallContainer",
        "top": "15dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    mySentRequests.setDefaultUnit(kony.flex.DP);
    var mySentRequestsHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "mySentRequestsHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onTouchStart": AS_FlexContainer_663b9e1a50524ad4a465c143f89d5609,
        "skin": "ngnyGreenFlexBG",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    mySentRequestsHeader.setDefaultUnit(kony.flex.DP);
    var mySentRequestsExpandImageParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "mySentRequestsExpandImageParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    mySentRequestsExpandImageParent.setDefaultUnit(kony.flex.DP);
    var mySentRequestsExpandImage = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "25dp",
        "id": "mySentRequestsExpandImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "expand_task.png",
        "top": "0dp",
        "width": "25dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    mySentRequestsExpandImageParent.add(mySentRequestsExpandImage);
    var mySentRequestsHeaderLabelParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "mySentRequestsHeaderLabelParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    mySentRequestsHeaderLabelParent.setDefaultUnit(kony.flex.DP);
    var mySentRequestsHeaderLabel = new kony.ui.Label({
        "centerY": "50%",
        "id": "mySentRequestsHeaderLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabelWhite130",
        "text": "Requests",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    mySentRequestsHeaderLabelParent.add(mySentRequestsHeaderLabel);
    mySentRequestsHeader.add(mySentRequestsExpandImageParent, mySentRequestsHeaderLabelParent);
    var mySentRequestsListContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "mySentRequestsListContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "44dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    mySentRequestsListContainer.setDefaultUnit(kony.flex.DP);
    var sentRequestsSegment = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "acceptRequest": "",
            "declineRequest": "",
            "lblRequestIdSent": "",
            "sentRequestBusinessName": "",
            "sentRequestImage": "",
            "sentRequestLabel": "",
            "sentRequestStatus": "",
            "viewRequest": ""
        }],
        "groupCells": false,
        "id": "sentRequestsSegment",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_be6fb3f80ae4453da0eef0c00961b918,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "jumpStartSegmentSkin",
        "rowTemplate": CopyFBox09e1c06f6a9bb44,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "acceptRequest": "acceptRequest",
            "declineRequest": "declineRequest",
            "lblRequestIdSent": "lblRequestIdSent",
            "sentRequestBusinessName": "sentRequestBusinessName",
            "sentRequestImage": "sentRequestImage",
            "sentRequestImageParent": "sentRequestImageParent",
            "sentRequestInfoParent": "sentRequestInfoParent",
            "sentRequestLabel": "sentRequestLabel",
            "sentRequestStatus": "sentRequestStatus",
            "sentRequestsBottom": "sentRequestsBottom",
            "sentRequestsTop": "sentRequestsTop",
            "viewRequest": "viewRequest"
        },
        "width": "100%"
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_NONE,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    mySentRequestsListContainer.add(sentRequestsSegment);
    mySentRequests.add(mySentRequestsHeader, mySentRequestsListContainer);
    var unAssignedTasksContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "unAssignedTasksContainer",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "15dp",
        "width": "90%"
    }, {}, {});
    unAssignedTasksContainer.setDefaultUnit(kony.flex.DP);
    var unAssignedTasksHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "unAssignedTasksHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onTouchStart": AS_FlexContainer_30736cdefc9f4a7fad59b12ff27cc077,
        "skin": "ngnyGreenFlexBG",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    unAssignedTasksHeader.setDefaultUnit(kony.flex.DP);
    var expandImageContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "expandImageContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchStart": AS_FlexContainer_eee6ea73b5ea492cac8656782b276f77,
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    expandImageContainer.setDefaultUnit(kony.flex.DP);
    var unAssignedTaskExpandImage = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "25dp",
        "id": "unAssignedTaskExpandImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "expand_task.png",
        "top": "0dp",
        "width": "25dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    expandImageContainer.add(unAssignedTaskExpandImage);
    var myUnAssignedTaskHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "myUnAssignedTaskHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    myUnAssignedTaskHeader.setDefaultUnit(kony.flex.DP);
    var unAssignedTaskLabel = new kony.ui.Label({
        "centerY": "50%",
        "id": "unAssignedTaskLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabelWhite130",
        "text": "Unassigned Tasks",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    myUnAssignedTaskHeader.add(unAssignedTaskLabel);
    unAssignedTasksHeader.add(expandImageContainer, myUnAssignedTaskHeader);
    var unAssignedTaskListContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "unAssignedTaskListContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "50dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    unAssignedTaskListContainer.setDefaultUnit(kony.flex.DP);
    var unassignedTaskList = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "TaskBusOrVolName": "",
            "businessId": "",
            "closeRichText": "",
            "contactNumber": "",
            "createdDate": "",
            "editRichText": "",
            "endDate": "",
            "hoursRequired": "",
            "lblDate": "",
            "lblRequestId ": "",
            "lblTaskId ": "",
            "markAsCompleteRichText": "",
            "notAssigned": "",
            "profilePic": "",
            "segType": "",
            "startDate": "",
            "taskDetails": "",
            "taskId": "",
            "taskName": "",
            "taskReqId": "",
            "volunteerId": ""
        }],
        "groupCells": false,
        "id": "unassignedTaskList",
        "isVisible": false,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "jumpStartSegmentSkin",
        "rowTemplate": CopyFBox065d0320c900743,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "CreatedDateContainer": "CreatedDateContainer",
            "EditAndCloseContainer": "EditAndCloseContainer",
            "TaskBusOrVolName": "TaskBusOrVolName",
            "closeRichText": "closeRichText",
            "createdDate": "createdDate",
            "editRichText": "editRichText",
            "lblDate": "lblDate",
            "markAsCompleteRichText": "markAsCompleteRichText",
            "notAssigned": "notAssigned",
            "profilePic": "profilePic",
            "taskContainer": "taskContainer",
            "taskId": "taskId",
            "taskName": "taskName",
            "taskProfileImageContainer": "taskProfileImageContainer",
            "taskReqId": "taskReqId",
            "unassignedTaskParentContainer": "unassignedTaskParentContainer"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_NONE,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    unAssignedTaskListContainer.add(unassignedTaskList);
    unAssignedTasksContainer.add(unAssignedTasksHeader, unAssignedTaskListContainer);
    var myOpenTasksParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "myOpenTasksParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "15dp",
        "width": "90%"
    }, {}, {});
    myOpenTasksParent.setDefaultUnit(kony.flex.DP);
    var myOpenTasksHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "myOpenTasksHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onTouchStart": AS_FlexContainer_dd5e6f1aa54942bf9bd5df995121d3fe,
        "skin": "ngnyGreenFlexBG",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    myOpenTasksHeader.setDefaultUnit(kony.flex.DP);
    var myOpenTasksExpandImageParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "myOpenTasksExpandImageParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    myOpenTasksExpandImageParent.setDefaultUnit(kony.flex.DP);
    var myOpenTasksExpandImage = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "25dp",
        "id": "myOpenTasksExpandImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "expand_task.png",
        "top": "0dp",
        "width": "25dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    myOpenTasksExpandImageParent.add(myOpenTasksExpandImage);
    var myOpenTasksHeaderLabelParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "myOpenTasksHeaderLabelParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    myOpenTasksHeaderLabelParent.setDefaultUnit(kony.flex.DP);
    var myOpenTasksHeaderLabel = new kony.ui.Label({
        "centerY": "50%",
        "id": "myOpenTasksHeaderLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabelWhite130",
        "text": "Open Tasks",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    myOpenTasksHeaderLabelParent.add(myOpenTasksHeaderLabel);
    myOpenTasksHeader.add(myOpenTasksExpandImageParent, myOpenTasksHeaderLabelParent);
    var myOpenTasksListContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myOpenTasksListContainer",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "50dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    myOpenTasksListContainer.setDefaultUnit(kony.flex.DP);
    var myOpenTasksList = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "contactNumber": "",
            "endDate": "",
            "lblRequestId": "",
            "lblRequestId ": "",
            "lblTaskId ": "",
            "markAsCompleteRichText": "",
            "openTaskBusiness": "",
            "openTaskName": "",
            "openTaskPersonProfilePic": "",
            "segType": "open",
            "startDate": "",
            "taskDetails": "",
            "taskId": ""
        }],
        "groupCells": false,
        "id": "myOpenTasksList",
        "isVisible": false,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_9bdb3704db05419d913b9e86104e6dea,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "jumpStartSegmentSkin",
        "rowTemplate": FBox0788b6c38d49d4b,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "lblRequestId": "lblRequestId",
            "markAsCompleteRichText": "markAsCompleteRichText",
            "myOpenTaskDetailParent": "myOpenTaskDetailParent",
            "myOpenTaskProfileImageParent": "myOpenTaskProfileImageParent",
            "myOpenTaskTop": "myOpenTaskTop",
            "openTaskBusiness": "openTaskBusiness",
            "openTaskName": "openTaskName",
            "openTaskPersonProfilePic": "openTaskPersonProfilePic",
            "taskId": "taskId"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_ROW_SELECT,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    myOpenTasksListContainer.add(myOpenTasksList);
    myOpenTasksParent.add(myOpenTasksHeader, myOpenTasksListContainer);
    var myClosedTasksParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "myClosedTasksParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "15dp",
        "width": "90%"
    }, {}, {});
    myClosedTasksParent.setDefaultUnit(kony.flex.DP);
    var myClosedTasksHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "myClosedTasksHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onTouchStart": AS_FlexContainer_00116715facc4593b10937138e2d90aa,
        "skin": "ngnyGreenFlexBG",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    myClosedTasksHeader.setDefaultUnit(kony.flex.DP);
    var myClosedTasksExpandImageParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "myClosedTasksExpandImageParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    myClosedTasksExpandImageParent.setDefaultUnit(kony.flex.DP);
    var myClosedTasksExpandImage = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "25dp",
        "id": "myClosedTasksExpandImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "expand_task.png",
        "top": "0dp",
        "width": "25dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    myClosedTasksExpandImageParent.add(myClosedTasksExpandImage);
    var myClosedTasksHeaderLabelParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "myClosedTasksHeaderLabelParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    myClosedTasksHeaderLabelParent.setDefaultUnit(kony.flex.DP);
    var myClosedTasksHeaderLabel = new kony.ui.Label({
        "centerY": "50%",
        "id": "myClosedTasksHeaderLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabelWhite130",
        "text": "Closed Tasks",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    myClosedTasksHeaderLabelParent.add(myClosedTasksHeaderLabel);
    myClosedTasksHeader.add(myClosedTasksExpandImageParent, myClosedTasksHeaderLabelParent);
    var myClosedTasksListContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myClosedTasksListContainer",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "50dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    myClosedTasksListContainer.setDefaultUnit(kony.flex.DP);
    var myClosedTasksList = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "businessId": "",
            "closedTaskBusiness": "",
            "closedTaskName": "",
            "closedTaskPersonProfilePic": "",
            "detail": "",
            "markAsCompleteText": "",
            "request_id": "",
            "segType": "close",
            "sendRecommendation": "",
            "taskId": "",
            "volunteerId": ""
        }],
        "groupCells": false,
        "id": "myClosedTasksList",
        "isVisible": false,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_a52ffce90f1a4961b2dfed2b0b64337e,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "jumpStartSegmentSkin",
        "rowTemplate": CopyFBox00fe78492e0da42,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "businessId": "businessId",
            "closedTaskBusiness": "closedTaskBusiness",
            "closedTaskName": "closedTaskName",
            "closedTaskPersonProfilePic": "closedTaskPersonProfilePic",
            "markAsCompleteText": "markAsCompleteText",
            "myClosedTaskDetailParent": "myClosedTaskDetailParent",
            "myClosedTaskProfileImageParent": "myClosedTaskProfileImageParent",
            "myClosedTaskTop": "myClosedTaskTop",
            "sendRecommendation": "sendRecommendation",
            "taskId": "taskId"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_ROW_SELECT,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    myClosedTasksListContainer.add(myClosedTasksList);
    myClosedTasksParent.add(myClosedTasksHeader, myClosedTasksListContainer);
    var myBookmarks = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "20dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "myBookmarks",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "15dp",
        "width": "90%"
    }, {}, {});
    myBookmarks.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer086ea79821e6847 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "CopyFlexContainer086ea79821e6847",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "ngnyGreenFlexBG",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    CopyFlexContainer086ea79821e6847.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer070aa354f5b6a41 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer070aa354f5b6a41",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    CopyFlexContainer070aa354f5b6a41.setDefaultUnit(kony.flex.DP);
    var myBookmarksExpandImage = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "25dp",
        "id": "myBookmarksExpandImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "expand_task.png",
        "top": "0dp",
        "width": "25dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer070aa354f5b6a41.add(myBookmarksExpandImage);
    var CopyFlexContainer08060752c4e724c = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "CopyFlexContainer08060752c4e724c",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer08060752c4e724c.setDefaultUnit(kony.flex.DP);
    var CopyLabel0c3dbb3e65d364c = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopyLabel0c3dbb3e65d364c",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabelWhite130",
        "text": "Bookmarks",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    CopyFlexContainer08060752c4e724c.add(CopyLabel0c3dbb3e65d364c);
    CopyFlexContainer086ea79821e6847.add(CopyFlexContainer070aa354f5b6a41, CopyFlexContainer08060752c4e724c);
    myBookmarks.add(CopyFlexContainer086ea79821e6847);
    myActivity.add(CreateOpportunityButtonContainer, RefreshContainer, myAcceptedRequests, mySentRequests, unAssignedTasksContainer, myOpenTasksParent, myClosedTasksParent, myBookmarks);
    var myEvents = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "myEvents",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "100%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    myEvents.setDefaultUnit(kony.flex.DP);
    var CopyLabel0c61c3dd0653144 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel0c61c3dd0653144",
        "isVisible": true,
        "skin": "slLabel",
        "text": "Events",
        "top": "20dp",
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
    myEvents.add(CopyLabel0c61c3dd0653144);
    var myNews = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "myNews",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "100%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    myNews.setDefaultUnit(kony.flex.DP);
    var CopyLabel00074144938be41 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel00074144938be41",
        "isVisible": true,
        "skin": "slLabel",
        "text": "News",
        "top": "20dp",
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
    myNews.add(CopyLabel00074144938be41);
    var myMessages = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100.28%",
        "horizontalScrollIndicator": true,
        "id": "myMessages",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "100%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    myMessages.setDefaultUnit(kony.flex.DP);
    var segMessageList = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50.00%",
        "data": [{
            "contactImage": "",
            "lblContactName": "",
            "lblDay": "",
            "lblMessage": ""
        }],
        "groupCells": false,
        "height": "575dp",
        "id": "segMessageList",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FBox0943a0d8ad0544d,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646464",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "2dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "contactImage": "contactImage",
            "lblContactName": "lblContactName",
            "lblDay": "lblDay",
            "lblMessage": "lblMessage"
        },
        "width": "90%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_ROW_SELECT,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    myMessages.add(segMessageList);
    var myNotifications = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "myNotifications",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "100%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    myNotifications.setDefaultUnit(kony.flex.DP);
    var notificationRefreshContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "notificationRefreshContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "92.44%",
        "zIndex": 1
    }, {}, {});
    notificationRefreshContainer.setDefaultUnit(kony.flex.DP);
    var notificationRefreshButton = new kony.ui.Button({
        "height": "107.17%",
        "id": "notificationRefreshButton",
        "isVisible": false,
        "left": "268dp",
        "onClick": AS_Button_919d65dbfcbd4a708628240c170310d9,
        "skin": "CopyslButtonGlossBlue0772af87d4a3c4d",
        "top": "-2dp",
        "width": "12.08%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var notificationPageRefreshRichText = new kony.ui.RichText({
        "centerX": "50%",
        "id": "notificationPageRefreshRichText",
        "isVisible": true,
        "left": "95dp",
        "onTouchStart": AS_RichText_580bb705ba4b48c78c357662dc41a0e2,
        "skin": "ngnyGreenLinkText",
        "text": "<u>Refresh results</u>",
        "top": "3dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    notificationRefreshContainer.add(notificationRefreshButton, notificationPageRefreshRichText);
    var segMessageNotification = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "48%",
        "data": [{
            "notificationContactImage": "",
            "notificationContactName": "",
            "notificationContent": "",
            "notificationDay": "",
            "notificationMeaasageType": ""
        }],
        "groupCells": false,
        "height": "95.47%",
        "id": "segMessageNotification",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_cc1833b9062c482fb8b23f76f61ef7ac,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FBox011becb3c7bfa4f,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
        "separatorColor": "4d4d4d00",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "notificationContactImage": "notificationContactImage",
            "notificationContactName": "notificationContactName",
            "notificationContent": "notificationContent",
            "notificationDay": "notificationDay",
            "notificationDetailContainer": "notificationDetailContainer",
            "notificationMeaasageType": "notificationMeaasageType"
        },
        "width": "90%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_NONE,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    var segGroupNotification = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "data": [{
            "lblCompanyLogo": "",
            "lblCompanyName": "",
            "lblDay": "",
            "lblFrom": "",
            "lblNotificationType": ""
        }],
        "groupCells": false,
        "height": "475dp",
        "id": "segGroupNotification",
        "isVisible": true,
        "left": "9dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FBox0add1169d948e49,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646464",
        "separatorRequired": true,
        "separatorThickness": 10,
        "showScrollbars": false,
        "top": "0%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "lblCompanyLogo": "lblCompanyLogo",
            "lblCompanyName": "lblCompanyName",
            "lblDay": "lblDay",
            "lblFrom": "lblFrom",
            "lblNotificationType": "lblNotificationType"
        },
        "width": "90%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_ROW_SELECT,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    myNotifications.add(notificationRefreshContainer, segMessageNotification, segGroupNotification);
    var myEndorsements = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "myEndorsements",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "100%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    myEndorsements.setDefaultUnit(kony.flex.DP);
    var endorsementrefreshBtn = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "endorsementrefreshBtn",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "92.44%",
        "zIndex": 1
    }, {}, {});
    endorsementrefreshBtn.setDefaultUnit(kony.flex.DP);
    var endRefreshBtn = new kony.ui.Button({
        "height": "111.59%",
        "id": "endRefreshBtn",
        "isVisible": false,
        "left": "267dp",
        "onClick": AS_Button_b2c5b26ff29f4a909862e033008e3592,
        "skin": "CopyslButtonGlossBlue0772af87d4a3c4d",
        "top": "-3dp",
        "width": "12.08%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var endRichTxt = new kony.ui.RichText({
        "centerX": "50%",
        "id": "endRichTxt",
        "isVisible": true,
        "left": "95dp",
        "onTouchStart": AS_RichText_4a9ef318da794d109c48c441442e8956,
        "skin": "ngnyGreenLinkText",
        "text": "<u>Refresh results</u>",
        "top": "3dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    endorsementrefreshBtn.add(endRefreshBtn, endRichTxt);
    var endorsementsSeg = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "data": [{
            "CopyrecommendationContactCompanyName0835a9f801ba846": "Label",
            "CopyrecommendationContactDesignation008ea58cf583447": "Label",
            "endorsementContactName": "",
            "endorsementReceivedTime": "",
            "endorsementSkill": "",
            "endorsementTaskName": "",
            "endorsementText": "",
            "endorsentContactImage": ""
        }, {
            "CopyrecommendationContactCompanyName0835a9f801ba846": "Label",
            "CopyrecommendationContactDesignation008ea58cf583447": "Label",
            "endorsementContactName": "",
            "endorsementReceivedTime": "",
            "endorsementSkill": "",
            "endorsementTaskName": "",
            "endorsementText": "",
            "endorsentContactImage": ""
        }, {
            "CopyrecommendationContactCompanyName0835a9f801ba846": "Label",
            "CopyrecommendationContactDesignation008ea58cf583447": "Label",
            "endorsementContactName": "",
            "endorsementReceivedTime": "",
            "endorsementSkill": "",
            "endorsementTaskName": "",
            "endorsementText": "",
            "endorsentContactImage": ""
        }],
        "groupCells": false,
        "height": "99.91%",
        "id": "endorsementsSeg",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": CopyFBox0325cab479ecc4e,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "57575700",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "endorsementContactDetails": "endorsementContactDetails",
            "endorsementContactName": "endorsementContactName",
            "endorsementDetailContainer": "endorsementDetailContainer",
            "endorsementReceivedTime": "endorsementReceivedTime",
            "endorsementSkill": "endorsementSkill",
            "endorsementTaskName": "endorsementTaskName",
            "endorsementText": "endorsementText",
            "endorsentContactImage": "endorsentContactImage"
        },
        "width": "95%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_NONE,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    myEndorsements.add(endorsementrefreshBtn, endorsementsSeg);
    var myRecommendations = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "myRecommendations",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "1%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    myRecommendations.setDefaultUnit(kony.flex.DP);
    var recRefreshButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "recRefreshButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "92.44%",
        "zIndex": 1
    }, {}, {});
    recRefreshButtonContainer.setDefaultUnit(kony.flex.DP);
    var recRefreshButton = new kony.ui.Button({
        "height": "111.59%",
        "id": "recRefreshButton",
        "isVisible": false,
        "left": "267dp",
        "onClick": AS_Button_8ae701ee477d43a193ccca1488f4b617,
        "skin": "CopyslButtonGlossBlue0772af87d4a3c4d",
        "top": "-3dp",
        "width": "12.08%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var recommendationRefreshRichText = new kony.ui.RichText({
        "centerX": "50%",
        "id": "recommendationRefreshRichText",
        "isVisible": true,
        "left": "95dp",
        "onTouchStart": AS_RichText_4a9ef318da794d109c48c441442e8956,
        "skin": "ngnyGreenLinkText",
        "text": "<u>Refresh results</u>",
        "top": "3dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    recRefreshButtonContainer.add(recRefreshButton, recommendationRefreshRichText);
    var segRecommendation = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "data": [{
            "CopyrecommendationContactCompanyName0835a9f801ba846": "Label",
            "CopyrecommendationContactDesignation008ea58cf583447": "Label",
            "recommendationContactCompanyName": "",
            "recommendationContactDesignation": "",
            "recommendationContactImage": "",
            "recommendationContactName": "",
            "recommendationReceivedTime": "",
            "recommendationText": ""
        }, {
            "CopyrecommendationContactCompanyName0835a9f801ba846": "Label",
            "CopyrecommendationContactDesignation008ea58cf583447": "Label",
            "recommendationContactCompanyName": "",
            "recommendationContactDesignation": "",
            "recommendationContactImage": "",
            "recommendationContactName": "",
            "recommendationReceivedTime": "",
            "recommendationText": ""
        }, {
            "CopyrecommendationContactCompanyName0835a9f801ba846": "Label",
            "CopyrecommendationContactDesignation008ea58cf583447": "Label",
            "recommendationContactCompanyName": "",
            "recommendationContactDesignation": "",
            "recommendationContactImage": "",
            "recommendationContactName": "",
            "recommendationReceivedTime": "",
            "recommendationText": ""
        }],
        "groupCells": false,
        "height": "99.91%",
        "id": "segRecommendation",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FBox018a2be4f3acd48,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "57575700",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "recommendationContactCompanyName": "recommendationContactCompanyName",
            "recommendationContactDesignation": "recommendationContactDesignation",
            "recommendationContactDetails": "recommendationContactDetails",
            "recommendationContactImage": "recommendationContactImage",
            "recommendationContactName": "recommendationContactName",
            "recommendationDetailContainer": "recommendationDetailContainer",
            "recommendationReceivedTime": "recommendationReceivedTime",
            "recommendationText": "recommendationText"
        },
        "width": "95%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_NONE,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    myRecommendations.add(recRefreshButtonContainer, segRecommendation);
    var flxMessageConversation = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMessageConversation",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "skin": "CopyslFbox05cacec4e49a24b",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMessageConversation.setDefaultUnit(kony.flex.DP);
    var flxConversationScreenHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxConversationScreenHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox09fb1590894194c",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxConversationScreenHeader.setDefaultUnit(kony.flex.DP);
    var btnBack = new kony.ui.Button({
        "height": "100%",
        "id": "btnBack",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_1e558d2401b1484cb57b63d2de564a20,
        "skin": "CopyslButtonGlossBlue097ae00b3dfdf4c",
        "top": "0dp",
        "width": "7.81%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var phoneCallContact = new kony.ui.Button({
        "centerY": "50%",
        "height": "83.34%",
        "id": "phoneCallContact",
        "isVisible": true,
        "left": "295dp",
        "onClick": makeCall,
        "skin": "CopyslPhone021cad3825acb49",
        "top": "8dp",
        "width": "7.81%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var lblContactName = new kony.ui.Label({
        "id": "lblContactName",
        "isVisible": true,
        "left": "15%",
        "skin": "CopyslLabel04b135ff37c964f",
        "text": "John Doe",
        "top": "25%",
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
    flxConversationScreenHeader.add(btnBack, phoneCallContact, lblContactName);
    var flexScrollMessageBody = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "49.95%",
        "clipBounds": true,
        "enableScrolling": true,
        "height": "78.98%",
        "horizontalScrollIndicator": true,
        "id": "flexScrollMessageBody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0.00%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexScrollMessageBody.setDefaultUnit(kony.flex.DP);
    var flxMessageReceived = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "26.36%",
        "id": "flxMessageReceived",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "8dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMessageReceived.setDefaultUnit(kony.flex.DP);
    var lblMsgReceivedTime = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblMsgReceivedTime",
        "isVisible": true,
        "left": "130dp",
        "skin": "CopyslLabel02952aba144c040",
        "text": "YESTERDAY AT 10:26 AM",
        "top": "6%",
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
    var contactImage = new kony.ui.Image2({
        "centerX": "9.95%",
        "height": "40%",
        "id": "contactImage",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "messagecontactlogo.png",
        "top": "22%",
        "width": "14.67%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMessage = new kony.ui.Label({
        "height": "82.79%",
        "id": "lblMessage",
        "isVisible": true,
        "left": "75dp",
        "skin": "CopyslLabel0e41404232ad042",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
        "top": "22.00%",
        "width": "74.67%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flxMessageReceived.add(lblMsgReceivedTime, contactImage, lblMessage);
    var flxMessageSent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "60.56%",
        "id": "flxMessageSent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "3.8599999999999994%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMessageSent.setDefaultUnit(kony.flex.DP);
    var lblMsgSentTime = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblMsgSentTime",
        "isVisible": true,
        "left": "130dp",
        "skin": "CopyslLabel038a1eff70f5e4c",
        "text": "SEP 7 AT 11 AM",
        "top": "6.92%",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblMsgSent = new kony.ui.Label({
        "height": "83.80%",
        "id": "lblMsgSent",
        "isVisible": true,
        "left": "4.00%",
        "skin": "CopyslLabel0eaf4cf8571f042",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
        "top": "16.91%",
        "width": "78.67%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 3, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var myImage = new kony.ui.Image2({
        "centerX": "93.33%",
        "height": "21.31%",
        "id": "myImage",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "messagecontactlogo.png",
        "top": "18%",
        "width": "14.67%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxMessageSent.add(lblMsgSentTime, lblMsgSent, myImage);
    flexScrollMessageBody.add(flxMessageReceived, flxMessageSent);
    var flxTypeMessage = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "11.12%",
        "id": "flxTypeMessage",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0859f08e6a7e34f",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxTypeMessage.setDefaultUnit(kony.flex.DP);
    var txtTypeMessage = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "80%",
        "id": "txtTypeMessage",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0456d455be3dc41",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10%",
        "width": "70.31%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var btnSend = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "80%",
        "id": "btnSend",
        "isVisible": true,
        "left": "75%",
        "skin": "CopyslButtonGlossBlue0f3449e60496d47",
        "text": "Send",
        "top": "10%",
        "width": "22%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    flxTypeMessage.add(txtTypeMessage, btnSend);
    flxMessageConversation.add(flxConversationScreenHeader, flexScrollMessageBody, flxTypeMessage);
    mainPageContentParent.add(myActivity, myEvents, myNews, myMessages, myNotifications, myEndorsements, myRecommendations, flxMessageConversation);
    mainPageBody.add(searchBarContainer, navBarScroller, mainPageContentParent);
    var sideBarOverlay = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "sideBarOverlay",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "onTouchStart": AS_FlexContainer_601f7677d0e84dd79d22d8e1e1759e80,
        "right": "-5dp",
        "skin": "CopyslFbox0e592ef4af81d42",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    sideBarOverlay.setDefaultUnit(kony.flex.DP);
    sideBarOverlay.add();
    var sideBarMenuContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "sideBarMenuContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "-100%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "70%",
        "zIndex": 1
    }, {}, {});
    sideBarMenuContainer.setDefaultUnit(kony.flex.DP);
    var sideBarMenu = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "sideBarMenu",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyslFbox0298ee6f8ba5249",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    sideBarMenu.setDefaultUnit(kony.flex.DP);
    var sideBarHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "sideBarHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    sideBarHeader.setDefaultUnit(kony.flex.DP);
    var sideBarCompanyLogo = new kony.ui.Image2({
        "centerX": "50%",
        "height": "60dp",
        "id": "sideBarCompanyLogo",
        "isVisible": true,
        "skin": "slImage",
        "src": "supplynationlogo2x.png",
        "top": "10%",
        "width": "60dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var sideBarAppName = new kony.ui.Label({
        "centerX": "50%",
        "id": "sideBarAppName",
        "isVisible": true,
        "skin": "CopyslLabel08def05ed32534a",
        "text": "My JumpStart",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var sideBarAccountLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "sideBarAccountLabel",
        "isVisible": true,
        "skin": "CopyslLabel0208e1d1d2e1e4d",
        "text": "Account",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var sideBarSeparator = new kony.ui.Label({
        "centerX": "50%",
        "height": "2px",
        "id": "sideBarSeparator",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0aebe370976674c",
        "top": "20dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    sideBarHeader.add(sideBarCompanyLogo, sideBarAppName, sideBarAccountLabel, sideBarSeparator);
    var sideBarBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "sideBarBody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    sideBarBody.setDefaultUnit(kony.flex.DP);
    var myProfileLink = new kony.ui.RichText({
        "centerX": "50%",
        "id": "myProfileLink",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_RichText_f979aad53c1142ecbe5962c51bc1ddef,
        "onTouchStart": AS_RichText_c054155ae9024a5a9c2305607e76e4d8,
        "skin": "ngnyGreenLinkText",
        "text": "<u>My Profile</u>",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var ReportingLink = new kony.ui.RichText({
        "centerX": "50%",
        "id": "ReportingLink",
        "isVisible": false,
        "left": "0dp",
        "onTouchStart": AS_RichText_79a979c620b74de38fdedecd3e420bba,
        "skin": "CopyslRichText0d8115a04b63b4f",
        "text": "<u>Reporting</u>",
        "top": "20dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var FlexContainer08d40d9191a9344 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "FlexContainer08d40d9191a9344",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "33%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer08d40d9191a9344.setDefaultUnit(kony.flex.DP);
    var checkList = new kony.ui.CheckBoxGroup({
        "height": "42.47%",
        "id": "checkList",
        "isVisible": true,
        "left": "64.91%",
        "masterData": [
            ["cbg1", "."]
        ],
        "onSelection": AS_CheckBoxGroup_c2d2104377b94ac29d181a1b042ff518,
        "selectedKeyValues": [
            ["cbg1", "."]
        ],
        "selectedKeys": ["cbg1"],
        "skin": "CopyslCheckBoxGroup0306443d20b8149",
        "top": "30dp",
        "width": "35.09%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "tickedImage": "checkbx.png",
        "untickedImage": "markascomplete.png",
        "viewType": constants.CHECKBOX_VIEW_TYPE_ONOFFSWITCH
    });
    var emailNotificationLbl = new kony.ui.Label({
        "centerY": "55%",
        "height": "20%",
        "id": "emailNotificationLbl",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel0d5ddd374374340",
        "text": "Email notifications",
        "top": "55dp",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    FlexContainer08d40d9191a9344.add(checkList, emailNotificationLbl);
    sideBarBody.add(myProfileLink, ReportingLink, FlexContainer08d40d9191a9344);
    var sideBarFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "sideBarFooter",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    sideBarFooter.setDefaultUnit(kony.flex.DP);
    var sideBarLogout = new kony.ui.RichText({
        "centerX": "50%",
        "id": "sideBarLogout",
        "isVisible": true,
        "left": 0,
        "onTouchStart": AS_RichText_39b50ab4a8304fbabfd147601b1115a7,
        "skin": "ngnyGreenLinkText",
        "text": "<u>Logout</u>",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var sideBarNeedHelp = new kony.ui.RichText({
        "centerX": "50%",
        "id": "sideBarNeedHelp",
        "isVisible": true,
        "left": 0,
        "onClick": AS_RichText_69306abd2de8425a8086f4b28852e0bc,
        "onTouchStart": AS_RichText_4b804fcacb8f4f48aa023fa3ba60500a,
        "skin": "ngnyGreenLinkText",
        "text": "<u>Need help?</u>",
        "top": "30dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    sideBarFooter.add(sideBarLogout, sideBarNeedHelp);
    sideBarMenu.add(sideBarHeader, sideBarBody, sideBarFooter);
    sideBarMenuContainer.add(sideBarMenu);
    var mainPageModalsBackground = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "mainPageModalsBackground",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox03f278f680a1e4d",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    mainPageModalsBackground.setDefaultUnit(kony.flex.DP);
    mainPageModalsBackground.add();
    var cancelRequestModalContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "75%",
        "id": "cancelRequestModalContainer",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartModalSkin",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    cancelRequestModalContainer.setDefaultUnit(kony.flex.DP);
    var requestModalHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "requestModalHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    requestModalHeader.setDefaultUnit(kony.flex.DP);
    var requestModalTitle = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "requestModalTitle",
        "isVisible": true,
        "skin": "ngnyLargeOrangeLabelText",
        "text": "Cancel request",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    requestModalHeader.add(requestModalTitle);
    var requestModalBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "requestModalBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    requestModalBody.setDefaultUnit(kony.flex.DP);
    var cancelRequestTextArea = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "jumpStartTextAreaSkin",
        "height": "100%",
        "id": "cancelRequestTextArea",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "numberOfVisibleLines": 3,
        "skin": "jumpStartTextAreaSkin",
        "text": "Good day!\n\nI have received your request but unfortunately I have to decline due to other commitments that may impact my availability..",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [3, 3, 3, 3],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "showProgressIndicator": false
    });
    requestModalBody.add(cancelRequestTextArea);
    var requestModalFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "requestModalFooter",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    requestModalFooter.setDefaultUnit(kony.flex.DP);
    var cancelRequestYes = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "50dp",
        "id": "cancelRequestYes",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_56849e05360f4daba001e01291f6323e,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Cancel Request",
        "top": "15dp",
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
    var cancelRequestNo = new kony.ui.RichText({
        "centerX": "50%",
        "id": "cancelRequestNo",
        "isVisible": true,
        "onClick": AS_RichText_9230d3beb1b94c34995122d6e8139943,
        "onTouchStart": AS_RichText_ebb97dc3961c4b1abaff09338d24c4a3,
        "skin": "ngnyGreenLinkText",
        "text": "Cancel",
        "top": 20,
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    requestModalFooter.add(cancelRequestYes, cancelRequestNo);
    cancelRequestModalContainer.add(requestModalHeader, requestModalBody, requestModalFooter);
    var sendRecommendation = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "49%",
        "centerY": "58%",
        "clipBounds": true,
        "height": "75%",
        "id": "sendRecommendation",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartModalSkin",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    sendRecommendation.setDefaultUnit(kony.flex.DP);
    var sendRecommendationModalHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "sendRecommendationModalHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    sendRecommendationModalHeader.setDefaultUnit(kony.flex.DP);
    var sendRecommendationModalTitle = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "sendRecommendationModalTitle",
        "isVisible": true,
        "skin": "ngnyLargeOrangeLabelText",
        "text": "Send Recommendation",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    sendRecommendationModalHeader.add(sendRecommendationModalTitle);
    var sendRecommendationModalBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "sendRecommendationModalBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    sendRecommendationModalBody.setDefaultUnit(kony.flex.DP);
    var sendRecommendationTextArea = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "jumpStartTextAreaSkin",
        "height": "100%",
        "id": "sendRecommendationTextArea",
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
        "padding": [3, 3, 3, 3],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "showProgressIndicator": false
    });
    sendRecommendationModalBody.add(sendRecommendationTextArea);
    var sendRecommendationModalFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "sendRecommendationModalFooter",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    sendRecommendationModalFooter.setDefaultUnit(kony.flex.DP);
    var sendRecommendationYes = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "45dp",
        "id": "sendRecommendationYes",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_f57470ae9f314ef4b9536d11b77f7ead,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Send Message",
        "top": "13dp",
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
    var sendRecommendationNo2 = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "CopyslButtonGlossRed0e86d09ba91e540",
        "height": "45dp",
        "id": "sendRecommendationNo2",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_fad1112456d34dd0b6ab342ef98b80ef,
        "skin": "ngnyBackButton",
        "text": "Cancel",
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
    sendRecommendationModalFooter.add(sendRecommendationYes, sendRecommendationNo2);
    sendRecommendation.add(sendRecommendationModalHeader, sendRecommendationModalBody, sendRecommendationModalFooter);
    var declineRequestModalContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50.00%",
        "clipBounds": true,
        "height": "75%",
        "id": "declineRequestModalContainer",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartModalSkin",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    declineRequestModalContainer.setDefaultUnit(kony.flex.DP);
    var declineRequestModalHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "declineRequestModalHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    declineRequestModalHeader.setDefaultUnit(kony.flex.DP);
    var CopyrequestModalTitle0c3fd54c7c77f41 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "CopyrequestModalTitle0c3fd54c7c77f41",
        "isVisible": true,
        "skin": "ngnyLargeOrangeLabelText",
        "text": "Decline Request",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    declineRequestModalHeader.add(CopyrequestModalTitle0c3fd54c7c77f41);
    var declineRequestModalBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "declineRequestModalBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    declineRequestModalBody.setDefaultUnit(kony.flex.DP);
    var declineRequestTextArea = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "jumpStartTextAreaSkin",
        "height": "100%",
        "id": "declineRequestTextArea",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "numberOfVisibleLines": 3,
        "skin": "jumpStartTextAreaSkin",
        "text": "Good day!\n\nI have received your request but unfortunately I have to decline due to other commitments that may impact my availability.",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [3, 3, 3, 3],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "showProgressIndicator": false
    });
    declineRequestModalBody.add(declineRequestTextArea);
    var declineRequestModalFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "declineRequestModalFooter",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    declineRequestModalFooter.setDefaultUnit(kony.flex.DP);
    var declineRequestYes = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "50dp",
        "id": "declineRequestYes",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_e53dc5e292c44b34a1ffdfbdf33fd8d8,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Decline request",
        "top": "15dp",
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
    var declineRequestNo = new kony.ui.RichText({
        "centerX": "50%",
        "id": "declineRequestNo",
        "isVisible": true,
        "onClick": AS_RichText_5fe0b013d5cd4df68b5c961f47978705,
        "onTouchStart": AS_RichText_19990c994176431f906e776d24643e82,
        "skin": "markAsComplete",
        "text": "Cancel",
        "top": 20,
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    declineRequestModalFooter.add(declineRequestYes, declineRequestNo);
    declineRequestModalContainer.add(declineRequestModalHeader, declineRequestModalBody, declineRequestModalFooter);
    var startEngagementModalContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50.03%",
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
    var startEngagementModalHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "startEngagementModalHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    startEngagementModalHeader.setDefaultUnit(kony.flex.DP);
    var startEngagmentHeaderDetails = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "startEngagmentHeaderDetails",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    startEngagmentHeaderDetails.setDefaultUnit(kony.flex.DP);
    var startEngagmentPreviousParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "startEngagmentPreviousParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_ed74b6eca2554fd1a12165ae92025666,
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    startEngagmentPreviousParent.setDefaultUnit(kony.flex.DP);
    var strartEngagementBackBtn = new kony.ui.Button({
        "height": "40.54%",
        "id": "strartEngagementBackBtn",
        "isVisible": true,
        "left": "18dp",
        "onClick": AS_Button_b8b7e62c17ff4f09978c26587cf3c336,
        "skin": "CopyslButtonGlossBlue0c1a6517000b344",
        "top": "16dp",
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
    startEngagmentPreviousParent.add(strartEngagementBackBtn);
    var startEngagmentHeaderDetailsParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "startEngagmentHeaderDetailsParent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "80%"
    }, {}, {});
    startEngagmentHeaderDetailsParent.setDefaultUnit(kony.flex.DP);
    var Label060c497160a804b = new kony.ui.Label({
        "id": "Label060c497160a804b",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblStartEngagementBusinessName = new kony.ui.Label({
        "id": "lblStartEngagementBusinessName",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel120Bold",
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    startEngagmentHeaderDetailsParent.add(Label060c497160a804b, lblStartEngagementBusinessName);
    startEngagmentHeaderDetails.add(startEngagmentPreviousParent, startEngagmentHeaderDetailsParent);
    var startEngagmentHeaderActions = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "startEngagmentHeaderActions",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "jumpStartBG249",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    startEngagmentHeaderActions.setDefaultUnit(kony.flex.DP);
    var FlexContainer08f25f7edc6c340 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer08f25f7edc6c340",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "34%"
    }, {}, {});
    FlexContainer08f25f7edc6c340.setDefaultUnit(kony.flex.DP);
    var Image0ce1ce26846474a = new kony.ui.Image2({
        "centerX": "50%",
        "height": "30dp",
        "id": "Image0ce1ce26846474a",
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
    var RichText0be3bd35bf41a49 = new kony.ui.RichText({
        "centerX": "50%",
        "id": "RichText0be3bd35bf41a49",
        "isVisible": true,
        "left": "5dp",
        "onClick": AS_RichText_67a414a1afe94522a2d1e16347726d33,
        "skin": "jumpStartRtLink100",
        "text": "<a href=\"#\" style=\"color: #37b3b1\">View Profile</a>",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    FlexContainer08f25f7edc6c340.add(Image0ce1ce26846474a, RichText0be3bd35bf41a49);
    var startEngagementCallContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "startEngagementCallContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "34%"
    }, {}, {});
    startEngagementCallContainer.setDefaultUnit(kony.flex.DP);
    var CallIcon = new kony.ui.Image2({
        "centerX": "50%",
        "height": "30dp",
        "id": "CallIcon",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "callicon.png",
        "top": "10dp",
        "width": "30dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CallRichText = new kony.ui.RichText({
        "centerX": "50%",
        "id": "CallRichText",
        "isVisible": true,
        "left": "5dp",
        "onClick": AS_RichText_4b292320515146c5a8184a2451447b77,
        "skin": "jumpStartRtLink100",
        "text": "<a href=\"#\" style=\"color: #37b3b1\">Call</a>",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    startEngagementCallContainer.add(CallIcon, CallRichText);
    var messageContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "messageContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "34%"
    }, {}, {});
    messageContainer.setDefaultUnit(kony.flex.DP);
    var impChatIcon = new kony.ui.Image2({
        "centerX": "50%",
        "height": "30dp",
        "id": "impChatIcon",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "messageicon.png",
        "top": "10dp",
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
        "onClick": AS_RichText_2789ef5f0cc540749ee37969fb746bdb,
        "skin": "jumpStartRtLink100",
        "text": "<a href=\"#\" style=\"color: #37b3b1\">Message</a>",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    messageContainer.add(impChatIcon, messageRichText);
    startEngagmentHeaderActions.add(FlexContainer08f25f7edc6c340, startEngagementCallContainer, messageContainer);
    var startEngagmentHeaderAssignToTask = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "40%",
        "id": "startEngagmentHeaderAssignToTask",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    startEngagmentHeaderAssignToTask.setDefaultUnit(kony.flex.DP);
    var assignToExistingTaskContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "25dp",
        "id": "assignToExistingTaskContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5dp",
        "width": "97.04%",
        "zIndex": 1
    }, {}, {});
    assignToExistingTaskContainer.setDefaultUnit(kony.flex.DP);
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    assignToExistingTaskContainer.add(lblAssigntoExistingTask);
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
    var existingTaskListBox = new kony.ui.ListBox({
        "centerX": "50%",
        "focusSkin": "CopyslListBox070ac863d00c94c",
        "height": "30dp",
        "id": "existingTaskListBox",
        "isVisible": true,
        "left": "1dp",
        "masterData": [
            ["lb1", "Select"]
        ],
        "onSelection": AS_ListBox_b96d06ad93cc4b95b9ddb1e14225ddbf,
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "Select"],
        "skin": "CopyslListBox0c3af8383afd84a",
        "top": "3dp",
        "width": "235dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "dropDownImage": "listbox.png",
        "groupCells": false,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var yesButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "yesButtonContainer",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "-217dp",
        "skin": "jumpStartBG215",
        "top": "4dp",
        "width": "16.45%",
        "zIndex": 1
    }, {}, {});
    yesButtonContainer.setDefaultUnit(kony.flex.DP);
    var Label0bf92f774186e49 = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label0bf92f774186e49",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnIsExistingTask = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed08abba14bc86e4c",
        "height": "100%",
        "id": "btnIsExistingTask",
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
    }, {
        "showProgressIndicator": true
    });
    yesButtonContainer.add(Label0bf92f774186e49, btnIsExistingTask);
    assignToExistingTaskListBoxContainer.add(existingTaskListBox, yesButtonContainer);
    startEngagmentHeaderAssignToTask.add(assignToExistingTaskContainer, assignToExistingTaskListBoxContainer);
    startEngagementModalHeader.add(startEngagmentHeaderDetails, startEngagmentHeaderActions, startEngagmentHeaderAssignToTask);
    var startEngagementModalBody = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "50%",
        "clipBounds": true,
        "enableScrolling": true,
        "height": "50%",
        "horizontalScrollIndicator": true,
        "id": "startEngagementModalBody",
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
    startEngagementModalBody.setDefaultUnit(kony.flex.DP);
    var startEngagementTaskTitle = new kony.ui.Label({
        "centerX": "50%",
        "id": "startEngagementTaskTitle",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var startEngagementTaskTitleField = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "startEngagementTaskTitleField",
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
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_GO,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var startEngagementTaskDetails = new kony.ui.Label({
        "centerX": "50%",
        "id": "startEngagementTaskDetails",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var startEngagementTaskDetailsTextArea = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "jumpStartTextAreaSkin",
        "height": "120dp",
        "id": "startEngagementTaskDetailsTextArea",
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
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_GO,
        "showCloseButton": true,
        "showProgressIndicator": false
    });
    var LabelHoursRequired = new kony.ui.Label({
        "centerX": "50%",
        "id": "LabelHoursRequired",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var duratationOfEngagementInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "duratationOfEngagementInput",
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
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_GO,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var startEngagementStartDate = new kony.ui.Label({
        "centerX": "50%",
        "id": "startEngagementStartDate",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var startDateCalendarInput = new kony.ui.Calendar({
        "calendarIcon": "calendaricon.png",
        "centerX": "50%",
        "dateComponents": [28, 10, 2016, 0, 0, 0],
        "dateFormat": "dd/MM/yyyy",
        "day": 28,
        "focusSkin": "jumpStartCalendarSkin",
        "formattedDate": "28/10/2016",
        "height": "40dp",
        "hour": 0,
        "id": "startDateCalendarInput",
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
    var startEngagementEndDate = new kony.ui.Label({
        "centerX": "50%",
        "id": "startEngagementEndDate",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var endDateCalendarInput = new kony.ui.Calendar({
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
        "id": "endDateCalendarInput",
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
    var CommentsLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "CommentsLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Comments",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CommentsRichText = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "jumpStartTextAreaSkin",
        "height": "120dp",
        "id": "CommentsRichText",
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
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_GO,
        "showCloseButton": true,
        "showProgressIndicator": false
    });
    startEngagementModalBody.add(startEngagementTaskTitle, startEngagementTaskTitleField, startEngagementTaskDetails, startEngagementTaskDetailsTextArea, LabelHoursRequired, duratationOfEngagementInput, startEngagementStartDate, startDateCalendarInput, startEngagementEndDate, endDateCalendarInput, CommentsLabel, CommentsRichText);
    var startEngagementModalFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "startEngagementModalFooter",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    startEngagementModalFooter.setDefaultUnit(kony.flex.DP);
    var startEngagement = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "40dp",
        "id": "startEngagement",
        "isVisible": true,
        "onClick": AS_Button_8937be6ef1c14c11b1799fe6815abc7e,
        "right": "10dp",
        "skin": "ngnyPrimaryGreenButton",
        "text": "Start",
        "top": "15dp",
        "width": "45%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var cancelEngagement = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "jumpStartDisableButton",
        "height": "40dp",
        "id": "cancelEngagement",
        "isVisible": true,
        "left": 10,
        "onClick": AS_Button_6c414d0da69e45eb9e18a50ec0d9274d,
        "skin": "ngnyBackButton",
        "text": "Cancel",
        "top": "15dp",
        "width": "45%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    startEngagementModalFooter.add(startEngagement, cancelEngagement);
    startEngagementModalContainer.add(startEngagementModalHeader, startEngagementModalBody, startEngagementModalFooter);
    var acceptTaskModalContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "95%",
        "id": "acceptTaskModalContainer",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartModalSkin",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    acceptTaskModalContainer.setDefaultUnit(kony.flex.DP);
    var acceptTaskModalHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "25%",
        "id": "acceptTaskModalHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    acceptTaskModalHeader.setDefaultUnit(kony.flex.DP);
    var acceptTaskModalTitle = new kony.ui.Label({
        "centerX": "50%",
        "id": "acceptTaskModalTitle",
        "isVisible": true,
        "skin": "ngnyLargeOrangeLabelText",
        "text": "Eligibility Criteria",
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var RichText090a75d94a54743 = new kony.ui.RichText({
        "centerX": "50%",
        "id": "RichText090a75d94a54743",
        "isVisible": true,
        "left": "0dp",
        "skin": "requestModalRichTextInfoSkin",
        "text": "Before proceeding with the engagement , you  need to fulfill the following eligibility criteria as required by your company.  The system will automatically check off the requirements below as as you have fulfill them.",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    acceptTaskModalHeader.add(acceptTaskModalTitle, RichText090a75d94a54743);
    var acceptTaskModalBody = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "40%",
        "horizontalScrollIndicator": true,
        "id": "acceptTaskModalBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    acceptTaskModalBody.setDefaultUnit(kony.flex.DP);
    var acceptTaskModalEligibilitySegment = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "data": [{
            "Image0fa57b85abcab49": "eligibilitycheck.png",
            "Label06e57014debcc4e": "Medical Check-up"
        }, {
            "Image0fa57b85abcab49": "eligibilitycheck.png",
            "Label06e57014debcc4e": "Legal Documentation"
        }, {
            "Image0fa57b85abcab49": "eligibilitycheck.png",
            "Label06e57014debcc4e": "Security Clearance"
        }],
        "groupCells": false,
        "id": "acceptTaskModalEligibilitySegment",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FBox0488ce2c486374a,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer09f0e64b33f8642": "FlexContainer09f0e64b33f8642",
            "FlexContainer0b1f37063d1c744": "FlexContainer0b1f37063d1c744",
            "Image0fa57b85abcab49": "Image0fa57b85abcab49",
            "Label06e57014debcc4e": "Label06e57014debcc4e"
        },
        "width": "85%"
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_NONE,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    acceptTaskModalBody.add(acceptTaskModalEligibilitySegment);
    var acceptTaskModalFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "35%",
        "id": "acceptTaskModalFooter",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    acceptTaskModalFooter.setDefaultUnit(kony.flex.DP);
    var agreeToTaskButton = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "jump",
        "height": "50dp",
        "id": "agreeToTaskButton",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_76f1a39663974d7bae74ccbc28d3c429,
        "skin": "jumpStartDisableButton",
        "text": "I Agree",
        "top": "20dp",
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
    var CopycancelRequestNo0df4de238bde24e = new kony.ui.RichText({
        "centerX": "50%",
        "id": "CopycancelRequestNo0df4de238bde24e",
        "isVisible": true,
        "onClick": AS_RichText_f1342c5021ec46068c03ed07300dbd87,
        "onTouchStart": AS_RichText_33e420002b474104a5b6e9bec3f82699,
        "skin": "ngnyGreenLinkText",
        "text": "<u>Do it later</u>",
        "top": 20,
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    acceptTaskModalFooter.add(agreeToTaskButton, CopycancelRequestNo0df4de238bde24e);
    acceptTaskModalContainer.add(acceptTaskModalHeader, acceptTaskModalBody, acceptTaskModalFooter);
    var acceptTaskDetailsModalContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50.00%",
        "clipBounds": true,
        "height": "95%",
        "id": "acceptTaskDetailsModalContainer",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartModalSkin",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    acceptTaskDetailsModalContainer.setDefaultUnit(kony.flex.DP);
    var acceptTaskDetailsModalHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "25%",
        "id": "acceptTaskDetailsModalHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    acceptTaskDetailsModalHeader.setDefaultUnit(kony.flex.DP);
    var CopystartEngagmentHeaderDetails05c3f0a6993dd4b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "CopystartEngagmentHeaderDetails05c3f0a6993dd4b",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    CopystartEngagmentHeaderDetails05c3f0a6993dd4b.setDefaultUnit(kony.flex.DP);
    var acceptTaskDetailsPreviousParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "acceptTaskDetailsPreviousParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_a9b7c2a1e29842379edf92fc604340b9,
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    acceptTaskDetailsPreviousParent.setDefaultUnit(kony.flex.DP);
    var acceptTaskDetailsPreviousImage = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "40dp",
        "id": "acceptTaskDetailsPreviousImage",
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
    var AcceptBackBtn = new kony.ui.Button({
        "height": "38.96%",
        "id": "AcceptBackBtn",
        "isVisible": true,
        "left": "14dp",
        "onClick": AS_Button_db0bf370a0c3499f8dda80469463a8c7,
        "skin": "CopyslButtonGlossBlue06279fedfcf8e4d",
        "top": "16dp",
        "width": "33.68%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    acceptTaskDetailsPreviousParent.add(acceptTaskDetailsPreviousImage, AcceptBackBtn);
    var CopystartEngagmentHeaderDetailsParent07958b4bef26b4f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopystartEngagmentHeaderDetailsParent07958b4bef26b4f",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "80%"
    }, {}, {});
    CopystartEngagmentHeaderDetailsParent07958b4bef26b4f.setDefaultUnit(kony.flex.DP);
    var CopyLabel07fe2dbc3f32d47 = new kony.ui.Label({
        "id": "CopyLabel07fe2dbc3f32d47",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyLabel0d3787300d8b24b = new kony.ui.Label({
        "id": "CopyLabel0d3787300d8b24b",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel120Bold",
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    CopystartEngagmentHeaderDetailsParent07958b4bef26b4f.add(CopyLabel07fe2dbc3f32d47, CopyLabel0d3787300d8b24b);
    CopystartEngagmentHeaderDetails05c3f0a6993dd4b.add(acceptTaskDetailsPreviousParent, CopystartEngagmentHeaderDetailsParent07958b4bef26b4f);
    var CopystartEngagmentHeaderActions0becdf72e3b274a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "CopystartEngagmentHeaderActions0becdf72e3b274a",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "jumpStartBG249",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopystartEngagmentHeaderActions0becdf72e3b274a.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer0800965ae495e4c = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer0800965ae495e4c",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "34%"
    }, {}, {});
    CopyFlexContainer0800965ae495e4c.setDefaultUnit(kony.flex.DP);
    var CopyImage0280b651d9eb142 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "30dp",
        "id": "CopyImage0280b651d9eb142",
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
    var CopyRichText06bba209338574d = new kony.ui.RichText({
        "centerX": "50%",
        "id": "CopyRichText06bba209338574d",
        "isVisible": true,
        "left": "5dp",
        "onClick": AS_RichText_64f60642307f4d68891aea6f3323788a,
        "skin": "jumpStartRtLink100",
        "text": "<a href=\"#\" style=\"color:  #37b3b1\">View Profile</a>",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    CopyFlexContainer0800965ae495e4c.add(CopyImage0280b651d9eb142, CopyRichText06bba209338574d);
    var acceptTaskCall = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "acceptTaskCall",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "34%"
    }, {}, {});
    acceptTaskCall.setDefaultUnit(kony.flex.DP);
    var CallImage = new kony.ui.Image2({
        "bottom": 0,
        "centerX": "50%",
        "height": "30dp",
        "id": "CallImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "callicon.png",
        "top": "10dp",
        "width": "30dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var RichTextCall = new kony.ui.RichText({
        "centerX": "50%",
        "id": "RichTextCall",
        "isVisible": true,
        "left": "5dp",
        "onClick": AS_RichText_7ccbb951657c4d96a2c062fde79742c4,
        "skin": "jumpStartRtLink100",
        "text": "<a href=\"#\" style=\"color:  #37b3b1\">Call</a>",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    acceptTaskCall.add(CallImage, RichTextCall);
    var AcceptTaskMessageContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "AcceptTaskMessageContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "34%"
    }, {}, {});
    AcceptTaskMessageContainer.setDefaultUnit(kony.flex.DP);
    var imessageLogo = new kony.ui.Image2({
        "centerX": "50%",
        "height": "30dp",
        "id": "imessageLogo",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "messageicon.png",
        "top": "10dp",
        "width": "30dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imessageRichText = new kony.ui.RichText({
        "centerX": "50%",
        "id": "imessageRichText",
        "isVisible": true,
        "left": "5dp",
        "onClick": AS_RichText_45be57ca65c1419986dd2ee513f25601,
        "skin": "jumpStartRtLink100",
        "text": "<a href=\"#\" style=\"color:  #37b3b1\">Message</a>",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    AcceptTaskMessageContainer.add(imessageLogo, imessageRichText);
    CopystartEngagmentHeaderActions0becdf72e3b274a.add(CopyFlexContainer0800965ae495e4c, acceptTaskCall, AcceptTaskMessageContainer);
    acceptTaskDetailsModalHeader.add(CopystartEngagmentHeaderDetails05c3f0a6993dd4b, CopystartEngagmentHeaderActions0becdf72e3b274a);
    var acceptTaskDetailsModalBody = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "50%",
        "clipBounds": true,
        "enableScrolling": true,
        "height": "65%",
        "horizontalScrollIndicator": true,
        "id": "acceptTaskDetailsModalBody",
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
    acceptTaskDetailsModalBody.setDefaultUnit(kony.flex.DP);
    var CopystartEngagementTaskTitle00da988a739c945 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopystartEngagementTaskTitle00da988a739c945",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel80",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopystartEngagementTaskTitle0c7e98509622a40 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopystartEngagementTaskTitle0c7e98509622a40",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopystartEngagementTaskTitle09c8c16c0f4cb4f = new kony.ui.Label({
        "centerX": "50%",
        "height": "40dp",
        "id": "CopystartEngagementTaskTitle09c8c16c0f4cb4f",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabelReadOnly99",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopystartEngagementTaskDetails0a18337357b4b42 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopystartEngagementTaskDetails0a18337357b4b42",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var RichText086cf577b0bee44 = new kony.ui.RichText({
        "centerX": "50%",
        "height": "150dp",
        "id": "RichText086cf577b0bee44",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartRTReadOnly99",
        "top": "5dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [3, 3, 3, 3],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopystartEngagementStartDate02225626a6a2944 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopystartEngagementStartDate02225626a6a2944",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopystartEngagementTaskTitle05227206fe96b4a = new kony.ui.Label({
        "centerX": "50%",
        "height": "40dp",
        "id": "CopystartEngagementTaskTitle05227206fe96b4a",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabelReadOnly99",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopystartEngagementEndDate0503bf2317bc34d = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopystartEngagementEndDate0503bf2317bc34d",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopystartEngagementTaskTitle0d258ad25591a49 = new kony.ui.Label({
        "bottom": "10dp",
        "centerX": "50%",
        "height": "40dp",
        "id": "CopystartEngagementTaskTitle0d258ad25591a49",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabelReadOnly99",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblTaskId = new kony.ui.Label({
        "id": "lblTaskId",
        "isVisible": false,
        "left": "45dp",
        "skin": "CopyslLabel0c573c25067d644",
        "text": "Label",
        "top": "22dp",
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
    acceptTaskDetailsModalBody.add(CopystartEngagementTaskTitle00da988a739c945, CopystartEngagementTaskTitle0c7e98509622a40, CopystartEngagementTaskTitle09c8c16c0f4cb4f, CopystartEngagementTaskDetails0a18337357b4b42, RichText086cf577b0bee44, CopystartEngagementStartDate02225626a6a2944, CopystartEngagementTaskTitle05227206fe96b4a, CopystartEngagementEndDate0503bf2317bc34d, CopystartEngagementTaskTitle0d258ad25591a49, lblTaskId);
    var acceptTaskDetailsModalFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "acceptTaskDetailsModalFooter",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    acceptTaskDetailsModalFooter.setDefaultUnit(kony.flex.DP);
    var CopystartEngagement0e3cd864659974b = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "40dp",
        "id": "CopystartEngagement0e3cd864659974b",
        "isVisible": true,
        "onClick": AS_Button_e04575295a194fac83b2a430a78f83ad,
        "right": "10dp",
        "skin": "ngnyPrimaryGreenButton",
        "text": "Accept",
        "top": "15dp",
        "width": "45%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var CopycancelEngagement09f6ce65beb7648 = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "jumpStartDisableButton",
        "height": "40dp",
        "id": "CopycancelEngagement09f6ce65beb7648",
        "isVisible": true,
        "left": 10,
        "onClick": AS_FlexContainer_a9b7c2a1e29842379edf92fc604340b9,
        "skin": "jumpStartDisableButton",
        "text": "Cancel",
        "top": "15dp",
        "width": "45%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    acceptTaskDetailsModalFooter.add(CopystartEngagement0e3cd864659974b, CopycancelEngagement09f6ce65beb7648);
    acceptTaskDetailsModalContainer.add(acceptTaskDetailsModalHeader, acceptTaskDetailsModalBody, acceptTaskDetailsModalFooter);
    var acceptTaskSkillsModalContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "95%",
        "id": "acceptTaskSkillsModalContainer",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartModalSkin",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    acceptTaskSkillsModalContainer.setDefaultUnit(kony.flex.DP);
    var acceptTaskSkillsModalHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "30%",
        "id": "acceptTaskSkillsModalHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    acceptTaskSkillsModalHeader.setDefaultUnit(kony.flex.DP);
    var Label068e00f0fe8aa4b = new kony.ui.Label({
        "id": "Label068e00f0fe8aa4b",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100Bold",
        "text": "Select the skills you want endorsed",
        "top": "10dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var Label01b362dbd83aa49 = new kony.ui.Label({
        "id": "Label01b362dbd83aa49",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel90",
        "text": "Before proceeding with the engagement,  please select your skills that you would want to endorse after completion of the tasks.",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var Button0fdf6cf4ba17044 = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "40dp",
        "id": "Button0fdf6cf4ba17044",
        "isVisible": true,
        "left": "0dp",
        "skin": "ngnyPrimaryGreenButton",
        "text": "Select all",
        "top": "15dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    acceptTaskSkillsModalHeader.add(Label068e00f0fe8aa4b, Label01b362dbd83aa49, Button0fdf6cf4ba17044);
    var acceptTaskSkillsModalBody = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "60%",
        "horizontalScrollIndicator": true,
        "id": "acceptTaskSkillsModalBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    acceptTaskSkillsModalBody.setDefaultUnit(kony.flex.DP);
    var skillsForEndorsementSegment = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "data": [{
            "Image0a893623ec01245": "eligibilitycheck.png",
            "Label084c31a2a8bb84a": "Project Management"
        }, {
            "Image0a893623ec01245": "eligibilitycheck.png",
            "Label084c31a2a8bb84a": "Operations Management"
        }, {
            "Image0a893623ec01245": "eligibilitycheck.png",
            "Label084c31a2a8bb84a": "Business Analysis"
        }],
        "groupCells": false,
        "id": "skillsForEndorsementSegment",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FBox0dac93f59f6db45,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "Image0a893623ec01245": "Image0a893623ec01245",
            "Label084c31a2a8bb84a": "Label084c31a2a8bb84a"
        },
        "width": "90%"
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_NONE,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    acceptTaskSkillsModalBody.add(skillsForEndorsementSegment);
    var acceptTaskSkillsModalFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "acceptTaskSkillsModalFooter",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    acceptTaskSkillsModalFooter.setDefaultUnit(kony.flex.DP);
    var acceptTaskSkillsPreviousParent = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "jumpStartDisableButton",
        "height": "40dp",
        "id": "acceptTaskSkillsPreviousParent",
        "isVisible": true,
        "left": 10,
        "onClick": AS_Button_b3b28f3c172144378c1c9e4a9d8b4738,
        "skin": "ngnyBackButton",
        "text": "Cancel",
        "top": "15dp",
        "width": "45%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var CopystartEngagement0c36935d6f65542 = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "40dp",
        "id": "CopystartEngagement0c36935d6f65542",
        "isVisible": true,
        "right": "10dp",
        "skin": "ngnyPrimaryGreenButton",
        "text": "Accept",
        "top": "15dp",
        "width": "45%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    acceptTaskSkillsModalFooter.add(acceptTaskSkillsPreviousParent, CopystartEngagement0c36935d6f65542);
    acceptTaskSkillsModalContainer.add(acceptTaskSkillsModalHeader, acceptTaskSkillsModalBody, acceptTaskSkillsModalFooter);
    var acceptRequestModalContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "acceptRequestModalContainer",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartModalSkin",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    acceptRequestModalContainer.setDefaultUnit(kony.flex.DP);
    var acceptRequestModalHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "acceptRequestModalHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    acceptRequestModalHeader.setDefaultUnit(kony.flex.DP);
    var acceptRequestModalTitle = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "acceptRequestModalTitle",
        "isVisible": true,
        "skin": "ngnyLargeOrangeLabelText",
        "text": "Accept Request",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    acceptRequestModalHeader.add(acceptRequestModalTitle);
    var acceptRequestModalBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "acceptRequestModalBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    acceptRequestModalBody.setDefaultUnit(kony.flex.DP);
    var acceptRequestMessageFromBusiness = new kony.ui.RichText({
        "centerX": "50%",
        "height": "100%",
        "id": "acceptRequestMessageFromBusiness",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartRT100Black",
        "text": "Request message from business....",
        "top": "0dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    acceptRequestModalBody.add(acceptRequestMessageFromBusiness);
    var acceptRequestModalFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "acceptRequestModalFooter",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    acceptRequestModalFooter.setDefaultUnit(kony.flex.DP);
    var acceptRequestYes = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "50dp",
        "id": "acceptRequestYes",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_80dfa1bc68ad4325be817ed653bc9943,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Accept",
        "top": "15dp",
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
    var acceptRequestNo = new kony.ui.RichText({
        "centerX": "50%",
        "id": "acceptRequestNo",
        "isVisible": true,
        "onClick": AS_RichText_71610d1cc94c44ebab8199fdf7ab5b2b,
        "onTouchStart": AS_RichText_dc484199ad004556881eb9bf4a117c0f,
        "skin": "markAsComplete",
        "text": "Cancel",
        "top": 20,
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    acceptRequestModalFooter.add(acceptRequestYes, acceptRequestNo);
    acceptRequestModalContainer.add(acceptRequestModalHeader, acceptRequestModalBody, acceptRequestModalFooter);
    var viewRequestModalContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "viewRequestModalContainer",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartModalSkin",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    viewRequestModalContainer.setDefaultUnit(kony.flex.DP);
    var viewRequestModalHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "viewRequestModalHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    viewRequestModalHeader.setDefaultUnit(kony.flex.DP);
    var viewRequestModalTitle = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "viewRequestModalTitle",
        "isVisible": true,
        "skin": "ngnyLargeOrangeLabelText",
        "text": "View brief",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    viewRequestModalHeader.add(viewRequestModalTitle);
    var viewRequestModalBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60%",
        "id": "viewRequestModalBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    viewRequestModalBody.setDefaultUnit(kony.flex.DP);
    var viewRequestMessage = new kony.ui.RichText({
        "centerX": "50%",
        "height": "100%",
        "id": "viewRequestMessage",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartRT100Black",
        "text": "Request message...",
        "top": "0dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    viewRequestModalBody.add(viewRequestMessage);
    var viewRequestModalFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "viewRequestModalFooter",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    viewRequestModalFooter.setDefaultUnit(kony.flex.DP);
    var viewRequestDone = new kony.ui.RichText({
        "centerX": "50%",
        "centerY": "50%",
        "id": "viewRequestDone",
        "isVisible": true,
        "onTouchStart": AS_RichText_dc25bf7ae3f94d669fbd46ba637c72b6,
        "skin": "ngnyGreenLinkText",
        "text": "Done",
        "top": 0,
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    viewRequestModalFooter.add(viewRequestDone);
    viewRequestModalContainer.add(viewRequestModalHeader, viewRequestModalBody, viewRequestModalFooter);
    var CreateOpportunityContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "95%",
        "id": "CreateOpportunityContainer",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartModalSkin",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    CreateOpportunityContainer.setDefaultUnit(kony.flex.DP);
    var headerContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "headerContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    headerContainer.setDefaultUnit(kony.flex.DP);
    var createOpportunityHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60dp",
        "id": "createOpportunityHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    createOpportunityHeader.setDefaultUnit(kony.flex.DP);
    var backButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "backButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_9b737b9091164aa7bf7ea116db32882f,
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    backButtonContainer.setDefaultUnit(kony.flex.DP);
    var backButton = new kony.ui.Button({
        "height": "40.54%",
        "id": "backButton",
        "isVisible": true,
        "left": "18dp",
        "onClick": AS_Button_9fc7a0254a8f42b1a9f7454faea23818,
        "skin": "CopyslButtonGlossBlue0c1a6517000b344",
        "top": "16dp",
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
    backButtonContainer.add(backButton);
    var createOpportunityLabelContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "createOpportunityLabelContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "80%"
    }, {}, {});
    createOpportunityLabelContainer.setDefaultUnit(kony.flex.DP);
    var lblCreateOpportunity = new kony.ui.Label({
        "centerX": "36%",
        "id": "lblCreateOpportunity",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel90",
        "text": "Create Brief",
        "top": "20dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    createOpportunityLabelContainer.add(lblCreateOpportunity);
    createOpportunityHeader.add(backButtonContainer, createOpportunityLabelContainer);
    headerContainer.add(createOpportunityHeader);
    var BodyContainer = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "50%",
        "clipBounds": true,
        "enableScrolling": true,
        "height": "80%",
        "horizontalScrollIndicator": true,
        "id": "BodyContainer",
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
    BodyContainer.setDefaultUnit(kony.flex.DP);
    var opportunityTitleLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "opportunityTitleLabel",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var opportunityTitleInputContainer = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "opportunityTitleInputContainer",
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
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_GO,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var opportunityDetailsLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "opportunityDetailsLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "What do you need assistance with? *",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var opportunityDetailsInputContainer = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "jumpStartTextAreaSkin",
        "height": "120dp",
        "id": "opportunityDetailsInputContainer",
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
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_GO,
        "showCloseButton": true,
        "showProgressIndicator": false
    });
    var Skills = new kony.ui.Label({
        "centerX": "50%",
        "id": "Skills",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "What skills do you need the right person to have? *",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var skillsInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "skillsInput",
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
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_GO,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var hoursLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "hoursLabel",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hoursInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "hoursInput",
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
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_GO,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var startDateLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "startDateLabel",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var opportunityStartDateCalendarInput = new kony.ui.Calendar({
        "calendarIcon": "calendaricon.png",
        "centerX": "50%",
        "dateComponents": [28, 10, 2016, 0, 0, 0],
        "dateFormat": "dd/MM/yyyy",
        "day": 28,
        "focusSkin": "jumpStartCalendarSkin",
        "formattedDate": "28/10/2016",
        "height": "40dp",
        "hour": 0,
        "id": "opportunityStartDateCalendarInput",
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
    var endateLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "endateLabel",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var opportunityEndateCalendarInput = new kony.ui.Calendar({
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
        "id": "opportunityEndateCalendarInput",
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
    BodyContainer.add(opportunityTitleLabel, opportunityTitleInputContainer, opportunityDetailsLabel, opportunityDetailsInputContainer, Skills, skillsInput, hoursLabel, hoursInput, startDateLabel, opportunityStartDateCalendarInput, endateLabel, opportunityEndateCalendarInput);
    var opportunityFooterContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "opportunityFooterContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "-5dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    opportunityFooterContainer.setDefaultUnit(kony.flex.DP);
    var createOpportunityButton = new kony.ui.Button({
        "centerY": "45%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "40dp",
        "id": "createOpportunityButton",
        "isVisible": true,
        "onClick": AS_Button_2dd078c72d6d4317a70a98ff6984381a,
        "right": "8dp",
        "skin": "ngnyPrimaryGreenButton",
        "text": "Create brief",
        "top": "0dp",
        "width": "48.99%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var cancelButton = new kony.ui.Button({
        "centerY": "45%",
        "focusSkin": "jumpStartGrayButton110",
        "height": "40dp",
        "id": "cancelButton",
        "isVisible": true,
        "left": 5,
        "onClick": AS_Button_38f3c0da38354f3ab85fd6586b0cd03d,
        "skin": "ngnyBackButton",
        "text": "Cancel",
        "top": "0dp",
        "width": "45%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    opportunityFooterContainer.add(createOpportunityButton, cancelButton);
    CreateOpportunityContainer.add(headerContainer, BodyContainer, opportunityFooterContainer);
    var opportunityDetailsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "95%",
        "id": "opportunityDetailsContainer",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartModalSkin",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    opportunityDetailsContainer.setDefaultUnit(kony.flex.DP);
    var OpportunityHeaderContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "OpportunityHeaderContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    OpportunityHeaderContainer.setDefaultUnit(kony.flex.DP);
    var OppHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60dp",
        "id": "OppHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    OppHeader.setDefaultUnit(kony.flex.DP);
    var OppBackButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "OppBackButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_781b1d915cdb40199b25d6ae5c13c0b9,
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    OppBackButtonContainer.setDefaultUnit(kony.flex.DP);
    var EditOppBackButton = new kony.ui.Button({
        "height": "40.54%",
        "id": "EditOppBackButton",
        "isVisible": true,
        "left": "18dp",
        "onClick": AS_Button_1f098121ce6c4698b0dc798f7c6da987,
        "skin": "CopyslButtonGlossBlue0c1a6517000b344",
        "top": "16dp",
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
    OppBackButtonContainer.add(EditOppBackButton);
    var EditOppLabelContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "EditOppLabelContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "80%"
    }, {}, {});
    EditOppLabelContainer.setDefaultUnit(kony.flex.DP);
    var lblEditOpportunity = new kony.ui.Label({
        "centerX": "36%",
        "id": "lblEditOpportunity",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel90",
        "text": "Edit Brief",
        "top": "20dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    EditOppLabelContainer.add(lblEditOpportunity);
    OppHeader.add(OppBackButtonContainer, EditOppLabelContainer);
    OpportunityHeaderContainer.add(OppHeader);
    var EditOpprotunityBodyContainer = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "50%",
        "clipBounds": true,
        "enableScrolling": true,
        "height": "75%",
        "horizontalScrollIndicator": true,
        "id": "EditOpprotunityBodyContainer",
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
    EditOpprotunityBodyContainer.setDefaultUnit(kony.flex.DP);
    var OppTitleLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "OppTitleLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Task Title*",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var OppTitleInputLabel = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "OppTitleInputLabel",
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
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_GO,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var OppDetailsLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "OppDetailsLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Task Details*",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var OppDetailsInputLabel = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "jumpStartTextAreaSkin",
        "height": "120dp",
        "id": "OppDetailsInputLabel",
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
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_GO,
        "showCloseButton": true,
        "showProgressIndicator": false
    });
    var OppSkillsLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "OppSkillsLabel",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var OppSkillsInputLabel = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "OppSkillsInputLabel",
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
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_GO,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var OppHoursLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "OppHoursLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Duration of Engagement*",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var OppHoursInputLabel = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "OppHoursInputLabel",
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
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_GO,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var OppStartDateLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "OppStartDateLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Start Date*",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var OppStartDateCalendarInput = new kony.ui.Calendar({
        "calendarIcon": "calendaricon.png",
        "centerX": "50%",
        "dateComponents": [28, 10, 2016, 0, 0, 0],
        "dateFormat": "dd/MM/yyyy",
        "day": 28,
        "focusSkin": "jumpStartCalendarSkin",
        "formattedDate": "28/10/2016",
        "height": "40dp",
        "hour": 0,
        "id": "OppStartDateCalendarInput",
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
    var OppEndDateLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "OppEndDateLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "End Date*",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var OppEndDateCalendarInput = new kony.ui.Calendar({
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
        "id": "OppEndDateCalendarInput",
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
    EditOpprotunityBodyContainer.add(OppTitleLabel, OppTitleInputLabel, OppDetailsLabel, OppDetailsInputLabel, OppSkillsLabel, OppSkillsInputLabel, OppHoursLabel, OppHoursInputLabel, OppStartDateLabel, OppStartDateCalendarInput, OppEndDateLabel, OppEndDateCalendarInput);
    var EditOpportunityFooterContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "EditOpportunityFooterContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "20dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    EditOpportunityFooterContainer.setDefaultUnit(kony.flex.DP);
    var EditOpportunityButton = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "40dp",
        "id": "EditOpportunityButton",
        "isVisible": true,
        "onClick": AS_Button_c744708682c64883bbf34dca04f06842,
        "right": "10dp",
        "skin": "ngnyPrimaryGreenButton",
        "text": "Save brief",
        "top": "0dp",
        "width": "48.99%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var OpportunityCancelButton = new kony.ui.Button({
        "focusSkin": "jumpStartGrayButton110",
        "height": "40dp",
        "id": "OpportunityCancelButton",
        "isVisible": true,
        "onClick": AS_Button_6aa62b26a68f4aa4b142cb059a64f36a,
        "skin": "ngnyBackButton",
        "text": "Cancel",
        "top": "0dp",
        "width": "45%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    EditOpportunityFooterContainer.add(EditOpportunityButton, OpportunityCancelButton);
    opportunityDetailsContainer.add(OpportunityHeaderContainer, EditOpprotunityBodyContainer, EditOpportunityFooterContainer);
    var TaskDetailsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50.00%",
        "clipBounds": true,
        "height": "95%",
        "id": "TaskDetailsContainer",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartModalSkin",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    TaskDetailsContainer.setDefaultUnit(kony.flex.DP);
    var TaskDetailsHeaderContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "27.66%",
        "id": "TaskDetailsHeaderContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    TaskDetailsHeaderContainer.setDefaultUnit(kony.flex.DP);
    var headerTopContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "30%",
        "id": "headerTopContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "CopyslFbox02df153eb178940",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    headerTopContainer.setDefaultUnit(kony.flex.DP);
    var taskDetailsBackButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "taskDetailsBackButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_98d3aa24541b4a29995d52d254def029,
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    taskDetailsBackButtonContainer.setDefaultUnit(kony.flex.DP);
    var taskDetailsBackButton = new kony.ui.Button({
        "centerY": "50%",
        "height": "50%",
        "id": "taskDetailsBackButton",
        "isVisible": true,
        "left": "14dp",
        "onClick": AS_Button_1b9973fd47864a118682f953ae6422ed,
        "skin": "CopyslButtonGlossBlue06279fedfcf8e4d",
        "top": "8dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    taskDetailsBackButtonContainer.add(taskDetailsBackButton);
    var TaskDetailsLabelContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "TaskDetailsLabelContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "80%"
    }, {}, {});
    TaskDetailsLabelContainer.setDefaultUnit(kony.flex.DP);
    var TaskDetailsLabel = new kony.ui.Label({
        "centerX": "35%",
        "id": "TaskDetailsLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel90",
        "text": "Engagement details",
        "top": "12dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    TaskDetailsLabelContainer.add(TaskDetailsLabel);
    headerTopContainer.add(taskDetailsBackButtonContainer, TaskDetailsLabelContainer);
    var taskDetailsViewProfileContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "35%",
        "id": "taskDetailsViewProfileContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "CopyslFbox0e32fded6e3c34d",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    taskDetailsViewProfileContainer.setDefaultUnit(kony.flex.DP);
    var detailsViewProfileContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "detailsViewProfileContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "70%"
    }, {}, {});
    detailsViewProfileContainer.setDefaultUnit(kony.flex.DP);
    var profileLogo = new kony.ui.Image2({
        "centerX": "11%",
        "centerY": "50%",
        "height": "30dp",
        "id": "profileLogo",
        "isVisible": true,
        "left": "15dp",
        "skin": "slImage",
        "src": "imgseglogo.png",
        "top": "10dp",
        "width": "30dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var profileName = new kony.ui.Label({
        "centerY": "50%",
        "id": "profileName",
        "isVisible": true,
        "left": "3dp",
        "skin": "CopyslLabel0cad04721cf8549",
        "text": "volName",
        "top": "9dp",
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
    detailsViewProfileContainer.add(profileLogo, profileName);
    var viewProfileRichTextContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "viewProfileRichTextContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "30%"
    }, {}, {});
    viewProfileRichTextContainer.setDefaultUnit(kony.flex.DP);
    var viewProfileRichtext = new kony.ui.RichText({
        "centerX": "43%",
        "centerY": "50%",
        "id": "viewProfileRichtext",
        "isVisible": true,
        "left": "5dp",
        "onClick": AS_RichText_dddb86c2252f4d83bdf8692481e8ce26,
        "onTouchStart": AS_RichText_897a9ec383b647819186c427c31cd996,
        "skin": "ngnyGreenLinkText",
        "text": "View Profile\n",
        "top": "9dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    viewProfileRichTextContainer.add(viewProfileRichtext);
    taskDetailsViewProfileContainer.add(detailsViewProfileContainer, viewProfileRichTextContainer);
    var callAndMessageContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "25%",
        "id": "callAndMessageContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "1dp",
        "skin": "CopyslFbox07715bfb69a3440",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    callAndMessageContainer.setDefaultUnit(kony.flex.DP);
    var callContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "callContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "CopyslFbox0a38d5701e12144",
        "top": "0dp",
        "width": "50%"
    }, {}, {});
    callContainer.setDefaultUnit(kony.flex.DP);
    var OpenTaskCallContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "77.21%",
        "id": "OpenTaskCallContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "19dp",
        "onTouchStart": AS_FlexContainer_b650b086d238460b8818950d23cdc2ae,
        "skin": "slFbox",
        "top": "5dp",
        "width": "45.77%",
        "zIndex": 1
    }, {}, {});
    OpenTaskCallContainer.setDefaultUnit(kony.flex.DP);
    var phoneImg = new kony.ui.Image2({
        "bottom": 0,
        "centerX": "32%",
        "centerY": "50%",
        "height": "16dp",
        "id": "phoneImg",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "callicon.png",
        "top": "7dp",
        "width": "16dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var callLabel = new kony.ui.Label({
        "centerY": "50%",
        "id": "callLabel",
        "isVisible": true,
        "left": "7dp",
        "skin": "CopyslLabel0ebb70b22f7f94f",
        "text": "Call",
        "top": "9dp",
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
    OpenTaskCallContainer.add(phoneImg, callLabel);
    callContainer.add(OpenTaskCallContainer);
    var messageContaine = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "messageContaine",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "-1dp",
        "skin": "CopyslFbox001158a2205b843",
        "top": "0dp",
        "width": "50%"
    }, {}, {});
    messageContaine.setDefaultUnit(kony.flex.DP);
    var OpenTasKMessageContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "77.21%",
        "id": "OpenTasKMessageContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "19dp",
        "onTouchStart": AS_FlexContainer_f170d61dd5724eaab0c1ba4c6839047c,
        "skin": "slFbox",
        "top": "5dp",
        "width": "59.17%",
        "zIndex": 1
    }, {}, {});
    OpenTasKMessageContainer.setDefaultUnit(kony.flex.DP);
    var iMessageContainer = new kony.ui.Image2({
        "centerY": "50%",
        "height": "20dp",
        "id": "iMessageContainer",
        "isVisible": true,
        "left": "2dp",
        "skin": "slImage",
        "src": "messageicon.png",
        "top": "8dp",
        "width": "20dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imsgLabel = new kony.ui.Label({
        "centerY": "50%",
        "id": "imsgLabel",
        "isVisible": true,
        "left": "4dp",
        "skin": "CopyslLabel07af6ceffc57c40",
        "text": "Message",
        "top": "9dp",
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
    OpenTasKMessageContainer.add(iMessageContainer, imsgLabel);
    messageContaine.add(OpenTasKMessageContainer);
    callAndMessageContainer.add(callContainer, messageContaine);
    TaskDetailsHeaderContainer.add(headerTopContainer, taskDetailsViewProfileContainer, callAndMessageContainer);
    var totalHoursContainers = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "13%",
        "id": "totalHoursContainers",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    totalHoursContainers.setDefaultUnit(kony.flex.DP);
    var TotalHoursTopContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "37dp",
        "id": "TotalHoursTopContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "CopyslFbox0e32fded6e3c34d",
        "top": "-6dp",
        "width": "100%"
    }, {}, {});
    TotalHoursTopContainer.setDefaultUnit(kony.flex.DP);
    var TotalHoursLabel = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "TotalHoursLabel",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50%"
    }, {}, {});
    TotalHoursLabel.setDefaultUnit(kony.flex.DP);
    var hoursStaticLabel = new kony.ui.Label({
        "centerX": "52%",
        "id": "hoursStaticLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "ngnyOrangeLabelText",
        "text": "Total hours logged",
        "top": "13dp",
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
    TotalHoursLabel.add(hoursStaticLabel);
    var calculatedHours = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45dp",
        "id": "calculatedHours",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50%"
    }, {}, {});
    calculatedHours.setDefaultUnit(kony.flex.DP);
    var totalWorkedHours = new kony.ui.Label({
        "id": "totalWorkedHours",
        "isVisible": true,
        "left": "64dp",
        "skin": "CopyslLabel0d258769e7e3d4c",
        "text": "36.5 Hours",
        "top": "15dp",
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
    calculatedHours.add(totalWorkedHours);
    TotalHoursTopContainer.add(TotalHoursLabel, calculatedHours);
    var LogHoursButton = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "37dp",
        "id": "LogHoursButton",
        "isVisible": true,
        "left": "33dp",
        "onClick": AS_Button_5532723bddcf4cbf8b4c7d1ff92534cd,
        "skin": "ngnyPrimaryGreenButton",
        "text": "log hours",
        "top": "6dp",
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
    totalHoursContainers.add(TotalHoursTopContainer, LogHoursButton);
    var TaskDetailsBodyContainer = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "50%",
        "clipBounds": true,
        "enableScrolling": true,
        "height": "50%",
        "horizontalScrollIndicator": true,
        "id": "TaskDetailsBodyContainer",
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
    TaskDetailsBodyContainer.setDefaultUnit(kony.flex.DP);
    var taskTitleLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "taskTitleLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Engagement title",
        "top": "4dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var taskTitleLabelInput = new kony.ui.Label({
        "centerX": "50%",
        "height": "40dp",
        "id": "taskTitleLabelInput",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabelReadOnly99",
        "top": "4dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var taskDetails = new kony.ui.Label({
        "centerX": "50%",
        "id": "taskDetails",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Engagement details",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var taskDetailsRichText = new kony.ui.RichText({
        "centerX": "50.00%",
        "height": "80dp",
        "id": "taskDetailsRichText",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartRTReadOnly99",
        "top": "4dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [3, 3, 3, 3],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var taskSkills = new kony.ui.Label({
        "centerX": "50%",
        "id": "taskSkills",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var taskSkillSInput = new kony.ui.Label({
        "centerX": "50%",
        "height": "40dp",
        "id": "taskSkillSInput",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabelReadOnly99",
        "top": "4dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var HoursRequiredLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "HoursRequiredLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Duration of engagement",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var HoursRequiredLabelInput = new kony.ui.Label({
        "centerX": "50%",
        "height": "40dp",
        "id": "HoursRequiredLabelInput",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabelReadOnly99",
        "top": "4dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var startTextLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "startTextLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Start date",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var startTextInputLabel = new kony.ui.Label({
        "centerX": "50%",
        "height": "40dp",
        "id": "startTextInputLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabelReadOnly99",
        "top": "4dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var endDateLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "endDateLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "End date",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var endDateInputLabel = new kony.ui.Label({
        "bottom": "10dp",
        "centerX": "50%",
        "height": "40dp",
        "id": "endDateInputLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabelReadOnly99",
        "top": "4dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopylblTaskId05506a820fff04e = new kony.ui.Label({
        "id": "CopylblTaskId05506a820fff04e",
        "isVisible": false,
        "left": "45dp",
        "skin": "CopyslLabel0c573c25067d644",
        "text": "Label",
        "top": "22dp",
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
    TaskDetailsBodyContainer.add(taskTitleLabel, taskTitleLabelInput, taskDetails, taskDetailsRichText, taskSkills, taskSkillSInput, HoursRequiredLabel, HoursRequiredLabelInput, startTextLabel, startTextInputLabel, endDateLabel, endDateInputLabel, CopylblTaskId05506a820fff04e);
    var footerBackButton = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "footerBackButton",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    footerBackButton.setDefaultUnit(kony.flex.DP);
    var taskDetailsFooterBackButton = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "focusSkin": "jumpStartGrayButton110",
        "height": "90%",
        "id": "taskDetailsFooterBackButton",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_befcc7bde6f448c7a741fcb75da25edb,
        "skin": "ngnyBackButton",
        "text": "Back",
        "top": "0dp",
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
    footerBackButton.add(taskDetailsFooterBackButton);
    TaskDetailsContainer.add(TaskDetailsHeaderContainer, totalHoursContainers, TaskDetailsBodyContainer, footerBackButton);
    var BusinessRequestTaskDetailsModal = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "95%",
        "id": "BusinessRequestTaskDetailsModal",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartModalSkin",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    BusinessRequestTaskDetailsModal.setDefaultUnit(kony.flex.DP);
    var RequestTaskDetailsHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "27.66%",
        "id": "RequestTaskDetailsHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    RequestTaskDetailsHeader.setDefaultUnit(kony.flex.DP);
    var ReqHeaderTopContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "30%",
        "id": "ReqHeaderTopContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "CopyslFbox02df153eb178940",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    ReqHeaderTopContainer.setDefaultUnit(kony.flex.DP);
    var hrdBackButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "hrdBackButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_a6cbc2130b064370b0fd4ddc2b2267d1,
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    hrdBackButtonContainer.setDefaultUnit(kony.flex.DP);
    var hdrBackButton = new kony.ui.Button({
        "centerY": "50%",
        "height": "50%",
        "id": "hdrBackButton",
        "isVisible": true,
        "left": "14dp",
        "onClick": AS_Button_987ed40abba641e992e5181628036c39,
        "skin": "CopyslButtonGlossBlue06279fedfcf8e4d",
        "top": "8dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    hrdBackButtonContainer.add(hdrBackButton);
    var hdrTaskDeatailsLabelContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "hdrTaskDeatailsLabelContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "80%"
    }, {}, {});
    hdrTaskDeatailsLabelContainer.setDefaultUnit(kony.flex.DP);
    var hdrTaskDetailsLabel = new kony.ui.Label({
        "centerX": "35%",
        "id": "hdrTaskDetailsLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel90",
        "text": "TaskDetails",
        "top": "11dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    hdrTaskDeatailsLabelContainer.add(hdrTaskDetailsLabel);
    ReqHeaderTopContainer.add(hrdBackButtonContainer, hdrTaskDeatailsLabelContainer);
    var reqProfileContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "35%",
        "id": "reqProfileContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "CopyslFbox0e32fded6e3c34d",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    reqProfileContainer.setDefaultUnit(kony.flex.DP);
    var ReqProfileVolNameContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "ReqProfileVolNameContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "70%"
    }, {}, {});
    ReqProfileVolNameContainer.setDefaultUnit(kony.flex.DP);
    var imgReqProfilePic = new kony.ui.Image2({
        "centerX": "11%",
        "centerY": "50%",
        "height": "30dp",
        "id": "imgReqProfilePic",
        "isVisible": true,
        "left": "15dp",
        "skin": "slImage",
        "src": "imgseglogo.png",
        "top": "10dp",
        "width": "30dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var volNameLabel = new kony.ui.Label({
        "centerY": "50%",
        "id": "volNameLabel",
        "isVisible": true,
        "left": "3dp",
        "skin": "CopyslLabel0cad04721cf8549",
        "text": "volName",
        "top": "9dp",
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
    ReqProfileVolNameContainer.add(imgReqProfilePic, volNameLabel);
    var ReqViewProfileRichTextContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "ReqViewProfileRichTextContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "30%"
    }, {}, {});
    ReqViewProfileRichTextContainer.setDefaultUnit(kony.flex.DP);
    var ViewVolProfileRichText = new kony.ui.RichText({
        "centerX": "43%",
        "centerY": "50%",
        "id": "ViewVolProfileRichText",
        "isVisible": true,
        "left": "5dp",
        "onClick": AS_RichText_ddbb912261b744e0910cd634e4bddeb6,
        "onTouchStart": AS_RichText_d0ca4f5592bd46868725fe2607686ba2,
        "skin": "ngnyGreenLinkText",
        "text": "View Profile",
        "top": "9dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    ReqViewProfileRichTextContainer.add(ViewVolProfileRichText);
    reqProfileContainer.add(ReqProfileVolNameContainer, ReqViewProfileRichTextContainer);
    var ReqContactContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "25%",
        "id": "ReqContactContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "1dp",
        "skin": "CopyslFbox07715bfb69a3440",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    ReqContactContainer.setDefaultUnit(kony.flex.DP);
    var ReqCallContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "ReqCallContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "CopyslFbox0a38d5701e12144",
        "top": "0dp",
        "width": "50%"
    }, {}, {});
    ReqCallContainer.setDefaultUnit(kony.flex.DP);
    var CallIconAndTextContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "77.21%",
        "id": "CallIconAndTextContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onTouchStart": AS_FlexContainer_a98dd2502cf84883a678f6e9d321c3e5,
        "skin": "slFbox",
        "top": "5dp",
        "width": "41.42%",
        "zIndex": 1
    }, {}, {});
    CallIconAndTextContainer.setDefaultUnit(kony.flex.DP);
    var imgCall = new kony.ui.Image2({
        "bottom": 0,
        "centerX": "32%",
        "centerY": "50%",
        "height": "16dp",
        "id": "imgCall",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "callicon.png",
        "top": "7dp",
        "width": "16dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var requestCallLAbel = new kony.ui.Label({
        "centerY": "50%",
        "id": "requestCallLAbel",
        "isVisible": true,
        "left": "7dp",
        "skin": "CopyslLabel0ebb70b22f7f94f",
        "text": "Call",
        "top": "9dp",
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
    CallIconAndTextContainer.add(imgCall, requestCallLAbel);
    ReqCallContainer.add(CallIconAndTextContainer);
    var reqMsgContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "reqMsgContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "-1dp",
        "skin": "CopyslFbox001158a2205b843",
        "top": "0dp",
        "width": "50%"
    }, {}, {});
    reqMsgContainer.setDefaultUnit(kony.flex.DP);
    var RequestTaskMessageContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "77.21%",
        "id": "RequestTaskMessageContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "19dp",
        "onTouchStart": AS_FlexContainer_2fb923d1a2f14b00a019c1ffd9a698e9,
        "skin": "slFbox",
        "top": "5dp",
        "width": "56.88%",
        "zIndex": 1
    }, {}, {});
    RequestTaskMessageContainer.setDefaultUnit(kony.flex.DP);
    var reqMsgImg = new kony.ui.Image2({
        "centerY": "50%",
        "height": "20dp",
        "id": "reqMsgImg",
        "isVisible": true,
        "left": "2dp",
        "skin": "slImage",
        "src": "messageicon.png",
        "top": "8dp",
        "width": "20dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var reqMessageLabel = new kony.ui.Label({
        "centerY": "47%",
        "id": "reqMessageLabel",
        "isVisible": true,
        "left": "3dp",
        "skin": "CopyslLabel07af6ceffc57c40",
        "text": "Message",
        "top": "8dp",
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
    RequestTaskMessageContainer.add(reqMsgImg, reqMessageLabel);
    reqMsgContainer.add(RequestTaskMessageContainer);
    ReqContactContainer.add(ReqCallContainer, reqMsgContainer);
    RequestTaskDetailsHeader.add(ReqHeaderTopContainer, reqProfileContainer, ReqContactContainer);
    var ReqTaskDetailsTotalHours = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "ReqTaskDetailsTotalHours",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    ReqTaskDetailsTotalHours.setDefaultUnit(kony.flex.DP);
    var CopyTotalHoursTopContainer0bdffc185e2de48 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "37dp",
        "id": "CopyTotalHoursTopContainer0bdffc185e2de48",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "CopyslFbox0e32fded6e3c34d",
        "top": "-6dp",
        "width": "100%"
    }, {}, {});
    CopyTotalHoursTopContainer0bdffc185e2de48.setDefaultUnit(kony.flex.DP);
    var CopyTotalHoursLabel0b348a995981946 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyTotalHoursLabel0b348a995981946",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50%"
    }, {}, {});
    CopyTotalHoursLabel0b348a995981946.setDefaultUnit(kony.flex.DP);
    var CopyhoursStaticLabel078eb13f05c8948 = new kony.ui.Label({
        "centerX": "36%",
        "id": "CopyhoursStaticLabel078eb13f05c8948",
        "isVisible": true,
        "left": "52dp",
        "skin": "CopyslLabel0c3ebc7f8097b4b",
        "text": "Total Hours",
        "top": "13dp",
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
    CopyTotalHoursLabel0b348a995981946.add(CopyhoursStaticLabel078eb13f05c8948);
    var CopycalculatedHours097c85dcdff1443 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45dp",
        "id": "CopycalculatedHours097c85dcdff1443",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50%"
    }, {}, {});
    CopycalculatedHours097c85dcdff1443.setDefaultUnit(kony.flex.DP);
    var CopytotalWorkedHours0c7a747fa25a745 = new kony.ui.Label({
        "id": "CopytotalWorkedHours0c7a747fa25a745",
        "isVisible": true,
        "left": "64dp",
        "skin": "CopyslLabel0d258769e7e3d4c",
        "text": "36.5 Hours",
        "top": "15dp",
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
    CopycalculatedHours097c85dcdff1443.add(CopytotalWorkedHours0c7a747fa25a745);
    CopyTotalHoursTopContainer0bdffc185e2de48.add(CopyTotalHoursLabel0b348a995981946, CopycalculatedHours097c85dcdff1443);
    var CopyLogHoursButton08b9606ddeee54b = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "jumpStartGreenButton100",
        "height": "37dp",
        "id": "CopyLogHoursButton08b9606ddeee54b",
        "isVisible": true,
        "left": "33dp",
        "onClick": AS_Button_831e68be72a4442a95aaba1a7ad15158,
        "skin": "jumpStartGreenButton100",
        "text": "log hours",
        "top": "6dp",
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
    ReqTaskDetailsTotalHours.add(CopyTotalHoursTopContainer0bdffc185e2de48, CopyLogHoursButton08b9606ddeee54b);
    var ReqTaskDetailsBody = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "50%",
        "clipBounds": true,
        "enableScrolling": true,
        "height": "60.21%",
        "horizontalScrollIndicator": true,
        "id": "ReqTaskDetailsBody",
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
    ReqTaskDetailsBody.setDefaultUnit(kony.flex.DP);
    var reqTaskTitleLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "reqTaskTitleLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Task Title",
        "top": "4dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var reqTaskTitleLabelInput = new kony.ui.Label({
        "centerX": "50%",
        "height": "40dp",
        "id": "reqTaskTitleLabelInput",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabelReadOnly99",
        "top": "4dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var reqTaskDetailsLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "reqTaskDetailsLabel",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var reqTaskDetailsLabelInput = new kony.ui.RichText({
        "centerX": "50.00%",
        "height": "80dp",
        "id": "reqTaskDetailsLabelInput",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartRTReadOnly99",
        "top": "4dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [3, 3, 3, 3],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var reqTaskHoursLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "reqTaskHoursLabel",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var reqTaskHoursLabelInput = new kony.ui.Label({
        "centerX": "50%",
        "height": "40dp",
        "id": "reqTaskHoursLabelInput",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabelReadOnly99",
        "top": "4dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var reqTaskSkillsLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "reqTaskSkillsLabel",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var reqTaskSkillsLabelInput = new kony.ui.Label({
        "centerX": "50%",
        "height": "40dp",
        "id": "reqTaskSkillsLabelInput",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabelReadOnly99",
        "top": "4dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var reqTaskStartDateLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "reqTaskStartDateLabel",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var reqTaskStartDateLabelInput = new kony.ui.Label({
        "centerX": "50%",
        "height": "40dp",
        "id": "reqTaskStartDateLabelInput",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabelReadOnly99",
        "top": "4dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var reqTaskEndDateLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "reqTaskEndDateLabel",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var reqTaskEndDateLabelInput = new kony.ui.Label({
        "bottom": "10dp",
        "centerX": "50%",
        "height": "40dp",
        "id": "reqTaskEndDateLabelInput",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabelReadOnly99",
        "top": "4dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var requestTaskId = new kony.ui.Label({
        "centerX": "50%",
        "height": "40dp",
        "id": "requestTaskId",
        "isVisible": false,
        "left": "0dp",
        "skin": "jumpStartLabelReadOnly99",
        "top": "4dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    ReqTaskDetailsBody.add(reqTaskTitleLabel, reqTaskTitleLabelInput, reqTaskDetailsLabel, reqTaskDetailsLabelInput, reqTaskHoursLabel, reqTaskHoursLabelInput, reqTaskSkillsLabel, reqTaskSkillsLabelInput, reqTaskStartDateLabel, reqTaskStartDateLabelInput, reqTaskEndDateLabel, reqTaskEndDateLabelInput, requestTaskId);
    var ReqTaskDetailsFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "ReqTaskDetailsFooter",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "21dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    ReqTaskDetailsFooter.setDefaultUnit(kony.flex.DP);
    var reqTaskBackButton = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "jumpStartGrayButton110",
        "height": "40dp",
        "id": "reqTaskBackButton",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_06308078c9ae4d1dab30aae8e5b60b81,
        "skin": "jumpStartGrayButton110",
        "text": "Back",
        "top": "9%",
        "width": "48%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var AcceptButton = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "40dp",
        "id": "AcceptButton",
        "isVisible": true,
        "left": "2%",
        "onClick": AS_Button_e0ba749e1fcb4fc1bdc6a2783b501647,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Accept",
        "top": "9%",
        "width": "49%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    ReqTaskDetailsFooter.add(reqTaskBackButton, AcceptButton);
    BusinessRequestTaskDetailsModal.add(RequestTaskDetailsHeader, ReqTaskDetailsTotalHours, ReqTaskDetailsBody, ReqTaskDetailsFooter);
    var markAsCompleteGrayScreen = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "markAsCompleteGrayScreen",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0bdacea7888a540",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    markAsCompleteGrayScreen.setDefaultUnit(kony.flex.DP);
    var MarkAsCompleteModalContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "245dp",
        "id": "MarkAsCompleteModalContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "8dp",
        "skin": "CopyslFbox00b8b340e26e84d",
        "top": "360dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    MarkAsCompleteModalContainer.setDefaultUnit(kony.flex.DP);
    var staticLAbelMarkAsComplete = new kony.ui.Label({
        "centerX": "50%",
        "id": "staticLAbelMarkAsComplete",
        "isVisible": true,
        "left": "137dp",
        "skin": "ngnyOrangeLabelText",
        "text": "Mark engagment as complete",
        "top": "36dp",
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
    var markAsCompleteButton = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "45dp",
        "id": "markAsCompleteButton",
        "isVisible": true,
        "left": "53dp",
        "onClick": AS_Button_6eb3b55f20db4cc4a788148e796483ba,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Mark as complete",
        "top": "30dp",
        "width": "85%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var CancelRichText = new kony.ui.RichText({
        "centerX": "50%",
        "id": "CancelRichText",
        "isVisible": true,
        "left": "126dp",
        "onClick": AS_RichText_e01f591f5e544a28985552b5f5687a2d,
        "onTouchStart": AS_RichText_44420397b0474621a6cc3106c0203916,
        "skin": "ngnyGreenLinkText",
        "text": "Cancel",
        "top": "37dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    MarkAsCompleteModalContainer.add(staticLAbelMarkAsComplete, markAsCompleteButton, CancelRichText);
    markAsCompleteGrayScreen.add(MarkAsCompleteModalContainer);
    var BusinessEndorsementModalGrayContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "BusinessEndorsementModalGrayContainer",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0802925ab966641",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    BusinessEndorsementModalGrayContainer.setDefaultUnit(kony.flex.DP);
    var BusinessEndorsementModalContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "90%",
        "id": "BusinessEndorsementModalContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyslFbox025bfb307840c4d",
        "top": "0dp",
        "width": "85%",
        "zIndex": 1
    }, {}, {});
    BusinessEndorsementModalContainer.setDefaultUnit(kony.flex.DP);
    var EndorseMentHeaderContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "15%",
        "id": "EndorseMentHeaderContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    EndorseMentHeaderContainer.setDefaultUnit(kony.flex.DP);
    var VolNameContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "VolNameContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    VolNameContainer.setDefaultUnit(kony.flex.DP);
    var EndorsementLabelContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "EndorsementLabelContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "3dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {}, {});
    EndorsementLabelContainer.setDefaultUnit(kony.flex.DP);
    var EndorseLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "EndorseLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "ngnyOrangeLabelText",
        "text": "Endorse",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    EndorsementLabelContainer.add(EndorseLabel);
    VolNameContainer.add(EndorsementLabelContainer);
    var CompanyNameContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "30dp",
        "id": "CompanyNameContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "2dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {}, {});
    CompanyNameContainer.setDefaultUnit(kony.flex.DP);
    var CompanyName = new kony.ui.Label({
        "centerX": "50%",
        "id": "CompanyName",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0a9734dc6fe474c",
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
    CompanyNameContainer.add(CompanyName);
    EndorseMentHeaderContainer.add(VolNameContainer, CompanyNameContainer);
    var SkillsListBoxContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "16.31%",
        "id": "SkillsListBoxContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "4dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    SkillsListBoxContainer.setDefaultUnit(kony.flex.DP);
    var selectSkillSaLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "selectSkillSaLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel04439ee48f0ad4e",
        "text": "Select skill to endorse volunteer from drop down list",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var VolunteerSkillsListbox = new kony.ui.ListBox({
        "centerX": "50%",
        "focusSkin": "CopyslListBox0276fe4df1fab42",
        "height": "30dp",
        "id": "VolunteerSkillsListbox",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["lb1", "Select"]
        ],
        "onSelection": AS_ListBox_1d4f72cf0af34cb79b523b99af66f5ad,
        "skin": "CopyslListBox013984524b6be45",
        "top": "44dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "dropDownImage": "listbox.png",
        "groupCells": false,
        "viewConfig": {
            "toggleViewConfig": {
                "viewStyle": constants.LISTBOX_TOGGLE_VIEW_STYLE_PLAIN
            }
        },
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    SkillsListBoxContainer.add(selectSkillSaLabel, VolunteerSkillsListbox);
    var orLabelContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "3.74%",
        "id": "orLabelContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    orLabelContainer.setDefaultUnit(kony.flex.DP);
    var orLabel = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "orLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel032ef571dc84648",
        "text": "or",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    orLabelContainer.add(orLabel);
    var SkillsTextBoxContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "14.15%",
        "id": "SkillsTextBoxContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "14dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    SkillsTextBoxContainer.setDefaultUnit(kony.flex.DP);
    var anotherSkillsLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "anotherSkillsLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel04439ee48f0ad4e",
        "text": "Other skills not listed",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var AnotherSkillInputField = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "CopyslTextBox052b73dedfeeb4f",
        "height": "40dp",
        "id": "AnotherSkillInputField",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "21dp",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0871f8f9b3c854d",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "25dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    SkillsTextBoxContainer.add(anotherSkillsLabel, AnotherSkillInputField);
    var MessageContaioner = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "MessageContaioner",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    MessageContaioner.setDefaultUnit(kony.flex.DP);
    var MessageLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "MessageLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel04439ee48f0ad4e",
        "text": "Additional comments",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var EndorsingMessageTextArea = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "80dp",
        "id": "EndorsingMessageTextArea",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "2dp",
        "numberOfVisibleLines": 3,
        "skin": "CopyslTextArea0bbff3a674b0447",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "24dp",
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
    MessageContaioner.add(MessageLabel, EndorsingMessageTextArea);
    var EndorsementFooterContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "22.32%",
        "id": "EndorsementFooterContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "20dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    EndorsementFooterContainer.setDefaultUnit(kony.flex.DP);
    var EndorseSkillsButton = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "40dp",
        "id": "EndorseSkillsButton",
        "isVisible": true,
        "onClick": AS_Button_9292a5869b07452d9409477608e9427f,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Endorse volunteer",
        "top": "5%",
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
    var cancelLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "cancelLabel",
        "isVisible": true,
        "onTouchStart": AS_Label_cf0d6ae535a5440fa1f5347b2a542bc4,
        "skin": "jumpStartLabelGreen120",
        "text": "Cancel",
        "top": "19%",
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
    EndorsementFooterContainer.add(EndorseSkillsButton, cancelLabel);
    BusinessEndorsementModalContainer.add(EndorseMentHeaderContainer, SkillsListBoxContainer, orLabelContainer, SkillsTextBoxContainer, MessageContaioner, EndorsementFooterContainer);
    BusinessEndorsementModalGrayContainer.add(BusinessEndorsementModalContainer);
    var NotificationModalGrayContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "NotificationModalGrayContainer",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0fec70816e26a47",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    NotificationModalGrayContainer.setDefaultUnit(kony.flex.DP);
    var NotificationDetailsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "80%",
        "id": "NotificationDetailsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "70dp",
        "skin": "CopyslFbox0da4cef90937f49",
        "top": "293dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    NotificationDetailsContainer.setDefaultUnit(kony.flex.DP);
    var NotificationDetailsHeaderContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15.96%",
        "id": "NotificationDetailsHeaderContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    NotificationDetailsHeaderContainer.setDefaultUnit(kony.flex.DP);
    var NotificationDetailsLabel = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "NotificationDetailsLabel",
        "isVisible": true,
        "skin": "ngnyLargeOrangeLabelText",
        "text": "Notification Details",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    NotificationDetailsHeaderContainer.add(NotificationDetailsLabel);
    var NotificationTitleContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "19.32%",
        "id": "NotificationTitleContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "15dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    NotificationTitleContainer.setDefaultUnit(kony.flex.DP);
    var NotificationTitleLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "NotificationTitleLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0b07a0bbe73ad49",
        "text": "Notification title",
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
    var NotificationTitleInputLabel = new kony.ui.Label({
        "centerX": "50%",
        "height": "40dp",
        "id": "NotificationTitleInputLabel",
        "isVisible": true,
        "left": "33dp",
        "skin": "CopyslLabel00953c9219a8b4b",
        "top": "10dp",
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
    NotificationTitleContainer.add(NotificationTitleLabel, NotificationTitleInputLabel);
    var NotificationDetailsContainerBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "53.14%",
        "id": "NotificationDetailsContainerBody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    NotificationDetailsContainerBody.setDefaultUnit(kony.flex.DP);
    var NotificationBodyDetailsLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "NotificationBodyDetailsLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0b07a0bbe73ad49",
        "text": "Notification details",
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
    var NotificationDetailsTextArea = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "id": "NotificationDetailsTextArea",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "38dp",
        "numberOfVisibleLines": 3,
        "skin": "CopyslTextArea03f486510904043",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "90%",
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
    NotificationDetailsContainerBody.add(NotificationBodyDetailsLabel, NotificationDetailsTextArea);
    var NotificationDoneButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "12.56%",
        "id": "NotificationDoneButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "-42dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    NotificationDoneButtonContainer.setDefaultUnit(kony.flex.DP);
    var DoneRichText = new kony.ui.RichText({
        "centerX": "50%",
        "centerY": "50%",
        "id": "DoneRichText",
        "isVisible": true,
        "onTouchStart": AS_RichText_99e68ad5e1a44fc195a5f6e0a4fb9d7e,
        "skin": "markAsComplete",
        "text": "Done",
        "top": 0,
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    NotificationDoneButtonContainer.add(DoneRichText);
    NotificationDetailsContainer.add(NotificationDetailsHeaderContainer, NotificationTitleContainer, NotificationDetailsContainerBody, NotificationDoneButtonContainer);
    NotificationModalGrayContainer.add(NotificationDetailsContainer);
    var eligibiltyCriteriaModalContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "95%",
        "id": "eligibiltyCriteriaModalContainer",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0a17c224344144d",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    eligibiltyCriteriaModalContainer.setDefaultUnit(kony.flex.DP);
    var Hdr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "Hdr",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    Hdr.setDefaultUnit(kony.flex.DP);
    var hdrLbl = new kony.ui.Label({
        "centerX": "50%",
        "id": "hdrLbl",
        "isVisible": true,
        "skin": "ngnyLargeOrangeLabelText",
        "text": "Accept Request",
        "top": "9dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    Hdr.add(hdrLbl);
    var BodyFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "20%",
        "id": "BodyFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox03397d5d0805b4c",
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    BodyFlex.setDefaultUnit(kony.flex.DP);
    var reqmsgLbl = new kony.ui.Label({
        "centerX": "50%",
        "id": "reqmsgLbl",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel01b20904faf4043",
        "text": "Request message from business",
        "top": "2%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    BodyFlex.add(reqmsgLbl);
    var eligibiltyCriteriFlxScroll = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "50%",
        "clipBounds": true,
        "enableScrolling": true,
        "height": "40%",
        "horizontalScrollIndicator": true,
        "id": "eligibiltyCriteriFlxScroll",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox09720299f2f0348",
        "top": "30%",
        "verticalScrollIndicator": true,
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    eligibiltyCriteriFlxScroll.setDefaultUnit(kony.flex.DP);
    var mangersApprovalFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "mangersApprovalFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    mangersApprovalFlex.setDefaultUnit(kony.flex.DP);
    var heading = new kony.ui.Label({
        "centerX": "50%",
        "id": "heading",
        "isVisible": true,
        "skin": "ngnyLargeOrangeLabelText",
        "text": "Manager's Approval",
        "top": "1%",
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
    var txtLbl = new kony.ui.Label({
        "centerX": "50%",
        "id": "txtLbl",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel09019c347377142",
        "text": "You all need your manager's approval and consent before understanding this task",
        "top": "35%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    mangersApprovalFlex.add(heading, txtLbl);
    var LegalFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "LegalFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "50%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    LegalFlex.setDefaultUnit(kony.flex.DP);
    var LegalLbl = new kony.ui.Label({
        "centerX": "50%",
        "id": "LegalLbl",
        "isVisible": true,
        "skin": "ngnyLargeOrangeLabelText",
        "text": "Policy Requirements ",
        "top": "1%",
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
    var FlexContainer0f7e2ed7a777043 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "65%",
        "id": "FlexContainer0f7e2ed7a777043",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "35%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0f7e2ed7a777043.setDefaultUnit(kony.flex.DP);
    var RichText0afad0c18cfe342 = new kony.ui.RichText({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "RichText0afad0c18cfe342",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_RichText_27a7fcb682904c84a39aa2134b49f8c8,
        "onTouchStart": AS_RichText_796d858af5d446fd9b7c521670dc8af7,
        "skin": "CopyslRichText0c9a74fa183874d",
        "text": "I have read my <span style=\"color:#37b3b1\"><u>company’s policies and regulations</u></span> regarding volunteer work and agree to comply with all the rules and provisions outlined",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    FlexContainer0f7e2ed7a777043.add(RichText0afad0c18cfe342);
    LegalFlex.add(LegalLbl, FlexContainer0f7e2ed7a777043);
    eligibiltyCriteriFlxScroll.add(mangersApprovalFlex, LegalFlex);
    var acceptTermsChekBoxFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "acceptTermsChekBoxFlex",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "70%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    acceptTermsChekBoxFlex.setDefaultUnit(kony.flex.DP);
    var agreeLbl = new kony.ui.Label({
        "id": "agreeLbl",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel054b95df1c51d4d",
        "text": "I agree to all conditions stated above",
        "top": "25dp",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var chckBoxFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "chckBoxFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "66.67%",
        "skin": "slFbox",
        "top": "1dp",
        "width": "26%",
        "zIndex": 1
    }, {}, {});
    chckBoxFlex.setDefaultUnit(kony.flex.DP);
    var chckBoxx = new kony.ui.CheckBoxGroup({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "chckBoxx",
        "isVisible": true,
        "left": "13%",
        "masterData": [
            ["cbg1", "."]
        ],
        "onSelection": AS_CheckBoxGroup_f2bc0c786f4e4391a9b09374f1707aeb,
        "skin": "CopyslCheckBoxGroup0b12a0925ec1641",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_HORIZONTAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "viewType": constants.CHECKBOX_VIEW_TYPE_ONOFFSWITCH
    });
    chckBoxFlex.add(chckBoxx);
    acceptTermsChekBoxFlex.add(agreeLbl, chckBoxFlex);
    var Footer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "20%",
        "id": "Footer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "80%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    Footer.setDefaultUnit(kony.flex.DP);
    var agreeBtn = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "40dp",
        "id": "agreeBtn",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_7a7d24bf2d21474e9e22079f8eac7bce,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Agree and Continue",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var RichText0857e178f83bc42 = new kony.ui.RichText({
        "centerX": "50%",
        "height": "40dp",
        "id": "RichText0857e178f83bc42",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_RichText_30f0a796a36d4dc1a3a5220f10cc5c04,
        "onTouchStart": AS_RichText_0e85ebcdf7a748258ca19a76e6f299bb,
        "skin": "markAsComplete",
        "text": "Cancel",
        "top": "50%",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    Footer.add(agreeBtn, RichText0857e178f83bc42);
    eligibiltyCriteriaModalContainer.add(Hdr, BodyFlex, eligibiltyCriteriFlxScroll, acceptTermsChekBoxFlex, Footer);
    mainPage.add(mainPageBody, sideBarOverlay, sideBarMenuContainer, mainPageModalsBackground, cancelRequestModalContainer, sendRecommendation, declineRequestModalContainer, startEngagementModalContainer, acceptTaskModalContainer, acceptTaskDetailsModalContainer, acceptTaskSkillsModalContainer, acceptRequestModalContainer, viewRequestModalContainer, CreateOpportunityContainer, opportunityDetailsContainer, TaskDetailsContainer, BusinessRequestTaskDetailsModal, markAsCompleteGrayScreen, BusinessEndorsementModalGrayContainer, NotificationModalGrayContainer, eligibiltyCriteriaModalContainer);
};

function mainPageGlobals() {
    mainPage = new kony.ui.Form2({
        "addWidgets": addWidgetsmainPage,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "id": "mainPage",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_b9875c9fde3d4c8fa1a4389df9ffed9d,
        "preShow": AS_Form_683e8141b8fd42a0898dcaa41d91db36,
        "skin": "CopyslForm0a1732219089f4c"
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
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
    mainPage.info = {
        "notesId": "660f2ce584d44ab7bfd2137b797089f0",
        "kuid": "660f2ce584d44ab7bfd2137b797089f0"
    };
};