//actions.js file 
function activity_acceptRequestCancel_onTouchStart(eventobject, x, y) {
    return AS_RichText_dc484199ad004556881eb9bf4a117c0f(eventobject, x, y);
}

function AS_RichText_dc484199ad004556881eb9bf4a117c0f(eventobject, x, y) {
    return closeModal.call(this);
}

function activity_acceptTaskButton_onClick(eventobject) {
    return AS_Button_e04575295a194fac83b2a430a78f83ad(eventobject);
}

function AS_Button_e04575295a194fac83b2a430a78f83ad(eventobject) {
    function SHOW_ALERT__3a08468624404da9b9a6790b3c565778_True() {}
    VolAcceptTaskBtn.call(this);
    mainPage.show();
}

function activity_acceptTaskDetailsPreviousParent_onClick(eventobject) {
    return AS_FlexContainer_a9b7c2a1e29842379edf92fc604340b9(eventobject);
}

function AS_FlexContainer_a9b7c2a1e29842379edf92fc604340b9(eventobject) {
    return closeModal.call(this);
}

function activity_acceptTaskSkillsPreviousParent_onClick(eventobject) {
    return AS_Button_b3b28f3c172144378c1c9e4a9d8b4738(eventobject);
}

function AS_Button_b3b28f3c172144378c1c9e4a9d8b4738(eventobject) {
    return fadeOutThisModal.call(this, mainPage.acceptTaskSkillsModalContainer);
}

function activity_agreeToTaskButton_onClick(eventobject) {
    return AS_Button_76f1a39663974d7bae74ccbc28d3c429(eventobject);
}

function AS_Button_76f1a39663974d7bae74ccbc28d3c429(eventobject) {}

function activity_cancelEngagement_onClick(eventobject) {
    return AS_Button_6c414d0da69e45eb9e18a50ec0d9274d(eventobject);
}

function AS_Button_6c414d0da69e45eb9e18a50ec0d9274d(eventobject) {
    mainPage.startEngagementModalContainer.isVisible = false;
    mainPage.show();
}

function activity_cancelRequest_onClick(eventobject, linktext, attributes) {
    return AS_RichText_a8fe80bfbf2e418ca8cfeea30b981e7f(eventobject, linktext, attributes);
}

function AS_RichText_a8fe80bfbf2e418ca8cfeea30b981e7f(eventobject, linktext, attributes) {
    saveReqForCancel.call(this, context);
    saveCancelVolReqId.call(this, null);
}

function activity_declineRequestNo_onClick(eventobject, linktext, attributes) {
    return AS_RichText_135583c3a6e44cdb9f1f24b2fbc9aaca(eventobject, linktext, attributes);
}

function AS_RichText_135583c3a6e44cdb9f1f24b2fbc9aaca(eventobject, linktext, attributes) {
    return closeModal.call(this);
}

function activity_declineRequest_onClick() {
    return AS_RichText_6ba9770d62c743cdab62cff095284540();
}

function AS_RichText_6ba9770d62c743cdab62cff095284540() {
    mainPage.declineRequestModalContainer.isVisible = true;
    saveReqForBusDecline.call(this, dec);
}

function activity_requestTask_onClick(eventobject, linktext, attributes, context) {
    return AS_RichText_85d484007c2e4304a6d3b7ae6c841d8b(eventobject, linktext, attributes, context);
}

function AS_RichText_85d484007c2e4304a6d3b7ae6c841d8b(eventobject, linktext, attributes, context) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        //alert("going inside business");
        //  indeginousCancelRequest();
        mainPage.startEngagementModalContainer.isVisible = true;
    } else {
        //  alert("going inside volunteer");
        mainPage.acceptRequestModalContainer.isVisible = true;
        //write salma's code
    }
    saveReqForBusStartEngae.call(this, context);
    saveReqId.call(this, context);
}

function activity_startEngagementPreviousParent_onClick(eventobject) {
    return AS_FlexContainer_8d92dc546c0a420bb37705944e794b3b(eventobject);
}

function AS_FlexContainer_8d92dc546c0a420bb37705944e794b3b(eventobject) {
    return closeModal.call(this);
}

