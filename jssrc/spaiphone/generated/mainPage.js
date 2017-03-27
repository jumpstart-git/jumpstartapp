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
        "skin": "CopyslFbox0c6ddeaf93b554a",
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
        "height": "50%",
        "id": "sideBarToggle",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "icon_sidemenu_x2.png",
        "top": "0dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    sideBarToggleContainer.add(sideBarToggle);
    var indigenousBusinessName = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "indigenousBusinessName",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "70%",
        "zIndex": 1
    }, {}, {});
    indigenousBusinessName.setDefaultUnit(kony.flex.DP);
    var myIndigenousBusinessLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "myIndigenousBusinessLabel",
        "isVisible": true,
        "left": "141dp",
        "skin": "CopyslLabel05bf6920b75014c",
        "text": "My Indigenous Business",
        "top": "20dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    indigenousBusinessName.add(myIndigenousBusinessLabel);
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
    var searchButton = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "id": "searchButton",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "searchicon.png",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    searchButtonContainer.add(searchButton);
    searchBarContainer.add(sideBarToggleContainer, indigenousBusinessName, searchButtonContainer);
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
        "skin": "CopyslFSbox03724d715ba7045",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    navBarScroller.setDefaultUnit(kony.flex.DP);
    var navMyActivity = new kony.ui.Label({
        "height": "100%",
        "id": "navMyActivity",
        "isVisible": true,
        "left": "0dp",
        "onTouchEnd": AS_Label_aa89a83117354a428c60df29bee9a46c,
        "skin": "CopyslLabel06969984165bf40",
        "text": "My Activity",
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
        "isVisible": true,
        "left": "0dp",
        "onTouchEnd": AS_Label_aa89a83117354a428c60df29bee9a46c,
        "skin": "CopyslLabel06969984165bf40",
        "text": "Messages",
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
    var navNotifications = new kony.ui.Label({
        "height": "100%",
        "id": "navNotifications",
        "isVisible": true,
        "left": "0dp",
        "onTouchEnd": AS_Label_aa89a83117354a428c60df29bee9a46c,
        "skin": "CopyslLabel06969984165bf40",
        "text": "Notifications",
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
    var navRecommendations = new kony.ui.Label({
        "height": "100%",
        "id": "navRecommendations",
        "isVisible": false,
        "left": "0dp",
        "onTouchEnd": AS_Label_aa89a83117354a428c60df29bee9a46c,
        "skin": "CopyslLabel06969984165bf40",
        "text": "Recommendations",
        "top": "0dp",
        "width": "45%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    navBarScroller.add(navMyActivity, navEvents, navNews, navMessages, navNotifications, navEndorsements, navRecommendations);
    var mainPageContentParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "82%",
        "id": "mainPageContentParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
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
        "skin": "slFSbox",
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
            "acceptTask": "<a href=\"#\" style=\"color: #000\">Accept<br>Task</a>",
            "acceptedRequestBusinessName": "Business A",
            "acceptedRequestImage": "imagedrag.png",
            "acceptedRequestLabel": "Has accepted your request",
            "acceptedRequestStatus": "New",
            "cancelRequest": "<a href=\"#\" style=\"color: #000\">Cancel<br>Request</a>",
            "contactRequest": "<a href=\"#\" style=\"color: #000\">Contact</a>"
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
            "contactRequest": "contactRequest"
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
            "acceptRequest": "<a href=\"#\" style=\"color: #000\">Accept<br>Request</a>",
            "declineRequest": "<a href=\"#\" style=\"color: #000\">Decline<br>Request</a>",
            "sentRequestBusinessName": "Business S",
            "sentRequestImage": "imagedrag.png",
            "sentRequestLabel": "Has sent you a request",
            "sentRequestStatus": "New",
            "viewRequest": "<a href=\"#\" style=\"color: #000\">View<br>Request</a>"
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
        "skin": "CopyslFbox0ec42fb6aafb34f",
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
        "height": "40dp",
        "id": "myOpenTasksExpandImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "expand_task.png",
        "top": "0dp",
        "width": "40dp"
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
        "skin": "CopyslLabel0c452b1d8920d41",
        "text": "My Open Tasks",
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
            "markAsCompleteImage": "markascomplete.png",
            "markAsCompleteText": "<a href='#' style='color: #169bd5'>Mark as Complete</a>",
            "openTaskBusiness": "Task Business",
            "openTaskExpandThis": "expand.png",
            "openTaskName": "Task 1",
            "openTaskPersonIconBg": "personiconbg.png",
            "openTaskPersonProfilePic": "personicon.png",
            "sendReportImage": "sendreport.png",
            "sendReportText": "<a href='#' style='color: #169bd5'>Send Report</a>"
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
            "markAsCompleteImage": "markAsCompleteImage",
            "markAsCompleteText": "markAsCompleteText",
            "myOpenTasExpandImageParent": "myOpenTasExpandImageParent",
            "myOpenTaskBottom": "myOpenTaskBottom",
            "myOpenTaskDetailParent": "myOpenTaskDetailParent",
            "myOpenTaskProfileImageParent": "myOpenTaskProfileImageParent",
            "myOpenTaskTop": "myOpenTaskTop",
            "openTaskBusiness": "openTaskBusiness",
            "openTaskExpandThis": "openTaskExpandThis",
            "openTaskMarkAsCompleteParent": "openTaskMarkAsCompleteParent",
            "openTaskName": "openTaskName",
            "openTaskPersonIconBg": "openTaskPersonIconBg",
            "openTaskPersonProfilePic": "openTaskPersonProfilePic",
            "openTaskSendReportParent": "openTaskSendReportParent",
            "sendReportImage": "sendReportImage",
            "sendReportText": "sendReportText"
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
        "skin": "CopyslFbox0ec42fb6aafb34f",
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
        "height": "40dp",
        "id": "myClosedTasksExpandImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "expand_task.png",
        "top": "0dp",
        "width": "40dp"
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
        "skin": "CopyslLabel0c452b1d8920d41",
        "text": "My Closed Tasks",
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
            "closedTaskBusiness": "Task Business",
            "closedTaskExpandThis": "expand.png",
            "closedTaskName": "Task 1",
            "closedTaskPersonIconBg": "personiconbg.png",
            "closedTaskPersonProfilePic": "personicon.png",
            "markAsCompleteImage": "markascomplete.png",
            "markAsCompleteText": "<a href='#' style='color: #169bd5'>Mark as Complete</a>",
            "sendReportImage": "sendreport.png",
            "sendReportText": "<a href='#' style='color: #169bd5'>Send Report</a>"
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
            "closedTaskExpandThis": "closedTaskExpandThis",
            "closedTaskMarkAsCompleteParent": "closedTaskMarkAsCompleteParent",
            "closedTaskName": "closedTaskName",
            "closedTaskPersonIconBg": "closedTaskPersonIconBg",
            "closedTaskPersonProfilePic": "closedTaskPersonProfilePic",
            "closedTaskSendReportParent": "closedTaskSendReportParent",
            "markAsCompleteImage": "markAsCompleteImage",
            "markAsCompleteText": "markAsCompleteText",
            "myClosedTasExpandImageParent": "myClosedTasExpandImageParent",
            "myClosedTaskBottom": "myClosedTaskBottom",
            "myClosedTaskDetailParent": "myClosedTaskDetailParent",
            "myClosedTaskProfileImageParent": "myClosedTaskProfileImageParent",
            "myClosedTaskTop": "myClosedTaskTop",
            "sendReportImage": "sendReportImage",
            "sendReportText": "sendReportText"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    myClosedTasksListContainer.add(myClosedTasksList);
    myClosedTasksParent.add(myClosedTasksHeader, myClosedTasksListContainer);
    var myRegisteredWorkshops = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "myRegisteredWorkshops",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "onClick": AS_FlexContainer_494ae416d6d04db69d1d2ec5f3d65c93,
        "skin": "slFbox",
        "top": "15dp",
        "width": "90%"
    }, {}, {});
    myRegisteredWorkshops.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer030257bf83a8640 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "CopyFlexContainer030257bf83a8640",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "CopyslFbox0ec42fb6aafb34f",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    CopyFlexContainer030257bf83a8640.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer0c0ed1ec1d27343 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer0c0ed1ec1d27343",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    CopyFlexContainer0c0ed1ec1d27343.setDefaultUnit(kony.flex.DP);
    var myRegisteredWorkshopsExpandImage = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "40dp",
        "id": "myRegisteredWorkshopsExpandImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "expand_task.png",
        "top": "0dp",
        "width": "40dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer0c0ed1ec1d27343.add(myRegisteredWorkshopsExpandImage);
    var CopyFlexContainer0c074d56dffb041 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "CopyFlexContainer0c074d56dffb041",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0c074d56dffb041.setDefaultUnit(kony.flex.DP);
    var CopyLabel03ea7eb1784334e = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopyLabel03ea7eb1784334e",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0c452b1d8920d41",
        "text": "My Registered Workshops",
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
    CopyFlexContainer0c074d56dffb041.add(CopyLabel03ea7eb1784334e);
    CopyFlexContainer030257bf83a8640.add(CopyFlexContainer0c0ed1ec1d27343, CopyFlexContainer0c074d56dffb041);
    myRegisteredWorkshops.add(CopyFlexContainer030257bf83a8640);
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
        "skin": "CopyslFbox0ec42fb6aafb34f",
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
        "height": "40dp",
        "id": "myBookmarksExpandImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "expand_task.png",
        "top": "0dp",
        "width": "40dp"
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
        "skin": "CopyslLabel0c452b1d8920d41",
        "text": "My Bookmarks",
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
    myActivity.add(myAcceptedRequests, mySentRequests, myOpenTasksParent, myClosedTasksParent, myRegisteredWorkshops, myBookmarks);
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
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "myMessages",
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
        "height": "450dp",
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
        "left": "100.00%",
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
        "data": [{
            "contactImage": "imgseglogo.png",
            "lblContactName": "John Doe",
            "lblDay": "yesterday",
            "lblMeaasageType": "has left you a message"
        }, {
            "contactImage": "imgseglogo.png",
            "lblContactName": "Blaine Allen",
            "lblDay": "3 days ago",
            "lblMeaasageType": "has left you a recommendation"
        }],
        "groupCells": false,
        "height": "180dp",
        "id": "segMessageNotification",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FBox011becb3c7bfa4f,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646464",
        "separatorRequired": true,
        "separatorThickness": 10,
        "showScrollbars": false,
        "top": "3dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "contactImage": "contactImage",
            "lblContactName": "lblContactName",
            "lblDay": "lblDay",
            "lblMeaasageType": "lblMeaasageType"
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
            "lblCompanyLogo": "segtempgrpnotificationimg.png",
            "lblCompanyName": "Tutorials R US",
            "lblDay": "6 Dyas ago",
            "lblFrom": "From",
            "lblNotificationType": "New Workshops: Contracts"
        }, {
            "lblCompanyLogo": "segtempgrpnotificationimg.png",
            "lblCompanyName": "The Daily News",
            "lblDay": "8 Dyas ago",
            "lblFrom": "From",
            "lblNotificationType": "Major Developments"
        }, {
            "lblCompanyLogo": "segtempgrpnotificationimg.png",
            "lblCompanyName": "The Workshop Gaize",
            "lblDay": "10 Dyas ago",
            "lblFrom": "From",
            "lblNotificationType": "New Workshops: Marketing"
        }],
        "groupCells": false,
        "height": "238dp",
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
        "top": "8dp",
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
        "left": "100%",
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
        "data": [{
            "Image0e199e8acd9454f": "imgseglogo.png",
            "Label08519845324a14f": "John Doe",
            "lblCompanyName": "The Supplies Company",
            "lblDay": "Just Now",
            "lblDesignation": "Director at",
            "lblRecommendationText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."
        }, {
            "Image0e199e8acd9454f": "imagedrag.png",
            "Label08519845324a14f": "Blaine Allen",
            "lblCompanyName": "Bright Spot",
            "lblDay": "5 days ago",
            "lblDesignation": "Director at",
            "lblRecommendationText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."
        }, {
            "Image0e199e8acd9454f": "imagedrag.png",
            "Label08519845324a14f": "Joseph Chill",
            "lblCompanyName": "Alley Pearls",
            "lblDay": "5 days ago",
            "lblDesignation": "Director at",
            "lblRecommendationText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."
        }],
        "groupCells": false,
        "height": "435dp",
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
        "top": "3%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "Image0e199e8acd9454f": "Image0e199e8acd9454f",
            "Label08519845324a14f": "Label08519845324a14f",
            "lblCompanyName": "lblCompanyName",
            "lblDay": "lblDay",
            "lblDesignation": "lblDesignation",
            "lblRecommendationText": "lblRecommendationText"
        },
        "width": "95%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    myRecommendations.add(segRecommendation);
    mainPageContentParent.add(myActivity, myEvents, myNews, myMessages, myNotifications, myEndorsements, myRecommendations);
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
        "src": "cba.png",
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
        "skin": "requestActionModalSkin",
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
        "skin": "requestModalTitle",
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
        "focusSkin": "jumpStartBlueButton",
        "height": "50dp",
        "id": "cancelRequestYes",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartBlueButton",
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
        "onTouchStart": AS_RichText_33e420002b474104a5b6e9bec3f82699,
        "skin": "richTextActionBlueLink",
        "text": "<u>Cancel</u>",
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
    var acceptTaskModalContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "90%",
        "id": "acceptTaskModalContainer",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "requestActionModalSkin",
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
        "skin": "requestModalTitle",
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
            "Label06e57014debcc4e": "Criteria 1"
        }, {
            "Image0fa57b85abcab49": "eligibilitycheck.png",
            "Label06e57014debcc4e": "Criteria 2"
        }, {
            "Image0fa57b85abcab49": "eligibilitycheck.png",
            "Label06e57014debcc4e": "Criteria 3"
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
        "onTouchStart": AS_RichText_33e420002b474104a5b6e9bec3f82699,
        "skin": "richTextActionBlueLink",
        "text": "<u>Terms & Conditions</u>",
        "top": 5,
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopycancelRequestYes00fda7e2abd244e = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "jumpStartBlueButton",
        "height": "50dp",
        "id": "CopycancelRequestYes00fda7e2abd244e",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartDisableButton",
        "text": "Continue",
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
        "onTouchStart": AS_RichText_33e420002b474104a5b6e9bec3f82699,
        "skin": "richTextActionBlueLink",
        "text": "<u>Do it later</u>",
        "top": 20,
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    acceptTaskModalFooter.add(CopycancelRequestNo02a7c05ccf4f74a, CopycancelRequestYes00fda7e2abd244e, CopycancelRequestNo0df4de238bde24e);
    acceptTaskModalContainer.add(acceptTaskModalHeader, acceptTaskModalBody, acceptTaskModalFooter);
    mainPage.add(mainPageBody, sideBarOverlay, sideBarMenuContainer, mainPageModalsBackground, cancelRequestModalContainer, acceptTaskModalContainer);
};

function mainPageGlobals() {
    mainPage = new kony.ui.Form2({
        "addWidgets": addWidgetsmainPage,
        "enabledForIdleTimeout": false,
        "id": "mainPage",
        "init": AS_Form_dcd4f36745254f0291473c0a0d9fc778,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_c073dd72101c4b70836933a7f19d254a,
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
        "kuid": "660f2ce584d44ab7bfd2137b797089f0"
    };
};