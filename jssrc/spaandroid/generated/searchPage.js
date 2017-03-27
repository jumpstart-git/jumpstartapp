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
        "height": "30dp",
        "id": "searchBackBtn",
        "isVisible": true,
        "left": "3%",
        "onClick": AS_Button_8fa8e6b553644a8aa8f131bdc76b36c0,
        "skin": "CopyslButtonGlossBlue04695bbc9f36a40",
        "width": "20dp",
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
        "right": "3%",
        "secureTextEntry": false,
        "skin": "jumpStartStandardInputField",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "width": "85%",
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
    var searchBtn = new kony.ui.Button({
        "centerY": "50%",
        "height": "20dp",
        "id": "searchBtn",
        "isVisible": true,
        "onClick": AS_Button_c8e58c278dc843529e6299794c8f659c,
        "right": "5%",
        "skin": "CopyslButtonGlossBlue007555eb8ad9240",
        "width": "20dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    searchHdrFlex.add(searchBackBtn, searchTxtbox, searchBtn);
    var searchDataTypeFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45%",
        "id": "searchDataTypeFlex",
        "isVisible": true,
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
    var AllBtn = new kony.ui.Button({
        "height": "70%",
        "id": "AllBtn",
        "isVisible": true,
        "left": "46%",
        "skin": "CopyslButtonGlossBlue04b2cb0ac5bd44c",
        "text": "All",
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
        "top": "25%",
        "width": "2px",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var VolLblLine2 = new kony.ui.Label({
        "height": "50%",
        "id": "VolLblLine2",
        "isVisible": true,
        "left": "44%",
        "skin": "CopyslLabel07c0080655f6046",
        "text": "Label",
        "top": "25%",
        "width": "2px",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    searchDataTypeFlex.add(volunteerBtn, businessBtn, AllBtn, sortButton, volLblLine1, VolLblLine2);
    searchPageUpFlex.add(searchHdrFlex, searchDataTypeFlex);
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
    searchPage.add(searchPageDashboardFlex);
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
        "retainScrollPosition": false
    });
    searchPage.info = {
        "notesId": "f388a97e38204f59abf2ecfb0e7f5d27",
        "kuid": "f388a97e38204f59abf2ecfb0e7f5d27"
    };
};