function activity_startEngagement_onClick(eventobject) {
    return AS_Button_8937be6ef1c14c11b1799fe6815abc7e(eventobject);
}

function AS_Button_8937be6ef1c14c11b1799fe6815abc7e(eventobject) {
    function SHOW_ALERT__fb69992dd17440ddbecebec1fc81e811_True() {}
    indeginousTaskDetails.call(this);
    mainPage.startEngagementModalContainer.isVisible = false;
    mainPage.show();
}

function AS_Button_04cfbb34142c469d81d8ca8d5bc65e0d(eventobject) {}

function AS_Button_07cb5338058a42b381366e0fd754fe1a(eventobject) {}

function AS_Button_0d87a87ab5bd4552a60cca8b24ed2876(eventobject) {
    return requestVolunteerByBusiness1.call(this);
}

function AS_Button_175a73b33d63400f969d9134fd454626(eventobject) {
    registrationProfessionalPage.show();
}

function AS_Button_1de03b70f35049199d0592659096a750(eventobject) {
    sortResponse(gblResponse);
}

function AS_Button_1e558d2401b1484cb57b63d2de564a20(eventobject) {
    navigateToPage.call(this, eventobject);
    mainPage.mainPageBody.mainPageContentParent.flxMessageConversation.isVisible = false;
    mainPage.mainPageBody.mainPageContentParent.myNotifications.isVisible = false;
}

function AS_Button_2734c15dfb1342599c619a91e8e7d7b1(eventobject) {
    mainPage.show();
}

function AS_Button_2c9ae795eb29424bae81f77c391655ae(eventobject) {
    registrationPersonalPage.show();
}

function AS_Button_316c1434585e4b74809eb7f27e585eb1(eventobject) {
    mainPage.show();
}

function AS_Button_3d555c25db1f4257a45b1f9c9ba15f18(eventobject) {
    searchPage.show();
}

function AS_Button_464ff8ae4d34452392e51dcda0fde9cc(eventobject) {}

function AS_Button_4fdeea05da88431a9ce240d34a2851e9(eventobject) {}

function AS_Button_56849e05360f4daba001e01291f6323e(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        alert("going inside business");
        indeginousCancelRequest();
        //mamata
        mainPage.cancelRequestModalContainer.isVisible = false;
        mainPage.show();
    } else {
        VolCancelRequest();
        //mamata
        mainPage.cancelRequestModalContainer.isVisible = false;
        mainPage.show();
        //write salma's code
    }
}

function AS_Button_5cb898ce6daa4ba4920eb9c31b42f005(eventobject) {}

function AS_Button_6a726122f1104df9b4d53ee762d4a566(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        searchBusiness();
        gblIsVol = false;
    } else {
        //no action should be done
    }
}

function AS_Button_7fd9c2662e634e54b06436e93997e627(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        //alert("he is business");
        requestVolunteer();
    } else {
        //   alert("he is volunteer");
        requestVolunteerByBusiness1();
    }
    searchPage.show();
}

function AS_Button_80dfa1bc68ad4325be817ed653bc9943(eventobject) {
    alert("accept is clikkd");
    VolAcceptRequest.call(this);
    mainPage.show();
}

function AS_Button_83a5650a1fd54092aa2fecae3e7cddb2(eventobject) {}

function AS_Button_8afe8ca6dbbf42a2a114ef8737651ad5(eventobject) {
    registrationPage.show();
}

function AS_Button_955cf9953a2247fcadf0db3a8cd5c45d(eventobject, x, y) {
    kony.application.exit();
}

function AS_Button_9fdeea2ac381493487b212d4f139425a(eventobject) {}

function AS_Button_a7b0aead332447b8bef76dcfcc1fdabe(eventobject) {
    return navigateToMainFromInfoPage.call(this);
}

function AS_Button_af46e1839f6e43c5a3361243e5d819f1(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        //no action should be done
    } else {
        volunteerService();
        gblIsVol = true;
    }
}

function AS_Button_b8b7e62c17ff4f09978c26587cf3c336(eventobject) {
    mainPage.startEngagementModalContainer.isVisible = false;
    mainPage.show();
}

function AS_Button_bf13d655d651476b89dd33aadd1589ba(eventobject) {
    registrationAccountPage.show();
}

