function addWidgetsregistrationProfessionalPage() {
    registrationProfessionalPage.setDefaultUnit(kony.flex.DP);
    var regProfessionalInfoContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "90%",
        "id": "regProfessionalInfoContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    regProfessionalInfoContainer.setDefaultUnit(kony.flex.DP);
    var registrationPageProfessionalTitle = new kony.ui.Label({
        "bottom": "20dp",
        "centerX": "50%",
        "id": "registrationPageProfessionalTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel180",
        "text": "Professional Information",
        "top": "11dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var regCompanyTitle = new kony.ui.Label({
        "id": "regCompanyTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Company name*",
        "top": "-5dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var regCompanyInput = new kony.ui.ListBox({
        "focusSkin": "CopyslListBox052a4fa7b0b464b",
        "height": "40dp",
        "id": "regCompanyInput",
        "isVisible": true,
        "masterData": [
            ["Select", "Select from drop down menu"],
            ["CBA", "CBA"],
            ["DXC", "DXC"],
            ["SupplyNation", "SupplyNation"]
        ],
        "onSelection": AS_ListBox_94e2428d02de4f88943f8ba16108872e,
        "selectedKey": "Select",
        "selectedKeyValue": ["Select", "Select from drop down menu"],
        "skin": "CopyslListBox0aacaabda81f94d",
        "top": "0dp",
        "width": "100%",
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
    var regRoleTitle = new kony.ui.Label({
        "id": "regRoleTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Role*",
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
    var regRoleInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "regRoleInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "onTextChange": AS_TextField_dec149723ae44feda7c94d18d3e123f7,
        "secureTextEntry": false,
        "skin": "jumpStartStandardInputField",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "5dp",
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
    var regBusinessUnitTitle = new kony.ui.Label({
        "id": "regBusinessUnitTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Business division*",
        "top": "19dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var regBusinessUnitInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "regBusinessUnitInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "onTextChange": AS_TextField_bac558627a05452b99bdf393eae66bc8,
        "secureTextEntry": false,
        "skin": "jumpStartStandardInputField",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "7dp",
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
    var regSkillsTitle = new kony.ui.Label({
        "id": "regSkillsTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Your skills*",
        "top": "23dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var skillListContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "skillListContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "12dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    skillListContainer.setDefaultUnit(kony.flex.DP);
    var skillsList = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "skillsList",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "85%",
        "zIndex": 1
    }, {}, {});
    skillsList.setDefaultUnit(kony.flex.DP);
    var regSkillInputField = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "regSkillInputField",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "secureTextEntry": false,
        "skin": "jumpStartStandardInputField",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "17dp",
        "width": "92.33%",
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
    skillsList.add(regSkillInputField);
    var addNewSkill = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "addNewSkill",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "16dp",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    addNewSkill.setDefaultUnit(kony.flex.DP);
    var addNewSkillButton = new kony.ui.Button({
        "bottom": "0dp",
        "focusSkin": "ngnyPressedRegistrationButton",
        "height": "40dp",
        "id": "addNewSkillButton",
        "isVisible": true,
        "left": 0,
        "onClick": AS_FlexContainer_fcc498e6663e40768ed0b376737c1e66,
        "right": "0dp",
        "skin": "ngnyGreenRegistrationButton",
        "text": "Add",
        "top": 0,
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
    addNewSkill.add(addNewSkillButton);
    skillListContainer.add(skillsList, addNewSkill);
    var skillTags = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "25%",
        "horizontalScrollIndicator": true,
        "id": "skillTags",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "10dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    skillTags.setDefaultUnit(kony.flex.DP);
    var regSkillsSegment = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "imgClose": "pinbsal.png",
            "regSkillItem": ""
        }],
        "groupCells": false,
        "id": "regSkillsSegment",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_da1fa30bda0a42c19cbacbaf60a2545d,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": CopyFBox01025bd15839e46,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "imgClose": "imgClose",
            "regSkillItem": "regSkillItem"
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
    skillTags.add(regSkillsSegment);
    regProfessionalInfoContainer.add(registrationPageProfessionalTitle, regCompanyTitle, regCompanyInput, regRoleTitle, regRoleInput, regBusinessUnitTitle, regBusinessUnitInput, regSkillsTitle, skillListContainer, skillTags);
    var regProfessionalInfoFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45dp",
        "id": "regProfessionalInfoFooter",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "jumpStartBGFFFBorder214",
        "top": "16dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    regProfessionalInfoFooter.setDefaultUnit(kony.flex.DP);
    var regProfessionalInfoBackButton = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "jumpStartGrayButton110",
        "height": "45dp",
        "id": "regProfessionalInfoBackButton",
        "isVisible": true,
        "left": "1%",
        "onClick": AS_Button_bf13d655d651476b89dd33aadd1589ba,
        "skin": "jumpStartGrayButton110",
        "text": "Back",
        "width": "48%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var regProfessionalInfoContinueButton = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "45dp",
        "id": "regProfessionalInfoContinueButton",
        "isVisible": true,
        "left": 8,
        "onClick": AS_Button_6c6b552ce8594adeb1ed7ccdddd213a0,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Continue",
        "width": "48%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    regProfessionalInfoFooter.add(regProfessionalInfoBackButton, regProfessionalInfoContinueButton);
    registrationProfessionalPage.add(regProfessionalInfoContainer, regProfessionalInfoFooter);
};

function registrationProfessionalPageGlobals() {
    registrationProfessionalPage = new kony.ui.Form2({
        "addWidgets": addWidgetsregistrationProfessionalPage,
        "enableScrolling": true,
        "enabledForIdleTimeout": false,
        "id": "registrationProfessionalPage",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": false,
        "preShow": AS_Form_d89f486132b54c7e9dc2b7a98f1b861f,
        "skin": "jumpStartFormBGFFF"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FLOW_VERTICAL,
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
    registrationProfessionalPage.info = {
        "notesId": "ba74c893fd5a445eb219fe3bef70986f",
        "kuid": "ba74c893fd5a445eb219fe3bef70986f"
    };
};