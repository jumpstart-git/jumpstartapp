function addWidgetsfrmDashBoard() {
    frmDashBoard.setDefaultUnit(kony.flex.DP);
    var flxDashboard = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxDashboard",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxDashboard.setDefaultUnit(kony.flex.DP);
    var hdrFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "8%",
        "id": "hdrFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    hdrFlex.setDefaultUnit(kony.flex.DP);
    hdrFlex.add();
    var tabPaneDashboard = new kony.ui.TabPane({
        "activeTabs": [0],
        "centerX": "49.97%",
        "height": "92%",
        "id": "tabPaneDashboard",
        "isVisible": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "left": "0dp",
        "top": "0.00%",
        "viewConfig": {
            "collapsibleViewConfig": {
                "imagePosition": constants.TABPANE_COLLAPSIBLE_IMAGE_POSITION_RIGHT,
                "imageposition": "right",
                "tabNameAlignment": constants.TABPANE_COLLAPSIBLE_TABNAME_ALIGNMENT_LEFT,
                "tabnamealignment": "left",
                "toggleTabs": true,
                "toggletabs": true
            },
            "collapsibleviewconfig": {
                "imagePosition": constants.TABPANE_COLLAPSIBLE_IMAGE_POSITION_RIGHT,
                "imageposition": "right",
                "tabNameAlignment": constants.TABPANE_COLLAPSIBLE_TABNAME_ALIGNMENT_LEFT,
                "tabnamealignment": "left",
                "toggleTabs": true,
                "toggletabs": true
            },
            "pageViewConfig": {
                "needPageIndicator": true
            },
            "tabViewConfig": {
                "headerContainerWeight": "50",
                "headerPosition": constants.TAB_HEADER_POSITION_TOP,
                "image1": "imghambergermenu.png",
                "image2": "tabrightarrow.png"
            },
        },
        "viewType": constants.TABPANE_VIEW_TYPE_TABVIEW,
        "width": "100%",
        "zIndex": 1
    }, {
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var tabMessages = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "92%",
        "id": "tabMessages",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "tabName": "Messages",
        "width": "100%"
    }, {
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    tabMessages.setDefaultUnit(kony.flex.DP);
    var flxMessage = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMessage",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMessage.setDefaultUnit(kony.flex.DP);
    var flxMessageHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50.00%",
        "clipBounds": true,
        "height": "8%",
        "id": "flxMessageHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMessageHeader.setDefaultUnit(kony.flex.DP);
    var btnBackSymbol = new kony.ui.Button({
        "centerX": "5%",
        "height": "100%",
        "id": "btnBackSymbol",
        "isVisible": true,
        "left": "0%",
        "top": "0%",
        "width": "9.10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var phoneCallContact = new kony.ui.Button({
        "centerX": "94.50%",
        "height": "100%",
        "id": "phoneCallContact",
        "isVisible": true,
        "left": "89.33%",
        "onClick": makeCall,
        "top": "0dp",
        "width": "8.00%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblNotificationSenderName = new kony.ui.Label({
        "height": "100%",
        "id": "lblNotificationSenderName",
        "isVisible": true,
        "left": "45dp",
        "text": "John Doe",
        "top": "0dp",
        "width": "73.33%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flxMessageHeader.add(btnBackSymbol, phoneCallContact, lblNotificationSenderName);
    var flxMessageBody = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "49.95%",
        "clipBounds": true,
        "enableScrolling": true,
        "height": "82.19%",
        "horizontalScrollIndicator": true,
        "id": "flxMessageBody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "top": "0.00%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMessageBody.setDefaultUnit(kony.flex.DP);
    var flxMessageDescriptionSender = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "26.36%",
        "id": "flxMessageDescriptionSender",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "8dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMessageDescriptionSender.setDefaultUnit(kony.flex.DP);
    var lblMessageReceivedTime = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblMessageReceivedTime",
        "isVisible": true,
        "left": "130dp",
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
    var imgOfSender = new kony.ui.Image2({
        "centerX": "9.95%",
        "height": "40%",
        "id": "imgOfSender",
        "isVisible": true,
        "left": "0%",
        "src": "messagecontactlogo.png",
        "top": "22%",
        "width": "14.67%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMessageReceived = new kony.ui.Label({
        "height": "69.20%",
        "id": "lblMessageReceived",
        "isVisible": true,
        "left": "79dp",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
        "top": "22%",
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
    flxMessageDescriptionSender.add(lblMessageReceivedTime, imgOfSender, lblMessageReceived);
    var flxMessageReply = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "50.23%",
        "id": "flxMessageReply",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "top": "1%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMessageReply.setDefaultUnit(kony.flex.DP);
    var lblMessageRepliedTime = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblMessageRepliedTime",
        "isVisible": true,
        "left": "130dp",
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
    var lblMessageSent = new kony.ui.Label({
        "height": "76.93%",
        "id": "lblMessageSent",
        "isVisible": true,
        "left": "4.00%",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
        "top": "19.91%",
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
    var imgOfUser = new kony.ui.Image2({
        "centerX": "93.33%",
        "height": "21.31%",
        "id": "imgOfUser",
        "isVisible": true,
        "left": "0%",
        "src": "messagecontactlogo.png",
        "top": "22%",
        "width": "14.67%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxMessageReply.add(lblMessageRepliedTime, lblMessageSent, imgOfUser);
    flxMessageBody.add(flxMessageDescriptionSender, flxMessageReply);
    var flxWriteMessage = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "9.80%",
        "id": "flxWriteMessage",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "6dp",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxWriteMessage.setDefaultUnit(kony.flex.DP);
    var txtWriteMessage = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "txtWriteMessage",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "4%",
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10%",
        "width": "260dp",
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
    var btnSendMessage = new kony.ui.Button({
        "height": "40dp",
        "id": "btnSendMessage",
        "isVisible": true,
        "left": "75%",
        "text": "Send",
        "top": "10%",
        "width": "70dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxWriteMessage.add(txtWriteMessage, btnSendMessage);
    flxMessage.add(flxMessageHeader, flxMessageBody, flxWriteMessage);
    tabMessages.add(flxMessage);
    tabPaneDashboard.addTab("tabMessages", "Messages", null, tabMessages, null);
    var tabNotifications = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "tabNotifications",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "tabName": "Notifications",
        "width": "100%"
    }, {
        "layoutType": kony.flex.FLOW_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    tabNotifications.setDefaultUnit(kony.flex.DP);
    var flexNotificationScroll = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "548dp",
        "horizontalScrollIndicator": true,
        "id": "flexNotificationScroll",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100.14%",
        "zIndex": 1
    }, {}, {});
    flexNotificationScroll.setDefaultUnit(kony.flex.DP);
    var segNotificationsMsgRec = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "49.95%",
        "data": [{
            "SegRowTempImg1": "imgseglogo.png",
            "lblMessageType": "has left you a mesaage",
            "lblName": "John Doe",
            "lblReceivedDay": "yesterday"
        }, {
            "SegRowTempImg1": "imgseglogo.png",
            "lblMessageType": "has left you a recommendation",
            "lblName": "Blaine Allen",
            "lblReceivedDay": "3 days aqgo"
        }],
        "groupCells": false,
        "height": "39.23%",
        "id": "segNotificationsMsgRec",
        "isVisible": true,
        "left": "5%",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowTemplate": FBox0a68c9c601d7046,
        "scrollingEvents": {},
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "ffffff64",
        "separatorRequired": true,
        "separatorThickness": 12,
        "showScrollbars": false,
        "top": "3.00%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "SegRowFlex": "SegRowFlex",
            "SegRowTempImg1": "SegRowTempImg1",
            "lblMessageType": "lblMessageType",
            "lblName": "lblName",
            "lblReceivedDay": "lblReceivedDay"
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
            "lblCompanyName": "Tutorials R Us",
            "lblFrom": "From",
            "lblNotificationType": "New Workshop Contracts:",
            "lblReceivedDay": "6 days ago",
            "segRowTempImg2": "segtempgrpnotificationimg.png"
        }, {
            "lblCompanyName": "Tutorials R Us",
            "lblFrom": "From",
            "lblNotificationType": "New Workshop Contracts:",
            "lblReceivedDay": "6 days ago",
            "segRowTempImg2": "segtempgrpnotificationimg.png"
        }, {
            "lblCompanyName": "Tutorials R Us",
            "lblFrom": "From",
            "lblNotificationType": "New Workshop Contracts:",
            "lblReceivedDay": "6 days ago",
            "segRowTempImg2": "segtempgrpnotificationimg.png"
        }, {
            "lblCompanyName": "Tutorials R Us",
            "lblFrom": "From",
            "lblNotificationType": "New Workshop Contracts:",
            "lblReceivedDay": "6 days ago",
            "segRowTempImg2": "segtempgrpnotificationimg.png"
        }, {
            "lblCompanyName": "Tutorials R Us",
            "lblFrom": "From",
            "lblNotificationType": "New Workshop Contracts:",
            "lblReceivedDay": "6 days ago",
            "segRowTempImg2": "segtempimg.PNG"
        }, {
            "lblCompanyName": "Tutorials R Us",
            "lblFrom": "From",
            "lblNotificationType": "New Workshop Contracts:",
            "lblReceivedDay": "6 days ago",
            "segRowTempImg2": "segtempimg.PNG"
        }, {
            "lblCompanyName": "Tutorials R Us",
            "lblFrom": "From",
            "lblNotificationType": "New Workshop Contracts:",
            "lblReceivedDay": "6 days ago",
            "segRowTempImg2": "segtempimg.PNG"
        }, {
            "lblCompanyName": "Tutorials R Us",
            "lblFrom": "From",
            "lblNotificationType": "New Workshop Contracts:",
            "lblReceivedDay": "6 days ago",
            "segRowTempImg2": "segtempimg.PNG"
        }],
        "groupCells": false,
        "height": "393dp",
        "id": "segGroupNotification",
        "isVisible": true,
        "left": "2dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowTemplate": FBox0f9037d0e9d804e,
        "scrollingEvents": {},
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646464",
        "separatorRequired": true,
        "separatorThickness": 12,
        "showScrollbars": false,
        "top": "-2.64%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "lblCompanyName": "lblCompanyName",
            "lblFrom": "lblFrom",
            "lblNotificationType": "lblNotificationType",
            "lblReceivedDay": "lblReceivedDay",
            "segRowFlex2": "segRowFlex2",
            "segRowTempImg2": "segRowTempImg2"
        },
        "width": "90%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexNotificationScroll.add(segNotificationsMsgRec, segGroupNotification);
    tabNotifications.add(flexNotificationScroll);
    tabPaneDashboard.addTab("tabNotifications", "Notifications", null, tabNotifications, null);
    var tabRecommendation = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "92%",
        "id": "tabRecommendation",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "tabName": "Recommendation",
        "width": "100%"
    }, {
        "layoutType": kony.flex.FLOW_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    tabRecommendation.setDefaultUnit(kony.flex.DP);
    var segRecommendation = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "data": [{
            "contactImg": "imgseglogo.png",
            "lblCompanyName": "The Supplies Company",
            "lblContactDesignation": "Director at",
            "lblReceivedTime": "just now",
            "lblRecommendationDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
            "lblcontactName": "John Doe"
        }, {
            "contactImg": "imgseglogo.png",
            "lblCompanyName": "The Supplies Company",
            "lblContactDesignation": "Director at",
            "lblReceivedTime": "5 days Ago",
            "lblRecommendationDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet",
            "lblcontactName": "John Doe"
        }, {
            "contactImg": "imgseglogo.png",
            "lblCompanyName": "The Supplies Company",
            "lblContactDesignation": "Director at",
            "lblReceivedTime": "just now",
            "lblRecommendationDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
            "lblcontactName": "John Doe"
        }],
        "groupCells": false,
        "height": "548dp",
        "id": "segRecommendation",
        "isVisible": true,
        "left": "0%",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowTemplate": FBox0e63b85f9514944,
        "scrollingEvents": {},
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646464",
        "separatorRequired": true,
        "separatorThickness": 12,
        "showScrollbars": false,
        "top": "0%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "contactImg": "contactImg",
            "flxSegRecRowTemp": "flxSegRecRowTemp",
            "lblCompanyName": "lblCompanyName",
            "lblContactDesignation": "lblContactDesignation",
            "lblReceivedTime": "lblReceivedTime",
            "lblRecommendationDescription": "lblRecommendationDescription",
            "lblcontactName": "lblcontactName"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    tabRecommendation.add(segRecommendation);
    tabPaneDashboard.addTab("tabRecommendation", "Recommendation", null, tabRecommendation, null);
    flxDashboard.add(hdrFlex, tabPaneDashboard);
    frmDashBoard.add(flxDashboard);
};

function frmDashBoardGlobals() {
    frmDashBoard = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDashBoard,
        "enabledForIdleTimeout": false,
        "id": "frmDashBoard",
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
    frmDashBoard.info = {
        "kuid": "0ef8c625743e4549a217f318870e524c"
    };
};