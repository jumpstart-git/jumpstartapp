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
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    sideBarToggleContainer.setDefaultUnit(kony.flex.DP);
    var sideBarToggle = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "30dp",
        "id": "sideBarToggle",
        "isVisible": true,
        "left": "0dp",
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
        "left": "0dp",
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
        "left": "20%",
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
        "left": "10dp",
        "skin": "CopyslLabel05bf6920b75014c",
        "text": "Hello",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblBusorVolName = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblBusorVolName",
        "isVisible": true,
        "left": "10dp",
        "skin": "CopyslLabel05bf6920b75014c",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    appHeaderTitleContainer.add(appPageProfilePic, appPageGreeting, lblBusorVolName);
    var searchButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "searchButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    searchButtonContainer.setDefaultUnit(kony.flex.DP);
    var searchButton = new kony.ui.Button({
        "centerX": "31%",
        "centerY": "50%",
        "height": "20dp",
        "id": "searchButton",
        "isVisible": true,
        "left": "10dp",
        "onClick": AS_Button_3d555c25db1f4257a45b1f9c9ba15f18,
        "skin": "CopyslButtonGlossBlue05f7e1311090944",
        "text": "Button",
        "top": "15dp",
        "width": "20dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
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
        "skin": "slFbox",
        "top": "0dp",
        "width": "35%",
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
        "renderAsAnchor": false,
        "textCopyable": false
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
        "renderAsAnchor": false,
        "textCopyable": false
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
        "renderAsAnchor": false,
        "textCopyable": false
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var notificationNavContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "notificationNavContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": 0,
        "onClick": AS_FlexContainer_98ad2948134c4b5bbf52dc62fa833805,
        "skin": "slFbox",
        "top": 0,
        "width": "35%",
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
        "renderAsAnchor": false,
        "textCopyable": false
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
    var navEndorsements = new kony.ui.Label({
        "height": "100%",
        "id": "navEndorsements",
        "isVisible": false,
        "left": "0dp",
        "onTouchEnd": AS_Label_aa89a83117354a428c60df29bee9a46c,
        "skin": "CopyslLabel06969984165bf40",
        "text": "Endorsements",
        "top": "0dp",
        "width": "35%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var recommendationNavContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "recommendationNavContainer",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
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
        "renderAsAnchor": false,
        "textCopyable": false
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    navBarScroller.add(activityNavContainer, navEvents, navNews, navMessages, notificationNavContainer, navEndorsements, recommendationNavContainer, navMessageConversation);
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
        "height": "100%",
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
    var myAcceptedRequests = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "myAcceptedRequests",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "myAcceptedRequestsOverallContainer",
        "top": "15dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    myAcceptedRequests.setDefaultUnit(kony.flex.DP);
    var acceptedRequestsSegment = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "acceptTask": "",
            "acceptedRequestBusinessName": "",
            "acceptedRequestImage": "",
            "acceptedRequestLabel": "",
            "acceptedRequestStatus": "",
            "cancelRequest": "",
            "contactRequest": "",
            "lblRequestId": ""
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
    }, {});
    myAcceptedRequests.add(acceptedRequestsSegment);
    var mySentRequests = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "mySentRequests",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "myAcceptedRequestsOverallContainer",
        "top": "15dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    mySentRequests.setDefaultUnit(kony.flex.DP);
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
    }, {});
    mySentRequests.add(sentRequestsSegment);
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
        "skin": "jumpStartBGTeal",
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    myOpenTasksHeaderLabelParent.add(myOpenTasksHeaderLabel);
    myOpenTasksHeader.add(myOpenTasksExpandImageParent, myOpenTasksHeaderLabelParent);
    var myOpenTasksListContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myOpenTasksListContainer",
        "isVisible": true,
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
            "lblRequestId": "",
            "markAsCompleteRichText": "",
            "markAsCompleteText": "",
            "openTaskBusiness": "",
            "openTaskName": "",
            "openTaskPersonProfilePic": ""
        }],
        "groupCells": false,
        "id": "myOpenTasksList",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
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
            "markAsCompleteText": "markAsCompleteText",
            "myOpenTaskDetailParent": "myOpenTaskDetailParent",
            "myOpenTaskProfileImageParent": "myOpenTaskProfileImageParent",
            "myOpenTaskTop": "myOpenTaskTop",
            "openTaskBusiness": "openTaskBusiness",
            "openTaskName": "openTaskName",
            "openTaskPersonProfilePic": "openTaskPersonProfilePic"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
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
        "skin": "jumpStartBGTeal",
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    myClosedTasksHeaderLabelParent.add(myClosedTasksHeaderLabel);
    myClosedTasksHeader.add(myClosedTasksExpandImageParent, myClosedTasksHeaderLabelParent);
    var myClosedTasksListContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myClosedTasksListContainer",
        "isVisible": true,
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
            "closedTaskBusiness": "",
            "closedTaskName": "",
            "closedTaskPersonProfilePic": "",
            "markAsCompleteText": ""
        }],
        "groupCells": false,
        "id": "myClosedTasksList",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
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
            "closedTaskBusiness": "closedTaskBusiness",
            "closedTaskName": "closedTaskName",
            "closedTaskPersonProfilePic": "closedTaskPersonProfilePic",
            "markAsCompleteText": "markAsCompleteText",
            "myClosedTaskDetailParent": "myClosedTaskDetailParent",
            "myClosedTaskProfileImageParent": "myClosedTaskProfileImageParent",
            "myClosedTaskTop": "myClosedTaskTop"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    myClosedTasksListContainer.add(myClosedTasksList);
    myClosedTasksParent.add(myClosedTasksHeader, myClosedTasksListContainer);
    var myBookmarks = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "20dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "myBookmarks",
        "isVisible": true,
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
        "skin": "jumpStartBGTeal",
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyFlexContainer08060752c4e724c.add(CopyLabel0c3dbb3e65d364c);
    CopyFlexContainer086ea79821e6847.add(CopyFlexContainer070aa354f5b6a41, CopyFlexContainer08060752c4e724c);
    myBookmarks.add(CopyFlexContainer086ea79821e6847);
    myActivity.add(myAcceptedRequests, mySentRequests, myOpenTasksParent, myClosedTasksParent, myBookmarks);
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
        "renderAsAnchor": false,
        "textCopyable": false
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
        "renderAsAnchor": false,
        "textCopyable": false
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
        "left": "99.84%",
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
            "contactImage": "imgseglogo.png",
            "lblContactName": "JohnDoe",
            "lblDay": "Yesterday",
            "lblMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo"
        }, {
            "contactImage": "imgseglogo.png",
            "lblContactName": "Dave Jameson",
            "lblDay": "Sun",
            "lblMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo"
        }, {
            "contactImage": "imgseglogo.png",
            "lblContactName": "Jane Doe",
            "lblDay": "Sat",
            "lblMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo"
        }, {
            "contactImage": "imgseglogo.png",
            "lblContactName": "Bob Nicolas",
            "lblDay": "Sat",
            "lblMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo"
        }, {
            "contactImage": "imgseglogo.png",
            "lblContactName": "Reily O'reily",
            "lblDay": "Fri",
            "lblMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo"
        }, {
            "contactImage": "imgseglogo.png",
            "lblContactName": "Spike, Spiegel",
            "lblDay": "Sep 7",
            "lblMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo"
        }, {
            "contactImage": "imgseglogo.png",
            "lblContactName": "John Johnz",
            "lblDay": "Sep 6",
            "lblMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo"
        }, {
            "contactImage": "imgseglogo.png",
            "lblContactName": "Robert",
            "lblDay": "Sep 5",
            "lblMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo"
        }, {
            "contactImage": "imgseglogo.png",
            "lblContactName": "Miky",
            "lblDay": "Sep 4",
            "lblMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo"
        }, {
            "contactImage": "imgseglogo.png",
            "lblContactName": "Hazel",
            "lblDay": "Aug 30",
            "lblMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo"
        }, {
            "contactImage": "imgseglogo.png",
            "lblContactName": "Harry",
            "lblDay": "Aug 17",
            "lblMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo"
        }, {
            "contactImage": "imgseglogo.png",
            "lblContactName": "Vinilda",
            "lblDay": "Aug 14",
            "lblMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo"
        }, {
            "contactImage": "imgseglogo.png",
            "lblContactName": "James",
            "lblDay": "Aug 10",
            "lblMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo"
        }, {
            "contactImage": "imgseglogo.png",
            "lblContactName": "Rawn",
            "lblDay": "Jul 5",
            "lblMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo"
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
    }, {});
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
    var segMessageNotification = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "data": [{
            "notificationContactImage": "",
            "notificationContactName": "",
            "notificationDay": "",
            "notificationMeaasageType": ""
        }, {
            "notificationContactImage": "",
            "notificationContactName": "",
            "notificationDay": "",
            "notificationMeaasageType": ""
        }],
        "groupCells": false,
        "height": "95%",
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
        "separatorColor": "4d4d4d64",
        "separatorRequired": true,
        "separatorThickness": 10,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "notificationContactImage": "notificationContactImage",
            "notificationContactName": "notificationContactName",
            "notificationDay": "notificationDay",
            "notificationDetailContainer": "notificationDetailContainer",
            "notificationMeaasageType": "notificationMeaasageType"
        },
        "width": "90%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var segGroupNotification = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "data": [{
            "lblCompanyLogo": "",
            "lblCompanyName": "",
            "lblDay": "",
            "lblFrom": "",
            "lblNotificationType": ""
        }, {
            "lblCompanyLogo": "",
            "lblCompanyName": "",
            "lblDay": "",
            "lblFrom": "",
            "lblNotificationType": ""
        }, {
            "lblCompanyLogo": "",
            "lblCompanyName": "",
            "lblDay": "",
            "lblFrom": "",
            "lblNotificationType": ""
        }],
        "groupCells": false,
        "height": "475dp",
        "id": "segGroupNotification",
        "isVisible": false,
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
    }, {});
    myNotifications.add(segMessageNotification, segGroupNotification);
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
    myEndorsements.setDefaultUnit(kony.flex.DP);
    var Label0205014444a5342 = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label0205014444a5342",
        "isVisible": true,
        "skin": "slLabel",
        "text": "Endorsements",
        "top": "20dp",
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
    myEndorsements.add(Label0205014444a5342);
    var myRecommendations = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "myRecommendations",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "100.00%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    myRecommendations.setDefaultUnit(kony.flex.DP);
    var segRecommendation = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "data": [{
            "recommendationContactCompanyName": "CBA",
            "recommendationContactDesignation": "Manager at ",
            "recommendationContactImage": "personimg.png",
            "recommendationContactName": "Joe Smith",
            "recommendationText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            "recommendationTimePassed": "an hour ago"
        }, {
            "recommendationContactCompanyName": "P&G",
            "recommendationContactDesignation": "Tester at ",
            "recommendationContactImage": "personimg.png",
            "recommendationContactName": "Jane Doe",
            "recommendationText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            "recommendationTimePassed": "2 days ago"
        }, {
            "recommendationContactCompanyName": "Unilever",
            "recommendationContactDesignation": "Trader at ",
            "recommendationContactImage": "personimg.png",
            "recommendationContactName": "Salvor Hardin",
            "recommendationText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            "recommendationTimePassed": "1 month ago"
        }],
        "groupCells": false,
        "height": "95%",
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
        "separatorColor": "64646464",
        "separatorRequired": true,
        "separatorThickness": 10,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "recommendationContactCompanyName": "recommendationContactCompanyName",
            "recommendationContactDesignation": "recommendationContactDesignation",
            "recommendationContactDetails": "recommendationContactDetails",
            "recommendationContactImage": "recommendationContactImage",
            "recommendationContactName": "recommendationContactName",
            "recommendationDetailContainer": "recommendationDetailContainer",
            "recommendationText": "recommendationText",
            "recommendationTimePassed": "recommendationTimePassed"
        },
        "width": "95%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    myRecommendations.add(segRecommendation);
    var flxMessageConversation = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMessageConversation",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "100%",
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
    }, {});
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
    }, {});
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
        "renderAsAnchor": false,
        "textCopyable": false
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
        "renderAsAnchor": false,
        "textCopyable": false
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
        "renderAsAnchor": false,
        "textCopyable": false
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
        "renderAsAnchor": false,
        "textCopyable": false
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
        "renderAsAnchor": false,
        "textCopyable": false
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
        "autoComplete": false,
        "autoCorrect": false
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
    }, {});
    flxTypeMessage.add(txtTypeMessage, btnSend);
    flxMessageConversation.add(flxConversationScreenHeader, flexScrollMessageBody, flxTypeMessage);
    mainPageContentParent.add(myActivity, myEvents, myNews, myMessages, myNotifications, myEndorsements, myRecommendations, flxMessageConversation);
    mainPageBody.add(searchBarContainer, navBarScroller, mainPageContentParent);
    var sideBarOverlay = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "sideBarOverlay",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "onTouchStart": AS_FlexContainer_601f7677d0e84dd79d22d8e1e1759e80,
        "right": "0dp",
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
        "renderAsAnchor": false,
        "textCopyable": false
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
        "renderAsAnchor": false,
        "textCopyable": false
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
        "renderAsAnchor": false,
        "textCopyable": false
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
        "onTouchStart": AS_RichText_c054155ae9024a5a9c2305607e76e4d8,
        "skin": "CopyslRichText0d8115a04b63b4f",
        "text": "<u>My Profile</u>",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    sideBarBody.add(myProfileLink);
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
        "skin": "CopyslRichText03c4caa091a9245",
        "text": "<u>Logout</u>",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var sideBarNeedHelp = new kony.ui.RichText({
        "centerX": "50%",
        "id": "sideBarNeedHelp",
        "isVisible": true,
        "left": 0,
        "skin": "CopyslRichText03c4caa091a9245",
        "text": "<u>Need help?</u>",
        "top": "30dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
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
        "skin": "jumpStartLabelOrange140",
        "text": "Cancel Request",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
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
        "text": "Good day!\n\nI have received your confirmation but unfortunately I have to cancel my initial request/acceptance of your request due to certain conditions that may hinder me to fulfill the task at hand.",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [3, 3, 3, 3],
        "paddingInPixel": false
    }, {
        "autoCorrect": false
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
        "focusSkin": "jumpStartGreenButton110",
        "height": "50dp",
        "id": "cancelRequestYes",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_56849e05360f4daba001e01291f6323e,
        "skin": "jumpStartGreenButton110",
        "text": "Send Message",
        "top": "15dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var cancelRequestNo = new kony.ui.RichText({
        "centerX": "50%",
        "id": "cancelRequestNo",
        "isVisible": true,
        "onClick": AS_RichText_9230d3beb1b94c34995122d6e8139943,
        "onTouchStart": AS_RichText_33e420002b474104a5b6e9bec3f82699,
        "skin": "jumpStartRTGreen130",
        "text": "Cancel",
        "top": 20,
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    requestModalFooter.add(cancelRequestYes, cancelRequestNo);
    cancelRequestModalContainer.add(requestModalHeader, requestModalBody, requestModalFooter);
    var declineRequestModalContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50.00%",
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
        "skin": "jumpStartLabelOrange140",
        "text": "Decline Request",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
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
        "text": "Good day!\n\nWe have recieved your request but unfortunately we have to decline your request due to other commitments that may impact my availability.",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [3, 3, 3, 3],
        "paddingInPixel": false
    }, {
        "autoCorrect": false
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
        "focusSkin": "jumpStartGreenButton110",
        "height": "50dp",
        "id": "declineRequestYes",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_e53dc5e292c44b34a1ffdfbdf33fd8d8,
        "skin": "jumpStartGreenButton110",
        "text": "Send Message",
        "top": "15dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var declineRequestNo = new kony.ui.RichText({
        "centerX": "50%",
        "id": "declineRequestNo",
        "isVisible": true,
        "onClick": AS_RichText_5fe0b013d5cd4df68b5c961f47978705,
        "onTouchStart": AS_RichText_135583c3a6e44cdb9f1f24b2fbc9aaca,
        "skin": "jumpStartRTGreen130",
        "text": "Cancel",
        "top": 20,
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    declineRequestModalFooter.add(declineRequestYes, declineRequestNo);
    declineRequestModalContainer.add(declineRequestModalHeader, declineRequestModalBody, declineRequestModalFooter);
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
        "onClick": AS_FlexContainer_8d92dc546c0a420bb37705944e794b3b,
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    startEngagmentPreviousParent.setDefaultUnit(kony.flex.DP);
    var startEngagmentPreviousImage = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "40dp",
        "id": "startEngagmentPreviousImage",
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
    var strartEngagementBackBtn = new kony.ui.Button({
        "height": "27.03%",
        "id": "strartEngagementBackBtn",
        "isVisible": true,
        "left": "38dp",
        "onClick": AS_Button_b8b7e62c17ff4f09978c26587cf3c336,
        "skin": "CopyslButtonGlossBlue0c1a6517000b344",
        "top": "16dp",
        "width": "29.63%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    startEngagmentPreviousParent.add(startEngagmentPreviousImage, strartEngagementBackBtn);
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CopyLabel0d9d1d28dd0b840 = new kony.ui.Label({
        "id": "CopyLabel0d9d1d28dd0b840",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel120Bold",
        "text": "Jane Doe",
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    startEngagmentHeaderDetailsParent.add(Label060c497160a804b, CopyLabel0d9d1d28dd0b840);
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
        "src": "personicongray.png",
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
        "skin": "jumpStartRtLink100",
        "text": "<a href=\"#\" style=\"color: #000\">View Profile</a>",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer08f25f7edc6c340.add(Image0ce1ce26846474a, RichText0be3bd35bf41a49);
    var CopyFlexContainer01ec2a14ea67245 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer01ec2a14ea67245",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "34%"
    }, {}, {});
    CopyFlexContainer01ec2a14ea67245.setDefaultUnit(kony.flex.DP);
    var CopyImage008378c44961e41 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "30dp",
        "id": "CopyImage008378c44961e41",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "callicongrey.png",
        "top": "10dp",
        "width": "30dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyRichText0cff3276ff6fd48 = new kony.ui.RichText({
        "centerX": "50%",
        "id": "CopyRichText0cff3276ff6fd48",
        "isVisible": true,
        "left": "5dp",
        "skin": "jumpStartRtLink100",
        "text": "<a href=\"#\" style=\"color: #000\">Call</a>",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer01ec2a14ea67245.add(CopyImage008378c44961e41, CopyRichText0cff3276ff6fd48);
    var CopyFlexContainer04d68d5aecdbd45 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer04d68d5aecdbd45",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "34%"
    }, {}, {});
    CopyFlexContainer04d68d5aecdbd45.setDefaultUnit(kony.flex.DP);
    var CopyImage047136a00c7174b = new kony.ui.Image2({
        "centerX": "50%",
        "height": "30dp",
        "id": "CopyImage047136a00c7174b",
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
    var CopyRichText08802f88b637244 = new kony.ui.RichText({
        "centerX": "50%",
        "id": "CopyRichText08802f88b637244",
        "isVisible": true,
        "left": "5dp",
        "skin": "jumpStartRtLink100",
        "text": "<a href=\"#\" style=\"color: #000\">Message</a>",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer04d68d5aecdbd45.add(CopyImage047136a00c7174b, CopyRichText08802f88b637244);
    startEngagmentHeaderActions.add(FlexContainer08f25f7edc6c340, CopyFlexContainer01ec2a14ea67245, CopyFlexContainer04d68d5aecdbd45);
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
    var FlexContainer00116ecf60f434e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "25dp",
        "id": "FlexContainer00116ecf60f434e",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer00116ecf60f434e.setDefaultUnit(kony.flex.DP);
    var Label0cc205c719cd040 = new kony.ui.Label({
        "id": "Label0cc205c719cd040",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel90",
        "text": "Assign to existing task?",
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
    FlexContainer00116ecf60f434e.add(Label0cc205c719cd040);
    var CopyFlexContainer08d65c89807cd48 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70%",
        "id": "CopyFlexContainer08d65c89807cd48",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer08d65c89807cd48.setDefaultUnit(kony.flex.DP);
    var TextField0b2c25e050ddd44 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "TextField0b2c25e050ddd44",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "secureTextEntry": false,
        "skin": "jumpStartStandardInputField",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "80%"
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoComplete": false,
        "autoCorrect": false
    });
    var FlexContainer0c745a890668f47 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "FlexContainer0c745a890668f47",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5dp",
        "skin": "jumpStartBG215",
        "top": "0dp",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0c745a890668f47.setDefaultUnit(kony.flex.DP);
    var Label0bf92f774186e49 = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label0bf92f774186e49",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel200Bold",
        "text": "...",
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
    FlexContainer0c745a890668f47.add(Label0bf92f774186e49);
    CopyFlexContainer08d65c89807cd48.add(TextField0b2c25e050ddd44, FlexContainer0c745a890668f47);
    startEngagmentHeaderAssignToTask.add(FlexContainer00116ecf60f434e, CopyFlexContainer08d65c89807cd48);
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
        "skin": "jumpStartLabel100",
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
    var startEngagementTaskTitleField = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "startEngagementTaskTitleField",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "secureTextEntry": false,
        "skin": "jumpStartStandardInputField",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "5dp",
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
    var startEngagementTaskDetails = new kony.ui.Label({
        "centerX": "50%",
        "id": "startEngagementTaskDetails",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
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
    var startEngagementTaskDetailsTextArea = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "jumpStartTextAreaSkin",
        "height": "120dp",
        "id": "startEngagementTaskDetailsTextArea",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
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
    var startEngagementStartDate = new kony.ui.Label({
        "centerX": "50%",
        "id": "startEngagementStartDate",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
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
        "skin": "jumpStartLabel100",
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
    startEngagementModalBody.add(startEngagementTaskTitle, startEngagementTaskTitleField, startEngagementTaskDetails, startEngagementTaskDetailsTextArea, startEngagementStartDate, startDateCalendarInput, startEngagementEndDate, endDateCalendarInput);
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
        "focusSkin": "CopyslButtonGlossBlue0f5e9b292eb6f46",
        "height": "40dp",
        "id": "startEngagement",
        "isVisible": true,
        "onClick": AS_Button_8937be6ef1c14c11b1799fe6815abc7e,
        "right": "10dp",
        "skin": "jumpStartGreenButton110",
        "text": "Start",
        "top": "15dp",
        "width": "45%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var cancelEngagement = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "jumpStartDisableButton",
        "height": "40dp",
        "id": "cancelEngagement",
        "isVisible": true,
        "left": 10,
        "onClick": AS_Button_6c414d0da69e45eb9e18a50ec0d9274d,
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
    }, {});
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
        "skin": "jumpStartLabelOrange140",
        "text": "Eligibility Criteria",
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
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
    }, {});
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
    }, {});
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
    var CopycancelRequestNo02a7c05ccf4f74a = new kony.ui.RichText({
        "centerX": "50%",
        "id": "CopycancelRequestNo02a7c05ccf4f74a",
        "isVisible": true,
        "skin": "jumpStartRTBlueLink130",
        "text": "<u>Terms & Conditions</u>",
        "top": 5,
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var agreeToTaskButton = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "jumpStartGreenButton110",
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
    }, {});
    var CopycancelRequestNo0df4de238bde24e = new kony.ui.RichText({
        "centerX": "50%",
        "id": "CopycancelRequestNo0df4de238bde24e",
        "isVisible": true,
        "onClick": AS_RichText_f1342c5021ec46068c03ed07300dbd87,
        "onTouchStart": AS_RichText_33e420002b474104a5b6e9bec3f82699,
        "skin": "jumpStartRTBlueLink130",
        "text": "<u>Do it later</u>",
        "top": 20,
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    acceptTaskModalFooter.add(CopycancelRequestNo02a7c05ccf4f74a, agreeToTaskButton, CopycancelRequestNo0df4de238bde24e);
    acceptTaskModalContainer.add(acceptTaskModalHeader, acceptTaskModalBody, acceptTaskModalFooter);
    var acceptTaskDetailsModalContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
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
        "isVisible": true,
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
    acceptTaskDetailsPreviousParent.add(acceptTaskDetailsPreviousImage);
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CopyLabel0d3787300d8b24b = new kony.ui.Label({
        "id": "CopyLabel0d3787300d8b24b",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel120Bold",
        "text": "Jane Doe",
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
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
        "src": "personicongray.png",
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
        "skin": "jumpStartRtLink100",
        "text": "<a href=\"#\" style=\"color: #000\">View Profile</a>",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer0800965ae495e4c.add(CopyImage0280b651d9eb142, CopyRichText06bba209338574d);
    var CopyFlexContainer0c089afc5465942 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer0c089afc5465942",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "34%"
    }, {}, {});
    CopyFlexContainer0c089afc5465942.setDefaultUnit(kony.flex.DP);
    var CopyImage0ea36e1b27bf04a = new kony.ui.Image2({
        "bottom": 0,
        "centerX": "50%",
        "height": "30dp",
        "id": "CopyImage0ea36e1b27bf04a",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "callicongrey.png",
        "top": "10dp",
        "width": "30dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyRichText05524d10ed20249 = new kony.ui.RichText({
        "centerX": "50%",
        "id": "CopyRichText05524d10ed20249",
        "isVisible": true,
        "left": "5dp",
        "skin": "jumpStartRtLink100",
        "text": "<a href=\"#\" style=\"color: #000\">Call</a>",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer0c089afc5465942.add(CopyImage0ea36e1b27bf04a, CopyRichText05524d10ed20249);
    var CopyFlexContainer027a73c44a3d741 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer027a73c44a3d741",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "34%"
    }, {}, {});
    CopyFlexContainer027a73c44a3d741.setDefaultUnit(kony.flex.DP);
    var CopyImage0205c44793c464f = new kony.ui.Image2({
        "centerX": "50%",
        "height": "30dp",
        "id": "CopyImage0205c44793c464f",
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
    var CopyRichText0925d713a58b341 = new kony.ui.RichText({
        "centerX": "50%",
        "id": "CopyRichText0925d713a58b341",
        "isVisible": true,
        "left": "5dp",
        "skin": "jumpStartRtLink100",
        "text": "<a href=\"#\" style=\"color: #000\">Message</a>",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer027a73c44a3d741.add(CopyImage0205c44793c464f, CopyRichText0925d713a58b341);
    CopystartEngagmentHeaderActions0becdf72e3b274a.add(CopyFlexContainer0800965ae495e4c, CopyFlexContainer0c089afc5465942, CopyFlexContainer027a73c44a3d741);
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
        "text": "Kindly confirm some engagement details below:",
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
    var CopystartEngagementTaskTitle0c7e98509622a40 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopystartEngagementTaskTitle0c7e98509622a40",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
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
    var CopystartEngagementTaskTitle09c8c16c0f4cb4f = new kony.ui.Label({
        "centerX": "50%",
        "height": "40dp",
        "id": "CopystartEngagementTaskTitle09c8c16c0f4cb4f",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabelReadOnly",
        "text": "Procurement Consultation",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CopystartEngagementTaskDetails0a18337357b4b42 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopystartEngagementTaskDetails0a18337357b4b42",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
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
    var RichText086cf577b0bee44 = new kony.ui.RichText({
        "centerX": "50%",
        "height": "150dp",
        "id": "RichText086cf577b0bee44",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartRTReadOnly",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "top": "5dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [3, 3, 3, 3],
        "paddingInPixel": false
    }, {});
    var CopystartEngagementStartDate02225626a6a2944 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopystartEngagementStartDate02225626a6a2944",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
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
    var CopystartEngagementTaskTitle05227206fe96b4a = new kony.ui.Label({
        "centerX": "50%",
        "height": "40dp",
        "id": "CopystartEngagementTaskTitle05227206fe96b4a",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabelReadOnly",
        "text": " September 15, 2016",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CopystartEngagementEndDate0503bf2317bc34d = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopystartEngagementEndDate0503bf2317bc34d",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
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
    var CopystartEngagementTaskTitle0d258ad25591a49 = new kony.ui.Label({
        "bottom": "10dp",
        "centerX": "50%",
        "height": "40dp",
        "id": "CopystartEngagementTaskTitle0d258ad25591a49",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabelReadOnly",
        "text": "December 15, 2016",
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
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
        "renderAsAnchor": false,
        "textCopyable": false
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
        "focusSkin": "CopyslButtonGlossBlue0f5e9b292eb6f46",
        "height": "40dp",
        "id": "CopystartEngagement0e3cd864659974b",
        "isVisible": true,
        "onClick": AS_Button_e04575295a194fac83b2a430a78f83ad,
        "right": "10dp",
        "skin": "jumpStartGreenButton110",
        "text": "Accept",
        "top": "15dp",
        "width": "45%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
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
    }, {});
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
        "renderAsAnchor": false,
        "textCopyable": false
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var Button0fdf6cf4ba17044 = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "jumpStartGreenButton110",
        "height": "40dp",
        "id": "Button0fdf6cf4ba17044",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartGreenButton110",
        "text": "Select all",
        "top": "15dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
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
    }, {});
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
    }, {});
    var CopystartEngagement0c36935d6f65542 = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossBlue0f5e9b292eb6f46",
        "height": "40dp",
        "id": "CopystartEngagement0c36935d6f65542",
        "isVisible": true,
        "right": "10dp",
        "skin": "jumpStartGreenButton110",
        "text": "Accept",
        "top": "15dp",
        "width": "45%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
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
        "skin": "jumpStartLabelOrange140",
        "text": "Accept Request",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
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
    }, {});
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
        "focusSkin": "jumpStartGreenButton110",
        "height": "50dp",
        "id": "acceptRequestYes",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_80dfa1bc68ad4325be817ed653bc9943,
        "skin": "jumpStartGreenButton110",
        "text": "Accept",
        "top": "15dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var acceptRequestNo = new kony.ui.RichText({
        "centerX": "50%",
        "id": "acceptRequestNo",
        "isVisible": true,
        "onClick": AS_RichText_71610d1cc94c44ebab8199fdf7ab5b2b,
        "onTouchStart": AS_RichText_dc484199ad004556881eb9bf4a117c0f,
        "skin": "jumpStartRTGreen130",
        "text": "Cancel",
        "top": 20,
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    acceptRequestModalFooter.add(acceptRequestYes, acceptRequestNo);
    acceptRequestModalContainer.add(acceptRequestModalHeader, acceptRequestModalBody, acceptRequestModalFooter);
    var viewRequestModalContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "50%",
        "id": "viewRequestModalContainer",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartModalSkin",
        "top": "0dp",
        "width": "90%",
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
        "skin": "jumpStartLabelOrange140",
        "text": "View Request",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
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
    }, {});
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
        "onTouchStart": AS_RichText_e3aee1ae013e4111a55c362d7f768c08,
        "skin": "jumpStartRTGreen130",
        "text": "Done",
        "top": 0,
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    viewRequestModalFooter.add(viewRequestDone);
    viewRequestModalContainer.add(viewRequestModalHeader, viewRequestModalBody, viewRequestModalFooter);
    mainPage.add(mainPageBody, sideBarOverlay, sideBarMenuContainer, mainPageModalsBackground, cancelRequestModalContainer, declineRequestModalContainer, startEngagementModalContainer, acceptTaskModalContainer, acceptTaskDetailsModalContainer, acceptTaskSkillsModalContainer, acceptRequestModalContainer, viewRequestModalContainer);
};

function mainPageGlobals() {
    mainPage = new kony.ui.Form2({
        "addWidgets": addWidgetsmainPage,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "id": "mainPage",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "preShow": AS_Form_683e8141b8fd42a0898dcaa41d91db36,
        "skin": "CopyslForm0a1732219089f4c"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
    mainPage.info = {
        "notesId": "660f2ce584d44ab7bfd2137b797089f0",
        "kuid": "660f2ce584d44ab7bfd2137b797089f0"
    };
};