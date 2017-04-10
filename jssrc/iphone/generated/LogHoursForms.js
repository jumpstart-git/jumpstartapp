function addWidgetsLogHoursForms() {
    LogHoursForms.setDefaultUnit(kony.flex.DP);
    var logHoursMainContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "logHoursMainContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    logHoursMainContainer.setDefaultUnit(kony.flex.DP);
    var logHoursTitileContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "logHoursTitileContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "53dp",
        "skin": "CopyslFbox0f0d10eaaaf5444",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    logHoursTitileContainer.setDefaultUnit(kony.flex.DP);
    var backButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "backButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchStart": AS_FlexContainer_10b3ba0c5c0649979ea5122b6008bf27,
        "skin": "slFbox",
        "top": "0dp",
        "width": "25%",
        "zIndex": 1
    }, {}, {});
    backButtonContainer.setDefaultUnit(kony.flex.DP);
    var backButtonImage = new kony.ui.Image2({
        "centerX": "35%",
        "centerY": "50%",
        "height": "30dp",
        "id": "backButtonImage",
        "isVisible": true,
        "left": "20dp",
        "skin": "slImage",
        "src": "backchevron.png",
        "top": "9dp",
        "width": "25dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    backButtonContainer.add(backButtonImage);
    var LogHoursLabelContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "LogHoursLabelContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {}, {});
    LogHoursLabelContainer.setDefaultUnit(kony.flex.DP);
    var logHoursLabel = new kony.ui.Label({
        "centerX": "32%",
        "centerY": "50%",
        "id": "logHoursLabel",
        "isVisible": true,
        "left": "17dp",
        "skin": "CopyslLabel075c7d8d4c54345",
        "text": "Log hours",
        "top": "12dp",
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
    LogHoursLabelContainer.add(logHoursLabel);
    logHoursTitileContainer.add(backButtonContainer, LogHoursLabelContainer);
    var HeaderLabelContainers = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "20.90%",
        "id": "HeaderLabelContainers",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "10dp",
        "skin": "CopyslFbox08b63a7913ffa45",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    HeaderLabelContainers.setDefaultUnit(kony.flex.DP);
    var TotalHoursContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "33%",
        "id": "TotalHoursContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "3dp",
        "skin": "CopyslFbox05dab22d03c964d",
        "top": "0%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    TotalHoursContainer.setDefaultUnit(kony.flex.DP);
    var lblTotalHours = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblTotalHours",
        "isVisible": true,
        "left": "0dp",
        "skin": "ngnyOrangeLabelText",
        "text": "Engagement hours",
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
    var numOfHoursLabel = new kony.ui.Label({
        "centerX": "38%",
        "centerY": "50%",
        "id": "numOfHoursLabel",
        "isVisible": true,
        "left": "160dp",
        "skin": "CopyslLabel0fefc9f9278fa40",
        "text": "36.5 hours",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    TotalHoursContainer.add(lblTotalHours, numOfHoursLabel);
    var workingHoursContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "33%",
        "id": "workingHoursContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "3dp",
        "skin": "CopyslFbox0080c61265e8d45",
        "top": "0%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    workingHoursContainer.setDefaultUnit(kony.flex.DP);
    var workingHoursLabel = new kony.ui.Label({
        "centerY": "50%",
        "id": "workingHoursLabel",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel03343253918d34f",
        "text": "Working Hours",
        "top": "2dp",
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
    var numOfWorkingHours = new kony.ui.Label({
        "centerX": "52%",
        "centerY": "50%",
        "id": "numOfWorkingHours",
        "isVisible": true,
        "skin": "CopyslLabel0d28017a474fa43",
        "text": "xxx.x hours",
        "top": "1dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    workingHoursContainer.add(workingHoursLabel, numOfWorkingHours);
    var nonWorkingHoursContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "33%",
        "id": "nonWorkingHoursContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "3dp",
        "skin": "CopyslFbox0765827cd33264c",
        "top": "0%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    nonWorkingHoursContainer.setDefaultUnit(kony.flex.DP);
    var nonWorkingHoursLabel = new kony.ui.Label({
        "centerY": "50%",
        "id": "nonWorkingHoursLabel",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel03343253918d34f",
        "text": "Non-working Hours",
        "top": "2dp",
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
    var CopynumOfWorkingHours0a76ec538d2864f = new kony.ui.Label({
        "centerX": "43%",
        "centerY": "50%",
        "id": "CopynumOfWorkingHours0a76ec538d2864f",
        "isVisible": true,
        "left": "253%",
        "skin": "CopyslLabel0d28017a474fa43",
        "text": "xxx.x hours",
        "top": "1dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    nonWorkingHoursContainer.add(nonWorkingHoursLabel, CopynumOfWorkingHours0a76ec538d2864f);
    HeaderLabelContainers.add(TotalHoursContainer, workingHoursContainer, nonWorkingHoursContainer);
    var AddHoursButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "8%",
        "id": "AddHoursButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2dp",
        "skin": "slFbox",
        "top": "2%",
        "width": "85%",
        "zIndex": 1
    }, {}, {});
    AddHoursButtonContainer.setDefaultUnit(kony.flex.DP);
    var addHoursButton = new kony.ui.Button({
        "focusSkin": "ngnyPressedGreenButton",
        "height": "100%",
        "id": "addHoursButton",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_a2af3349d18c4d9fb5a7ef05ad71a946,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Add hours",
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
    AddHoursButtonContainer.add(addHoursButton);
    var segHeaderContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "13.14%",
        "id": "segHeaderContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0",
        "skin": "CopyslFbox09233905a640b4f",
        "top": "2%",
        "width": "100%"
    }, {}, {});
    segHeaderContainer.setDefaultUnit(kony.flex.DP);
    var headerDateContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "headerDateContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    headerDateContainer.setDefaultUnit(kony.flex.DP);
    var labelDate = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "45%",
        "id": "labelDate",
        "isVisible": true,
        "left": "23dp",
        "skin": "CopyslLabel0db86caac2cb843",
        "text": "Date",
        "top": "15dp",
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
    headerDateContainer.add(labelDate);
    var headerWorkingHoursContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "headerWorkingHoursContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "31%",
        "zIndex": 1
    }, {}, {});
    headerWorkingHoursContainer.setDefaultUnit(kony.flex.DP);
    var workingHoursHeaderLabel = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "45%",
        "height": "50%",
        "id": "workingHoursHeaderLabel",
        "isVisible": true,
        "left": "23dp",
        "skin": "CopyslLabel0db86caac2cb843",
        "text": "Working hours",
        "top": "15dp",
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
    headerWorkingHoursContainer.add(workingHoursHeaderLabel);
    var headerNonWorkingHours = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "headerNonWorkingHours",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "-1.33%",
        "skin": "slFbox",
        "top": "0%",
        "width": "39.25%",
        "zIndex": 1
    }, {}, {});
    headerNonWorkingHours.setDefaultUnit(kony.flex.DP);
    var InnerNonWorkingHoursContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "InnerNonWorkingHoursContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "1dp",
        "width": "75.41%",
        "zIndex": 1
    }, {}, {});
    InnerNonWorkingHoursContainer.setDefaultUnit(kony.flex.DP);
    var nonWorkingHoursHeaderContainer = new kony.ui.Label({
        "centerX": "50%",
        "centerY": 45,
        "height": "76.47%",
        "id": "nonWorkingHoursHeaderContainer",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0db86caac2cb843",
        "text": "Non-working hours",
        "top": "18dp",
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
    InnerNonWorkingHoursContainer.add(nonWorkingHoursHeaderContainer);
    var IndicatorContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "70%",
        "clipBounds": true,
        "height": "73dp",
        "id": "IndicatorContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "-35dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20.80%",
        "zIndex": 1
    }, {}, {});
    IndicatorContainer.setDefaultUnit(kony.flex.DP);
    var indicatorImg = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "20dp",
        "id": "indicatorImg",
        "isVisible": true,
        "left": "-5dp",
        "skin": "slImage",
        "src": "lohourindicator.PNG",
        "top": "5dp",
        "width": "20dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    IndicatorContainer.add(indicatorImg);
    headerNonWorkingHours.add(InnerNonWorkingHoursContainer, IndicatorContainer);
    segHeaderContainer.add(headerDateContainer, headerWorkingHoursContainer, headerNonWorkingHours);
    var ListOfHoursScrollContainer = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "50%",
        "clipBounds": true,
        "enableScrolling": true,
        "height": "38%",
        "horizontalScrollIndicator": true,
        "id": "ListOfHoursScrollContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    ListOfHoursScrollContainer.setDefaultUnit(kony.flex.DP);
    var listOfHoursSegment = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "lblDate": "",
            "lblNonWorkingHours": "",
            "lblWorkingHours": ""
        }],
        "groupCells": false,
        "height": "100%",
        "id": "listOfHoursSegment",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_129e92e809394c59bd592175b01d09f1,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0f7cfaf139c8a45",
        "rowTemplate": FBox0ebe39ec296d744,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "6464641c",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "dateContainer": "dateContainer",
            "lblDate": "lblDate",
            "lblNonWorkingHours": "lblNonWorkingHours",
            "lblWorkingHours": "lblWorkingHours",
            "segNonWorkingContainer": "segNonWorkingContainer",
            "segWorkingHoursContainer": "segWorkingHoursContainer",
            "segmentOuterContainer": "segmentOuterContainer"
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
    ListOfHoursScrollContainer.add(listOfHoursSegment);
    var logHoursFooterContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "45dp",
        "id": "logHoursFooterContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "jumpStartBGFFFBorder214",
        "top": "-9dp",
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    logHoursFooterContainer.setDefaultUnit(kony.flex.DP);
    var cancelButton = new kony.ui.Button({
        "centerY": "48%",
        "focusSkin": "jumpStartGrayButton110",
        "height": "45dp",
        "id": "cancelButton",
        "isVisible": true,
        "left": "1%",
        "onClick": AS_Button_9f297c3f4cb5435189bf603ff9c20e67,
        "skin": "ngnyBackButton",
        "text": "Cancel",
        "width": "48%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var saveButton = new kony.ui.Button({
        "centerY": "48%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "45dp",
        "id": "saveButton",
        "isVisible": true,
        "left": "51%",
        "onClick": AS_Button_9d364a3620574348a864e968abe750bc,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Save",
        "width": "48%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    logHoursFooterContainer.add(cancelButton, saveButton);
    logHoursMainContainer.add(logHoursTitileContainer, HeaderLabelContainers, AddHoursButtonContainer, segHeaderContainer, ListOfHoursScrollContainer, logHoursFooterContainer);
    var AddHoursModalContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "AddHoursModalContainer",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox076482b72cae34b",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    AddHoursModalContainer.setDefaultUnit(kony.flex.DP);
    var AddHoursContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "80%",
        "id": "AddHoursContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "19dp",
        "skin": "CopyslFbox04c06531f056a4c",
        "top": "195dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    AddHoursContainer.setDefaultUnit(kony.flex.DP);
    var addHoursLabelContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "13.25%",
        "id": "addHoursLabelContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    addHoursLabelContainer.setDefaultUnit(kony.flex.DP);
    var addHoursLabel = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "42%",
        "id": "addHoursLabel",
        "isVisible": true,
        "left": "127dp",
        "skin": "ngnyOrangeLabelText",
        "text": "Add hours",
        "top": "13dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    addHoursLabelContainer.add(addHoursLabel);
    var calendarContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "17.66%",
        "id": "calendarContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    calendarContainer.setDefaultUnit(kony.flex.DP);
    var dateLabel = new kony.ui.Label({
        "id": "dateLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0524a3283a2bf43",
        "text": "Date",
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
    var addHourCalendar = new kony.ui.Calendar({
        "calendarIcon": "calendaricon.png",
        "dateComponents": [28, 10, 2016, 0, 0, 0],
        "dateFormat": "dd/MM/yyyy",
        "day": 28,
        "focusSkin": "jumpStartCalendarSkin",
        "formattedDate": "28/10/2016",
        "height": "40dp",
        "hour": 0,
        "id": "addHourCalendar",
        "isVisible": true,
        "left": "0dp",
        "minutes": 0,
        "month": 10,
        "seconds": 0,
        "skin": "jumpStartCalendarSkin",
        "top": "5dp",
        "viewConfig": {},
        "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
        "width": "99%",
        "year": 2016,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    calendarContainer.add(dateLabel, addHourCalendar);
    var hoursAndMinutesContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "17.50%",
        "id": "hoursAndMinutesContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "1dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    hoursAndMinutesContainer.setDefaultUnit(kony.flex.DP);
    var HoursContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "HoursContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "2dp",
        "width": "48%",
        "zIndex": 1
    }, {}, {});
    HoursContainer.setDefaultUnit(kony.flex.DP);
    var lblHours = new kony.ui.Label({
        "id": "lblHours",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel023eeac2b6ced4a",
        "text": "Hours",
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
    var hoursDropDownList = new kony.ui.ListBox({
        "focusSkin": "CopyslListBox0ad62a55fcaff43",
        "height": "43dp",
        "id": "hoursDropDownList",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["0", "0"],
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
            ["7", "7"],
            ["8", "8"],
            ["9", "9"],
            ["10", "10"],
            ["11", "11"],
            ["12", "12"],
            ["13", "13"],
            ["14", "14"],
            ["15", "15"],
            ["16", "16"],
            ["17", "17"],
            ["18", "18"],
            ["19", "19"],
            ["20", "20"],
            ["21", "21"],
            ["22", "22"],
            ["23", "23"],
            ["24", "24"]
        ],
        "skin": "CopyslListBox02ad605d044274e",
        "top": "25dp",
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
    HoursContainer.add(lblHours, hoursDropDownList);
    var minutesContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "minutesContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "4%",
        "skin": "slFbox",
        "top": "2dp",
        "width": "48%",
        "zIndex": 1
    }, {}, {});
    minutesContainer.setDefaultUnit(kony.flex.DP);
    var minutesLabel = new kony.ui.Label({
        "id": "minutesLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel023eeac2b6ced4a",
        "text": "Minutes",
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
    var minutesDropDownList = new kony.ui.ListBox({
        "focusSkin": "CopyslListBox00e8467cd605542",
        "height": "43dp",
        "id": "minutesDropDownList",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["0", "0"],
            ["5", "5"],
            ["10", "10"],
            ["15", "15"],
            ["20", "20"],
            ["25", "25"],
            ["30", "30"],
            ["35", "35"],
            ["40", "40"],
            ["45", "45"],
            ["50", "50"],
            ["55", "55"]
        ],
        "skin": "CopyslListBox02ad605d044274e",
        "top": "25dp",
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
    minutesContainer.add(minutesLabel, minutesDropDownList);
    hoursAndMinutesContainer.add(HoursContainer, minutesContainer);
    var bodyNonWorkingHoursContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "9.66%",
        "id": "bodyNonWorkingHoursContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "1.93%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    bodyNonWorkingHoursContainer.setDefaultUnit(kony.flex.DP);
    var CheckBoxGroup00dcf0e4d6e6a45 = new kony.ui.CheckBoxGroup({
        "height": "100%",
        "id": "CheckBoxGroup00dcf0e4d6e6a45",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["cbg1", "Non-working hours"]
        ],
        "selectedKeyValues": [
            ["cbg1", "Non-working hours"]
        ],
        "selectedKeys": ["cbg1"],
        "skin": "CopyslCheckBoxGroup075aa57fe66a840",
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
    bodyNonWorkingHoursContainer.add(CheckBoxGroup00dcf0e4d6e6a45);
    var addHoursFooterContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "addHoursFooterContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    addHoursFooterContainer.setDefaultUnit(kony.flex.DP);
    var addHoursFooterbutton = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "40dp",
        "id": "addHoursFooterbutton",
        "isVisible": true,
        "onClick": AS_Button_3e63010ecab440f8bc6dedecca979d47,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Add hours",
        "top": "11%",
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
    var footerCancelLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "footerCancelLabel",
        "isVisible": true,
        "onTouchStart": AS_Label_0c5ef614031e4ddc9f782eca0f073195,
        "skin": "jumpStartLabelGreen120",
        "text": "Cancel",
        "top": "22%",
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
    addHoursFooterContainer.add(addHoursFooterbutton, footerCancelLabel);
    AddHoursContainer.add(addHoursLabelContainer, calendarContainer, hoursAndMinutesContainer, bodyNonWorkingHoursContainer, addHoursFooterContainer);
    AddHoursModalContainer.add(AddHoursContainer);
    LogHoursForms.add(logHoursMainContainer, AddHoursModalContainer);
};

function LogHoursFormsGlobals() {
    LogHoursForms = new kony.ui.Form2({
        "addWidgets": addWidgetsLogHoursForms,
        "enabledForIdleTimeout": false,
        "id": "LogHoursForms",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_856d6aa7bc69441ea5166749661d9592,
        "preShow": AS_Form_2283f3e743da4be7acf45a52a6bb3be2,
        "skin": "CopyslForm0aa47389256cd45"
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
    LogHoursForms.info = {
        "kuid": "7bd9555694264a13a362dc9042246919"
    };
};