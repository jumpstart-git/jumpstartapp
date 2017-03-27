function addWidgetsvolunteerMyProfilePage() {
    volunteerMyProfilePage.setDefaultUnit(kony.flex.DP);
    var volunteerMyProfileHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "volunteerMyProfileHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBG249",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    volunteerMyProfileHeader.setDefaultUnit(kony.flex.DP);
    var volunteerMyProfilePic = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "60dp",
        "id": "volunteerMyProfilePic",
        "isVisible": true,
        "skin": "slImage",
        "src": "imgseglogo.png",
        "width": "60dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerMyProfileHeader.add(volunteerMyProfilePic);
    var volunteerMyProfileBody = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "50%",
        "clipBounds": true,
        "enableScrolling": true,
        "height": "75%",
        "horizontalScrollIndicator": true,
        "id": "volunteerMyProfileBody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": 0,
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volunteerMyProfileBody.setDefaultUnit(kony.flex.DP);
    var volunteerMyProfileFirstNameTitle = new kony.ui.Label({
        "id": "volunteerMyProfileFirstNameTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
        "text": "First Name*",
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
    var volunteerMyProfileFirstNameInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "volunteerMyProfileFirstNameInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
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
        "autoComplete": false,
        "autoCorrect": false
    });
    var volunteerMyProfileLastNameTitle = new kony.ui.Label({
        "id": "volunteerMyProfileLastNameTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
        "text": "Last Name*",
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
    var volunteerMyProfileLastNameInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "volunteerMyProfileLastNameInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
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
        "autoComplete": false,
        "autoCorrect": false
    });
    var volunteerMyProfileUsernameTitle = new kony.ui.Label({
        "id": "volunteerMyProfileUsernameTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
        "text": "Username*",
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
    var volunteerMyProfileUsernameInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "volunteerMyProfileUsernameInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
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
        "autoComplete": false,
        "autoCorrect": false
    });
    var volunteerMyProfilePasswordTitle = new kony.ui.Label({
        "id": "volunteerMyProfilePasswordTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
        "text": "Password*",
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
    var volunteerMyProfilePasswordInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "volunteerMyProfilePasswordInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "secureTextEntry": true,
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
        "autoComplete": false,
        "autoCorrect": false
    });
    var volunteerMyProfileReenterPasswordTitle = new kony.ui.Label({
        "id": "volunteerMyProfileReenterPasswordTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
        "text": "Re-enter password*",
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
    var volunteerMyProfileReenterPasswordInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "volunteerMyProfileReenterPasswordInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "secureTextEntry": true,
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
        "autoComplete": false,
        "autoCorrect": false
    });
    var volunteerMyProfileWorkDetailsTitle = new kony.ui.Label({
        "id": "volunteerMyProfileWorkDetailsTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
        "text": "Work Details    ",
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
    var volunteerMyProfileWorkDetailsInput = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "focusSkin": "jumpStartTextAreaSkin",
        "height": "100dp",
        "id": "volunteerMyProfileWorkDetailsInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "numberOfVisibleLines": 3,
        "skin": "jumpStartTextAreaSkin",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "autoCorrect": false
    });
    var volunteerMyProfileAboutMeTitle = new kony.ui.Label({
        "id": "volunteerMyProfileAboutMeTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
        "text": "About Me",
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
    var volunteerMyProfileAboutMeInput = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "focusSkin": "jumpStartTextAreaSkin",
        "height": "100dp",
        "id": "volunteerMyProfileAboutMeInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "numberOfVisibleLines": 3,
        "skin": "jumpStartTextAreaSkin",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "autoCorrect": false
    });
    var volunteerMyProfileCompanyTitle = new kony.ui.Label({
        "id": "volunteerMyProfileCompanyTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
        "text": "Company Name*",
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
    var volunteerMyProfileCompanyInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "volunteerMyProfileCompanyInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
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
        "autoComplete": false,
        "autoCorrect": false
    });
    var volunteerMyProfileRoleTitle = new kony.ui.Label({
        "id": "volunteerMyProfileRoleTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
        "text": "Role*",
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
    var volunteerMyProfileRoleInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "volunteerMyProfileRoleInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
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
        "autoComplete": false,
        "autoCorrect": false
    });
    var volunteerMyProfileBusinessUnitTitle = new kony.ui.Label({
        "id": "volunteerMyProfileBusinessUnitTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
        "text": "Business Unit",
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
    var volunteerMyProfileBusinessUnitInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "volunteerMyProfileBusinessUnitInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
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
        "autoComplete": false,
        "autoCorrect": false
    });
    var volunteerMyProfileStateTitle = new kony.ui.Label({
        "id": "volunteerMyProfileStateTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
        "text": "State*",
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
    var volunteerMyProfileStateInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "volunteerMyProfileStateInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
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
        "autoComplete": false,
        "autoCorrect": false
    });
    var volunteerMyProfileAddressTitle = new kony.ui.Label({
        "id": "volunteerMyProfileAddressTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
        "text": "Address*",
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
    var volunteerMyProfileAddressInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "volunteerMyProfileAddressInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
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
        "autoComplete": false,
        "autoCorrect": false
    });
    var volunteerMyProfileContactNumberTitle = new kony.ui.Label({
        "id": "volunteerMyProfileContactNumberTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
        "text": "Contact Number*",
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
    var volunteerMyProfileContactNumberInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "volunteerMyProfileContactNumberInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "secureTextEntry": false,
        "skin": "jumpStartStandardInputField",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "top": "5dp",
        "width": "100%",
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
    var volunteerMyProfileEmailAddressTitle = new kony.ui.Label({
        "id": "volunteerMyProfileEmailAddressTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
        "text": "Email Address*",
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
    var volunteerMyProfileEmailAddressInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "volunteerMyProfileEmailAddressInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
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
        "autoComplete": false,
        "autoCorrect": false
    });
    var volunteerMyProfileSkillListContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerMyProfileSkillListContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    volunteerMyProfileSkillListContainer.setDefaultUnit(kony.flex.DP);
    var volunteerMyProfileSkillsList = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerMyProfileSkillsList",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "85%",
        "zIndex": 1
    }, {}, {});
    volunteerMyProfileSkillsList.setDefaultUnit(kony.flex.DP);
    var volunteerMyProfileSkillInputField = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "volunteerMyProfileSkillInputField",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "secureTextEntry": false,
        "skin": "jumpStartStandardInputField",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "100%",
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
    volunteerMyProfileSkillsList.add(volunteerMyProfileSkillInputField);
    var volunteerMyProfileAddNewSkill = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "0dp",
        "clipBounds": true,
        "id": "volunteerMyProfileAddNewSkill",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    volunteerMyProfileAddNewSkill.setDefaultUnit(kony.flex.DP);
    var volunteerMyProfileAddSkill = new kony.ui.Button({
        "bottom": "0dp",
        "focusSkin": "jumpStartGreenButton200",
        "height": "40dp",
        "id": "volunteerMyProfileAddSkill",
        "isVisible": true,
        "left": 0,
        "right": "0dp",
        "skin": "jumpStartBlackButton",
        "text": "+",
        "top": 0,
        "width": "40dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerMyProfileAddNewSkill.add(volunteerMyProfileAddSkill);
    volunteerMyProfileSkillListContainer.add(volunteerMyProfileSkillsList, volunteerMyProfileAddNewSkill);
    var volunteerMyProfileSkillTags = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerMyProfileSkillTags",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    volunteerMyProfileSkillTags.setDefaultUnit(kony.flex.DP);
    var volunteerMyProfileSkillSegment = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "volunteerMyProfileSkillItem": ""
        }],
        "groupCells": false,
        "id": "volunteerMyProfileSkillSegment",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FBox0e89732147d1641,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "volunteerMyProfileSkillItem": "volunteerMyProfileSkillItem"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerMyProfileSkillTags.add(volunteerMyProfileSkillSegment);
    var volunteerMyProfileAvailabilityLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "volunteerMyProfileAvailabilityLabel",
        "isVisible": true,
        "skin": "jumpStartLabel100",
        "text": "Availability*",
        "top": "20dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var volunteerMyProfileScheduleLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "volunteerMyProfileScheduleLabel",
        "isVisible": true,
        "skin": "CopyslLabel02fc111ae931f4f",
        "text": "Schedule",
        "top": "20dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var volunteerMyProfileDaysOfTheWeekContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "40dp",
        "id": "volunteerMyProfileDaysOfTheWeekContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "CopyslFbox0acdf85d25e6545",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    volunteerMyProfileDaysOfTheWeekContainer.setDefaultUnit(kony.flex.DP);
    volunteerMyProfileDaysOfTheWeekContainer.add();
    var volunteerMyProfileTimeContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "15dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerMyProfileTimeContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "top": "20dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    volunteerMyProfileTimeContainer.setDefaultUnit(kony.flex.DP);
    var fromTimeContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fromTimeContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "45%"
    }, {}, {});
    fromTimeContainer.setDefaultUnit(kony.flex.DP);
    var lblFrom = new kony.ui.Label({
        "id": "lblFrom",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel02f4686c0437c47",
        "text": "From",
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
    var volunteerMyProfileFromMeridiem = new kony.ui.ListBox({
        "focusSkin": "jumpStartDropDown100",
        "height": "70dp",
        "id": "volunteerMyProfileFromMeridiem",
        "isVisible": true,
        "masterData": [
            ["AM", "AM"],
            ["PM", "PM"]
        ],
        "right": 0,
        "selectedKey": "AM",
        "selectedKeyValue": ["AM", "AM"],
        "skin": "jumpStartDropDown100",
        "top": "25dp",
        "width": "35%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fromTimeContainer.add(lblFrom, volunteerMyProfileFromMeridiem);
    var toTimeContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "toTimeContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "45%"
    }, {}, {});
    toTimeContainer.setDefaultUnit(kony.flex.DP);
    var lblTo = new kony.ui.Label({
        "id": "lblTo",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel02f4686c0437c47",
        "text": "To",
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
    var volunteerMyProfileToMeridiem = new kony.ui.ListBox({
        "focusSkin": "jumpStartDropDown100",
        "height": "70dp",
        "id": "volunteerMyProfileToMeridiem",
        "isVisible": true,
        "masterData": [
            ["AM", "AM"],
            ["PM", "PM"]
        ],
        "right": 0,
        "selectedKey": "AM",
        "selectedKeyValue": ["AM", "AM"],
        "skin": "jumpStartDropDown100",
        "top": "25dp",
        "width": "35%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    toTimeContainer.add(lblTo, volunteerMyProfileToMeridiem);
    volunteerMyProfileTimeContainer.add(fromTimeContainer, toTimeContainer);
    volunteerMyProfileBody.add(volunteerMyProfileFirstNameTitle, volunteerMyProfileFirstNameInput, volunteerMyProfileLastNameTitle, volunteerMyProfileLastNameInput, volunteerMyProfileUsernameTitle, volunteerMyProfileUsernameInput, volunteerMyProfilePasswordTitle, volunteerMyProfilePasswordInput, volunteerMyProfileReenterPasswordTitle, volunteerMyProfileReenterPasswordInput, volunteerMyProfileWorkDetailsTitle, volunteerMyProfileWorkDetailsInput, volunteerMyProfileAboutMeTitle, volunteerMyProfileAboutMeInput, volunteerMyProfileCompanyTitle, volunteerMyProfileCompanyInput, volunteerMyProfileRoleTitle, volunteerMyProfileRoleInput, volunteerMyProfileBusinessUnitTitle, volunteerMyProfileBusinessUnitInput, volunteerMyProfileStateTitle, volunteerMyProfileStateInput, volunteerMyProfileAddressTitle, volunteerMyProfileAddressInput, volunteerMyProfileContactNumberTitle, volunteerMyProfileContactNumberInput, volunteerMyProfileEmailAddressTitle, volunteerMyProfileEmailAddressInput, volunteerMyProfileSkillListContainer, volunteerMyProfileSkillTags, volunteerMyProfileAvailabilityLabel, volunteerMyProfileScheduleLabel, volunteerMyProfileDaysOfTheWeekContainer, volunteerMyProfileTimeContainer);
    var volunteerMyProfileFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "volunteerMyProfileFooter",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "jumpStartBGFFFBorder214",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    volunteerMyProfileFooter.setDefaultUnit(kony.flex.DP);
    var volunteerMyProfileSaveButton = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "focusSkin": "jumpStartGreenButton120",
        "height": "40dp",
        "id": "volunteerMyProfileSaveButton",
        "isVisible": true,
        "onClick": AS_Button_316c1434585e4b74809eb7f27e585eb1,
        "skin": "jumpStartGreenButton110",
        "text": "Save",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerMyProfileFooter.add(volunteerMyProfileSaveButton);
    volunteerMyProfilePage.add(volunteerMyProfileHeader, volunteerMyProfileBody, volunteerMyProfileFooter);
};

function volunteerMyProfilePageGlobals() {
    volunteerMyProfilePage = new kony.ui.Form2({
        "addWidgets": addWidgetsvolunteerMyProfilePage,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "id": "volunteerMyProfilePage",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": false,
        "skin": "jumpStartFormBGFFF"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
    volunteerMyProfilePage.info = {
        "notesId": "978359e3903240dfb78c032239f21d2b",
        "kuid": "978359e3903240dfb78c032239f21d2b"
    };
};