function AS_Button_c8e58c278dc843529e6299794c8f659c(eventobject) {
    return searchData.call(this);
}

function AS_Button_c9123c82f53f477c91c06dc10c90cf3a(eventobject) {}

function AS_Button_d9548a946ba24ef5a52b3107c5a81fe9(eventobject) {
    openSendVolunteerRequestModal11.call(this);
}

function AS_Button_e53dc5e292c44b34a1ffdfbdf33fd8d8(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        indeginousDeclineRequest();
        //mamata
        mainPage.declineRequestModalContainer.isVisible = false;
        mainPage.show();
    } else {
        VolDeclineRequest();
        //mamata
        mainPage.declineRequestModalContainer.isVisible = false;
        mainPage.show();
    }
}

function AS_Button_f27476381d2c47589514da1ebb5535c3(eventobject) {
    registrationPersonalPage.show();
}

function AS_Button_f3075a508e024615b2e365abb06ea12b(eventobject) {
    return openSendVolunteerRequestModal.call(this);
}

function AS_Button_fe953aeb6be94dfcb3ee8c7a51645924(eventobject) {
    registrationSchedulePage.show();
}

function AS_FlexContainer_00116715facc4593b10937138e2d90aa(eventobject, x, y) {
    return expandCollapseGroup.call(this, eventobject, "myClosedTasks");
}

function AS_FlexContainer_0407b52146f0413f9b0212904f89215f(eventobject, x, y) {}

function AS_FlexContainer_0e6293c240514d6a9a0aab5dff06be18(eventobject, x, y) {}

function AS_FlexContainer_18223dc817e54775982182354f7f2662(eventobject, x, y) {}

function AS_FlexContainer_19ea59bfb360457584767ccede694730(eventobject, x, y) {}

function AS_FlexContainer_263c73d94f7c4fb89cdab6eee512e067(eventobject, x, y) {}

function AS_FlexContainer_367d0b6842624f579e9a5e58c9766a61(eventobject, x, y) {}

function AS_FlexContainer_419555f6d1944647bc52c183eef72c57(eventobject, x, y) {}

function AS_FlexContainer_485f51a4822a4e759c93ec4b98fe60bc(eventobject, x, y) {}

