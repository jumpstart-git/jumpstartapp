function addWidgetssearchPage() {
    searchPage.setDefaultUnit(kony.flex.DP);
    var searchPageDashboardFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "searchPageDashboardFlex",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    searchPageDashboardFlex.setDefaultUnit(kony.flex.DP);
    var searchPageUpFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "20%",
        "id": "searchPageUpFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    searchPageUpFlex.setDefaultUnit(kony.flex.DP);
    var searchHdrFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "55%",
        "id": "searchHdrFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox06f1e53ef81a442",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    searchHdrFlex.setDefaultUnit(kony.flex.DP);
    var searchBackBtn = new kony.ui.Button({
        "centerY": "50%",
        "height": "35dp",
        "id": "searchBackBtn",
        "isVisible": true,
        "left": "1.7199999999999998%",
        "onClick": AS_Button_8fa8e6b553644a8aa8f131bdc76b36c0,
        "skin": "CopyslButtonGlossBlue04695bbc9f36a40",
        "width": "25dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var searchTxtbox = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "height": "60%",
        "id": "searchTxtbox",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "onTextChange": AS_TextField_547d8f0aabe647b4b0c0ba62b03a093c,
        "right": "17.66%",
        "secureTextEntry": false,
        "skin": "jumpStartStandardInputField",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "width": "69.84%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var searchBtn = new kony.ui.Button({
        "height": "38%",
        "id": "searchBtn",
        "isVisible": true,
        "left": "87.50%",
        "onClick": AS_Button_c8e58c278dc843529e6299794c8f659c,
        "skin": "CopyslButtonGlossBlue007555eb8ad9240",
        "top": "24.33%",
        "width": "7.10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer05cf70523c4d745 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "220dp",
        "id": "FlexContainer05cf70523c4d745",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "40dp",
        "skin": "slFbox",
        "top": "46dp",
        "width": "70.78%",
        "zIndex": 1
    }, {}, {});
    FlexContainer05cf70523c4d745.setDefaultUnit(kony.flex.DP);
    FlexContainer05cf70523c4d745.add();
    searchHdrFlex.add(searchBackBtn, searchTxtbox, searchBtn, FlexContainer05cf70523c4d745);
    var searchDataTypeFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45%",
        "id": "searchDataTypeFlex",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0d97fcb4ae3bd4b",
        "top": "55%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    searchDataTypeFlex.setDefaultUnit(kony.flex.DP);
    var volunteerBtn = new kony.ui.Button({
        "height": "70%",
        "id": "volunteerBtn",
        "isVisible": true,
        "left": "2%",
        "onClick": AS_Button_af46e1839f6e43c5a3361243e5d819f1,
        "skin": "CopyslButtonGlossBlue05330b12903d140",
        "text": "Volunteers",
        "top": "12%",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var businessBtn = new kony.ui.Button({
        "height": "70%",
        "id": "businessBtn",
        "isVisible": true,
        "left": "25%",
        "onClick": AS_Button_6a726122f1104df9b4d53ee762d4a566,
        "skin": "CopyslButtonGlossBlue0ae29c855fda143",
        "text": "Business",
        "top": "12%",
        "width": "18%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var OppurtunitiesBtn = new kony.ui.Button({
        "height": "70%",
        "id": "OppurtunitiesBtn",
        "isVisible": true,
        "left": "46%",
        "skin": "CopyslButtonGlossBlue04b2cb0ac5bd44c",
        "text": "Oppurtunities",
        "top": "12%",
        "width": "8%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var sortButton = new kony.ui.Button({
        "height": "70%",
        "id": "sortButton",
        "isVisible": true,
        "left": "82%",
        "onClick": AS_Button_bd7db8e1514f431dacae75ed5f8ed7a3,
        "skin": "CopyslButtonGlossBlue03803f6ea3ee745",
        "text": "Sort",
        "top": "12%",
        "width": "15%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var volLblLine1 = new kony.ui.Label({
        "height": "50%",
        "id": "volLblLine1",
        "isVisible": true,
        "left": "23%",
        "skin": "CopyslLabel0755fcd67589a47",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "25%",
        "width": "2px",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var VolLblLine2 = new kony.ui.Label({
        "height": "50%",
        "id": "VolLblLine2",
        "isVisible": true,
        "left": "44%",
        "skin": "CopyslLabel07c0080655f6046",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "25%",
        "width": "2px",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    searchDataTypeFlex.add(volunteerBtn, businessBtn, OppurtunitiesBtn, sortButton, volLblLine1, VolLblLine2);
    var searchDataTypeFlex1 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "focusSkin": "CopyslFSbox0a8b8a77fb3c94d",
        "height": "45%",
        "horizontalScrollIndicator": true,
        "id": "searchDataTypeFlex1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox09cf026619b994b",
        "top": "55%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    searchDataTypeFlex1.setDefaultUnit(kony.flex.DP);
    var volunteerFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "volunteerFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {}, {});
    volunteerFlex.setDefaultUnit(kony.flex.DP);
    var volunteerScrollFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "5%",
        "id": "volunteerScrollFlex",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox030edd0b138f94a",
        "top": "95%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    volunteerScrollFlex.setDefaultUnit(kony.flex.DP);
    volunteerScrollFlex.add();
    var volunteerBtn1 = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed095dcdba6f57e4c",
        "height": "95%",
        "id": "volunteerBtn1",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_8e7d1c456f684225b78298cb42111f91,
        "skin": "salmaSkin",
        "text": "Volunteer",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerFlex.add(volunteerScrollFlex, volunteerBtn1);
    var BusinessContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "BusinessContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {}, {});
    BusinessContainer.setDefaultUnit(kony.flex.DP);
    var businessIndicator = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "5%",
        "id": "businessIndicator",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox030edd0b138f94a",
        "top": "95%",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    businessIndicator.setDefaultUnit(kony.flex.DP);
    businessIndicator.add();
    var businessBtn1 = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed006bc270703f140",
        "height": "95%",
        "id": "businessBtn1",
        "isVisible": true,
        "left": "28dp",
        "onClick": AS_Button_77e714f7aa55443ea8dda907cdba64cb,
        "skin": "salmaSkin",
        "text": "Business",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    BusinessContainer.add(businessIndicator, businessBtn1);
    var opportunitiesFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "opportunitiesFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "35%",
        "skin": "slFbox",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {}, {});
    opportunitiesFlex.setDefaultUnit(kony.flex.DP);
    var opportunitiesIndicator = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "5%",
        "id": "opportunitiesIndicator",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox030edd0b138f94a",
        "top": "95%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    opportunitiesIndicator.setDefaultUnit(kony.flex.DP);
    opportunitiesIndicator.add();
    var opportuitiesBtn1 = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0dbd46cf72e8741",
        "height": "95%",
        "id": "opportuitiesBtn1",
        "isVisible": true,
        "left": "23dp",
        "onClick": AS_Button_82ea1740bfa9490382128cc94c1853b2,
        "skin": "salmaSkin",
        "text": "Brief",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    opportunitiesFlex.add(opportunitiesIndicator, opportuitiesBtn1);
    var sortBtn = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed09189a4d54cfe42",
        "height": "70%",
        "id": "sortBtn",
        "isVisible": true,
        "left": "82%",
        "onClick": AS_Button_9261e4378f044382b1cda53ed10bebae,
        "skin": "CopyslButtonGlossBlue03803f6ea3ee745",
        "text": "Sort",
        "top": "12%",
        "width": "15%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    searchDataTypeFlex1.add(volunteerFlex, BusinessContainer, opportunitiesFlex, sortBtn);
    searchPageUpFlex.add(searchHdrFlex, searchDataTypeFlex, searchDataTypeFlex1);
    var DataFlexScrollContainer = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "50%",
        "clipBounds": true,
        "enableScrolling": true,
        "height": "80%",
        "horizontalScrollIndicator": true,
        "id": "DataFlexScrollContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "jumpStartFlexScrollBGfff",
        "top": "0%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    DataFlexScrollContainer.setDefaultUnit(kony.flex.DP);
    var volunteerdataSegment = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "CompanyNameLbl": "",
            "searchBookmarkImage": "",
            "searchBookmarkLabel": "",
            "searchDistanceImage": "",
            "searchDistanceLabel": "",
            "volunteerId": "",
            "volunteerImg": "",
            "volunteerName": "",
            "volunteerPosition": ""
        }, {
            "CompanyNameLbl": "",
            "searchBookmarkImage": "",
            "searchBookmarkLabel": "",
            "searchDistanceImage": "",
            "searchDistanceLabel": "",
            "volunteerId": "",
            "volunteerImg": "",
            "volunteerName": "",
            "volunteerPosition": ""
        }, {
            "CompanyNameLbl": "",
            "searchBookmarkImage": "",
            "searchBookmarkLabel": "",
            "searchDistanceImage": "",
            "searchDistanceLabel": "",
            "volunteerId": "",
            "volunteerImg": "",
            "volunteerName": "",
            "volunteerPosition": ""
        }],
        "groupCells": false,
        "height": "100%",
        "id": "volunteerdataSegment",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_40a3c921256e40bd85f3e68049e6ad36,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FBox002ffa33914ea45,
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
            "CompanyNameLbl": "CompanyNameLbl",
            "SegActionsDownFlex": "SegActionsDownFlex",
            "SegVolunteerDetails": "SegVolunteerDetails",
            "SegVolunteerUpFlex": "SegVolunteerUpFlex",
            "SegmentMainFlex": "SegmentMainFlex",
            "searchBookmarkContainer": "searchBookmarkContainer",
            "searchBookmarkImage": "searchBookmarkImage",
            "searchBookmarkLabel": "searchBookmarkLabel",
            "searchDistanceContainer": "searchDistanceContainer",
            "searchDistanceImage": "searchDistanceImage",
            "searchDistanceLabel": "searchDistanceLabel",
            "searchRoleCompanyContainer": "searchRoleCompanyContainer",
            "volunteerImg": "volunteerImg",
            "volunteerName": "volunteerName",
            "volunteerPosition": "volunteerPosition"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    DataFlexScrollContainer.add(volunteerdataSegment);
    searchPageDashboardFlex.add(searchPageUpFlex, DataFlexScrollContainer);
    var segPredictive = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "lblSuggestions": "Label"
        }, {
            "lblSuggestions": "Label"
        }, {
            "lblSuggestions": "Label"
        }],
        "groupCells": false,
        "id": "segPredictive",
        "isVisible": true,
        "left": "40dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_a10b49ad5346483ab77628da44d5d83f,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FBox005476b2895eb45,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "50dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "lblSuggestions": "lblSuggestions"
        },
        "width": "70.31%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    searchPage.add(searchPageDashboardFlex, segPredictive);
};

function searchPageGlobals() {
    searchPage = new kony.ui.Form2({
        "addWidgets": addWidgetssearchPage,
        "enabledForIdleTimeout": false,
        "id": "searchPage",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "preShow": AS_Form_856f4203a0514bdd9ad9964c7526a80a,
        "skin": "CopyslForm042362bae12ad49"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    searchPage.info = {
        "notesId": "f388a97e38204f59abf2ecfb0e7f5d27",
        "kuid": "f388a97e38204f59abf2ecfb0e7f5d27"
    };
};