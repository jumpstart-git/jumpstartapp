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
        "onTouchStart": AS_Image_fd8eba264c9143189babb4bea113c3fc,
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
        "centerX": "50.00%",
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
        "skin": "jumpStartLabel10099",
        "text": "First name*",
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
        "onTextChange": AS_TextField_dc1e9ff886644e3197f422537d69455c,
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
        "skin": "jumpStartLabel10099",
        "text": "Last name*",
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
        "onTextChange": AS_TextField_1abf52a14b8b41d7b457e170b2cb77c9,
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
        "skin": "jumpStartLabel10099",
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
        "onTextChange": AS_TextField_5659650338ed492494b9f858ceb83373,
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
        "skin": "jumpStartLabel10099",
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
        "onTextChange": AS_TextField_aa024ef3cb084fa9a2b41693f0bf3cdc,
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
        "left": "1dp",
        "skin": "jumpStartLabel10099",
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
        "onTextChange": AS_TextField_ae290058a08a4ad0a0459f12d784ff52,
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
        "skin": "jumpStartLabel10099",
        "text": "Work experience*",
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
        "onTextChange": AS_TextArea_ac195e0dc95744119ba6b9195b097add,
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
        "skin": "jumpStartLabel10099",
        "text": "About me*",
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
        "onTextChange": AS_TextArea_fe2bb2b434114b0c9b9a8bb4acd31f9f,
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
        "skin": "jumpStartLabel10099",
        "text": "Company name*",
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
    var volunteerMyProfileCompanyInput = new kony.ui.ListBox({
        "focusSkin": "CopyslListBox07b8b0953251a47",
        "height": "40dp",
        "id": "volunteerMyProfileCompanyInput",
        "isVisible": true,
        "left": "0",
        "masterData": [
            ["Select", "Select from drop down list"],
            ["CBA", "CBA"],
            ["DXC", "DXC"],
            ["SupplyNation", "SupplyNation"]
        ],
        "onSelection": AS_ListBox_469dfb8eb7a74714b3e9b7d558b2dcae,
        "skin": "CopyslListBox008256acffc1a4b",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var volunteerMyProfileRoleTitle = new kony.ui.Label({
        "id": "volunteerMyProfileRoleTitle",
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
        "onTextChange": AS_TextField_f859a507a1984459a9b0527f17b10f32,
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
        "skin": "jumpStartLabel10099",
        "text": "Business unit",
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
    var regBusinessUnitInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "regBusinessUnitInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "onTextChange": AS_TextField_93e59fd514bc461fb9433771e452ac55,
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
        "left": "1dp",
        "skin": "jumpStartLabel10099",
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
    var volunteerMyProfileStateInput = new kony.ui.ListBox({
        "focusSkin": "CopyjumpStartDropDown047480d92c4004a",
        "height": "40dp",
        "id": "volunteerMyProfileStateInput",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["Select", "Select from drop down list"],
            ["NSW", "New South Wales"],
            ["ACT", "Australian Capital Territory"],
            ["QLD", "Queensland"],
            ["SA", "South Australia"],
            ["TAS", "Tasmania"],
            ["WA", "Western Australia"],
            ["NT", "Northern Territory"],
            ["VIC", "Victoria"]
        ],
        "onSelection": AS_ListBox_8a3b81e21f92454abbdb7ee1f20c0255,
        "skin": "jumpStartDropDown100",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var volunteerMyProfileAddressTitle = new kony.ui.Label({
        "id": "volunteerMyProfileAddressTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
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
        "onTextChange": AS_TextField_6e61c630845840748ff7f9ba9ac7033f,
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
        "skin": "jumpStartLabel10099",
        "text": "Contact number*",
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
        "onTextChange": AS_TextField_e6e55cea7bae4981b3b6cc6b5427ae22,
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
        "skin": "jumpStartLabel10099",
        "text": "Email address*",
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
        "onTextChange": AS_TextField_d05d6d132c4b4747a7cbf6dc381fad1b,
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
        "clipBounds": true,
        "id": "volunteerMyProfileSkillListContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
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
        "width": "85%",
        "zIndex": 1
    }, {}, {});
    volunteerMyProfileSkillsList.setDefaultUnit(kony.flex.DP);
    var volunteerMyProfileSkillInputField = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "volunteerMyProfileSkillInputField",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "secureTextEntry": false,
        "skin": "jumpStartStandardInputField",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
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
        "skin": "CopyslFbox031eaa932cffc41",
        "top": "0dp",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    volunteerMyProfileAddNewSkill.setDefaultUnit(kony.flex.DP);
    var volunteerMyProfileAddSkill = new kony.ui.Button({
        "bottom": "0dp",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "40dp",
        "id": "volunteerMyProfileAddSkill",
        "isVisible": true,
        "left": 0,
        "onClick": AS_Button_47f078e3a22f4674b7e9178a14c00f23,
        "right": "0dp",
        "skin": "ngnyPrimaryGreenButton",
        "text": "Add",
        "top": 125,
        "width": "50dp",
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
            "imgClose": "imgdelete.PNG",
            "volunteerMyProfileSkillItem": ""
        }],
        "groupCells": false,
        "id": "volunteerMyProfileSkillSegment",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_1a35f0773f8f485484cb32855b01b64f,
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
            "imgClose": "imgClose",
            "volunteerMyProfileSkillItem": "volunteerMyProfileSkillItem"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerMyProfileSkillTags.add(volunteerMyProfileSkillSegment);
    var volunteerMyProfileScheduleLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "volunteerMyProfileScheduleLabel",
        "isVisible": true,
        "skin": "CopyslLabel02fc111ae931f4f",
        "text": "Schedule information",
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
    var volunteerMyProfileScheduleInfoContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "80%",
        "id": "volunteerMyProfileScheduleInfoContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "3%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    volunteerMyProfileScheduleInfoContainer.setDefaultUnit(kony.flex.DP);
    var CopyregScheduleHeadingsContainer0d79665b2f9c545 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "CopyregScheduleHeadingsContainer0d79665b2f9c545",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyregScheduleHeadingsContainer0d79665b2f9c545.setDefaultUnit(kony.flex.DP);
    var CopyAvaialabilityLabel051f0edd0ebc744 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyAvaialabilityLabel051f0edd0ebc744",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0138de9d7ded645",
        "text": "Availability*",
        "top": "3%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyregScheduleHeadingsContainer0d79665b2f9c545.add(CopyAvaialabilityLabel051f0edd0ebc744);
    var CopyregScheduleDatesFlex0e378c84e573e49 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "CopyregScheduleDatesFlex0e378c84e573e49",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyregScheduleDatesFlex0e378c84e573e49.setDefaultUnit(kony.flex.DP);
    var listDays = new kony.ui.ListBox({
        "centerX": "50%",
        "height": "40dp",
        "id": "listDays",
        "isVisible": true,
        "left": "0dp",
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
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblFromTime07d4b3afcf74b4a = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopylblFromTime07d4b3afcf74b4a",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel017064f17fbcf4c",
        "text": "FromTime",
        "top": "20%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var listFromTime = new kony.ui.ListBox({
        "centerX": "25%",
        "height": "40dp",
        "id": "listFromTime",
        "isVisible": true,
        "left": "0dp",
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
        "top": "28%",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var listEndTime = new kony.ui.ListBox({
        "centerX": "25%",
        "height": "40dp",
        "id": "listEndTime",
        "isVisible": true,
        "left": "0dp",
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
        "top": "60%",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var listFromTimeMeridiam = new kony.ui.ListBox({
        "centerX": "75%",
        "height": "40dp",
        "id": "listFromTimeMeridiam",
        "isVisible": true,
        "left": "45%",
        "masterData": [
            ["AM", "AM"],
            ["PM", "PM"]
        ],
        "skin": "jumpStartDropDown100",
        "top": "28%",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var listEndTimeMeridiam = new kony.ui.ListBox({
        "centerX": "75%",
        "height": "40dp",
        "id": "listEndTimeMeridiam",
        "isVisible": true,
        "left": "45%",
        "masterData": [
            ["AM", "AM"],
            ["PM", "PM"]
        ],
        "skin": "jumpStartDropDown100",
        "top": "60%",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblTotime048af1bdb577146 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopylblTotime048af1bdb577146",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0bc64944d36fe48",
        "text": "ToTime",
        "top": "50%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CopyAddBtn0ecfcdaab0ea24b = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "40dp",
        "id": "CopyAddBtn0ecfcdaab0ea24b",
        "isVisible": true,
        "left": "0%",
        "onClick": AS_Button_e48ea3d0216f4aa9ba7a123e8a3ba25d,
        "skin": "ngnyPrimaryGreenButton",
        "text": "+ Add Schedule",
        "top": "83%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyregScheduleDatesFlex0e378c84e573e49.add(listDays, CopylblFromTime07d4b3afcf74b4a, listFromTime, listEndTime, listFromTimeMeridiam, listEndTimeMeridiam, CopylblTotime048af1bdb577146, CopyAddBtn0ecfcdaab0ea24b);
    volunteerMyProfileScheduleInfoContainer.add(CopyregScheduleHeadingsContainer0d79665b2f9c545, CopyregScheduleDatesFlex0e378c84e573e49);
    var volunteerMyProfileAddScheduleContainer = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bounces": true,
        "centerX": "50%",
        "clipBounds": true,
        "enableScrolling": true,
        "horizontalScrollIndicator": true,
        "id": "volunteerMyProfileAddScheduleContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "3%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    volunteerMyProfileAddScheduleContainer.setDefaultUnit(kony.flex.DP);
    var segUpdateSchedule = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "availId": "",
            "imgclose": "pinbsal.png",
            "lblSchedule": ""
        }],
        "groupCells": false,
        "id": "segUpdateSchedule",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_95b5c42be7254c9abc10553956bdbc57,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0e44cedc5151547",
        "rowTemplate": CopyFBox0c6a7a9e8b6494b,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "0dp",
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
    }, {});
    volunteerMyProfileAddScheduleContainer.add(segUpdateSchedule);
    var DeleteVolunteerButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "45dp",
        "id": "DeleteVolunteerButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "78dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    DeleteVolunteerButtonContainer.setDefaultUnit(kony.flex.DP);
    var DeleteVolunteerButton = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "focusSkin": "ngnyPressedRegistrationButton",
        "height": "40dp",
        "id": "DeleteVolunteerButton",
        "isVisible": true,
        "left": "13dp",
        "onClick": AS_Button_8679ef5475084e8496bae19a15ca4630,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Delete account",
        "top": "12dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    DeleteVolunteerButtonContainer.add(DeleteVolunteerButton);
    volunteerMyProfileBody.add(volunteerMyProfileFirstNameTitle, volunteerMyProfileFirstNameInput, volunteerMyProfileLastNameTitle, volunteerMyProfileLastNameInput, volunteerMyProfileUsernameTitle, volunteerMyProfileUsernameInput, volunteerMyProfilePasswordTitle, volunteerMyProfilePasswordInput, volunteerMyProfileReenterPasswordTitle, volunteerMyProfileReenterPasswordInput, volunteerMyProfileWorkDetailsTitle, volunteerMyProfileWorkDetailsInput, volunteerMyProfileAboutMeTitle, volunteerMyProfileAboutMeInput, volunteerMyProfileCompanyTitle, volunteerMyProfileCompanyInput, volunteerMyProfileRoleTitle, volunteerMyProfileRoleInput, volunteerMyProfileBusinessUnitTitle, regBusinessUnitInput, volunteerMyProfileStateTitle, volunteerMyProfileStateInput, volunteerMyProfileAddressTitle, volunteerMyProfileAddressInput, volunteerMyProfileContactNumberTitle, volunteerMyProfileContactNumberInput, volunteerMyProfileEmailAddressTitle, volunteerMyProfileEmailAddressInput, volunteerMyProfileSkillListContainer, volunteerMyProfileSkillTags, volunteerMyProfileScheduleLabel, volunteerMyProfileScheduleInfoContainer, volunteerMyProfileAddScheduleContainer, DeleteVolunteerButtonContainer);
    var outsidemodal = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "93.07%",
        "id": "outsidemodal",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "generalModalBG",
        "top": -440,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    outsidemodal.setDefaultUnit(kony.flex.DP);
    var outsidecontainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "70%",
        "id": "outsidecontainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "jumpStartBGFFF",
        "top": "0dp",
        "width": "96.88%",
        "zIndex": 1
    }, {}, {});
    outsidecontainer.setDefaultUnit(kony.flex.DP);
    var updateScheduleOutsideHoursHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "updateScheduleOutsideHoursHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchStart": AS_FlexContainer_0039c2f5581b4110aa4794159d292036,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    updateScheduleOutsideHoursHeader.setDefaultUnit(kony.flex.DP);
    var requestModalTitle = new kony.ui.Label({
        "centerX": "48.44%",
        "centerY": "27.32%",
        "id": "requestModalTitle",
        "isVisible": true,
        "skin": "ngnyOrangeLabelText",
        "text": "Warning",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    updateScheduleOutsideHoursHeader.add(requestModalTitle);
    var updateScheduleOutsideHoursBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50.55%",
        "id": "updateScheduleOutsideHoursBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    updateScheduleOutsideHoursBody.setDefaultUnit(kony.flex.DP);
    var updateScheduleOutsideHoursText = new kony.ui.RichText({
        "centerX": "50.00%",
        "id": "updateScheduleOutsideHoursText",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartRT140",
        "text": "You have entered a schedule outside regular working hours. By choosing to continue, you acknowledge that this will invalidate your working hours in the report",
        "top": "55dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {});
    updateScheduleOutsideHoursBody.add(updateScheduleOutsideHoursText);
    var updateScheduleOutsideHoursFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "35%",
        "id": "updateScheduleOutsideHoursFooter",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "15dp",
        "skin": "slFbox",
        "top": "225dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    updateScheduleOutsideHoursFooter.setDefaultUnit(kony.flex.DP);
    var updateOutsideHoursYes = new kony.ui.Button({
        "centerX": "42%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "50dp",
        "id": "updateOutsideHoursYes",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_f43836994bb94ce2bebfdf4b6cb90080,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Agree and continue",
        "top": 0,
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var updateOutsideHoursNo = new kony.ui.RichText({
        "centerX": "42%",
        "id": "updateOutsideHoursNo",
        "isVisible": true,
        "onTouchStart": AS_RichText_cc11bc18ec5f417295c622bdded5da6b,
        "skin": "markAsComplete",
        "text": "Cancel",
        "top": 20,
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    updateScheduleOutsideHoursFooter.add(updateOutsideHoursYes, updateOutsideHoursNo);
    outsidecontainer.add(updateScheduleOutsideHoursHeader, updateScheduleOutsideHoursBody, updateScheduleOutsideHoursFooter);
    outsidemodal.add(outsidecontainer);
    var volunteerMyProfileFooter2Buttons = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "45dp",
        "id": "volunteerMyProfileFooter2Buttons",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "jumpStartBGFFFBorder214",
        "top": "8dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    volunteerMyProfileFooter2Buttons.setDefaultUnit(kony.flex.DP);
    var continue1 = new kony.ui.Button({
        "centerX": "26.129999999999995%",
        "centerY": "47.64%",
        "focusSkin": "jumpStartGrayButton110",
        "height": "45dp",
        "id": "continue1",
        "isVisible": true,
        "onClick": AS_Button_4ff3c85804b5438b9b0253f363f21b6f,
        "skin": "jumpStartGrayButton110",
        "text": "Cancel",
        "width": "46%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Save = new kony.ui.Button({
        "centerX": "74%",
        "centerY": "48.82%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "45dp",
        "id": "Save",
        "isVisible": true,
        "onClick": AS_Button_fb3c6d49ec334ea0b2cf004b5b14f901,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Save",
        "width": "46%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerMyProfileFooter2Buttons.add(continue1, Save);
    volunteerMyProfilePage.add(volunteerMyProfileHeader, volunteerMyProfileBody, outsidemodal, volunteerMyProfileFooter2Buttons);
};

function volunteerMyProfilePageGlobals() {
    volunteerMyProfilePage = new kony.ui.Form2({
        "addWidgets": addWidgetsvolunteerMyProfilePage,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "id": "volunteerMyProfilePage",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": false,
        "preShow": AS_Form_833c2ef1247647218d4860e015dfecbe,
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