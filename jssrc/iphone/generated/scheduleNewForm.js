function addWidgetsscheduleNewForm() {
    scheduleNewForm.setDefaultUnit(kony.flex.DP);
    var regScheduleHdrContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "5%",
        "id": "regScheduleHdrContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    regScheduleHdrContainer.setDefaultUnit(kony.flex.DP);
    var ScheduleHdrLbl = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "ScheduleHdrLbl",
        "isVisible": true,
        "left": 0,
        "skin": "CopyslLabel0f549c425864a41",
        "text": "Availability Information",
        "top": "10%",
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
    regScheduleHdrContainer.add(ScheduleHdrLbl);
    var regScheduleDatesContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "52%",
        "id": "regScheduleDatesContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    regScheduleDatesContainer.setDefaultUnit(kony.flex.DP);
    var regScheduleHeadingsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "5%",
        "id": "regScheduleHeadingsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    regScheduleHeadingsContainer.setDefaultUnit(kony.flex.DP);
    var AvaialabilityLabel = new kony.ui.Label({
        "height": "100%",
        "id": "AvaialabilityLabel",
        "isVisible": true,
        "left": "20dp",
        "skin": "CopyslLabel0138de9d7ded645",
        "text": "Day of the week*",
        "top": "0%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    regScheduleHeadingsContainer.add(AvaialabilityLabel);
    var regScheduleDatesFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "95%",
        "id": "regScheduleDatesFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    regScheduleDatesFlex.setDefaultUnit(kony.flex.DP);
    var listDays = new kony.ui.ListBox({
        "focusSkin": "jumpStartDropDown100",
        "height": "40dp",
        "id": "listDays",
        "isVisible": true,
        "left": "20dp",
        "masterData": [
            ["MON", "MONDAY"],
            ["TUE", "TUESDAY"],
            ["WED", "WEDNESDAY"],
            ["THU", "THURSDAY"],
            ["FRI", "FRIDAY"],
            ["SAT", "SATURDAY"],
            ["SUN", "SUNDAY"]
        ],
        "skin": "jumpStartDropDown100",
        "top": "10dp",
        "width": "83%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "groupCells": false,
        "viewConfig": {
            "toggleViewConfig": {
                "viewStyle": constants.LISTBOX_TOGGLE_VIEW_STYLE_PLAIN
            }
        },
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var lblFromTime = new kony.ui.Label({
        "id": "lblFromTime",
        "isVisible": true,
        "left": "20dp",
        "skin": "CopyslLabel017064f17fbcf4c",
        "text": "Start time",
        "top": "20%",
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
    var listFromTime = new kony.ui.ListBox({
        "focusSkin": "jumpStartDropDown100",
        "height": "40dp",
        "id": "listFromTime",
        "isVisible": true,
        "left": "20dp",
        "masterData": [
            ["1:00", "1:00"],
            ["1:30", "1:30"],
            ["2:00", "2:00"],
            ["2:30", "2:30"],
            ["3:00", "3:00"],
            ["3:30", "3:30"],
            ["4:00", "4:00"],
            ["4:30", "4:30"],
            ["5:00", "5:00"],
            ["5:30", "5:30"],
            ["6:00", "6:00"],
            ["6:30", "6:30"],
            ["7:00", "7:00"],
            ["7:30", "7:30"],
            ["8:00", "8:00"],
            ["8:30", "8:30"],
            ["9:00", "9:00"],
            ["9:30", "9:30"],
            ["10:00", "10:00"],
            ["10:30", "10:30"],
            ["11:00", "11:00"],
            ["11:30", "11:30"],
            ["12:00", "12:00"],
            ["12:30", "12:30"]
        ],
        "skin": "jumpStartDropDown100",
        "top": "29%",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "groupCells": false,
        "viewConfig": {
            "toggleViewConfig": {
                "viewStyle": constants.LISTBOX_TOGGLE_VIEW_STYLE_PLAIN
            }
        },
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var listToTime = new kony.ui.ListBox({
        "focusSkin": "jumpStartDropDown100",
        "id": "listToTime",
        "isVisible": true,
        "left": "20dp",
        "masterData": [
            ["1:00", "1:00"],
            ["1:30", "1:30"],
            ["2:00", "2:00"],
            ["2:30", "2:30"],
            ["3:00", "3:00"],
            ["3:30", "3:30"],
            ["4:00", "4:00"],
            ["4:30", "4:30"],
            ["5:00", "5:00"],
            ["5:30", "5:30"],
            ["6:00", "6:00"],
            ["6:30", "6:30"],
            ["7:00", "7:00"],
            ["7:30", "7:30"],
            ["8:00", "8:00"],
            ["8:30", "8:30"],
            ["9:00", "9:00"],
            ["9:30", "9:30"],
            ["10:00", "10:00"],
            ["10:30", "10:30"],
            ["11:00", "11:00"],
            ["11:30", "11:30"],
            ["12:00", "12:00"],
            ["12:30", "12:30"]
        ],
        "skin": "jumpStartDropDown100",
        "top": "57%",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "groupCells": false,
        "viewConfig": {
            "toggleViewConfig": {
                "viewStyle": constants.LISTBOX_TOGGLE_VIEW_STYLE_PLAIN
            }
        },
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var listFromTimeMerdidian = new kony.ui.ListBox({
        "focusSkin": "jumpStartDropDown100",
        "height": "40dp",
        "id": "listFromTimeMerdidian",
        "isVisible": true,
        "left": "48%",
        "masterData": [
            ["AM", "AM"],
            ["PM", "PM"]
        ],
        "skin": "jumpStartDropDown100",
        "top": "29%",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "groupCells": false,
        "viewConfig": {
            "toggleViewConfig": {
                "viewStyle": constants.LISTBOX_TOGGLE_VIEW_STYLE_PLAIN
            }
        },
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var listToTimeMeridian = new kony.ui.ListBox({
        "focusSkin": "jumpStartDropDown100",
        "id": "listToTimeMeridian",
        "isVisible": true,
        "left": "48%",
        "masterData": [
            ["AM", "AM"],
            ["PM", "PM"]
        ],
        "skin": "jumpStartDropDown100",
        "top": "57%",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "groupCells": false,
        "viewConfig": {
            "toggleViewConfig": {
                "viewStyle": constants.LISTBOX_TOGGLE_VIEW_STYLE_PLAIN
            }
        },
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var lblTotime = new kony.ui.Label({
        "id": "lblTotime",
        "isVisible": true,
        "left": "20dp",
        "skin": "CopyslLabel0bc64944d36fe48",
        "text": "End time",
        "top": "48%",
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
    var AddBtn = new kony.ui.Button({
        "centerX": "47.29%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "45dp",
        "id": "AddBtn",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_e21ac211a8a8413da63f77c6eac41fda,
        "skin": "ngnyPrimaryGreenButton",
        "text": "+ Add Schedule",
        "top": "75%",
        "width": "84%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    regScheduleDatesFlex.add(listDays, lblFromTime, listFromTime, listToTime, listFromTimeMerdidian, listToTimeMeridian, lblTotime, AddBtn);
    regScheduleDatesContainer.add(regScheduleHeadingsContainer, regScheduleDatesFlex);
    var regScheduleScrollContainer = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "10%",
        "horizontalScrollIndicator": true,
        "id": "regScheduleScrollContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "57%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    regScheduleScrollContainer.setDefaultUnit(kony.flex.DP);
    var segSchedule = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "imgclose": "pinbsal.png",
            "lblSchedule": ""
        }],
        "groupCells": false,
        "id": "segSchedule",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_44ab36382c5144c0a002fbe8531a8626,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg07ddee451e42741",
        "rowTemplate": FBox0495998e57f7e42,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "5%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "imgclose": "imgclose",
            "lblSchedule": "lblSchedule"
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
    regScheduleScrollContainer.add(segSchedule);
    var offManagerApprovalContainer = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "24%",
        "horizontalScrollIndicator": true,
        "id": "offManagerApprovalContainer",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "78%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    offManagerApprovalContainer.setDefaultUnit(kony.flex.DP);
    var CopymangersApprovalFlex03ae7b8f29fcb45 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "CopymangersApprovalFlex03ae7b8f29fcb45",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopymangersApprovalFlex03ae7b8f29fcb45.setDefaultUnit(kony.flex.DP);
    var Copyheading021315f55d79a40 = new kony.ui.Label({
        "centerX": "50%",
        "id": "Copyheading021315f55d79a40",
        "isVisible": true,
        "skin": "ngnyOrangeLabelText",
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
    var CopytxtLbl0866b5282a16448 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopytxtLbl0866b5282a16448",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel09019c347377142",
        "text": "I have received my manager's approval and consent before undertaking this task.",
        "top": "40%",
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
    CopymangersApprovalFlex03ae7b8f29fcb45.add(Copyheading021315f55d79a40, CopytxtLbl0866b5282a16448);
    var CopyLegalFlex0fd3d110dd9a947 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "58%",
        "id": "CopyLegalFlex0fd3d110dd9a947",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchMove": AS_FlexContainer_258953e6a1604973803206e010c14bc8,
        "onTouchStart": AS_FlexContainer_2e42607dce0c415cad538cfff8a8c523,
        "skin": "slFbox",
        "top": "40%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyLegalFlex0fd3d110dd9a947.setDefaultUnit(kony.flex.DP);
    var CopyLegalLbl0328e1d8997464f = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLegalLbl0328e1d8997464f",
        "isVisible": true,
        "skin": "ngnyOrangeLabelText",
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
    var CopyRichText05ae4cf7d0a8c45 = new kony.ui.RichText({
        "centerX": "50%",
        "id": "CopyRichText05ae4cf7d0a8c45",
        "isVisible": true,
        "left": "101dp",
        "onClick": AS_RichText_1a485b46074042bbab4157e2ca51218c,
        "onTouchStart": AS_RichText_214b052e608a4321b07888227bf903d0,
        "skin": "CopyslRichText08d925a35bfe342",
        "text": "I have read my company’s policies and regulations regarding volunteer work and agree to comply with all the rules and provisions outlined.",
        "top": "30dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    CopyLegalFlex0fd3d110dd9a947.add(CopyLegalLbl0328e1d8997464f, CopyRichText05ae4cf7d0a8c45);
    offManagerApprovalContainer.add(CopymangersApprovalFlex03ae7b8f29fcb45, CopyLegalFlex0fd3d110dd9a947);
    var outsideScheduletime = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "outsideScheduletime",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "generalModalBG",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    outsideScheduletime.setDefaultUnit(kony.flex.DP);
    var Copyoutsidecontainer0f55695b9f53340 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "70%",
        "id": "Copyoutsidecontainer0f55695b9f53340",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "jumpStartBGFFF",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    Copyoutsidecontainer0f55695b9f53340.setDefaultUnit(kony.flex.DP);
    var CopyupdateScheduleOutsideHoursHeader057fed1f833eb46 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "CopyupdateScheduleOutsideHoursHeader057fed1f833eb46",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchStart": AS_FlexContainer_832c6cfc7b0040a3a56b3eaba68083cd,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyupdateScheduleOutsideHoursHeader057fed1f833eb46.setDefaultUnit(kony.flex.DP);
    var CopyrequestModalTitle0479e7b2cfdc245 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "CopyrequestModalTitle0479e7b2cfdc245",
        "isVisible": true,
        "skin": "jumpStartLabelOrange140",
        "text": "Warning",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    CopyupdateScheduleOutsideHoursHeader057fed1f833eb46.add(CopyrequestModalTitle0479e7b2cfdc245);
    var CopyupdateScheduleOutsideHoursBody064265a36578f4a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50.55%",
        "id": "CopyupdateScheduleOutsideHoursBody064265a36578f4a",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyupdateScheduleOutsideHoursBody064265a36578f4a.setDefaultUnit(kony.flex.DP);
    var CopyupdateScheduleOutsideHoursText0f4ba96a1baf54f = new kony.ui.RichText({
        "centerX": "50%",
        "height": "90%",
        "id": "CopyupdateScheduleOutsideHoursText0f4ba96a1baf54f",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartRT140",
        "text": "You have entered a schedule that is outside of regular working hours. This will be reflected in your volunteering hours log.",
        "top": "65dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    CopyupdateScheduleOutsideHoursBody064265a36578f4a.add(CopyupdateScheduleOutsideHoursText0f4ba96a1baf54f);
    var CopyupdateScheduleOutsideHoursFooter0fa3a4f94d3914b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "35%",
        "id": "CopyupdateScheduleOutsideHoursFooter0fa3a4f94d3914b",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "60%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyupdateScheduleOutsideHoursFooter0fa3a4f94d3914b.setDefaultUnit(kony.flex.DP);
    var CopyupdateOutsideHoursYes0441ff65cf2744c = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "50dp",
        "id": "CopyupdateOutsideHoursYes0441ff65cf2744c",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_7cc9e7db933542dfa9d930e523285359,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Agree and continue",
        "top": 0,
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var CopyupdateOutsideHoursNo01981f9e7412e4d = new kony.ui.RichText({
        "centerX": "50%",
        "id": "CopyupdateOutsideHoursNo01981f9e7412e4d",
        "isVisible": true,
        "onClick": AS_RichText_a1dba61c2ae5490298daafe88875d5a6,
        "onTouchStart": AS_RichText_cc11bc18ec5f417295c622bdded5da6b,
        "skin": "markAsComplete",
        "text": "Cancel",
        "top": 20,
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    CopyupdateScheduleOutsideHoursFooter0fa3a4f94d3914b.add(CopyupdateOutsideHoursYes0441ff65cf2744c, CopyupdateOutsideHoursNo01981f9e7412e4d);
    Copyoutsidecontainer0f55695b9f53340.add(CopyupdateScheduleOutsideHoursHeader057fed1f833eb46, CopyupdateScheduleOutsideHoursBody064265a36578f4a, CopyupdateScheduleOutsideHoursFooter0fa3a4f94d3914b);
    outsideScheduletime.add(Copyoutsidecontainer0f55695b9f53340);
    var regScheduleFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "regScheduleFooter",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "92%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    regScheduleFooter.setDefaultUnit(kony.flex.DP);
    var backBtn = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossRed09def2ebdd0f64b",
        "height": "45dp",
        "id": "backBtn",
        "isVisible": true,
        "left": "15dp",
        "onClick": AS_Button_90cc3226d17d4c55a077d6f01f79c068,
        "skin": "CopyslButtonGlossBlue0d4f4bac1d68944",
        "text": "Back",
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
    var ContinueBtn = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "45dp",
        "id": "ContinueBtn",
        "isVisible": true,
        "left": "52%",
        "onClick": AS_Button_0758697c36314de6be86afd5f5e75602,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Continue",
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
    regScheduleFooter.add(backBtn, ContinueBtn);
    scheduleNewForm.add(regScheduleHdrContainer, regScheduleDatesContainer, regScheduleScrollContainer, offManagerApprovalContainer, outsideScheduletime, regScheduleFooter);
};

function scheduleNewFormGlobals() {
    scheduleNewForm = new kony.ui.Form2({
        "addWidgets": addWidgetsscheduleNewForm,
        "enabledForIdleTimeout": false,
        "id": "scheduleNewForm",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "preShow": AS_Form_c04c2de481c948ae876453c2c425440f,
        "skin": "CopyslForm0395e0a1dbc754f"
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
    scheduleNewForm.info = {
        "kuid": "52743330124941c0b64a6f9c1f63791d"
    };
};