function AS_FlexContainer_494ae416d6d04db69d1d2ec5f3d65c93(eventobject) {
    function STYLE_ACTION____9f0740741abd41928cc87687a7939572_Callback() {}
    mainPage.mainPageModalsBackground["isVisible"] = true;
    mainPage.mainPageModalsBackground.animate(kony.ui.createAnimation({
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

function AS_FlexContainer_5dc50c25822441908725817f568d0d08(eventobject, x, y) {
    return requestToVolunteerSetup.call(this);
}

function AS_FlexContainer_601f7677d0e84dd79d22d8e1e1759e80(eventobject, x, y) {
    return hideSideBar.call(this);
}

function AS_FlexContainer_613d997a7d3049df9e1a52c2860ed7f5(eventobject, x, y) {}

function AS_FlexContainer_68bb06f902124fb6886bd60ba2722fe7(eventobject, x, y) {}

function AS_FlexContainer_950d5751f8994b5faf88079c88c9172f(eventobject, x, y) {}

function AS_FlexContainer_98ad2948134c4b5bbf52dc62fa833805(eventobject) {}

function AS_FlexContainer_99a99ac5ad5e41798db3cd0d51d72592(eventobject, x, y) {}

function AS_FlexContainer_9ed07e389047407ab01f2c345a779980(eventobject, x, y) {}

function AS_FlexContainer_a26b51c0f2e54fb9bb5a9d9ed22add4c(eventobject, x, y) {}

function AS_FlexContainer_c585874625264a289cab83378cb279d4(eventobject) {}

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

function AS_Form_42a11d3c371641b28b461909f0aad3b7(eventobject) {
    if (gblIsVol == true) {
        searchResultProfile.businessProfileContainer.isVisible = false;
        searchResultProfile.volunteerRequestContainer.isVisible = false;
        searchResultProfile.volunteerProfileContainer.isVisible = true;
    } else {
        searchResultProfile.volunteerProfileContainer.isVisible = true;
        searchResultProfile.volunteerRequestContainer.isVisible = false;
        searchResultProfile.businessProfileContainer.isVisible = false;
    }
}

function AS_Form_683e8141b8fd42a0898dcaa41d91db36(eventobject) {
    initAppHeader();
    //alert("entering");
    mainPage.cancelRequestModalContainer.isVisible = false;
    if (kony.store.getItem("isBusOrVol") == "business") {
        // alert("It is business");
        // mainPage.mainPageBody.searchBarContainer.appHeaderTitleContainer.lblBusorVolName.text=kony.store.getItem(busLoginName);
        getBusinessRequestsService();
    } else {
        // alert("it is volunteer");
        //   mainPage.mainPageBody.searchBarContainer.appHeaderTitleContainer.lblBusorVolName.text=kony.store.getItem(volLoginName);
        getVolunteerRequestsService1();
    }
}

function AS_Form_856f4203a0514bdd9ad9964c7526a80a(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        gblIsVol = false;
        searchBusiness();
        searchPage.businessBtn.skin = "CopyslButtonGlossBlue0ae29c855fda143";
        searchPage.volunteerBtn.skin = "CopyslButtonGlossBlue05330b12903d140";
    } else {
        gblIsVol = true;
        volunteerService();
        searchPage.businessBtn.skin = "CopyslButtonGlossBlue05330b12903d140";
        searchPage.volunteerBtn.skin = "CopyslButtonGlossBlue0ae29c855fda143";
    }
}

function AS_Label_016ee17f3d7848ff84abe81557b8e9ad(eventobject, x, y) {
    return navigateToPage.call(this, eventobject);
}

function AS_Label_23df805b483e437dbbf7b2c98f49f344(eventobject, x, y) {}

function AS_Label_380e2922cf4c443891127554814912cf(eventobject, x, y) {}

function AS_Label_43c8aa57d9474437a79a4f0ccea4979b(eventobject, x, y) {}

function AS_Label_66b927334c324dd6a7ca90f1ab686138(eventobject, x, y) {
    return navigateToPage.call(this, eventobject);
}

function AS_Label_6f4ae2570f154799b143e04476af131f(eventobject, x, y) {
    return closeSendVolunteerRequestModal.call(this);
}

function AS_Label_968591ad4b7d43a39c8ad03c40a3fe22(eventobject, x, y) {}

function AS_Label_98407b61245b427f89b9495b7effe858(eventobject, x, y) {
    return navigateToPage.call(this, eventobject);
}

function AS_Label_ab98a8fc211a4dcb95f056c0810f154a(eventobject, x, y) {}

function AS_Label_b4172a3037a7474c862e44f90dacb3f2(eventobject, x, y) {
    return navigateToPage.call(this, eventobject);
}

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

function AS_RichText_4aa2825b6d21400bb786f06eee737ea2(eventobject, linktext, attributes, context) {
    saveClosedTaskDetails.call(this, context);
}

function AS_RichText_55b2af90803e4a41b41f97f284e70dda(eventobject, linktext, attributes, context) {
    mainPage.cancelRequestModalContainer.isVisible = true;
    saveCancelVolReqId.call(this, context);
    saveReqForCancel.call(this, context);
}

function AS_RichText_5fe0b013d5cd4df68b5c961f47978705(eventobject, linktext, attributes) {
    //mamata
    mainPage.declineRequestModalContainer.isVisible = false;
    mainPage.show();
}

function AS_RichText_71610d1cc94c44ebab8199fdf7ab5b2b(eventobject, linktext, attributes) {}

function AS_RichText_9230d3beb1b94c34995122d6e8139943(eventobject, linktext, attributes) {
    //mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.acceptedRequestsTop.acceptedRequestInfoParent.acceptedRequestStatus=pending;
    mainPage.cancelRequestModalContainer.isVisible = false;
    mainPage.show();
}

function AS_RichText_95a6e28e049a4bda931f0b230a4a7128(eventobject, linktext, attributes, context) {
    mainPage.declineRequestModalContainer.isVisible = true;
    saveReqForBusDecline.call(this, context);
    saveDeclineVolReqId.call(this, context);
}

function AS_RichText_97e5661ca5e14986af20d1088bdd4fc3(eventobject, linktext, attributes, context) {
    return viewRequest.call(this);
}

function AS_RichText_c97243dc6e13409ebf46ec8ef34c1357(eventobject, linktext, attributes) {
    function SHOW_ALERT_ide_onClick_23e268eef2df407795877d3fa945a80a_True() {}

    function SHOW_ALERT_ide_onClick_23e268eef2df407795877d3fa945a80a_Callback() {
        SHOW_ALERT_ide_onClick_23e268eef2df407795877d3fa945a80a_True()
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": "Corporate info!",
        "yesLabel": "Corporate info!",
        "message": "Corporate info!",
        "alertHandler": SHOW_ALERT_ide_onClick_23e268eef2df407795877d3fa945a80a_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}

function AS_RichText_d9d84b758a9f421f9d83da3d47417c5b(eventobject, linktext, attributes, context) {}

function AS_RichText_e3aee1ae013e4111a55c362d7f768c08(eventobject, x, y) {
    return closeModal.call(this);
}

function AS_RichText_f1342c5021ec46068c03ed07300dbd87(eventobject, linktext, attributes) {
    mainPage.show();
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

function AS_RichText_fa45a6f0ef24436dbc6b83d021c77e25(eventobject, linktext, attributes, context) {
    var segItems = mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.selectedRowItems;
    alert(JSON.stringify(segItems));
}

function AS_Segment_40a3c921256e40bd85f3e68049e6ad36(eventobject, sectionNumber, rowNumber) {
    if (gblIsVol == true) {
        //alert("row is "+JSON.stringify(searchPage.volunteerdataSegment.selectedRowItems));
        // searchPage.volunteerdataSegment.s
        var selReqId = searchPage.volunteerdataSegment.selectedRowItems[0].volunteerId;
        kony.store.setItem("selReqId", selReqId);
        //alert("row clicked vol"+kony.store.getItem("selReqId"));
        //volunteerProfilePageService(selReqId);
        volunteerProfilePageService();
    } else {
        //alert("row is "+JSON.stringify(searchPage.volunteerdataSegment.selectedRowItems));
        var selReqId = searchPage.volunteerdataSegment.selectedRowItems[0].volunteerId;
        kony.store.setItem("selReqId", selReqId);
        IndigenousBusinessProfileService();
        //alert("row clicked business"+kony.store.getItem("selReqId"));
    }
}

function AS_Segment_cc1833b9062c482fb8b23f76f61ef7ac(eventobject, sectionNumber, rowNumber) {
    return navToMsgScreen.call(this);
}

function AS_Segment_ec434ffdffe34cc3ab1a9e6ad1b694eb(eventobject, sectionNumber, rowNumber) {}

function AS_Segment_edded707bff6488c98e88c1487d9d4e3(eventobject, sectionNumber, rowNumber) {
    if (gblIsVol == true) {
        //alert("row is "+JSON.stringify(searchPage.volunteerdataSegment.selectedRowItems));
        // searchPage.volunteerdataSegment.s
        var selReqId = searchPage.volunteerdataSegment.selectedRowItems[0].volunteerId;
        kony.store.setItem("selReqId", selReqId);
        //alert("row clicked vol"+kony.store.getItem("selReqId"));
        //volunteerProfilePageService(selReqId);
        volunteerProfilePageService();
    } else {
        //alert("row is "+JSON.stringify(searchPage.volunteerdataSegment.selectedRowItems));
        var selReqId = searchPage.volunteerdataSegment.selectedRowItems[0].volunteerId;
        kony.store.setItem("selReqId", selReqId);
        IndigenousBusinessProfileService();
        //alert("row clicked business"+kony.store.getItem("selReqId"));
    }
}

function AS_TextField_b0e239699a344fa4af76f618d418760f(eventobject, changedtext) {
    return onRegFieldUpdate.call(this, eventobject);
}

function businessDetailsConfirmation_buttons_onClick(eventobject) {
    return AS_Button_3f0b779809604cbebc08b5f48b09b3dd(eventobject);
}

function AS_Button_3f0b779809604cbebc08b5f48b09b3dd(eventobject) {
    return onBusinessDetailsButtonToggle.call(this, eventobject);
}

function businessDetailsConfirmation_onConfirm_onClick(eventobject) {
    return AS_Button_fffee9df82384213aed6037aa6abf457(eventobject);
}

function AS_Button_fffee9df82384213aed6037aa6abf457(eventobject) {
    return confirmBusinessDetails.call(this);
}

function businessDetailsConfirmation_textFieldUpdate_onTextChange(eventobject, changedtext) {
    return AS_TextField_76fc6da85889407eb4b1eb48be13eb7b(eventobject, changedtext);
}

function AS_TextField_76fc6da85889407eb4b1eb48be13eb7b(eventobject, changedtext) {
    return onBusinessDetailsUpdate.call(this, eventobject);
}

function login_registerButton_onTouchStart(eventobject, x, y) {
    return AS_Label_2e641c70f5f84f80bb2d8fe88102e950(eventobject, x, y);
}

function AS_Label_2e641c70f5f84f80bb2d8fe88102e950(eventobject, x, y) {
    registrationPage.show();
}

function login_signInButton_action_onTouchStart(eventobject, x, y) {
    return AS_Button_c55a88368de54c408d5a02eef07ad463(eventobject, x, y);
}

function AS_Button_c55a88368de54c408d5a02eef07ad463(eventobject, x, y) {
    loginService.call(this);
}

function mainPage_acceptTaskEngagment_action_onClick(eventobject, linktext, attributes, context) {
    return AS_RichText_78687b17505c48ef9ec3726f0ba1d95d(eventobject, linktext, attributes, context);
}

function AS_RichText_78687b17505c48ef9ec3726f0ba1d95d(eventobject, linktext, attributes, context) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        //alert("going inside business");
        //  indeginousCancelRequest();
        mainPage.startEngagementModalContainer.isVisible = true;
    } else {
        //  alert("going inside volunteer");
        mainPage.acceptTaskDetailsModalContainer.isVisible = true;
        //write salma's code
    }
    saveReqForBusStartEngae.call(this, context);
    getTaskDetailsForVol.call(this, context);
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        TaskDetailsForVolunteer();
    }
}

function mainPage_action_init(eventobject) {
    return AS_Form_dcd4f36745254f0291473c0a0d9fc778(eventobject);
}

function AS_Form_dcd4f36745254f0291473c0a0d9fc778(eventobject) {
    return
}

function mainPage_action_postShow(eventobject) {
    return AS_Form_c073dd72101c4b70836933a7f19d254a(eventobject);
}

function AS_Form_c073dd72101c4b70836933a7f19d254a(eventobject) {
    setGroupsToClose.call(this);
    notificationService.call(this);
    setSegData.call(this, null);
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

function AS_RichText_33e420002b474104a5b6e9bec3f82699(eventobject, x, y) {}

function mainPage_searchButtonContainer_action_onClick(eventobject) {
    return AS_FlexContainer_babb3e4e57d246a597598f76fcdf9374(eventobject);
}

function AS_FlexContainer_babb3e4e57d246a597598f76fcdf9374(eventobject) {
    return goToSearchPage.call(this);
}

function registrationAccountPage_continue_onClick(eventobject) {
    return AS_Button_bcbbff717f3d44baa85e01e8e388552d(eventobject);
}

function AS_Button_bcbbff717f3d44baa85e01e8e388552d(eventobject) {
    return submitAccountInfo.call(this);
}

function registrationDonePage_continueButton_onClick(eventobject) {
    return AS_Button_a468a95fbe7e4cafbd454fc5ec558d92(eventobject);
}

function AS_Button_a468a95fbe7e4cafbd454fc5ec558d92(eventobject) {
    login.show();
}

function registrationPersonalPage_continue_onClick(eventobject) {
    return AS_Button_fa66164ea64f4016979992ff3a464ad7(eventobject);
}

function AS_Button_fa66164ea64f4016979992ff3a464ad7(eventobject) {
    return submitPersonalInfo.call(this);
}

function registrationProfessionalPage_continue_onClick(eventobject) {
    return AS_Button_6c6b552ce8594adeb1ed7ccdddd213a0(eventobject);
}

function AS_Button_6c6b552ce8594adeb1ed7ccdddd213a0(eventobject) {
    return submitProfessionalInfo.call(this);
}

function registrationScheduleInfoPage_continue_onClick(eventobject) {
    return AS_Button_0e0b60a287be4f9a9c6fddeb813125b5(eventobject);
}

function AS_Button_0e0b60a287be4f9a9c6fddeb813125b5(eventobject) {
    return submitScheduleInfo.call(this);
}

function registration_addNewSkill_onClick(eventobject, x, y) {
    return AS_FlexContainer_fcc498e6663e40768ed0b376737c1e66(eventobject, x, y);
}

function AS_FlexContainer_fcc498e6663e40768ed0b376737c1e66(eventobject, x, y) {
    return addNewSkill.call(this);
}

function registration_cancelOutsideHours_onTouchStart(eventobject, x, y) {
    return AS_RichText_cc11bc18ec5f417295c622bdded5da6b(eventobject, x, y);
}

function AS_RichText_cc11bc18ec5f417295c622bdded5da6b(eventobject, x, y) {
    return hideOutsideHoursModal.call(this);
}

function registration_cancelRegister_onClick(eventobject) {
    return AS_Button_063412544d60470685da5107ca9ccd90(eventobject);
}

function AS_Button_063412544d60470685da5107ca9ccd90(eventobject) {
    login.show();
    registrationPage.destroy();
}

function registration_outsideHoursAgreeContinue_onClick(eventobject) {
    return AS_Button_3f5d4786a61e4507804b2e211de4800a(eventobject);
}

function AS_Button_3f5d4786a61e4507804b2e211de4800a(eventobject) {
    return hoursAgreeAndContinue.call(this);
}

function registration_regDaysButton_onClick(eventobject) {
    return AS_Button_96f53f9d2528473e839285f80c2202b8(eventobject);
}

function AS_Button_96f53f9d2528473e839285f80c2202b8(eventobject) {
    return toggleDay.call(this, eventobject);
}

function registration_registerComplete_onClick(eventobject) {
    return AS_Button_cb90a5ede5774015985fe53dbbc6a6a8(eventobject);
}

function AS_Button_cb90a5ede5774015985fe53dbbc6a6a8(eventobject) {
    return submitRegistration.call(this);
}

function registration_removeSkill_onRowClick(eventobject, sectionNumber, rowNumber) {
    return AS_Segment_3ff11be923a849cc90fa3ce499285671(eventobject, sectionNumber, rowNumber);
}

function AS_Segment_3ff11be923a849cc90fa3ce499285671(eventobject, sectionNumber, rowNumber) {
    return removeSkill.call(this, null);
}

function registration_textFieldUpdate_onTextChange(eventobject, changedtext) {
    return AS_TextField_dec149723ae44feda7c94d18d3e123f7(eventobject, changedtext);
}

function AS_TextField_dec149723ae44feda7c94d18d3e123f7(eventobject, changedtext) {
    return onRegFieldUpdate.call(this, eventobject);
}

function registration_timeWheelSelection_onSelection(eventobject) {
    return AS_ListBox_db4a8dab83fc4abe9a5a3265ca96d017(eventobject);
}

function AS_ListBox_db4a8dab83fc4abe9a5a3265ca96d017(eventobject) {
    return onTimeChange.call(this, eventobject);
}

function search_backButton_onClick(eventobject) {
    return AS_Button_8fa8e6b553644a8aa8f131bdc76b36c0(eventobject);
}

function AS_Button_8fa8e6b553644a8aa8f131bdc76b36c0(eventobject) {
    mainPage.show();
    searchPage.destroy();
    mainPage.show();
}

function slideMenu_myProfile_onTouchStart(eventobject, x, y) {
    return AS_RichText_c054155ae9024a5a9c2305607e76e4d8(eventobject, x, y);
}

function AS_RichText_c054155ae9024a5a9c2305607e76e4d8(eventobject, x, y) {
    return navigateToMyProfile.call(this);
}

function userInfoPage_action_init(eventobject) {
    return AS_Form_0955c260e9cd47709155085e6373b9c2(eventobject);
}

function AS_Form_0955c260e9cd47709155085e6373b9c2(eventobject) {
    return getUserInfo.call(this);
}