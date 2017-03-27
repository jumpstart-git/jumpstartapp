//actions.js file 
function AS_Button_04cfbb34142c469d81d8ca8d5bc65e0d(eventobject) {}

function AS_Button_07cb5338058a42b381366e0fd754fe1a(eventobject) {}

function AS_Button_464ff8ae4d34452392e51dcda0fde9cc(eventobject) {}

function AS_Button_4fdeea05da88431a9ce240d34a2851e9(eventobject) {}

function AS_Button_83a5650a1fd54092aa2fecae3e7cddb2(eventobject) {}

function AS_Button_9fdeea2ac381493487b212d4f139425a(eventobject) {}

function AS_Button_a7b0aead332447b8bef76dcfcc1fdabe(eventobject) {
    return navigateToMainFromInfoPage.call(this);
}

function AS_Button_a93e10a5592041748f5b144c42614cf7(eventobject) {
    function SHOW_ALERT_ide_onClick_022452f1e73d42eba33943f0a3c02d79_True() {}

    function SHOW_ALERT_ide_onClick_022452f1e73d42eba33943f0a3c02d79_False() {}

    function SHOW_ALERT_ide_onClick_022452f1e73d42eba33943f0a3c02d79_Callback(response) {
        if (response == true) {
            SHOW_ALERT_ide_onClick_022452f1e73d42eba33943f0a3c02d79_True()
        } else {
            SHOW_ALERT_ide_onClick_022452f1e73d42eba33943f0a3c02d79_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Register",
        "yesLabel": "Reg",
        "noLabel": "No",
        "message": "Register!",
        "alertHandler": SHOW_ALERT_ide_onClick_022452f1e73d42eba33943f0a3c02d79_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}

function AS_Button_c9123c82f53f477c91c06dc10c90cf3a(eventobject) {}

function AS_FlexContainer_00116715facc4593b10937138e2d90aa(eventobject, x, y) {
    return expandCollapseGroup.call(this, eventobject, "myClosedTasks");
}

function AS_FlexContainer_0407b52146f0413f9b0212904f89215f(eventobject, x, y) {}

function AS_FlexContainer_0e6293c240514d6a9a0aab5dff06be18(eventobject, x, y) {}

function AS_FlexContainer_18223dc817e54775982182354f7f2662(eventobject, x, y) {}

function AS_FlexContainer_19ea59bfb360457584767ccede694730(eventobject, x, y) {}

function AS_FlexContainer_1ce7b80c7082418baa359014bb7ede6c(eventobject, x, y) {}

function AS_FlexContainer_263c73d94f7c4fb89cdab6eee512e067(eventobject, x, y) {}

function AS_FlexContainer_367d0b6842624f579e9a5e58c9766a61(eventobject, x, y) {}

function AS_FlexContainer_419555f6d1944647bc52c183eef72c57(eventobject, x, y) {}

function AS_FlexContainer_485f51a4822a4e759c93ec4b98fe60bc(eventobject, x, y) {}

function AS_FlexContainer_494ae416d6d04db69d1d2ec5f3d65c93(eventobject) {
    function STYLE_ACTION____9f0740741abd41928cc87687a7939572_Callback() {}
    mainPage["mainPageModalsBackground"]["isVisible"] = true;
    mainPage["mainPageModalsBackground"].animate(kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "backgroundColor": "7a7a7a00",
            "opacity": 0.4
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": STYLE_ACTION____9f0740741abd41928cc87687a7939572_Callback
    });
}

function AS_FlexContainer_542e8ed04a80413e96a847a7ba911ea9(eventobject, x, y) {}

function AS_FlexContainer_561e4566722944e5aaa6bef07be858ee(eventobject, x, y) {}

function AS_FlexContainer_601f7677d0e84dd79d22d8e1e1759e80(eventobject, x, y) {
    return hideSideBar.call(this);
}

function AS_FlexContainer_613d997a7d3049df9e1a52c2860ed7f5(eventobject, x, y) {}

function AS_FlexContainer_68bb06f902124fb6886bd60ba2722fe7(eventobject, x, y) {}

function AS_FlexContainer_950d5751f8994b5faf88079c88c9172f(eventobject, x, y) {}

function AS_FlexContainer_99a99ac5ad5e41798db3cd0d51d72592(eventobject, x, y) {}

function AS_FlexContainer_9ed07e389047407ab01f2c345a779980(eventobject, x, y) {}

function AS_FlexContainer_a26b51c0f2e54fb9bb5a9d9ed22add4c(eventobject, x, y) {}

function AS_FlexContainer_cae27a7e255946aba75457f13ce68dd9(eventobject, x, y) {}

function AS_FlexContainer_ceb3b0ff16104efb92156424858da73a(eventobject, x, y) {}

function AS_FlexContainer_d0341f9b96924e6b862ae7c95fbeda06(eventobject, x, y) {}

function AS_FlexContainer_d83f2a41f50a437795e2a454ac3be0ed(eventobject, x, y) {}

function AS_FlexContainer_db749c3e3091495bba286a9afa2bbdd5(eventobject, x, y) {}

function AS_FlexContainer_dd5e6f1aa54942bf9bd5df995121d3fe(eventobject, x, y) {
    return expandCollapseGroup.call(this, eventobject, "myOpenTasks");
}

function AS_FlexContainer_e942b364329c4bfdb7027d857cb5692b(eventobject, x, y) {
    return showSideBar.call(this);
}

function AS_FlexScrollContainer_46ba22050f78404b85f1e14fda58771d(eventobject) {}

function AS_FlexScrollContainer_604aa26b23e94155b12581a5ad8219d8(eventobject) {}

function AS_FlexScrollContainer_6223cf7066574e4890bf5fcc94858ad6(eventobject) {}

function AS_FlexScrollContainer_8be4a7ba3d8e4b698a2be7f9a515b99c(eventobject) {}

function AS_FlexScrollContainer_d243823fe54342afb5d45776a177f97b(eventobject) {}

function AS_Label_380e2922cf4c443891127554814912cf(eventobject, x, y) {}

function AS_Label_43c8aa57d9474437a79a4f0ccea4979b(eventobject, x, y) {}

function AS_Label_968591ad4b7d43a39c8ad03c40a3fe22(eventobject, x, y) {}

function AS_Label_ab98a8fc211a4dcb95f056c0810f154a(eventobject, x, y) {}

function AS_RichText_25939b8e86014441b5a47e1b246b12e6(eventobject, linktext, attributes) {
    function SHOW_ALERT_ide_onClick_2dd5cb226a764f779f6f03045bd5bb9c_True() {}

    function SHOW_ALERT_ide_onClick_2dd5cb226a764f779f6f03045bd5bb9c_Callback() {
        SHOW_ALERT_ide_onClick_2dd5cb226a764f779f6f03045bd5bb9c_True()
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": "Corporate info!",
        "yesLabel": "Corporate info!",
        "message": "Corporate info!",
        "alertHandler": SHOW_ALERT_ide_onClick_2dd5cb226a764f779f6f03045bd5bb9c_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}

function AS_RichText_39b50ab4a8304fbabfd147601b1115a7(eventobject, x, y) {
    return logoutOfApplication.call(this);
}

function AS_RichText_3fc8f3649dc0423693cca225ffde6dea(eventobject, linktext, attributes, context) {
    return contactRequest.call(this);
}

function AS_RichText_57fa332524fe40b1aa1bb21c1ffc1719(eventobject, linktext, attributes, context) {
    return cancelRequest.call(this);
}

function AS_RichText_641d61ec9ed04ebf83a6a73483803c03(eventobject, linktext, attributes) {
    function SHOW_ALERT_ide_onClick_fc0e1e422efe4b7f9d080012d1d493a8_True() {}

    function SHOW_ALERT_ide_onClick_fc0e1e422efe4b7f9d080012d1d493a8_Callback() {
        SHOW_ALERT_ide_onClick_fc0e1e422efe4b7f9d080012d1d493a8_True()
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": "Corporate info!",
        "yesLabel": "Corporate info!",
        "message": "Corporate info!",
        "alertHandler": SHOW_ALERT_ide_onClick_fc0e1e422efe4b7f9d080012d1d493a8_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}

function AS_RichText_694546690d134c5c8af728be31dfde82(eventobject, linktext, attributes) {
    login.show();
}

function AS_RichText_b9caabfe7b674232807cfe3c02a37407(eventobject, linktext, attributes, context) {
    return acceptTask.call(this);
}

function AS_RichText_c054155ae9024a5a9c2305607e76e4d8(eventobject, x, y) {
    return navigateToMyProfile.call(this);
}

function AS_RichText_f489ec06928743ef8d3bb1e9a931c066(eventobject, linktext, attributes) {
    function SHOW_ALERT_ide_onClick_10fd7ab7bcf941839610a200a559e409_True() {}

    function SHOW_ALERT_ide_onClick_10fd7ab7bcf941839610a200a559e409_Callback() {
        SHOW_ALERT_ide_onClick_10fd7ab7bcf941839610a200a559e409_True()
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": "Corporate info!",
        "yesLabel": "Corporate info!",
        "message": "Corporate info!",
        "alertHandler": SHOW_ALERT_ide_onClick_10fd7ab7bcf941839610a200a559e409_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}

function AS_RichText_fa46cfad39294ace854ccd1a5a469413(eventobject, linktext, attributes) {
    function SHOW_ALERT_ide_onClick_12068c189fda4e05b66a44c89f44e0f2_True() {}

    function SHOW_ALERT_ide_onClick_12068c189fda4e05b66a44c89f44e0f2_Callback() {
        SHOW_ALERT_ide_onClick_12068c189fda4e05b66a44c89f44e0f2_True()
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": "Corporate info!",
        "yesLabel": "Corporate info!",
        "message": "Corporate info!",
        "alertHandler": SHOW_ALERT_ide_onClick_12068c189fda4e05b66a44c89f44e0f2_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}

function AS_Segment_ec434ffdffe34cc3ab1a9e6ad1b694eb(eventobject, sectionNumber, rowNumber) {}

function login_signInButton_action_onTouchStart(eventobject, x, y) {
    return AS_Button_c55a88368de54c408d5a02eef07ad463(eventobject, x, y);
}

function AS_Button_c55a88368de54c408d5a02eef07ad463(eventobject, x, y) {
    return doSignIn.call(this);
}

function mainPage_acceptTask_action_onClick(eventobject, linktext, attributes, context) {
    return AS_RichText_78687b17505c48ef9ec3726f0ba1d95d(eventobject, linktext, attributes, context);
}

function AS_RichText_78687b17505c48ef9ec3726f0ba1d95d(eventobject, linktext, attributes, context) {
    return acceptTask.call(this);
}

function mainPage_action_init(eventobject) {
    return AS_Form_dcd4f36745254f0291473c0a0d9fc778(eventobject);
}

function AS_Form_dcd4f36745254f0291473c0a0d9fc778(eventobject) {
    return initMainPage.call(this);
}

function mainPage_action_postShow(eventobject) {
    return AS_Form_c073dd72101c4b70836933a7f19d254a(eventobject);
}

function AS_Form_c073dd72101c4b70836933a7f19d254a(eventobject) {
    return setGroupsToClose.call(this);
}

function mainPage_cancelRequest_action_onClick(eventobject, linktext, attributes, context) {
    return AS_RichText_a8fe80bfbf2e418ca8cfeea30b981e7f(eventobject, linktext, attributes, context);
}

function AS_RichText_a8fe80bfbf2e418ca8cfeea30b981e7f(eventobject, linktext, attributes, context) {
    return cancelRequest.call(this);
}

function mainPage_contactRequest_action_onClick(eventobject, linktext, attributes, context) {
    return AS_RichText_d139311450264a85ba1ca9faefef3f8a(eventobject, linktext, attributes, context);
}

function AS_RichText_d139311450264a85ba1ca9faefef3f8a(eventobject, linktext, attributes, context) {
    return contactRequest.call(this);
}

function mainPage_navBarScroller_action_onTouchEnd(eventobject, x, y) {
    return AS_Label_aa89a83117354a428c60df29bee9a46c(eventobject, x, y);
}

function AS_Label_aa89a83117354a428c60df29bee9a46c(eventobject, x, y) {
    return navigateToPage.call(this, eventobject);
}

function mainPage_requestModal_action_onTouchStart(eventobject, x, y) {
    return AS_RichText_33e420002b474104a5b6e9bec3f82699(eventobject, x, y);
}

function AS_RichText_33e420002b474104a5b6e9bec3f82699(eventobject, x, y) {
    return closeModal.call(this);
}

function mainPage_searchButtonContainer_action_onClick(eventobject) {
    return AS_FlexContainer_babb3e4e57d246a597598f76fcdf9374(eventobject);
}

function AS_FlexContainer_babb3e4e57d246a597598f76fcdf9374(eventobject) {
    return goToSearchPage.call(this);
}

function userInfoPage_action_init(eventobject) {
    return AS_Form_0955c260e9cd47709155085e6373b9c2(eventobject);
}

function AS_Form_0955c260e9cd47709155085e6373b9c2(eventobject) {
    return getUserInfo.call(this);
}