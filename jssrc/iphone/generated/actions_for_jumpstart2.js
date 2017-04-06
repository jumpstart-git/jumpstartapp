//actions.js file 
function AcceptedRequest_SentSegmentCallContainer(eventobject, x, y) {
    return AS_FlexContainer_a98dd2502cf84883a678f6e9d321c3e5(eventobject, x, y);
}

function AS_FlexContainer_a98dd2502cf84883a678f6e9d321c3e5(eventobject, x, y) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        var segTypeCheckforVolCall = kony.store.getItem("segmentType");
        // alert(segType1);
        try {
            if (segTypeCheckforVolCall != "null" || segTypeCheckforVolCall != null) {
                if (segTypeCheckforVolCall == "sent") {
                    //alert("Isinde open seg " + segType1);
                    callContactSentSeg();
                }
            }
        } catch (e) {
            //alert(e);
        }
    } else {
        var segTypeforBusCal = kony.store.getItem("segmentType");
        //alert("the clicked segTypement is ="+segTypeforBusCal);
        try {
            if (segTypeforBusCal != "null" || segTypeforBusCal != null) {
                //     //alert("Inside Accepted segType after first segType");
                if (segTypeforBusCal == "accepted") {
                    // alert("Inside Accepted segType");
                    callBusFromAcceptedSeg();
                }
            }
        } catch (e) {
            alert("aError is" + e);
        }
    }
}

function activity_acceptRequestCancel_onTouchStart(eventobject, x, y) {
    return AS_RichText_dc484199ad004556881eb9bf4a117c0f(eventobject, x, y);
}

function AS_RichText_dc484199ad004556881eb9bf4a117c0f(eventobject, x, y) {
    mainPage.acceptRequestModalContainer.isVisible = false;
    mainPage.show();
}

function activity_acceptTaskButton_onClick(eventobject) {
    return AS_Button_e04575295a194fac83b2a430a78f83ad(eventobject);
}

function AS_Button_e04575295a194fac83b2a430a78f83ad(eventobject) {
    function SHOW_ALERT__3a08468624404da9b9a6790b3c565778_True() {}
    VolAcceptTaskBtn.call(this);
    // mainPage.acceptTaskDetailsModalContainer.isVisible=false;
    // mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.removeAll(); 
    // mainPage.destroy();
    // mainPage.show(); 
}

function activity_acceptTaskDetailsPreviousParent_onClick(eventobject) {
    return AS_FlexContainer_a9b7c2a1e29842379edf92fc604340b9(eventobject);
}

function AS_FlexContainer_a9b7c2a1e29842379edf92fc604340b9(eventobject) {
    mainPage.acceptTaskDetailsModalContainer.isVisible = false;
    //mainPage.show(); 
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
    mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskTitleField.text = "";
    mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskDetailsTextArea.text = "";
    //mainPage.show();
}

function activity_cancelRequest_onClick(eventobject, linktext, attributes) {
    return AS_RichText_a8fe80bfbf2e418ca8cfeea30b981e7f(eventobject, linktext, attributes);
}

function AS_RichText_a8fe80bfbf2e418ca8cfeea30b981e7f(eventobject, linktext, attributes) {
    saveReqForCancel.call(this);
    saveCancelVolReqId.call(this);
}

function activity_declineRequestNo_onClick(eventobject, linktext, attributes) {
    return AS_RichText_135583c3a6e44cdb9f1f24b2fbc9aaca(eventobject, linktext, attributes);
}

function AS_RichText_135583c3a6e44cdb9f1f24b2fbc9aaca(eventobject, linktext, attributes) {}

function activity_declineRequest_onClick() {
    return AS_RichText_6ba9770d62c743cdab62cff095284540();
}

function AS_RichText_6ba9770d62c743cdab62cff095284540() {
    mainPage.declineRequestModalContainer.isVisible = true;
    saveReqForBusDecline.call(this);
}

function activity_requestTask_onClick(eventobject, linktext, attributes, context) {
    return AS_RichText_85d484007c2e4304a6d3b7ae6c841d8b(eventobject, linktext, attributes, context);
}

function AS_RichText_85d484007c2e4304a6d3b7ae6c841d8b(eventobject, linktext, attributes, context) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        getBusinessReqTaskDetailsService();
        // getBusinessReqTaskDetailsService();
        //     BusinessExistingTaskTaskService ();
        //     mainPage.startEngagementModalContainer.startEngagementModalHeader.startEngagmentHeaderDetails.startEngagmentHeaderDetailsParent.lblStartEngagementBusinessName.text=kony.store.getItem("loginBusinessName");
        //     mainPage.startEngagementModalContainer.isVisible=true;
        //     //start merin
        //     var d= new Date();
        //     var day=d.getDate();
        //     var month=d.getMonth();
        //     month=month+1;
        //     var year=d.getFullYear();
        //     var todayDate=day+"/"+month+"/"+year;
        //     kony.store.setItem("todayDate", todayDate);
        //     //end merin
        //     mainPage.startEngagementModalContainer.startEngagementModalBody.startDateCalendarInput.dateComponents=[day,month,year]; 
        //     mainPage.startEngagementModalContainer.startEngagementModalBody.endDateCalendarInput.dateComponents=[day,month,year];
        var seg1 = mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.sentRequestsSegment.selectedRowItems;
        var segment1 = seg1[0].segType;
        kony.store.setItem("segmentType", segment1);
    } else {
        mainPage.acceptRequestModalContainer.isVisible = true;
    }
    saveReqForBusStartEngaeSent.call(this);
    saveReqId.call(this);
    if (kony.store.getItem("isBusOrVol") == "business") {
        saveBusIdForVolViewProfileSentSeg();
    }
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
    function SHOW_ALERT__fb69992dd17440ddbecebec1fc81e811_True() {} //indeginousTaskDetails();
    var title = mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskTitleField.text;
    var details = mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskDetailsTextArea.text;
    var endDate = mainPage.startEngagementModalContainer.startEngagementModalBody.endDateCalendarInput.formattedDate;
    var startDate = mainPage.startEngagementModalContainer.startEngagementModalBody.startDateCalendarInput.formattedDate;
    var hours = mainPage.startEngagementModalContainer.startEngagementModalBody.duratationOfEngagementInput.text;
    var endDate1 = kony.store.getItem("todayDate"); //   give todays's date'
    var startdate1 = mainPage.startEngagementModalContainer.startEngagementModalBody.startDateCalendarInput.formattedDate;
    var isValidEndDate = validateDate(startDate, endDate);
    var isValidStartEnd = validateStartDate(startdate1, endDate1);
    if (title === null || title === "" || title === "null") {
        alert("Please enter a task title");
    } else if (details === null || details === "" || details === "null") {
        alert("Please enter task details");
    } else if (hours == null || hours == "null" || hours == "") {
        alert("Please enter hours required to complete the task");
    } else {
        //alert("isValidStartEnd"+isValidStartEnd);
        if (isValidStartEnd === false) {
            validationAlert("Start Date should be greater than or equal to today's date");
        } else if (isValidEndDate === false) {
            validationAlert("End Date should be greater than or equal to start date");
        } else {
            //alert("done");
            indeginousTaskDetails();
        }
    }
}

function AS_Button_04cfbb34142c469d81d8ca8d5bc65e0d(eventobject) {}

function AS_Button_06308078c9ae4d1dab30aae8e5b60b81(eventobject) {
    mainPage.BusinessRequestTaskDetailsModal.isVisible = false;
}

function AS_Button_0758697c36314de6be86afd5f5e75602(eventobject) {
    return getScheduleFormat.call(this);
}

function AS_Button_07cb5338058a42b381366e0fd754fe1a(eventobject) {}

function AS_Button_084a6e37b3e34b0c848a45390f3b841a(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        //alert("he is business");
        var busMsg = searchResultProfile.volunteerRequestContainer.requestAVolunteerModal.requestAVolunteerBody.requestAVolunteerMessageInput.text;
        if (busMsg == "null" || busMsg == null || busMsg == "") {
            alert("Please enter a message");
        } else {
            requestVolunteer();
        }
    }
    //   }else
    //     {
    //    //   alert("he is volunteer");
    //       requestVolunteerByBusiness1();
    //     }
}

function AS_Button_0d87a87ab5bd4552a60cca8b24ed2876(eventobject) {
    var msg = searchResultProfile.volunteerRequestContainer.requestToVolunteerModal.requestToVolunteerBody.requestRoleInput.text;
    //alert(msg);
    if (msg == "null" || msg == null || msg == "") {
        alert("Please enter a message");
    } else {
        requestVolunteerByBusiness1();
    }
    // searchResultProfile.requestToVolunteerModal.isVisible=false;
    // searchPage.show(); 
}

function AS_Button_102b6bf5ed1848b1ab72a98c4080fef5(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        //alert("he is business");
        var busMsg = searchResultProfile.volunteerRequestContainer.requestAVolunteerModal.requestAVolunteerBody.requestAVolunteerMessageInput.text;
        if (busMsg == "null" || busMsg == null || busMsg == "") {
            alert("Please enter a message");
        } else {
            requestVolunteer();
        }
    }
    //   }else
    //     {
    //    //   alert("he is volunteer");
    //       requestVolunteerByBusiness1();
    //     }
}

function AS_Button_102be19028bf4b8e8c5f3de8263022bb(eventobject) {
    return validateRegCode.call(this);
}

function AS_Button_14fdc6cb313143f196223ab1015052fe(eventobject) {
    volSendReview();
    mainPage.sendRecommendation.isVisible = false;
    //mainPage.sendRecommendation.sendRecommendationModalBody.sendRecommendationTextArea.text=" ";
}

function AS_Button_175a73b33d63400f969d9134fd454626(eventobject) {
    registrationProfessionalPage.show();
}

function AS_Button_1b9973fd47864a118682f953ae6422ed(eventobject) {
    mainPage.TaskDetailsContainer.isVisible = false;
    //mainPage.show(); 
}

function AS_Button_1de03b70f35049199d0592659096a750(eventobject) {
    sortResponse(gblResponse);
}

function AS_Button_1e558d2401b1484cb57b63d2de564a20(eventobject) {
    navigateToPage.call(this, eventobject);
    mainPage.mainPageBody.mainPageContentParent.flxMessageConversation.isVisible = false;
    mainPage.mainPageBody.mainPageContentParent.myNotifications.isVisible = false;
}

function AS_Button_1f098121ce6c4698b0dc798f7c6da987(eventobject) {
    mainPage.opportunityDetailsContainer.isVisible = false;
}

function AS_Button_1f1d256a0d474bd4b26ffc3450d28bf6(eventobject) {
    ReportingPage.ReportingContainer.ReportingActionsContainer.corporateFlexContainer.corporateIndicatorFlex.isVisible = true;
    ReportingPage.ReportingContainer.ReportingActionsContainer.supplyNationContainer.supplyNationIndicator.isVisible = false;
    ReportingPage.ReportingContainer.ReportingActionsContainer.IndigenousBusinessContainer.BusinessIndicator.isVisible = false;
}

function AS_Button_21f4bcf587e04140b67e181fc9636919(eventobject) {
    mainPage.sendRecommendation.isVisible = false;
}

function AS_Button_23bd5ad8dd7044d085841214812e8dee(eventobject) {
    mainPage.destroy();
    mainPage.show();
}

function AS_Button_24626042ea3c4c8c8cb8dcee6fe73a5a(eventobject) {
    login.show();
}

function AS_Button_2734c15dfb1342599c619a91e8e7d7b1(eventobject) {
    mainPage.show();
}

function AS_Button_299155e915f7426b899f826f4d634775(eventobject) {
    //searchResultProfile.titleBarSkin="merinnow";
    //gblMer=true;
    BusOpenTaskExistingService();
    var d1 = new Date();
    var day1 = d1.getDate();
    var month1 = d1.getMonth();
    month1 = month1 + 1;
    var year1 = d1.getFullYear();
    var todayDate1 = day1 + "/" + month1 + "/" + year1;
    kony.store.setItem("todayDate", todayDate1);
    var volName = kony.store.getItem("VolNameForStartEngagement");
    searchResultProfile.startEngagementModalContainer.startEngagementHeaderContainer.topHeaderContainer.EngagementHasStartedContainer.nameLabel.text = volName;
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.StartDateCalendarInput.dateComponents = [day1, month1, year1];
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.EndDateCalendarInput.dateComponents = [day1, month1, year1];
    searchResultProfile.startEngagementModalContainer.isVisible = true;
}

function AS_Button_2bc0163614904410970d9ac5d1450d1e(eventobject) {
    return saveClosedTaskDetails.call(this);
}

function AS_Button_2c69d74065404690b3c3f85e4f521f56(eventobject) {
    //mainPage.show();
    //VolMyProfile();
    //VollMyProfile();
    submitUpdateInfo();
}

function AS_Button_2c9ae795eb29424bae81f77c391655ae(eventobject) {
    registrationPersonalPage.show();
}

function AS_Button_2dd078c72d6d4317a70a98ff6984381a(eventobject) {
    function SHOW_ALERT_ide_onClick_69039044e9e542dda64ea828c76ebbed_True() {} //indeginousTaskDetails();
    var title = mainPage.CreateOpportunityContainer.BodyContainer.opportunityTitleInputContainer.text;
    var details = mainPage.CreateOpportunityContainer.BodyContainer.opportunityDetailsInputContainer.text;
    var endDate = mainPage.CreateOpportunityContainer.BodyContainer.opportunityEndateCalendarInput.formattedDate;
    var startDate = mainPage.CreateOpportunityContainer.BodyContainer.opportunityStartDateCalendarInput.formattedDate;
    var hours = mainPage.CreateOpportunityContainer.BodyContainer.hoursInput.text;
    var skills = mainPage.CreateOpportunityContainer.BodyContainer.skillsInput.text;
    var endDate1 = kony.store.getItem("todayDate"); //   give todays's date'
    var startdate1 = mainPage.CreateOpportunityContainer.BodyContainer.opportunityStartDateCalendarInput.formattedDate;
    var isValidEndDate = validateDate(startDate, endDate);
    var isValidStartEnd = validateStartDate(startdate1, endDate1);
    if (title === null || title === "" || title === "null") {
        alert("Please enter a task title");
    } else if (details === null || details === "" || details === "null") {
        alert("Please enter task details");
    } else if (skills === null || skills === "" || skills === "null") {
        alert("Please enter required skills");
    } else if (hours == null || hours == "null" || hours == "") {
        alert("Please enter hours required to complete the task");
    } else {
        //alert("isValidStartEnd"+isValidStartEnd);
        if (isValidStartEnd === false) {
            validationAlert("Please enter today/future date for this engagement");
        } else if (isValidEndDate === false) {
            validationAlert("End date should be a future date");
        } else {
            //alert("done");
            createOpportunity();
        }
    }
}

function AS_Button_2fcd5c5fee8d4b7e8a42a88c96695455(eventobject) {
    ReportingPage.destroy();
    //hideSideBar();
    mainPage.show();
}

function AS_Button_316c1434585e4b74809eb7f27e585eb1(eventobject) {
    mainPage.show();
}

function AS_Button_31c2aa437d8441008cc35e55dcb8e99e(eventobject) {
    searchResultProfile.startEngagementModalContainer.isVisible = false;
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TitleInputField.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TaskDetailsTextArea.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.CommentsTextArea.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.SkillsInput.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.DuratationOfEngagementInput.text = "";
}

function AS_Button_329823698d204f1a97394798c53d41eb(eventobject) {
    mainPage.show();
}

function AS_Button_32c6b887067c4092b9be31914d7b6317(eventobject) {
    searchResultProfile.businessProfileContainer.isVisible = false;
    searchResultProfile.destroy();
    searchPage.show();
}

function AS_Button_343ad16654424590a92a9098bc3d7153(eventobject) {
    function SHOW_ALERT_ide_onClick_1527a3680dfa4d70acd3b56380a534a8_True() {}
    VolAcceptTaskBtn.call(this);
    // mainPage.acceptTaskDetailsModalContainer.isVisible=false;
    // mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.removeAll(); 
    // mainPage.destroy();
    // mainPage.show(); 
}

function AS_Button_343bf3187ac44ec8a76d74d71d2b5e7d(eventobject) {
    searchResultProfile.startEngagementModalContainer.isVisible = false;
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TitleInputField.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TaskDetailsTextArea.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.CommentsTextArea.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.SkillsInput.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.DuratationOfEngagementInput.text = "";
}

function AS_Button_38f3c0da38354f3ab85fd6586b0cd03d(eventobject) {
    mainPage.CreateOpportunityContainer.isVisible = false;
}

function AS_Button_395cc1c2c1cb40af83e6c4308d1dd377(eventobject) {
    ReportingPage.ReportingContainer.ReportingActionsContainer.IndigenousBusinessContainer.BusinessIndicator.isVisible = true;
    ReportingPage.ReportingContainer.ReportingActionsContainer.corporateFlexContainer.corporateIndicatorFlex.isVisible = false;
    ReportingPage.ReportingContainer.ReportingActionsContainer.supplyNationContainer.supplyNationIndicator.isVisible = false;
}

function AS_Button_3d555c25db1f4257a45b1f9c9ba15f18(eventobject) {
    gblFirstTime = true;
    gblIsOpp = false;
    searchPage.searchTxtbox.text = "";
    searchPage.volunteerdataSegment.removeAll();
    searchPage.show();
}

function AS_Button_3e30492701d44a20825d461fc49acdf8(eventobject) {
    searchResultProfile.businessProfileContainer.isVisible = false;
    searchResultProfile.destroy();
    searchPage.show();
}

function AS_Button_3e63010ecab440f8bc6dedecca979d47(eventobject) {
    addHours();
}

function AS_Button_42d5fe199fbd4a02834ab76d2b7f6ff6(eventobject) {
    BusinessProfileUpdate.call(this);
}

function AS_Button_464ff8ae4d34452392e51dcda0fde9cc(eventobject) {}

function AS_Button_47a594a44c1447088cb213012d816dba(eventobject) {
    mainPage.destroy();
    mainPage.show();
}

function AS_Button_47f078e3a22f4674b7e9178a14c00f23(eventobject) {
    return addNewSkillUpdateee.call(this);
}

function AS_Button_4dfe6c9e001f40eca415531a76e2e273(eventobject) {
    searchResultProfile.startEngagementModalContainer.isVisible = false;
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TitleInputField.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TaskDetailsTextArea.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.CommentsTextArea.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.SkillsInput.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.DuratationOfEngagementInput.text = "";
}

function AS_Button_4fdeea05da88431a9ce240d34a2851e9(eventobject) {}

function AS_Button_4ff3c85804b5438b9b0253f363f21b6f(eventobject) {
    mainPage.show();
}

function AS_Button_536fe1aa4afb4d978882a153d6c0111d(eventobject) {
    BusinessProfileUpdate.call(this);
}

function AS_Button_53e9c567d2af416fadfe0a63dd5e1b90(eventobject) {
    mainPage.startEngagementModalContainer.isVisible = false;
    //mainPage.startEngagementModalContainer.startEngagementModalFooter.cancelEngagement.
    mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskTitleField.text = "";
    mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskDetailsTextArea.text = "";
    // mainPage.destroy();
    // mainPage.show();
}

function AS_Button_5532723bddcf4cbf8b4c7d1ff92534cd(eventobject) {
    LogHoursForms.show();
}

function AS_Button_55ef0b7a5c10487e975a0f00b95d7dfb(eventobject) {
    return toggleVol.call(this, eventobject);
}

function AS_Button_55fedcb9930941f7840c6ac9dc8fa894(eventobject) {
    ReportingPage.destroy();
    mainPage.show();
}

function AS_Button_56849e05360f4daba001e01291f6323e(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        //alert("going inside business");
        indeginousCancelRequest();
        //mamata
        // mainPage.show();
    } else {
        VolCancelRequest();
        //mamata
    }
}

function AS_Button_57e757da8c0e4154b815dffa14c05a90(eventobject) {
    ReportingPage.ReportingContainer.ReportingActionsContainer.IndigenousBusinessContainer.BusinessIndicator.isVisible = true;
    ReportingPage.ReportingContainer.ReportingActionsContainer.corporateFlexContainer.corporateIndicatorFlex.isVisible = false;
    ReportingPage.ReportingContainer.ReportingActionsContainer.supplyNationContainer.supplyNationIndicator.isVisible = false;
}

function AS_Button_5a822dd9fa4343f19cd554abbbb01fb3(eventobject) {
    searchResultProfile.startEngagementModalContainer.isVisible = false;
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TitleInputField.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TaskDetailsTextArea.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.CommentsTextArea.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.SkillsInput.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.DuratationOfEngagementInput.text = "";
}

function AS_Button_5b19a7f4f80540968c0a5e287deb9cbf(eventobject) {
    searchResultProfile.volunteerProfileContainer.isVisible = false;
    searchResultProfile.destroy();
    searchPage.show();
}

function AS_Button_5cb898ce6daa4ba4920eb9c31b42f005(eventobject) {}

function AS_Button_604e48d7e44849b9a5c5ffc6cb8b147a(eventobject) {
    BusinessExistingOpenTaskService();
    //searchResultProfile.businessProfileContainer.isVisible=false;
    searchResultProfile.opprtunitiesReadOnlyContainer.isVisible = true;
    searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.oppurtunities1ListModal.isVisible = true;
    searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.availabilityContainer.isVisible = true;
    searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunityDetailsHdrModal.oppurtunitiesHeaderDetails1.opprtunitiesHeadingModal.opportunityBusinessName.text = kony.store.getItem("busNameNew");
    var availabilty = kony.store.getItem("scheduleValNew");
    var name = kony.store.getItem("busNameNew");
    //alert("name"+name);
    searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.availabilityContainer.availabiltyTxt.text = availabilty;
}

function AS_Button_60cce89b31454d2f8f34f4ffe82d9aa8(eventobject) {
    searchResultProfile.startEngagementModalContainer.isVisible = false;
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TitleInputField.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TaskDetailsTextArea.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.CommentsTextArea.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.SkillsInput.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.DuratationOfEngagementInput.text = "";
}

function AS_Button_6769340a248d48eabbad10e602c77e6b(eventobject) {
    return validateRegCode.call(this);
}

function AS_Button_67bf03ca0ced4e74b2bbeeff21a5ed34(eventobject) {
    // getVolContactNumFromSearchProfile();
    volunteerPhoneNumber();
}

function AS_Button_69c383defdec4ae0b40768adc91599fd(eventobject) {
    mainPage.show();
}

function AS_Button_6a2359e6e4604ba3b91a11c148068c8f(eventobject, x, y) {
    return BusinessExistingTaskTaskService.call(this);
}

function AS_Button_6a726122f1104df9b4d53ee762d4a566(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        searchBusiness();
        gblIsVol = false;
    } else {
        //no action should be done
    }
}

function AS_Button_6aa62b26a68f4aa4b142cb059a64f36a(eventobject) {
    mainPage.opportunityDetailsContainer.isVisible = false;
}

function AS_Button_6e7e55c6a6154a0788150760b27faa50(eventobject) {
    searchResultProfile.startEngagementModalContainer.isVisible = false;
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TitleInputField.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TaskDetailsTextArea.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.CommentsTextArea.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.SkillsInput.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.DuratationOfEngagementInput.text = "";
}

function AS_Button_6eb3b55f20db4cc4a788148e796483ba(eventobject) {
    return saveClosedTaskDetails.call(this);
}

function AS_Button_6fa79a6c2954455aa3b72d34934c3504(eventobject) {
    ReportingPage.ReportingContainer.ReportingActionsContainer.supplyNationContainer.supplyNationIndicator.isVisible = true;
    ReportingPage.ReportingContainer.ReportingActionsContainer.corporateFlexContainer.corporateIndicatorFlex.isVisible = false;
    ReportingPage.ReportingContainer.ReportingActionsContainer.IndigenousBusinessContainer.BusinessIndicator.isVisible = false;
}

function AS_Button_6fbd103ad33d43c18846c2b244cce06d(eventobject) {
    return hoursAgreeAndContinueUpdate.call(this);
}

function AS_Button_7088679c6e074024bd605d42044a4435(eventobject) {
    //searchResultProfile.titleBarSkin="merinnow";
    //gblMer=true;
    BusOpenTaskExistingService();
    var d1 = new Date();
    var day1 = d1.getDate();
    var month1 = d1.getMonth();
    month1 = month1 + 1;
    var year1 = d1.getFullYear();
    var todayDate1 = day1 + "/" + month1 + "/" + year1;
    kony.store.setItem("todayDate", todayDate1);
    var volName = kony.store.getItem("VolNameForStartEngagement");
    searchResultProfile.startEngagementModalContainer.startEngagementHeaderContainer.topHeaderContainer.EngagementHasStartedContainer.nameLabel.text = volName;
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.StartDateCalendarInput.dateComponents = [day1, month1, year1];
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.EndDateCalendarInput.dateComponents = [day1, month1, year1];
    searchResultProfile.startEngagementModalContainer.isVisible = true;
}

function AS_Button_734be65b4dac4bc9b78aae300f969ab6(eventobject) {
    return toggleVol.call(this, eventobject);
}

function AS_Button_7427b749460c4190b7d37fc9de5e757e(eventobject) {
    //generateReportVolunteerService();
    var emailID = ReportingPage.ReportingData.ReportingdataFlex.ReceipientsTxtArea.text;
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //var array=emailID.split(",");
    //alert(emailID);
    if (emailID === null || emailID === "" || emailID === "null") {
        alert("Please enter email Id");
    } else {
        var sendRequest = true;
        var array = emailID.split(",");
        for (i = 0; i < array.length; i++) {
            var email = array[i];
            email = email.trim();
            if (!emailFormat.test(email)) {
                alert("Please enter valid email Ids");
                sendRequest = false;
            }
        }
        if (sendRequest) {
            //return false;
            if ((kony.store.getItem("isBusOrVol") == "volunteer") && (kony.store.getItem("adminVal") == "v")) {
                generateReportVolunteerService();
            } else if ((kony.store.getItem("isBusOrVol") == "business") && (kony.store.getItem("adminVal") == "i")) {
                validateReportIndBusCode();
            } else {
                validateReportSupplyNationBusCode();
            }
            //alert("Inside valid email");
        }
    }
    //start merin
    //end merin
}

function AS_Button_74795edb55fd42e9a72a9ba442f85b36(eventobject) {
    searchResultProfile.volunteerProfileContainer.isVisible = false;
    searchResultProfile.destroy();
    searchPage.show();
}

function AS_Button_77e714f7aa55443ea8dda907cdba64cb(eventobject) {
    gblIsOpp = false;
    searchPage.searchTxtbox.text = "";
    searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.volunteerFlex.volunteerScrollFlex.isVisible = false;
    searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.BusinessContainer.businessIndicator.isVisible = true;
    searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.opportunitiesFlex.opportunitiesIndicator.isVisible = false;
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        searchBusiness();
        gblIsVol = false;
    } else {
        //no action should be done
    }
}

function AS_Button_7860b7ff010d4912ad72fa8209697e9b(eventobject) {
    //searchResultProfile.titleBarSkin="merinnow";
    //gblMer=true;
    BusOpenTaskExistingService();
    var d1 = new Date();
    var day1 = d1.getDate();
    var month1 = d1.getMonth();
    month1 = month1 + 1;
    var year1 = d1.getFullYear();
    var todayDate1 = day1 + "/" + month1 + "/" + year1;
    kony.store.setItem("todayDate", todayDate1);
    var volName = kony.store.getItem("VolNameForStartEngagement");
    searchResultProfile.startEngagementModalContainer.startEngagementHeaderContainer.topHeaderContainer.EngagementHasStartedContainer.nameLabel.text = volName;
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.StartDateCalendarInput.dateComponents = [day1, month1, year1];
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.EndDateCalendarInput.dateComponents = [day1, month1, year1];
    searchResultProfile.startEngagementModalContainer.isVisible = true;
}

function AS_Button_787530031fef4f11bc1b769f1f91b1dd(eventobject) {
    function SHOW_ALERT_ide_onClick_77c00b4d84a048f69f1821b726903fba_True() {}
    VolAcceptTaskBtn.call(this);
    // mainPage.acceptTaskDetailsModalContainer.isVisible=false;
    // mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.removeAll(); 
    // mainPage.destroy();
    // mainPage.show(); 
}

function AS_Button_7a7d24bf2d21474e9e22079f8eac7bce(eventobject) {
    VolNewAcceptTaskBtn();
}

function AS_Button_7bf81a92fedc4957be3f7b1a2a109185(eventobject) {
    mainPage.show();
}

function AS_Button_7cc9e7db933542dfa9d930e523285359(eventobject) {
    return hoursAgreeAndContinue.call(this);
}

function AS_Button_7d08579f0c124d6a9d244a65dab2e06e(eventobject) {
    searchResultProfile.businessProfileContainer.isVisible = false;
    searchResultProfile.destroy();
    searchPage.show();
}

function AS_Button_7fd9c2662e634e54b06436e93997e627(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        //alert("he is business");
        var busMsg = searchResultProfile.volunteerRequestContainer.requestAVolunteerModal.requestAVolunteerBody.requestAVolunteerMessageInput.text;
        if (busMsg == "null" || busMsg == null || busMsg == "") {
            alert("Please enter a message");
        } else {
            requestVolunteer();
        }
    }
    //   }else
    //     {
    //    //   alert("he is volunteer");
    //       requestVolunteerByBusiness1();
    //     }
}

function AS_Button_80c5ba6421c44369a765929954ebf9b6(eventobject) {}

function AS_Button_80dfa1bc68ad4325be817ed653bc9943(eventobject) {
    VolAcceptRequest.call(this);
}

function AS_Button_818e7942c75141a6a70c4118e4c27791(eventobject) {
    ReportingPage.ReportingContainer.ReportingActionsContainer.corporateFlexContainer.corporateIndicatorFlex.isVisible = true;
    ReportingPage.ReportingContainer.ReportingActionsContainer.supplyNationContainer.supplyNationIndicator.isVisible = false;
    ReportingPage.ReportingContainer.ReportingActionsContainer.IndigenousBusinessContainer.BusinessIndicator.isVisible = false;
}

function AS_Button_82ea1740bfa9490382128cc94c1853b2(eventobject) {
    searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.volunteerFlex.volunteerScrollFlex.isVisible = false;
    searchPage.searchTxtbox.text = "";
    searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.BusinessContainer.businessIndicator.isVisible = false;
    searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.opportunitiesFlex.opportunitiesIndicator.isVisible = true;
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        searchPage.DataFlexScrollContainer.volunteerdataSegment.removeAll();
        searchOppurtunity();
        gblIsVol = false;
        gblIsOpp = true;
    } else {
        //no action should be done
    }
}

function AS_Button_831e68be72a4442a95aaba1a7ad15158(eventobject) {
    LogHoursForms.show();
}

function AS_Button_83a5650a1fd54092aa2fecae3e7cddb2(eventobject) {}

function AS_Button_867894956852489e95e6b4a17d593669(eventobject) {
    searchResultProfile.businessProfileContainer.isVisible = false;
    searchResultProfile.destroy();
    searchPage.show();
}

function AS_Button_8679ef5475084e8496bae19a15ca4630(eventobject) {
    function SHOW_ALERT__9d760812b3114c0599b4a30364b41319_True() {
        DeleteVolunteerAccountService.call(this);
    }

    function SHOW_ALERT__9d760812b3114c0599b4a30364b41319_False() {
        volunteerMyProfilePage.show();
    }

    function SHOW_ALERT__9d760812b3114c0599b4a30364b41319_Callback(response) {
        if (response == true) {
            SHOW_ALERT__9d760812b3114c0599b4a30364b41319_True()
        } else {
            SHOW_ALERT__9d760812b3114c0599b4a30364b41319_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirm",
        "yesLabel": "Yes",
        "noLabel": "No",
        "alertIcon": "lohourindicator.PNG",
        "message": "Do you really want to delete your account?",
        "alertHandler": SHOW_ALERT__9d760812b3114c0599b4a30364b41319_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_RIGHT
    })
}

function AS_Button_88056314b4ee4b70940e6279084718cf(eventobject) {}

function AS_Button_8ae701ee477d43a193ccca1488f4b617(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        mainPage.mainPageBody.mainPageContentParent.myNotifications.isVisible = true;
        mainPage.mainPageBody.navBarScroller.recommendationNavContainer.isVisible = true;
        BusinessRecommendationService();
    }
}

function AS_Button_8afe8ca6dbbf42a2a114ef8737651ad5(eventobject) {
    registrationPage.show();
}

function AS_Button_8c41d9ec8a4d44ba9130aca007cb77bc(eventobject) {
    mainPage.show();
}

function AS_Button_8e7d1c456f684225b78298cb42111f91(eventobject) {
    gblIsOpp = false;
    searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.volunteerFlex.volunteerScrollFlex.isVisible = true;
    searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.BusinessContainer.businessIndicator.isVisible = false;
    searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.opportunitiesFlex.opportunitiesIndicator.isVisible = false;
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        //no action should be done
    } else {
        volunteerService();
        gblIsVol = true;
    }
}

function AS_Button_90cc3226d17d4c55a077d6f01f79c068(eventobject) {
    registrationProfessionalPage.show();
}

function AS_Button_919d65dbfcbd4a708628240c170310d9(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        notificationServiceforVolunteer();
    } else {
        BusinessNotificationService();
        mainPage.mainPageBody.navBarScroller.recommendationNavContainer.isVisible = true;
        mainPage.mainPageBody.mainPageContentParent.myNotifications.isVisible = true;
        BusinessRecommendationService();
    }
}

function AS_Button_9261e4378f044382b1cda53ed10bebae(eventobject) {
    //Type your code here
    if (gblIsVol == true) {
        //start
        var tempArrayForCity = [];
        for (var i = 0; i < gblForVolSort.volunteersList.length; i++) {
            tempArrayForCity.push(gblForVolSort.volunteersList[i].VolunteersDTO[0]);
        }

        function SortByCity(x, y) {
            return ((x.city == y.city) ? 0 : ((x.city > y.city) ? 1 : -1));
        }
        //calling sort function
        tempArrayForCity.sort(SortByCity);
        var sortedrespCity = {};
        sortedrespCity.volunteersList = [];
        var arrCity = [];
        for (var j = 0; j < tempArrayForCity.length; j++) {
            arrCity.push(tempArrayForCity[j]);
            // alert("arr before  modifying"+JSON.stringify(arr));
            var testobj = {
                "VolunteersDTO": arrCity
            };
            arrCity = [];
            sortedrespCity.volunteersList.push(testobj);
        }
        gblForVolSort = sortedrespCity;
        //end
        var tempArray = [];
        for (var i = 0; i < gblForVolSort.volunteersList.length; i++) {
            tempArray.push(gblForVolSort.volunteersList[i].VolunteersDTO[0]);
        }
        for (var i = 0; i < tempArray.length; i++) {
            if (tempArray[i].skillSet != null) {
                var user = tempArray[i].skillSet;
                var ar = user.sort(function(a, b) {
                    var nA = a.SkillsDTO.skillName.toLowerCase();
                    var nB = b.SkillsDTO.skillName.toLowerCase();
                    if (nA < nB) return -1;
                    else if (nA > nB) return 1;
                    return 0;
                });
                tempArray[i].skillSet = ar;
            }
        }
        //alert(JSON.stringify(tempArray));
        skillSortedResponse(tempArray);
    } else if (gblIsOpp == true) {
        //searchDataofOpportunity();
    } else {
        /////start city business
        var tempArrayBusinessCity = [];
        for (var i = 0; i < gblResponseBusinessSearchForSort.businessBbj.length; i++) {
            tempArrayBusinessCity.push(gblResponseBusinessSearchForSort.businessBbj[i].BusinessDTO);
        }

        function SortByBusinessCity(x, y) {
            return ((x.city == y.city) ? 0 : ((x.city > y.city) ? 1 : -1));
        }
        //calling sort function
        tempArrayBusinessCity.sort(SortByBusinessCity);
        var sortedrespBusinessCity = {};
        sortedrespBusinessCity.businessBbj = [];
        for (var j = 0; j < tempArrayBusinessCity.length; j++) {
            //alert("1"+tempArray[j]);
            var testtobj = {
                "BusinessDTO": tempArrayBusinessCity[j]
            };
            sortedrespBusinessCity.businessBbj.push(testtobj);
        }
        gblResponseBusinessSearchForSort = sortedrespBusinessCity;
        //end city business
        var tempArray = [];
        for (var i = 0; i < gblResponseBusinessSearchForSort.businessBbj.length; i++) {
            tempArray.push(gblResponseBusinessSearchForSort.businessBbj[i].BusinessDTO);
        }

        function SortByBusinessNamee(x, y) {
            return ((x.businessName == y.businessName) ? 0 : ((x.businessName > y.businessName) ? 1 : -1));
        }
        //calling sort function
        tempArray.sort(SortByBusinessNamee);
        var sortedrespBusiness = {};
        sortedrespBusiness.businessBbj = [];
        for (var j = 0; j < tempArray.length; j++) {
            //alert("1"+tempArray[j]);
            var testtobj = {
                "BusinessDTO": tempArray[j]
            };
            sortedrespBusiness.businessBbj.push(testtobj);
        }
        setSegDatasearchBusiness(sortedrespBusiness);
        gblResponseBusinessSearchForSort = sortedrespBusiness;
    }
}

function AS_Button_9292a5869b07452d9409477608e9427f(eventobject) {
    //var gblSkillsName=mainPage.BusinessEndorsementModalContainer.SkillsListBoxContainer.VolunteerSkillsListbox.selectedKeyValue;
    var skillsFromListBox = kony.store.getItem("skillsOfSelectedVolunteers");
    var skillsFromTextBox = mainPage.BusinessEndorsementModalContainer.SkillsTextBoxContainer.AnotherSkillInputField.text;
    var msg = mainPage.BusinessEndorsementModalContainer.MessageContaioner.EndorsingMessageTextArea.text;
    if (((skillsFromListBox == "Select") || (skillsFromListBox == "") || (skillsFromListBox == " ") || (skillsFromListBox == "null") || (skillsFromListBox == null)) && ((skillsFromTextBox == null) || (skillsFromTextBox == "null") || (skillsFromTextBox == ""))) {
        alert("Please enter at least one skill to endorse");
        return false;
    }
    // if(msg==null||msg=="null"||msg=="")
    //   {  
    //        alert("Please enter message for endorsement");
    //     return false;
    //   }
    if ((skillsFromTextBox != null) && (skillsFromTextBox != "null") && (skillsFromTextBox != "")) {
        kony.store.setItem("skillsOfSelectedVolunteers", skillsFromTextBox);
    }
    createEndorsements();
}

function AS_Button_9362f9f5ced040ce87d2c51725413107(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        //alert("he is business");
        var busMsg = searchResultProfile.volunteerRequestContainer.requestAVolunteerModal.requestAVolunteerBody.requestAVolunteerMessageInput.text;
        if (busMsg == "null" || busMsg == null || busMsg == "") {
            alert("Please enter a message");
        } else {
            requestVolunteer();
        }
    }
    //   }else
    //     {
    //    //   alert("he is volunteer");
    //       requestVolunteerByBusiness1();
    //     }
}

function AS_Button_95110c52315946768be9893730091ac5(eventobject) {
    ReportingPage.ReportingContainer.ReportingActionsContainer.supplyNationContainer.supplyNationIndicator.isVisible = true;
    ReportingPage.ReportingContainer.ReportingActionsContainer.corporateFlexContainer.corporateIndicatorFlex.isVisible = false;
    ReportingPage.ReportingContainer.ReportingActionsContainer.IndigenousBusinessContainer.BusinessIndicator.isVisible = false;
}

function AS_Button_955cf9953a2247fcadf0db3a8cd5c45d(eventobject, x, y) {
    kony.application.exit();
}

function AS_Button_957df1d174b6435aa5f1073cfa71de90(eventobject) {
    return toggleVol.call(this, eventobject);
}

function AS_Button_987ed40abba641e992e5181628036c39(eventobject) {
    mainPage.BusinessRequestTaskDetailsModal.isVisible = false;
    //mainPage.show(); 
}

function AS_Button_99e8fcfe74224ca997ce775e4cafcdc1(eventobject) {
    function SHOW_ALERT_ide_onClick_a621a81c51954e3e800cc0a08a12c5ab_True() {}
    var title2 = searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TitleInputField.text;
    var details2 = searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TaskDetailsTextArea.text;
    var endDate2 = searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.EndDateCalendarInput.formattedDate;
    var startDate2 = searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.StartDateCalendarInput.formattedDate;
    var hours2 = searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.DuratationOfEngagementInput.text;
    var skills2 = searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.SkillsInput.text;
    var messge2 = searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.CommentsTextArea.text;
    var endDate3 = kony.store.getItem("todayDate"); //   give todays's date'
    var startdate3 = searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.StartDateCalendarInput.formattedDate;
    var isValidEndDate = validateDate(startDate2, endDate2);
    var isValidStartEnd = validateStartDate(startdate3, endDate3);
    if (title2 === null || title2 === "" || title2 === "null") {
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "alertTitle": null,
            "yesLabel": "OK",
            "noLabel": "No",
            "message": "Please enter a task title",
            "alertHandler": "null"
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
        //alert("Please enter a task title");
    } else if (details2 === null || details2 === "" || details2 === "null") {
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "alertTitle": null,
            "yesLabel": "OK",
            "noLabel": "No",
            "message": "Please enter task details",
            "alertHandler": "null"
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
        // alert("Please enter task details");
    } else if (skills2 == null || skills2 == "null" || skills2 == "") {
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "alertTitle": null,
            "yesLabel": "OK",
            "noLabel": "No",
            "message": "Please enter skill required to complete the task",
            "alertHandler": "null"
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
        // alert("Please enter skill required to complete the task");
    } else if (hours2 == null || hours2 == "null" || hours2 == "") {
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "alertTitle": null,
            "yesLabel": "OK",
            "noLabel": "No",
            "message": "Please enter hours required to complete the task",
            "alertHandler": "null"
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
        // alert("Please enter hours required to complete the task");
    } else if (messge2 == null || messge2 == "null" || messge2 == "") {
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "alertTitle": null,
            "yesLabel": "OK",
            "noLabel": "No",
            "message": "Please enter message",
            "alertHandler": "null"
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
        // alert("Please enter message");
    } else {
        //alert("isValidStartEnd"+isValidStartEnd);
        if (isValidStartEnd === false) {
            kony.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                //D040: changed alertTitle from null to "Action Required"
                "alertTitle": "Action Required",
                "yesLabel": "OK",
                "noLabel": "No",
                "message": "Please enter today/future date for this engagement",
                "alertHandler": "null"
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
            //validationAlert("Please enter today/future date for this engagement");
        } else if (isValidEndDate === false) {
            kony.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                //D040: chenged alertTitle from null to "Action Required"
                "alertTitle": "Action Required",
                "yesLabel": "OK",
                "noLabel": "No",
                "message": "End date should be a future date",
                "alertHandler": "null"
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
            //   validationAlert("End date should be a future date");
        } else {
            //alert("done");
            BusinessRequestVolunteerTasks();
        }
    }
}

function AS_Button_9a96cef61836483c96b15c263b2b639e(eventobject) {}

function AS_Button_9b9923f9fbc14a98b02dfaa577e7c3c0(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        //alert("he is business");
        var busMsg = searchResultProfile.volunteerRequestContainer.requestAVolunteerModal.requestAVolunteerBody.requestAVolunteerMessageInput.text;
        if (busMsg == "null" || busMsg == null || busMsg == "") {
            alert("Please enter a message");
        } else {
            requestVolunteer();
        }
    }
    //   }else
    //     {
    //    //   alert("he is volunteer");
    //       requestVolunteerByBusiness1();
    //     }
}

function AS_Button_9d364a3620574348a864e968abe750bc(eventobject) {
    convertToFormat();
}

function AS_Button_9d588442ab7041769289fca605b1f361(eventobject) {
    searchResultProfile.startEngagementModalContainer.isVisible = false;
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TitleInputField.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TaskDetailsTextArea.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.CommentsTextArea.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.SkillsInput.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.DuratationOfEngagementInput.text = "";
}

function AS_Button_9f297c3f4cb5435189bf603ff9c20e67(eventobject) {
    mainPage.show();
    mainPage.TaskDetailsContainer.isVisible = false;
}

function AS_Button_9fc7a0254a8f42b1a9f7454faea23818(eventobject) {
    mainPage.CreateOpportunityContainer.isVisible = false;
}

function AS_Button_9fdeea2ac381493487b212d4f139425a(eventobject) {}

function AS_Button_a1bf8d8a33774646b253d4bc668d6b1f(eventobject) {
    return toggleVol.call(this, eventobject);
}

function AS_Button_a2af3349d18c4d9fb5a7ef05ad71a946(eventobject) {
    LogHoursForms.AddHoursModalContainer.isVisible = true;
    loadTime1();
}

function AS_Button_a7a9f65b40a4414e8b46666fee11aefd(eventobject) {
    login.validateCodeContainer.isVisible = false;
    login.validateCodeText.text = "";
}

function AS_Button_a7b0aead332447b8bef76dcfcc1fdabe(eventobject) {
    return navigateToMainFromInfoPage.call(this);
}

function AS_Button_a95ff095cd2d4c0faf96630c73f24b5d(eventobject) {
    mainPage.startEngagementModalContainer.isVisible = false;
    mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskTitleField.text = "";
    mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskDetailsTextArea.text = "";
    //mainPage.show();
}

function AS_Button_aa3e3d85d1ad4363aa2228b03b71875f(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        //alert("he is business");
        var busMsg = searchResultProfile.volunteerRequestContainer.requestAVolunteerModal.requestAVolunteerBody.requestAVolunteerMessageInput.text;
        if (busMsg == "null" || busMsg == null || busMsg == "") {
            alert("Please enter a message");
        } else {
            requestVolunteer();
        }
    }
    //   }else
    //     {
    //    //   alert("he is volunteer");
    //       requestVolunteerByBusiness1();
    //     }
}

function AS_Button_ac67f947cd2d4582b92181772cd6a40a(eventobject) {
    mainPage.acceptTaskDetailsModalContainer.isVisible = false;
    //mainPage.show(); 
}

function AS_Button_ae18dbb7220b4a80a20985154d13a7d4(eventobject) {
    mainPage.ReadOnlyOppurtuinityDetails.isVisible = false;
}

function AS_Button_ae82e0cd50844115b61bb74a4dfdaf5b(eventobject) {
    return toggleVol.call(this, eventobject);
}

function AS_Button_af46e1839f6e43c5a3361243e5d819f1(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        //no action should be done
    } else {
        volunteerService();
        gblIsVol = true;
    }
}

function AS_Button_b2c5b26ff29f4a909862e033008e3592(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        mainPage.mainPageBody.mainPageContentParent.myEndorsements.isVisible = true;
        endorsementsService();
    }
}

function AS_Button_b30aeaef6c39476794ac2f5a8b88eea3(eventobject) {
    searchResultProfile.volunteerProfileContainer.isVisible = false;
    searchResultProfile.destroy();
    searchPage.show();
}

function AS_Button_b8b7e62c17ff4f09978c26587cf3c336(eventobject) {
    mainPage.startEngagementModalContainer.isVisible = false;
    //mainPage.startEngagementModalContainer.startEngagementModalFooter.cancelEngagement.
    mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskTitleField.text = "";
    mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskDetailsTextArea.text = "";
    // mainPage.destroy();
    // mainPage.show();
}

function AS_Button_bd249e35d7f5428ea07f21adbae991c8(eventobject) {
    function SHOW_ALERT_ide_onClick_ee1d1b410d53400aa6064d015ca89af0_True() {}
    VolAcceptTaskBtn.call(this);
    // mainPage.acceptTaskDetailsModalContainer.isVisible=false;
    // mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.removeAll(); 
    // mainPage.destroy();
    // mainPage.show(); 
}

function AS_Button_bd7db8e1514f431dacae75ed5f8ed7a3(eventobject) {
    //Type your code here
    if (gblIsVol == true) {
        //start
        var tempArrayForCity = [];
        for (var i = 0; i < gblForVolSort.volunteersList.length; i++) {
            tempArrayForCity.push(gblForVolSort.volunteersList[i].VolunteersDTO[0]);
        }

        function SortByCity(x, y) {
            return ((x.city == y.city) ? 0 : ((x.city > y.city) ? 1 : -1));
        }
        //calling sort function
        tempArrayForCity.sort(SortByCity);
        var sortedrespCity = {};
        sortedrespCity.volunteersList = [];
        var arrCity = [];
        for (var j = 0; j < tempArrayForCity.length; j++) {
            arrCity.push(tempArrayForCity[j]);
            // alert("arr before  modifying"+JSON.stringify(arr));
            var testobj = {
                "VolunteersDTO": arrCity
            };
            arrCity = [];
            sortedrespCity.volunteersList.push(testobj);
        }
        gblForVolSort = sortedrespCity;
        //end
        var tempArray = [];
        for (var i = 0; i < gblForVolSort.volunteersList.length; i++) {
            tempArray.push(gblForVolSort.volunteersList[i].VolunteersDTO[0]);
        }
        for (var i = 0; i < tempArray.length; i++) {
            if (tempArray[i].skillSet != null) {
                var user = tempArray[i].skillSet;
                var ar = user.sort(function(a, b) {
                    var nA = a.SkillsDTO.skillName.toLowerCase();
                    var nB = b.SkillsDTO.skillName.toLowerCase();
                    if (nA < nB) return -1;
                    else if (nA > nB) return 1;
                    return 0;
                });
                tempArray[i].skillSet = ar;
            }
        }
        //alert(JSON.stringify(tempArray));
        skillSortedResponse(tempArray);
    } else {
        /////start city business
        var tempArrayBusinessCity = [];
        for (var i = 0; i < gblResponseBusinessSearchForSort.businessBbj.length; i++) {
            tempArrayBusinessCity.push(gblResponseBusinessSearchForSort.businessBbj[i].BusinessDTO);
        }

        function SortByBusinessCity(x, y) {
            return ((x.city == y.city) ? 0 : ((x.city > y.city) ? 1 : -1));
        }
        //calling sort function
        tempArrayBusinessCity.sort(SortByBusinessCity);
        var sortedrespBusinessCity = {};
        sortedrespBusinessCity.businessBbj = [];
        for (var j = 0; j < tempArrayBusinessCity.length; j++) {
            //alert("1"+tempArray[j]);
            var testtobj = {
                "BusinessDTO": tempArrayBusinessCity[j]
            };
            sortedrespBusinessCity.businessBbj.push(testtobj);
        }
        gblResponseBusinessSearchForSort = sortedrespBusinessCity;
        //end city business
        var tempArray = [];
        for (var i = 0; i < gblResponseBusinessSearchForSort.businessBbj.length; i++) {
            tempArray.push(gblResponseBusinessSearchForSort.businessBbj[i].BusinessDTO);
        }

        function SortByBusinessNamee(x, y) {
            return ((x.businessName == y.businessName) ? 0 : ((x.businessName > y.businessName) ? 1 : -1));
        }
        //calling sort function
        tempArray.sort(SortByBusinessNamee);
        var sortedrespBusiness = {};
        sortedrespBusiness.businessBbj = [];
        for (var j = 0; j < tempArray.length; j++) {
            //alert("1"+tempArray[j]);
            var testtobj = {
                "BusinessDTO": tempArray[j]
            };
            sortedrespBusiness.businessBbj.push(testtobj);
        }
        setSegDatasearchBusiness(sortedrespBusiness);
        gblResponseBusinessSearchForSort = sortedrespBusiness;
    }
}

function AS_Button_befcc7bde6f448c7a741fcb75da25edb(eventobject) {
    mainPage.TaskDetailsContainer.isVisible = false;
}

function AS_Button_bf13d655d651476b89dd33aadd1589ba(eventobject) {
    registrationAccountPage.show();
}

function AS_Button_c056dc1cd2304225b2dfdf606697af21(eventobject) {
    mainPage.eligibiltyCriteriaModalContainer.Footer.agreeBtn.isVisible = false;
    mainPage.eligibiltyCriteriaModalContainer.acceptTermsChekBoxFlex.chckBoxFlex.chckBoxx.masterData = [
        ["cbg1", "."]
    ];
    mainPage.eligibiltyCriteriaModalContainer.isVisible = false;
}

function AS_Button_c41762728ae0438ea4725acf07b5decf(eventobject) {
    mainPage.ReadOnlyOppurtuinityDetails.isVisible = false;
}

function AS_Button_c529ff9f155a4abc8243ba9063d985f6(eventobject) {
    forgotPasswordServiceforVolunteer();
}

function AS_Button_c744708682c64883bbf34dca04f06842(eventobject) {
    function SHOW_ALERT_ide_onClick_7272bc2e3404439d8c28d210983015cc_True() {}
    var title = mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppTitleInputLabel.text;
    var details = mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppDetailsInputLabel.text;
    var endDate = mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppEndDateCalendarInput.formattedDate;
    var startDate = mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppStartDateCalendarInput.formattedDate;
    var hours = mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppHoursInputLabel.text;
    var skills = mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppSkillsInputLabel.text;
    var endDate1 = kony.store.getItem("todayDate"); //   give todays's date'
    var startdate1 = mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppStartDateCalendarInput.formattedDate;
    var isValidEndDate = validateDate(startDate, endDate);
    var isValidStartEnd = validateStartDate(startdate1, endDate1);
    if (title === null || title === "" || title === "null") {
        alert("Please enter a task title");
    } else if (details === null || details === "" || details === "null") {
        alert("Please enter task details");
    } else if (skills === null || skills === "" || skills === "null") {
        alert("Please enter required skills");
    } else if (hours == null || hours == "null" || hours == "") {
        alert("Please enter hours required to complete the task");
    } else {
        //alert("isValidStartEnd"+isValidStartEnd);
        if (isValidStartEnd === false) {
            validationAlert("Start Date should be greater than or equal to today's date");
        } else if (isValidEndDate === false) {
            validationAlert("End Date should be greater than or equal to start date");
        } else {
            //alert("done");
            UpdateOpportunity();
        }
    }
}

function AS_Button_c8e58c278dc843529e6299794c8f659c(eventobject) {
    if (searchPage.searchTxtbox.text.length == "0.0") {
        alert("Please enter some text ");
    } else {
        searchPage.segPredictive.removeAll();
        if (gblIsVol == true) {
            searchData21();
        } else if (gblIsOpp == true) {
            searchDataofOpportunity();
        } else {
            searchDataBusiness22(gblResponseBusinessSearch);
        }
    }
}

function AS_Button_c9123c82f53f477c91c06dc10c90cf3a(eventobject) {}

function AS_Button_cb231915dbe44c6eb5422fe91909bba0(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        notificationServiceforVolunteer();
    } else {
        BusinessNotificationService();
    }
}

function AS_Button_ce5f63fbd1a148ac9de865a2a9dba1f9(eventobject) {}

function AS_Button_d0f960c7858e420ebfef3cbd38e96dab(eventobject) {
    ReportingPage.destroy();
    mainPage.show();
}

function AS_Button_d1efd1ab7b4643888495becd95f76d84(eventobject) {
    GetBusinessContact();
}

function AS_Button_d481b806b36a447bbe557989bb1baadc(eventobject) {
    if (gblIsOpp == true) {
        searchResultProfile.opprtunitiesReadOnlyContainer.isVisible = false;
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.TaskDetailsHdrFlex.taskTitleTxtLbl.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskDetailsModalFlex.taskDetailsRichTxt.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.startDateModalFlex.startDateTxt.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.endDateFlexModal.endDateTxtLbl.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskskillsFlex.skillsTxtLbl.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.hoursFlex.hoursTxtLbl.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.commentsModal.commentsTxtBox.text = "";
        searchResultProfile.destroy();
        searchPage.show();
    } else {
        searchResultProfile.opprtunitiesReadOnlyContainer.isVisible = false;
        //start
        var tempVal = [];
        var tempArray = [];
        tempArray.push("");
        tempArray.push("Select");
        tempVal.push(tempArray);
        //end
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.oppurtunities1ListModal.assignToExistingTaskListBox1.masterData = tempVal;
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.TaskDetailsHdrFlex.taskTitleTxtLbl.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskDetailsModalFlex.taskDetailsRichTxt.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.startDateModalFlex.startDateTxt.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.endDateFlexModal.endDateTxtLbl.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskskillsFlex.skillsTxtLbl.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.hoursFlex.hoursTxtLbl.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.commentsModal.commentsTxtBox.text = "";
    }
}

function AS_Button_d9548a946ba24ef5a52b3107c5a81fe9(eventobject) {
    BusinessExistingOpenTaskService();
    //searchResultProfile.businessProfileContainer.isVisible=false;
    searchResultProfile.opprtunitiesReadOnlyContainer.isVisible = true;
    searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.oppurtunities1ListModal.isVisible = true;
    searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.availabilityContainer.isVisible = true;
    searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunityDetailsHdrModal.oppurtunitiesHeaderDetails1.opprtunitiesHeadingModal.opportunityBusinessName.text = kony.store.getItem("busNameNew");
    var availabilty = kony.store.getItem("scheduleValNew");
    var name = kony.store.getItem("busNameNew");
    //alert("name"+name);
    searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.availabilityContainer.availabiltyTxt.text = availabilty;
}

function AS_Button_daf0f8ba85654d20965734e04213bc0e(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        mainPage.mainPageBody.mainPageContentParent.myEndorsements.isVisible = true;
        endorsementsService();
    }
}

function AS_Button_db0bf370a0c3499f8dda80469463a8c7(eventobject) {
    mainPage.acceptTaskDetailsModalContainer.isVisible = false;
    //mainPage.show(); 
}

function AS_Button_dc8aa82b60d146248de333630a31e677(eventobject) {
    mainPage.acceptTaskDetailsModalContainer.isVisible = false;
    //mainPage.show(); 
}

function AS_Button_dd04d69205504c73bb854cc564373e7a(eventobject) {
    if (gblIsOpp == true) {
        searchResultProfile.opprtunitiesReadOnlyContainer.isVisible = false;
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.TaskDetailsHdrFlex.taskTitleTxtLbl.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskDetailsModalFlex.taskDetailsRichTxt.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.startDateModalFlex.startDateTxt.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.endDateFlexModal.endDateTxtLbl.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskskillsFlex.skillsTxtLbl.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.hoursFlex.hoursTxtLbl.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.commentsModal.commentsTxtBox.text = "";
        searchResultProfile.destroy();
        searchPage.show();
    } else {
        searchResultProfile.opprtunitiesReadOnlyContainer.isVisible = false;
        var tempVal = [];
        var tempArray = [];
        tempArray.push("");
        tempArray.push("Select");
        tempVal.push(tempArray);
        //end
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.oppurtunities1ListModal.assignToExistingTaskListBox1.masterData = tempVal;
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.TaskDetailsHdrFlex.taskTitleTxtLbl.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskDetailsModalFlex.taskDetailsRichTxt.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.startDateModalFlex.startDateTxt.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.endDateFlexModal.endDateTxtLbl.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskskillsFlex.skillsTxtLbl.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.hoursFlex.hoursTxtLbl.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.commentsModal.commentsTxtBox.text = "";
    }
}

function AS_Button_ddf18c07fa384a37a7de98362839b45d(eventobject) {
    LogHoursForms.show();
}

function AS_Button_df13c25023874207a65c88b802d79b02(eventobject) {
    BusinessExistingOpenTaskService();
    //searchResultProfile.businessProfileContainer.isVisible=false;
    searchResultProfile.opprtunitiesReadOnlyContainer.isVisible = true;
    searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.oppurtunities1ListModal.isVisible = true;
    searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.availabilityContainer.isVisible = true;
    searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunityDetailsHdrModal.oppurtunitiesHeaderDetails1.opprtunitiesHeadingModal.opportunityBusinessName.text = kony.store.getItem("busNameNew");
    var availabilty = kony.store.getItem("scheduleValNew");
    var name = kony.store.getItem("busNameNew");
    //alert("name"+name);
    searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.availabilityContainer.availabiltyTxt.text = availabilty;
}

function AS_Button_e0ba749e1fcb4fc1bdc6a2783b501647(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        BusinessAcceptRequestTasks();
    } else {
        mainPage.eligibiltyCriteriaModalContainer.isVisible = true;
        var originalMsg = kony.store.getItem("busmsge");
        if ((originalMsg != null) && (originalMsg != "null")) {
            mainPage.eligibiltyCriteriaModalContainer.BodyFlex.reqmsgLbl.text = originalMsg;
        }
        //VolNewAcceptTaskBtn();
    }
}

function AS_Button_e21ac211a8a8413da63f77c6eac41fda(eventobject) {
    return addSchedule.call(this);
}

function AS_Button_e3f18ef59ddf4515966024449034031a(eventobject) {
    searchResultProfile.businessProfileContainer.isVisible = false;
    searchResultProfile.destroy();
    searchPage.show();
}

function AS_Button_e4554ff8383f4054ade62d64a912754e(eventobject) {
    mainPage.sendRecommendation.isVisible = false;
}

function AS_Button_e48ea3d0216f4aa9ba7a123e8a3ba25d(eventobject) {
    return addScheduleInUpdate.call(this);
}

function AS_Button_e53dc5e292c44b34a1ffdfbdf33fd8d8(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        indeginousDeclineRequest();
        //mamata
    } else {
        VolDeclineRequest();
        //mamata
    }
}

function AS_Button_e61308b7b7c34b918d972c688cd7d59d(eventobject) {
    return toggleVol.call(this, eventobject);
}

function AS_Button_e9344e555e7d470bb58175552f25dd36(eventobject) {
    return toggleVol.call(this, eventobject);
}

function AS_Button_e98b91463476471786423474c781fe50(eventobject) {}

function AS_Button_eb96d11911454d8e91cb3994fb686bf4(eventobject) {
    alert("hiii");
}

function AS_Button_ec9397f10e6e482bb595acb81c6014bf(eventobject, x, y) {
    return addNewSkill.call(this);
}

function AS_Button_ef9d782efbb843a2af32d76859191241(eventobject) {
    mainPage.destroy();
    if (kony.store.getItem("isBusOrVol") == "business") {
        mainPage.mainPageBody.navBarScroller.recommendationNavContainer.isVisible = true;
        mainPage.mainPageBody.mainPageContentParent.myNotifications.isVisible = true;
        BusinessRecommendationService();
    }
    mainPage.show();
}

function AS_Button_eff7b023275949cbb6d6d41224dead65(eventobject) {
    mainPage.acceptTaskDetailsModalContainer.isVisible = false;
    //mainPage.show(); 
}

function AS_Button_f197f02f5c294e089d477ddb4ef9a33e(eventobject) {
    var email = BusinessProfile.ChangePasswordBOdyContainer.loggedInBusinessEmailId.text;
    var oldPass = BusinessProfile.ChangePasswordBOdyContainer.CurrentPasswordInputField.text;
    var enterPass = BusinessProfile.ChangePasswordBOdyContainer.NewPasswordTextInput.text;
    var reenterNewPass = BusinessProfile.ChangePasswordBOdyContainer.ReEnterNewpasswordInputField.text;
    if (oldPass == "null" || oldPass == null || oldPass == "") {
        alert("Enter current password");
        return false;
    }
    if (enterPass == "null" || enterPass == null || enterPass == "") {
        alert("Enter new password");
        return false;
    } else {
        var isValidPasswordBus = validatePasswordForBusiness(enterPass);
        //alert("isValidPasswordBus"+isValidPasswordBus);
        // isValidPasswordBus = validatePassword();
        if (isValidPasswordBus == 1) {
            validationAlert("Password Error", "Passwords must have at least " + userValidation.passwordLength + " characters");
            return false;
        } else if (isValidPasswordBus == 2) {
            validationAlert("Password Error", "Passwords must have at least 1 special character");
            return false;
        } else if (isValidPasswordBus == 3) {
            validationAlert("Password Error", "Passwords must have at least 1 digit");
            return false;
        } else if (isValidPasswordBus == 4) {
            validationAlert("Password Error", "Passwords must have at least 1 capital letter");
            return false;
        }
    }
    if (reenterNewPass == "null" || reenterNewPass == null || reenterNewPass == "") {
        alert("Re-enter new password");
        return false;
    } else if (reenterNewPass != enterPass) {
        alert("New password and re-wntered new password are not matching");
        return false;
    } else if ((oldPass == enterPass) && (oldPass == reenterNewPass)) {
        alert("Do not repeat old password. Please enter new password");
        return false;
    } else {
        BusinessBusinessChangePassword();
    }
}

function AS_Button_f27476381d2c47589514da1ebb5535c3(eventobject) {
    registrationPersonalPage.show();
}

function AS_Button_f3075a508e024615b2e365abb06ea12b(eventobject) {
    //searchResultProfile.titleBarSkin="merinnow";
    //gblMer=true;
    BusOpenTaskExistingService();
    var d1 = new Date();
    var day1 = d1.getDate();
    var month1 = d1.getMonth();
    month1 = month1 + 1;
    var year1 = d1.getFullYear();
    var todayDate1 = day1 + "/" + month1 + "/" + year1;
    kony.store.setItem("todayDate", todayDate1);
    var volName = kony.store.getItem("VolNameForStartEngagement");
    searchResultProfile.startEngagementModalContainer.startEngagementHeaderContainer.topHeaderContainer.EngagementHasStartedContainer.nameLabel.text = volName;
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.StartDateCalendarInput.dateComponents = [day1, month1, year1];
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.EndDateCalendarInput.dateComponents = [day1, month1, year1];
    searchResultProfile.startEngagementModalContainer.isVisible = true;
}

function AS_Button_f43836994bb94ce2bebfdf4b6cb90080(eventobject) {
    return hoursAgreeAndContinueUpdate.call(this);
}

function AS_Button_f57470ae9f314ef4b9536d11b77f7ead(eventobject) {
    var text = mainPage.sendRecommendation.sendRecommendationModalBody.sendRecommendationTextArea.text;
    if (text == "null" || text == null || text == "") {
        //alert("Input your review");
        //D018: Commented out simple alert. Added kony ui error alert
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_ERROR,
            "alertTitle": null,
            "yesLabel": "OK",
            "noLabel": "No",
            "message": "Please input your recommendation or click cancel to return to previous screen",
            "alertHandler": "null"
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
    } else {
        volSendReview();
        mainPage.sendRecommendation.isVisible = false;
    }
    //mainPage.sendRecommendation.sendRecommendationModalBody.sendRecommendationTextArea.text=" ";
}

function AS_Button_f5be97cec0d2491eb4eeee04ce35edee(eventobject) {
    mainPage.show();
}

function AS_Button_f5ed84b5ee7648ca8b37b2f668ad41e1(eventobject) {
    mainPage.CreateOpportunityContainer.isVisible = true;
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth();
    month = month + 1;
    var year = d.getFullYear();
    var todayDate = day + "/" + month + "/" + year;
    kony.store.setItem("todayDate", todayDate);
    mainPage.CreateOpportunityContainer.BodyContainer.opportunityStartDateCalendarInput.dateComponents = [day, month, year];
    mainPage.CreateOpportunityContainer.BodyContainer.opportunityEndateCalendarInput.dateComponents = [day, month, year];
}

function AS_Button_fa2abf49a3a141279bfa919c7d225271(eventobject) {
    function SHOW_ALERT_ide_onClick_97d723e00d084d3b8a1afb5850e26e43_True() {} //indeginousTaskDetails();
    var title = mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskTitleField.text;
    var details = mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskDetailsTextArea.text;
    var endDate = mainPage.startEngagementModalContainer.startEngagementModalBody.endDateCalendarInput.formattedDate;
    var startDate = mainPage.startEngagementModalContainer.startEngagementModalBody.startDateCalendarInput.formattedDate;
    var hours = mainPage.startEngagementModalContainer.startEngagementModalBody.duratationOfEngagementInput.text;
    var endDate1 = kony.store.getItem("todayDate"); //   give todays's date'
    var startdate1 = mainPage.startEngagementModalContainer.startEngagementModalBody.startDateCalendarInput.formattedDate;
    var isValidEndDate = validateDate(startDate, endDate);
    var isValidStartEnd = validateStartDate(startdate1, endDate1);
    if (title === null || title === "" || title === "null") {
        alert("Please enter a task title");
    } else if (details === null || details === "" || details === "null") {
        alert("Please enter task details");
    } else if (hours == null || hours == "null" || hours == "") {
        alert("Please enter hours required to complete the task");
    } else {
        //alert("isValidStartEnd"+isValidStartEnd);
        if (isValidStartEnd === false) {
            validationAlert("Start Date should be greater than or equal to today's date");
        } else if (isValidEndDate === false) {
            validationAlert("End Date should be greater than or equal to start date");
        } else {
            //alert("done");
            indeginousTaskDetails();
        }
    }
}

function AS_Button_fad1112456d34dd0b6ab342ef98b80ef(eventobject) {
    mainPage.sendRecommendation.isVisible = false;
}

function AS_Button_fb3c6d49ec334ea0b2cf004b5b14f901(eventobject) {
    //mainPage.show();
    //VolMyProfile();
    //VollMyProfile();
    submitUpdateInfo();
}

function AS_Button_fbfed737da454414aae15fab452e5c5c(eventobject) {
    if (gblIsOpp == true) {
        var title9 = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.TaskDetailsHdrFlex.taskTitleTxtLbl.text;
        var details9 = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskDetailsModalFlex.taskDetailsRichTxt.text;
        var endDate9 = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.endDateFlexModal.endDateTxtLbl.text;
        var startDate9 = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.startDateModalFlex.startDateTxt.text;
        var hours9 = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.hoursFlex.hoursTxtLbl.text;
        var skills9 = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskskillsFlex.skillsTxtLbl.text;
        var messge9 = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.commentsModal.commentsTxtBox.text
        if (title9 === null || title9 === "" || title9 === "null") {
            kony.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "alertTitle": null,
                "yesLabel": "OK",
                "noLabel": "No",
                "message": "Please send message to indigenous business to express interest to volunteer as you currently don't have any briefs available to volunteer",
                "alertHandler": "null"
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
            // alert("Please send message to indigenous business to express interest to volunteer as you currently don't have any briefs available to volunteer");
            return false;
        } else if (details9 === null || details9 === "" || details9 === "null") {
            alert("Please enter task details");
            return false;
        } else if (skills9 == null || skills9 == "null" || skills9 == "") {
            alert("Please enter skill required to complete the task");
            return false;
        } else if (hours9 == null || hours9 == "null" || hours9 == "") {
            alert("Please enter hours required to complete the task");
            return false;
        } else if (messge9 == null || messge9 == "null" || messge9 == "") {
            alert("Please enter message");
            return false;
        }
        //alert("isValidStartEnd"+isValidStartEnd);
        else {
            //alert("done");
            BusinessRequestToVolunteerAcceptTaskOpp();
        }
    } else {
        var title9 = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.TaskDetailsHdrFlex.taskTitleTxtLbl.text;
        var details9 = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskDetailsModalFlex.taskDetailsRichTxt.text;
        var endDate9 = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.endDateFlexModal.endDateTxtLbl.text;
        var startDate9 = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.startDateModalFlex.startDateTxt.text;
        var hours9 = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.hoursFlex.hoursTxtLbl.text;
        var skills9 = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskskillsFlex.skillsTxtLbl.text;
        var messge9 = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.commentsModal.commentsTxtBox.text
        if (title9 === null || title9 === "" || title9 === "null") {
            kony.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "alertTitle": null,
                "yesLabel": "OK",
                "noLabel": "No",
                "message": "Please send message to indigenous business to express interest to volunteer as you currently don't have any briefs available to volunteer",
                "alertHandler": "null"
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
            // alert("Please send message to indigenous business to express interest to volunteer as you currently don't have any briefs available to volunteer");
            return false;
        } else if (details9 === null || details9 === "" || details9 === "null") {
            alert("Please enter task details");
            return false;
        } else if (skills9 == null || skills9 == "null" || skills9 == "") {
            alert("Please enter skill required to complete the task");
            return false;
        } else if (hours9 == null || hours9 == "null" || hours9 == "") {
            alert("Please enter hours required to complete the task");
            return false;
        } else if (messge9 == null || messge9 == "null" || messge9 == "") {
            alert("Please enter message");
            return false;
        }
        BusinessRequestToVolunteerAcceptTasks99();
    }
}

function AS_Button_fc4ccf04c3434ac98e2da763805b5750(eventobject) {
    mainPage.show();
}

function AS_Button_fcff7ef4abba402c8f1eae3689255bb4(eventobject) {
    pop1.dismiss();
}

function AS_Button_fd8b530b025240c0a83dcebcb22bc176(eventobject) {
    searchResultProfile.volunteerProfileContainer.isVisible = false;
    searchResultProfile.destroy();
    searchPage.show();
}

function AS_Button_fe953aeb6be94dfcb3ee8c7a51645924(eventobject) {
    scheduleNewForm.show();
}

function AS_Button_fff21f566b984c2e92a93b839a3014aa(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        //alert("he is business");
        var busMsg = searchResultProfile.volunteerRequestContainer.requestAVolunteerModal.requestAVolunteerBody.requestAVolunteerMessageInput.text;
        if (busMsg == "null" || busMsg == null || busMsg == "") {
            alert("Please enter a message");
        } else {
            requestVolunteer();
        }
    }
    //   }else
    //     {
    //    //   alert("he is volunteer");
    //       requestVolunteerByBusiness1();
    //     }
}

function AS_CheckBoxGroup_51154a24fa7345cfa76545f96566cb84(eventobject) {
    var checkBoxVal = mainPage.checkList.selectedKeys;
    //alert("checkBoxVal:"+JSON.stringify(checkBoxVal));
    if (checkBoxVal != null) {
        CheckBoxFunction7();
    } else {
        UnCheckBoxFunction7();
    }
}

function AS_CheckBoxGroup_5e729be7102843cfa93c156269a715dd(eventobject) {
    var chkboxvalue = mainPage.eligibiltyCriteriaModalContainer.acceptTermsChekBoxFlex.chckBoxx.selectedKeys;
    //alert("checkBoxVal:"+JSON.stringify(checkBoxVal));
    if (chkboxvalue != null) {
        mainPage.eligibiltyCriteriaModalContainer.Footer.agreeBtn.isVisible = true;
    } else {
        mainPage.eligibiltyCriteriaModalContainer.Footer.agreeBtn.isVisible = false;
    }
}

function AS_CheckBoxGroup_c2d2104377b94ac29d181a1b042ff518(eventobject) {
    var checkBoxVal = mainPage.checkList.selectedKeys;
    //alert("checkBoxVal:"+JSON.stringify(checkBoxVal));
    if (checkBoxVal != null) {
        CheckBoxFunction7();
    } else {
        UnCheckBoxFunction7();
    }
}

function AS_CheckBoxGroup_f2bc0c786f4e4391a9b09374f1707aeb(eventobject) {
    var chkboxvalue = mainPage.eligibiltyCriteriaModalContainer.acceptTermsChekBoxFlex.chckBoxFlex.chckBoxx.selectedKeys;
    //alert("checkBoxVal:"+JSON.stringify(checkBoxVal));
    if (chkboxvalue != null) {
        mainPage.eligibiltyCriteriaModalContainer.Footer.agreeBtn.isVisible = true;
    } else {
        mainPage.eligibiltyCriteriaModalContainer.Footer.agreeBtn.isVisible = false;
    }
}

function AS_FlexContainer_00116715facc4593b10937138e2d90aa(eventobject, x, y) {
    return expandCollapseGroup.call(this, eventobject, "myClosedTasks");
}

function AS_FlexContainer_0039c2f5581b4110aa4794159d292036(eventobject, x, y) {}

function AS_FlexContainer_0407b52146f0413f9b0212904f89215f(eventobject, x, y) {}

function AS_FlexContainer_0e6293c240514d6a9a0aab5dff06be18(eventobject, x, y) {}

function AS_FlexContainer_10b3ba0c5c0649979ea5122b6008bf27(eventobject, x, y) {
    mainPage.show();
}

function AS_FlexContainer_11414f9274b047adb43d5ef7d9c25725(eventobject, x, y) {
    return expandCollapseGroup.call(this, eventobject, "myOpenTasks");
}

function AS_FlexContainer_1397ac3129794b3b8d5d22ff7d1d1557(eventobject, x, y) {}

function AS_FlexContainer_18223dc817e54775982182354f7f2662(eventobject, x, y) {}

function AS_FlexContainer_19ea59bfb360457584767ccede694730(eventobject, x, y) {}

function AS_FlexContainer_1c1575f8331942b6a160b360ec272579(eventobject) {}

function AS_FlexContainer_1fafa4792ceb4465aef1c5c9b74a8e2a(eventobject, x, y) {
    //volunteerPhoneNumber();
    if (kony.store.getItem("isBusOrVol") == "business") {
        var segType1 = kony.store.getItem("segmentType");
        // alert(segType1);
        try {
            if (segType1 != "null" || segType1 != null) {
                if (segType1 == "sent") {
                    //alert("Isinde open seg " + segType1);
                    callContactfromStartEngagementSentRequestSeg();
                } else if (segType1 == "open") {
                    //alert("Isinde open seg " + segType1);
                    callContactfromOpenTaskBusiness();
                } else {
                    (segType1 == "close")
                    //alert("Inside Close Task");
                    callContactfromCloseTaskBusiness();
                }
            }
        } catch (e) {
            //alert(e);
        }
    } else {
        var segType2 = kony.store.getItem("segmentType");
        //alert("the clicked segTypement is ="+segType2);
        try {
            if (segType2 != "null" || segType2 != null) {
                //     //alert("Inside Accepted segType after first segType");
                if (segType2 == "accepted") {
                    // alert("Inside Accepted segType");
                    contactVolunteerFromAcceptTaskDetailsPage();
                } else if (segType2 == "open") {
                    callContactfromOpenTaskVolunteer();
                    // alert("Inside Open segType"); 
                } else if (segType2 == "close") {
                    callContactfromCloseTaskVolunteer();
                }
            }
        } catch (e) {
            //alert("Error is"+e);
        }
    }
}

function AS_FlexContainer_23072ca9de4b4a3f9072bb4184471480(eventobject, x, y) {
    mainPage.mainPageBody.navBarScroller.activityNavContainer.activityIndicator.isVisible = false;
    mainPage.mainPageBody.navBarScroller.recommendationNavContainer.recommendationIndicator.isVisible = false;
    mainPage.mainPageBody.navBarScroller.notificationNavContainer.notificationIndicator.isVisible = true;
}

function AS_FlexContainer_249850a57d2f494dacacd0e20957c063(eventobject, x, y) {
    mainPage.mainPageBody.navBarScroller.activityNavContainer.activityIndicator.isVisible = false;
    mainPage.mainPageBody.navBarScroller.recommendationNavContainer.recommendationIndicator.isVisible = false;
    mainPage.mainPageBody.navBarScroller.notificationNavContainer.notificationIndicator.isVisible = true;
    mainPage.mainPageBody.navBarScroller.endorsementsContainer.endorsementsIndicator.isVisible = false;
}

function AS_FlexContainer_263c73d94f7c4fb89cdab6eee512e067(eventobject, x, y) {}

function AS_FlexContainer_2fb923d1a2f14b00a019c1ffd9a698e9(eventobject, x, y) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        var segTypeCheckforVolCall = kony.store.getItem("segmentType");
        // alert(segType1);
        try {
            if (segTypeCheckforVolCall != "null" || segTypeCheckforVolCall != null) {
                if (segTypeCheckforVolCall == "sent") {
                    //alert("Isinde open seg " + segType1);
                    callContactfromStartEngagementSentRequestSeg();
                }
            }
        } catch (e) {
            //alert(e);
        }
    } else {
        var segTypeforBusCal = kony.store.getItem("segmentType");
        //alert("the clicked segTypement is ="+segTypeforBusCal);
        try {
            if (segTypeforBusCal != "null" || segTypeforBusCal != null) {
                //     //alert("Inside Accepted segType after first segType");
                if (segTypeforBusCal == "accepted") {
                    // alert("Inside Accepted segType");
                    contactVolunteerFromAcceptTaskDetailsPage();
                }
            }
        } catch (e) {
            alert("aError is" + e);
        }
    }
}

function AS_FlexContainer_30736cdefc9f4a7fad59b12ff27cc077(eventobject, x, y) {
    return expandCollapseGroup.call(this, eventobject, "unAssignedTask");
}

function AS_FlexContainer_36276271ebc34db08d915794a92b6d11(eventobject) {}

function AS_FlexContainer_367d0b6842624f579e9a5e58c9766a61(eventobject, x, y) {}

function AS_FlexContainer_381d5a2f9497418b988169822e58e794(eventobject, x, y) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        var segTypeCheckforVolCall = kony.store.getItem("segmentType");
        // alert(segType1);
        try {
            if (segTypeCheckforVolCall != "null" || segTypeCheckforVolCall != null) {
                if (segTypeCheckforVolCall == "sent") {
                    //alert("Isinde open seg " + segType1);
                    callContactfromStartEngagementSentRequestSeg();
                }
            }
        } catch (e) {
            //alert(e);
        }
    }
    // else
    //   {
    //     var segTypeforBusCal=kony.store.getItem("segmentType");
    // //alert("the clicked segTypement is ="+segTypeforBusCal);
    // try{
    //   if(segTypeforBusCal!="null"||segTypeforBusCal!=null)
    //   {
    // //     //alert("Inside Accepted segType after first segType");
    //     if(segTypeforBusCal=="accepted")
    //       {
    //        // alert("Inside Accepted segType");
    //         callBusFromAcceptedSeg();
    //      } 
    //     else if(segTypeforBusCal=="open")
    //   {
    //     //alert("Inside Open segType");
    //     callBusContactOpenSeg();
    //        //alert("Inside Accepted segType"); 
    //   }
    //      else if(segTypeforBusCal=="close")
    //   {
    //     callBusFromeCloseSeg();
    //   }
    // }
    //   }
    //     catch(e)
    //   {
    //     alert("aError is"+e);
    //   }
    //   }
}

function AS_FlexContainer_3decb290eaa64329b591006933cbc4cd(eventobject, x, y) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        var segTypeCheckforVolCall = kony.store.getItem("segmentType");
        // alert(segType1);
        try {
            if (segTypeCheckforVolCall != "null" || segTypeCheckforVolCall != null) {
                if (segTypeCheckforVolCall == "open") {
                    //alert("Isinde open seg " + segType1);
                    callFromOpenSeg();
                } else {
                    (segTypeCheckforVolCall == "close")
                    //alert("Inside Close Task");
                    callVolFromeCloseSeg();
                }
            }
        } catch (e) {
            //alert(e);
        }
    } else {
        var segTypeforBusCal = kony.store.getItem("segmentType");
        //alert("the clicked segTypement is ="+segTypeforBusCal);
        try {
            if (segTypeforBusCal != "null" || segTypeforBusCal != null) {
                //     //alert("Inside Accepted segType after first segType");
                if (segTypeforBusCal == "accepted") {
                    // alert("Inside Accepted segType");
                    callBusFromAcceptedSeg();
                } else if (segTypeforBusCal == "open") {
                    //alert("Inside Open segType");
                    callBusContactOpenSeg();
                    //alert("Inside Accepted segType"); 
                } else if (segTypeforBusCal == "close") {
                    callBusFromeCloseSeg();
                }
            }
        } catch (e) {
            alert("aError is" + e);
        }
    }
}

function AS_FlexContainer_3fdb3c69d82645f4acec633fedc7f5c0(eventobject, x, y) {
    kony.application.openURL(' http://commnet2.cba/Main/Corporate-Responsibility/community-support/volunteering/lightbox/Documents/2013.11 Volunteering Policy and FAQs FINAL.pdf')
}

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

function AS_FlexContainer_517da29429e8426ea747095e522e560a(eventobject) {}

function AS_FlexContainer_53cb4940b42e48d2ac56285b59581ab1(eventobject, x, y) {
    return expandCollapseGroup.call(this, eventobject, "AcceptedRequestList");
}

function AS_FlexContainer_542e8ed04a80413e96a847a7ba911ea9(eventobject, x, y) {}

function AS_FlexContainer_582ad7e133c341e581abaadcd028e991(eventobject, x, y) {
    mainPage.mainPageBody.navBarScroller.activityNavContainer.activityIndicator.isVisible = true;
    mainPage.mainPageBody.navBarScroller.notificationNavContainer.notificationIndicator.isVisible = false;
    mainPage.mainPageBody.navBarScroller.recommendationNavContainer.recommendationIndicator.isVisible = false;
}

function AS_FlexContainer_5ac82d2dce54410d9ac7e4ff57cbc7ab(eventobject) {
    mainPage.mainPageBody.navBarScroller.activityNavContainer.activityIndicator.isVisible = false;
    mainPage.mainPageBody.navBarScroller.notificationNavContainer.notificationIndicator.isVisible = false;
    mainPage.mainPageBody.navBarScroller.recommendationNavContainer.recommendationIndicator.isVisible = true;
}

function AS_FlexContainer_5dc50c25822441908725817f568d0d08(eventobject, x, y) {
    return requestToVolunteerSetup.call(this);
}

function AS_FlexContainer_601f7677d0e84dd79d22d8e1e1759e80(eventobject, x, y) {
    return hideSideBar.call(this);
}

function AS_FlexContainer_613d997a7d3049df9e1a52c2860ed7f5(eventobject, x, y) {}

function AS_FlexContainer_6540f231490e4bc6a3ec2b549280dee4(eventobject, x, y) {}

function AS_FlexContainer_663b9e1a50524ad4a465c143f89d5609(eventobject, x, y) {
    return expandCollapseGroup.call(this, eventobject, "mySentRequests");
}

function AS_FlexContainer_6780238faaf74f62848b22ff2196f1ea(eventobject, x, y) {
    mainPage.mainPageBody.navBarScroller.activityNavContainer.activityIndicator.isVisible = false;
    mainPage.mainPageBody.navBarScroller.notificationNavContainer.notificationIndicator.isVisible = false;
    mainPage.mainPageBody.navBarScroller.recommendationNavContainer.recommendationIndicator.isVisible = true;
}

function AS_FlexContainer_68bb06f902124fb6886bd60ba2722fe7(eventobject, x, y) {}

function AS_FlexContainer_6b4ca0e1ddef4db0915b830860773aa2(eventobject, x, y) {
    mainPage.mainPageBody.navBarScroller.activityNavContainer.activityIndicator.isVisible = false;
    mainPage.mainPageBody.navBarScroller.recommendationNavContainer.recommendationIndicator.isVisible = false;
    mainPage.mainPageBody.navBarScroller.notificationNavContainer.notificationIndicator.isVisible = false;
    mainPage.mainPageBody.navBarScroller.endorsementsContainer.endorsementsIndicator.isVisible = true;
}

function AS_FlexContainer_6d072d31e9b64506a9a31d54df005a82(eventobject) {}

function AS_FlexContainer_6db6af8e493a48c794a9b70c300a50a2(eventobject) {
    mainPage.mainPageBody.navBarScroller.activityNavContainer.activityIndicator.isVisible = false;
    mainPage.mainPageBody.navBarScroller.notificationNavContainer.notificationIndicator.isVisible = false;
    mainPage.mainPageBody.navBarScroller.recommendationNavContainer.recommendationIndicator.isVisible = true;
}

function AS_FlexContainer_707f746bdd524a70aaff639693feca51(eventobject, x, y) {
    return expandCollapseGroup.call(this, eventobject, "myAcceptedRequests");
}

function AS_FlexContainer_70e9c0d9d6c5476186dd8e45a2709369(eventobject, x, y) {
    return expandCollapseGroup.call(this, eventobject, "myOpenTasks");
}

function AS_FlexContainer_7270f6b967f84aa99d2f3d0d30479d63(eventobject, x, y) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        var segTypeCheckforVolCall = kony.store.getItem("segmentType");
        // alert(segType1);
        try {
            if (segTypeCheckforVolCall != "null" || segTypeCheckforVolCall != null) {
                if (segTypeCheckforVolCall == "sent") {
                    //alert("Isinde open seg " + segType1);
                    callContactSentSeg();
                }
            }
        } catch (e) {
            //alert(e);
        }
    }
    // else
    //   {
    //     var segTypeforBusCal=kony.store.getItem("segmentType");
    // //alert("the clicked segTypement is ="+segTypeforBusCal);
    // try{
    //   if(segTypeforBusCal!="null"||segTypeforBusCal!=null)
    //   {
    // //     //alert("Inside Accepted segType after first segType");
    //     if(segTypeforBusCal=="accepted")
    //       {
    //        // alert("Inside Accepted segType");
    //         callBusFromAcceptedSeg();
    //      } 
    //     else if(segTypeforBusCal=="open")
    //   {
    //     //alert("Inside Open segType");
    //     callBusContactOpenSeg();
    //        //alert("Inside Accepted segType"); 
    //   }
    //      else if(segTypeforBusCal=="close")
    //   {
    //     callBusFromeCloseSeg();
    //   }
    // }
    //   }
    //     catch(e)
    //   {
    //     alert("aError is"+e);
    //   }
    //   }
}

function AS_FlexContainer_7805026078094123bb83216522f207e2(eventobject, x, y) {
    return expandCollapseGroup.call(this, eventobject, "myOpenTasks");
}

function AS_FlexContainer_781b1d915cdb40199b25d6ae5c13c0b9(eventobject) {}

function AS_FlexContainer_78bef673bd2e4ae39f4fd73b5a030a67(eventobject) {}

function AS_FlexContainer_832c6cfc7b0040a3a56b3eaba68083cd(eventobject, x, y) {}

function AS_FlexContainer_85270cb1dc6c486fbd228b2cc100f6eb(eventobject, x, y) {
    volunteerPhoneNumber();
}

function AS_FlexContainer_92fa437a891d45e2ad91ed89ad0a0540(eventobject, x, y) {
    return expandCollapseGroup.call(this, eventobject, "acceptedRequests");
}

function AS_FlexContainer_93f6a05cc0de41daaa7ac5223ea25245(eventobject, x, y) {
    kony.application.openURL(' http://commnet2.cba/Main/Corporate-Responsibility/community-support/volunteering/lightbox/Documents/2013.11 Volunteering Policy and FAQs FINAL.pdf')
}

function AS_FlexContainer_94f88105edba42169f3bbb7f6c3eff09(eventobject, x, y) {
    mainPage.mainPageBody.navBarScroller.activityNavContainer.activityIndicator.isVisible = true;
    mainPage.mainPageBody.navBarScroller.notificationNavContainer.notificationIndicator.isVisible = false;
    mainPage.mainPageBody.navBarScroller.recommendationNavContainer.recommendationIndicator.isVisible = false;
}

function AS_FlexContainer_950d5751f8994b5faf88079c88c9172f(eventobject, x, y) {}

function AS_FlexContainer_953811d9dbba4283a658c64de930bea4(eventobject) {}

function AS_FlexContainer_98ad2948134c4b5bbf52dc62fa833805(eventobject) {}

function AS_FlexContainer_98d3aa24541b4a29995d52d254def029(eventobject) {
    mainPage.acceptTaskDetailsModalContainer.isVisible = false;
    //mainPage.show(); 
}

function AS_FlexContainer_98f74fb48fe1473cbdd90ffdd1e6534d(eventobject) {
    mainPage.acceptTaskDetailsModalContainer.isVisible = false;
    //mainPage.show(); 
}

function AS_FlexContainer_99a99ac5ad5e41798db3cd0d51d72592(eventobject, x, y) {}

function AS_FlexContainer_99e8249ccedb4e75b5f74a5d2160d486(eventobject) {}

function AS_FlexContainer_9b737b9091164aa7bf7ea116db32882f(eventobject) {}

function AS_FlexContainer_9daff32972304912a53b138f76c0cd74(eventobject) {}

function AS_FlexContainer_9ed07e389047407ab01f2c345a779980(eventobject, x, y) {}

function AS_FlexContainer_a26b51c0f2e54fb9bb5a9d9ed22add4c(eventobject, x, y) {}

function AS_FlexContainer_a6cbc2130b064370b0fd4ddc2b2267d1(eventobject) {
    mainPage.acceptTaskDetailsModalContainer.isVisible = false;
    //mainPage.show(); 
}

function AS_FlexContainer_b30e39e791ae4bbd88105a50997e9a96(eventobject, x, y) {
    mainPage.mainPageBody.navBarScroller.activityNavContainer.activityIndicator.isVisible = false;
    mainPage.mainPageBody.navBarScroller.notificationNavContainer.notificationIndicator.isVisible = false;
    mainPage.mainPageBody.navBarScroller.recommendationNavContainer.recommendationIndicator.isVisible = true;
    mainPage.mainPageBody.navBarScroller.endorsementsContainer.endorsementsIndicator.isVisible = false;
}

function AS_FlexContainer_b3a212d52bac4901b784c4c9714714ed(eventobject) {
    mainPage.mainPageBody.navBarScroller.activityNavContainer.activityIndicator.isVisible = false;
    mainPage.mainPageBody.navBarScroller.notificationNavContainer.notificationIndicator.isVisible = false;
    mainPage.mainPageBody.navBarScroller.recommendationNavContainer.recommendationIndicator.isVisible = true;
}

function AS_FlexContainer_b650b086d238460b8818950d23cdc2ae(eventobject, x, y) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        var segTypeCheckforVolCall = kony.store.getItem("segmentType");
        // alert(segType1);
        try {
            if (segTypeCheckforVolCall != "null" || segTypeCheckforVolCall != null) {
                if (segTypeCheckforVolCall == "open") {
                    //alert("Isinde open seg " + segType1);
                    callFromOpenSeg();
                } else {
                    (segTypeCheckforVolCall == "close")
                    //alert("Inside Close Task");
                    callVolFromeCloseSeg();
                }
            }
        } catch (e) {
            //alert(e);
        }
    } else {
        var segTypeforBusCal = kony.store.getItem("segmentType");
        //alert("the clicked segTypement is ="+segTypeforBusCal);
        try {
            if (segTypeforBusCal != "null" || segTypeforBusCal != null) {
                //     //alert("Inside Accepted segType after first segType");
                if (segTypeforBusCal == "accepted") {
                    // alert("Inside Accepted segType");
                    callBusFromAcceptedSeg();
                } else if (segTypeforBusCal == "open") {
                    //alert("Inside Open segType");
                    callBusContactOpenSeg();
                    //alert("Inside Accepted segType"); 
                } else if (segTypeforBusCal == "close") {
                    callBusFromeCloseSeg();
                }
            }
        } catch (e) {
            alert("aError is" + e);
        }
    }
}

function AS_FlexContainer_b74bf0ca08354ac482d50767e3733d00(eventobject, x, y) {
    mainPage.mainPageBody.navBarScroller.activityNavContainer.activityIndicator.isVisible = true;
    mainPage.mainPageBody.navBarScroller.notificationNavContainer.notificationIndicator.isVisible = false;
    mainPage.mainPageBody.navBarScroller.recommendationNavContainer.recommendationIndicator.isVisible = false;
    mainPage.mainPageBody.navBarScroller.endorsementsContainer.endorsementsIndicator.isVisible = false;
}

function AS_FlexContainer_b9c789930dec4959a62a2a3f2f7d5c1d(eventobject, x, y) {
    mainPage.mainPageBody.navBarScroller.activityNavContainer.activityIndicator.isVisible = false;
    mainPage.mainPageBody.navBarScroller.recommendationNavContainer.recommendationIndicator.isVisible = false;
    mainPage.mainPageBody.navBarScroller.notificationNavContainer.notificationIndicator.isVisible = true;
}

function AS_FlexContainer_bb249642e7b74097b99a85b6d0e0bbdb(eventobject, x, y) {
    //volunteerPhoneNumberForCall();
    CallVol1();
}

function AS_FlexContainer_c3c2d187fb734eddadb0c6edd6a214a4(eventobject) {}

function AS_FlexContainer_c585874625264a289cab83378cb279d4(eventobject) {}

function AS_FlexContainer_cae27a7e255946aba75457f13ce68dd9(eventobject, x, y) {}

function AS_FlexContainer_cb3a212754044204a9fe5c94f1364cc6(eventobject, x, y) {
    volunteerPhoneNumber();
}

function AS_FlexContainer_ce5e9090c68f49ae8582dc5c48f56a1f(eventobject) {}

function AS_FlexContainer_ceb3b0ff16104efb92156424858da73a(eventobject, x, y) {}

function AS_FlexContainer_cfd527e91ca24efb98abe8143d3d09f8(eventobject, x, y) {
    return expandCollapseGroup.call(this, eventobject, "myAcceptedRequests");
}

function AS_FlexContainer_d0341f9b96924e6b862ae7c95fbeda06(eventobject, x, y) {}

function AS_FlexContainer_d83f2a41f50a437795e2a454ac3be0ed(eventobject, x, y) {}

function AS_FlexContainer_db749c3e3091495bba286a9afa2bbdd5(eventobject, x, y) {}

function AS_FlexContainer_dd5e6f1aa54942bf9bd5df995121d3fe(eventobject, x, y) {
    return expandCollapseGroup.call(this, eventobject, "myOpenTasks");
}

function AS_FlexContainer_dfe2d02d41954550ba9a40c142ef5fca(eventobject) {
    mainPage.acceptTaskDetailsModalContainer.isVisible = false;
    //mainPage.show(); 
}

function AS_FlexContainer_e69e8a3c678543e089873840524029ee(eventobject) {
    mainPage.acceptTaskDetailsModalContainer.isVisible = false;
    //mainPage.show(); 
}

function AS_FlexContainer_e81eff96496c4deebd60d83fd77b0128(eventobject, x, y) {
    //volunteerPhoneNumber();
    if (kony.store.getItem("isBusOrVol") == "business") {
        var segType1 = kony.store.getItem("segmentType");
        // alert(segType1);
        try {
            if (segType1 != "null" || segType1 != null) {
                if (segType1 == "sent") {
                    //alert("Isinde open seg " + segType1);
                    callContactfromStartEngagementSentRequestSeg();
                } else if (segType1 == "open") {
                    //alert("Isinde open seg " + segType1);
                    callContactfromOpenTaskBusiness();
                } else {
                    (segType1 == "close")
                    //alert("Inside Close Task");
                    callContactfromCloseTaskBusiness();
                }
            }
        } catch (e) {
            //alert(e);
        }
    } else {
        var segType2 = kony.store.getItem("segmentType");
        //alert("the clicked segTypement is ="+segType2);
        try {
            if (segType2 != "null" || segType2 != null) {
                //     //alert("Inside Accepted segType after first segType");
                if (segType2 == "accepted") {
                    // alert("Inside Accepted segType");
                    contactVolunteerFromAcceptTaskDetailsPage();
                } else if (segType2 == "open") {
                    callContactfromOpenTaskVolunteer();
                    // alert("Inside Open segType"); 
                } else if (segType2 == "close") {
                    callContactfromCloseTaskVolunteer();
                }
            }
        } catch (e) {
            //alert("Error is"+e);
        }
    }
}

function AS_FlexContainer_e942b364329c4bfdb7027d857cb5692b(eventobject, x, y) {
    return showSideBar.call(this);
}

function AS_FlexContainer_e9e15be97ae745ad8c755ed5a07ede3e(eventobject, x, y) {
    return expandCollapseGroup.call(this, eventobject, "myOpenTasks");
}

function AS_FlexContainer_ed74b6eca2554fd1a12165ae92025666(eventobject) {}

function AS_FlexContainer_eee6ea73b5ea492cac8656782b276f77(eventobject, x, y) {}

function AS_FlexContainer_f07e8bd82ca64434b48d0add088a5563(eventobject, x, y) {
    volunteerPhoneNumber();
}

function AS_FlexContainer_f170d61dd5724eaab0c1ba4c6839047c(eventobject, x, y) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        var segType1 = kony.store.getItem("segmentType");
        // alert(segType1);
        try {
            if (segType1 != "null" || segType1 != null) {
                if (segType1 == "open") {
                    //alert("Isinde open seg " + segType1);
                    callContactfromOpenTaskBusiness();
                } else {
                    (segType1 == "close")
                    //alert("Inside Close Task");
                    callContactfromCloseTaskBusiness();
                }
            }
        } catch (e) {
            //alert(e);
        }
    } else {
        var segType2 = kony.store.getItem("segmentType");
        //alert("the clicked segTypement is ="+segType2);
        try {
            if (segType2 != "null" || segType2 != null) {
                //     //alert("Inside Accepted segType after first segType");
                if (segType2 == "accepted") {
                    // alert("Inside Accepted segType");
                    contactVolunteerFromAcceptTaskDetailsPage();
                } else if (segType2 == "open") {
                    callContactfromOpenTaskVolunteer();
                    // alert("Inside Open segType"); 
                } else if (segType2 == "close") {
                    callContactfromCloseTaskVolunteer();
                }
            }
        } catch (e) {
            //alert("Error is"+e);
        }
    }
}

function AS_FlexContainer_f5aa90b7b6a4452682fd1b327a59e6cf(eventobject, x, y) {
    //volunteerPhoneNumber();
    msgVol();
}

function AS_FlexContainer_f5bfa3d38e874bce8724880841c9d2db(eventobject, x, y) {
    mainPage.mainPageBody.navBarScroller.activityNavContainer.activityIndicator.isVisible = false;
    mainPage.mainPageBody.navBarScroller.notificationNavContainer.notificationIndicator.isVisible = false;
    mainPage.mainPageBody.navBarScroller.recommendationNavContainer.recommendationIndicator.isVisible = true;
}

function AS_FlexScrollContainer_46ba22050f78404b85f1e14fda58771d(eventobject) {}

function AS_FlexScrollContainer_604aa26b23e94155b12581a5ad8219d8(eventobject) {}

function AS_FlexScrollContainer_6223cf7066574e4890bf5fcc94858ad6(eventobject) {}

function AS_FlexScrollContainer_8be4a7ba3d8e4b698a2be7f9a515b99c(eventobject) {}

function AS_FlexScrollContainer_d243823fe54342afb5d45776a177f97b(eventobject) {}

function AS_Form_210b62b0a1d94c68806b1842609c9463(eventobject) {
    registrationProfessionalPage.regSkillsSegment.widgetDataMap = {
        "regSkillItem": "regSkillItem",
        "imgClose": "imgClose"
    };
    //alert(volunteerRegObject.skillsArray.length);
    if (volunteerRegObject.skillsArray.length == "0.0") {
        //alert("no val");
        registrationProfessionalPage.regSkillsSegment.removeAll();
    }
}

function AS_Form_2283f3e743da4be7acf45a52a6bb3be2(eventobject) {
    return loadHours.call(this);
}

function AS_Form_42a11d3c371641b28b461909f0aad3b7(eventobject) {
    gblFirstTime = false;
    if (gblIsVol == true) {
        searchResultProfile.businessProfileContainer.isVisible = false;
        searchResultProfile.volunteerRequestContainer.isVisible = false;
        searchResultProfile.volunteerProfileContainer.isVisible = true;
    } else {
        searchResultProfile.volunteerProfileContainer.isVisible = false;
        searchResultProfile.volunteerRequestContainer.isVisible = false;
        searchResultProfile.businessProfileContainer.isVisible = true;
    }
    if (gblIsOpp == true) {
        searchResultProfile.opprtunitiesReadOnlyContainer.isVisible = true;
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.oppurtunities1ListModal.isVisible = false;
    }
}

function AS_Form_4b8f6c7320214bb784011926590506f0(eventobject) {
    //start jan 23
    var d = new Date();
    d.setMonth(d.getMonth() - 1);
    var dValMonth = d.getMonth() + 1;
    var dValDay = d.getDate();
    var dValYear = d.getFullYear();
    ReportingPage.StartDateCalendar.dateComponents = [dValDay, dValMonth, dValYear];
    var d = new Date();
    var dValMonth = d.getMonth() + 1;
    var dValDay = d.getDate();
    var dValYear = d.getFullYear();
    ReportingPage.EndDateCalendar.dateComponents = [dValDay, dValMonth, dValYear];
    //end jan 23
    ReportingPage.ReceipientsTxtArea.text = kony.store.getItem("loginEmail");
    if ((kony.store.getItem("isBusOrVol") == "volunteer") && (kony.store.getItem("adminVal") == "v")) {
        ReportingPage.ReportingContainer.ReportingActionsContainer.corporateFlexContainer.isVisible = true;
        ReportingPage.ReportingContainer.ReportingActionsContainer.supplyNationContainer.isVisible = false;
        ReportingPage.ReportingContainer.ReportingActionsContainer.IndigenousBusinessContainer.isVisible = false;
        ReportingPage.ReportingContainer.ReportingActionsContainer.corporateFlexContainer.corporateIndicatorFlex.isVisible = true;
        ReportingPage.ReportingContainer.ReportingActionsContainer.supplyNationContainer.supplyNationIndicator.isVisible = false;
        ReportingPage.ReportingContainer.ReportingActionsContainer.IndigenousBusinessContainer.BusinessIndicator.isVisible = false;
    } else if ((kony.store.getItem("isBusOrVol") == "business") && (kony.store.getItem("adminVal") == "i")) {
        ReportingPage.ReportingContainer.ReportingActionsContainer.corporateFlexContainer.isVisible = false;
        ReportingPage.ReportingContainer.ReportingActionsContainer.supplyNationContainer.isVisible = false;
        ReportingPage.ReportingContainer.ReportingActionsContainer.IndigenousBusinessContainer.isVisible = true;
        ReportingPage.ReportingContainer.ReportingActionsContainer.corporateFlexContainer.corporateIndicatorFlex.isVisible = false;
        ReportingPage.ReportingContainer.ReportingActionsContainer.supplyNationContainer.supplyNationIndicator.isVisible = false;
        ReportingPage.ReportingContainer.ReportingActionsContainer.IndigenousBusinessContainer.BusinessIndicator.isVisible = true;
    } else {
        ReportingPage.ReportingContainer.ReportingActionsContainer.corporateFlexContainer.isVisible = false;
        ReportingPage.ReportingContainer.ReportingActionsContainer.supplyNationContainer.isVisible = true;
        ReportingPage.ReportingContainer.ReportingActionsContainer.IndigenousBusinessContainer.isVisible = false;
        ReportingPage.ReportingContainer.ReportingActionsContainer.corporateFlexContainer.corporateIndicatorFlex.isVisible = false;
        ReportingPage.ReportingContainer.ReportingActionsContainer.supplyNationContainer.supplyNationIndicator.isVisible = true;
        ReportingPage.ReportingContainer.ReportingActionsContainer.IndigenousBusinessContainer.BusinessIndicator.isVisible = false;
    }
}

function AS_Form_683e8141b8fd42a0898dcaa41d91db36(eventobject) {
    initAppHeader();
    //alert("entering");
    //mainPage.cancelRequestModalContainer.isVisible = false;
    if (kony.store.getItem("isBusOrVol") == "business") {
        // alert("a");
        mainPage.mainPageBody.searchBarContainer.appHeaderTitleContainer.lblBusorVolName.text = kony.store.getItem("loginBusinessName");
        var imageurlPath = kony.store.getItem("imgUrlBusiness");
        if (imageurlPath != null) {
            //alert("jst before setting"+imageurlPath);
            mainPage.mainPageBody.searchBarContainer.appHeaderTitleContainer.appPageProfilePic.src = "";
            mainPage.mainPageBody.searchBarContainer.appHeaderTitleContainer.appPageProfilePic.src = imageurlPath;
        }
        //BusinessExistingOpenTaskService();
        getBusinessRequestsService();
        //BusinessRecommendationService();
    } else {
        // alert("it is volunteer");
        mainPage.mainPageBody.searchBarContainer.appHeaderTitleContainer.lblBusorVolName.text = kony.store.getItem("volLoginName");
        var VolimageurlPath = kony.store.getItem("imgUrlVal");
        if (VolimageurlPath != null) {
            mainPage.mainPageBody.searchBarContainer.appHeaderTitleContainer.appPageProfilePic.src = VolimageurlPath;
        }
        getVolunteerRequestsService1();
    }
    if (kony.store.getItem("isBusOrVol") == "business") {
        mainPage.mainPageBody.navBarScroller.endorsementsContainer.isVisible = false;
    }
    //start
    if ((kony.store.getItem("isBusOrVol") == "volunteer") && (kony.store.getItem("adminVal") == "v")) {
        mainPage.sideBarMenuContainer.sideBarMenu.sideBarBody.ReportingLink.isVisible = true;
    } else if ((kony.store.getItem("isBusOrVol") == "business") && (kony.store.getItem("adminVal") == "i")) {
        mainPage.sideBarMenuContainer.sideBarMenu.sideBarBody.ReportingLink.isVisible = true;
    } else if ((kony.store.getItem("isBusOrVol") == "business") && (kony.store.getItem("adminVal") == "sn")) {
        mainPage.sideBarMenuContainer.sideBarMenu.sideBarBody.ReportingLink.isVisible = true;
    } else {
        mainPage.sideBarMenuContainer.sideBarMenu.sideBarBody.ReportingLink.isVisible = false;
    }
    //end
    var adminbus = kony.store.getItem("adminValnew");
    // alert("adminValnew"+adminbus);
    if (adminbus == "y") {
        mainPage.sideBarMenuContainer.sideBarMenu.sideBarBody.FlexContainer08d40d9191a9344.checkList.selectedKeys = ["cbg1"];
    } else {
        //alert("its no");
        mainPage.sideBarMenuContainer.sideBarMenu.sideBarBody.FlexContainer08d40d9191a9344.checkList.masterData = [
            ["cbg1", "."]
        ];
    }
}

function AS_Form_6d75ab4f077e46fa89248dace203f617(eventobject) {
    if (kony.store.getItem("isBusOrVol") === "business") {
        ReportingPage.ReportingContainer.ReportingActionsContainer.IndigenousBusinessContainer.BusinessIndicator.isVisible = true;
    } else if (kony.store.getItem("isBusOrVol") === "volunteer") {
        ReportingPage.ReportingContainer.ReportingActionsContainer.corporateFlexContainer.corporateIndicatorFlex.isVisible = true;
    } else {
        ReportingPage.ReportingContainer.ReportingActionsContainer.supplyNationContainer.supplyNationIndicator.isVisible = true;
    }
}

function AS_Form_7f208b182e46464b9e3855c6d9a6e002(eventobject) {}

function AS_Form_833c2ef1247647218d4860e015dfecbe(eventobject) {
    volunteerMyProfilePage.volunteerMyProfileSkillSegment.widgetDataMap = {
        "volunteerMyProfileSkillItem": "volunteerMyProfileSkillItem",
        "imgClose": "imgClose"
    };
    populateUpdatePage();
}

function AS_Form_856d6aa7bc69441ea5166749661d9592(eventobject) {
    LogHoursForms.numOfHoursLabel.text = gbltotalHours;
    LogHoursForms.numOfWorkingHours.text = gblBusHours;
    LogHoursForms.CopynumOfWorkingHours0a76ec538d2864f.text = gblOutBus;
}

function AS_Form_856f4203a0514bdd9ad9964c7526a80a(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        //   searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.volunteerFlex.volunteerScrollFlex.isVisible=false;
        // searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.BusinessContainer.businessIndicator.isVisible=true;
        //   searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.opportunitiesFlex.opportunitiesIndicator.isVisible=false;
        searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.volunteerFlex.isVisible = false;
        searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.volunteerFlex.volunteerScrollFlex.isVisible = true;
        searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.BusinessContainer.businessIndicator.isVisible = true;
    } else {
        searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.BusinessContainer.isVisible = false;
        searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.opportunitiesFlex.isVisible = false;
        searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.volunteerFlex.volunteerScrollFlex.isVisible = true;
    }
    searchPage.segPredictive.removeAll();
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        gblIsVol = false;
        if (gblFirstTime == true) {
            searchBusiness();
        } else {
            if (gblIsOpp == true) {
                searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.volunteerFlex.volunteerScrollFlex.isVisible = false;
                searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.BusinessContainer.businessIndicator.isVisible = false;
                searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.opportunitiesFlex.opportunitiesIndicator.isVisible = true;
            }
        }
        searchPage.businessBtn.skin = "CopyslButtonGlossBlue0ae29c855fda143";
        searchPage.volunteerBtn.skin = "CopyslButtonGlossBlue05330b12903d140";
    } else {
        gblIsVol = true;
        if (gblFirstTime == true) {
            volunteerService();
        }
        searchPage.businessBtn.skin = "CopyslButtonGlossBlue05330b12903d140";
        searchPage.volunteerBtn.skin = "CopyslButtonGlossBlue0ae29c855fda143";
    }
}

function AS_Form_b9875c9fde3d4c8fa1a4389df9ffed9d(eventobject) {}

function AS_Form_c04c2de481c948ae876453c2c425440f(eventobject) {
    scheduleNewForm.segSchedule.widgetDataMap = {
        "lblSchedule": "lblSchedule",
        "imgclose": "imgclose"
    };
    //alert(volunteerRegObject.skillsArray.length);
    if (volunteerRegObject.scheduleArray.length == "0.0") {
        //alert("no val");
        scheduleNewForm.segSchedule.removeAll();
    }
}

function AS_Form_c522c027907b412a8af9a1a75e7bb6e2(eventobject) {
    return loadHours.call(this);
}

function AS_Form_d89f486132b54c7e9dc2b7a98f1b861f(eventobject) {
    registrationProfessionalPage.regSkillsSegment.widgetDataMap = {
        "regSkillItem": "regSkillItem",
        "imgClose": "imgClose"
    };
    //alert(volunteerRegObject.skillsArray.length);
    if (volunteerRegObject.skillsArray.length == "0.0") {
        //alert("no val");
        registrationProfessionalPage.regSkillsSegment.removeAll();
    }
}

function AS_Form_f88bb7b8e2064c079e1772aeeafc4396(eventobject) {
    registrationDonePage.emailTxt.setEnabled(false);
}

function AS_Form_ff88a823a12642bd9500657d6a2e0b06(eventobject) {
    var DivInfo = kony.os.deviceInfo();
    //    //alert(DivInfo.name); 
    if (DivInfo.name === "iPhone") {
        getPushNote();
    }
}

function AS_Image_03b6c3d236894551a5decbc650f84125(eventobject, x, y) {
    return openDialog.call(this);
}

function AS_Image_1934850e80344832bd5ee347f826ac37(eventobject, x, y) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        var segTypeCheckforVolCall = kony.store.getItem("segmentType");
        // alert(segType1);
        try {
            if (segTypeCheckforVolCall != "null" || segTypeCheckforVolCall != null) {
                if (segTypeCheckforVolCall == "open") {
                    //alert("Isinde open seg " + segType1);
                    callFromOpenSeg();
                } else {
                    (segTypeCheckforVolCall == "close")
                    //alert("Inside Close Task");
                    callVolFromeCloseSeg();
                }
            }
        } catch (e) {
            //alert(e);
        }
    } else {
        var segTypeforBusCal = kony.store.getItem("segmentType");
        //alert("the clicked segTypement is ="+segTypeforBusCal);
        try {
            if (segTypeforBusCal != "null" || segTypeforBusCal != null) {
                //     //alert("Inside Accepted segType after first segType");
                if (segTypeforBusCal == "accepted") {
                    // alert("Inside Accepted segType");
                    callBusFromAcceptedSeg();
                } else if (segTypeforBusCal == "open") {
                    //alert("Inside Open segType");
                    callBusContactOpenSeg();
                    //alert("Inside Accepted segType"); 
                } else if (segTypeforBusCal == "close") {
                    callBusFromeCloseSeg();
                }
            }
        } catch (e) {
            alert("aError is" + e);
        }
    }
}

function AS_Image_497bdba1dfe04dfe86fb41ab04942a7b(eventobject, x, y) {}

function AS_Image_a8312f42b1c04e30833b7eec8aef2fdf(eventobject, x, y) {}

function AS_Image_ab8b095542f24f0b8c5c734f42118072(eventobject, x, y) {}

function AS_Image_d114a1de352e4d47a3263593f343e3f3(eventobject, imagesrc, issuccess) {}

function AS_Image_d97a71e9637c4514a8b1c7bdf35f416c(eventobject, x, y) {
    return openDialogForBusiness.call(this);
}

function AS_Image_fd8eba264c9143189babb4bea113c3fc(eventobject, x, y) {
    return changeProfPicVolunteer.call(this);
}

function AS_Label_016ee17f3d7848ff84abe81557b8e9ad(eventobject, x, y) {
    return navigateToPage.call(this, eventobject);
}

function AS_Label_0c5ef614031e4ddc9f782eca0f073195(eventobject, x, y) {
    LogHoursForms.AddHoursModalContainer.isVisible = false;
}

function AS_Label_23df805b483e437dbbf7b2c98f49f344(eventobject, x, y) {}

function AS_Label_380e2922cf4c443891127554814912cf(eventobject, x, y) {}

function AS_Label_43c8aa57d9474437a79a4f0ccea4979b(eventobject, x, y) {}

function AS_Label_66b927334c324dd6a7ca90f1ab686138(eventobject, x, y) {
    return navigateToPage.call(this, eventobject);
}

function AS_Label_6a7e2a417a2b46768a043d0f49eae5a2(eventobject, x, y) {}

function AS_Label_968591ad4b7d43a39c8ad03c40a3fe22(eventobject, x, y) {}

function AS_Label_98407b61245b427f89b9495b7effe858(eventobject, x, y) {
    return navigateToPage.call(this, eventobject);
}

function AS_Label_9c6eadf685d4485ca96badec16cdeddd(eventobject, x, y) {
    kony.application.openURL(' http://commnet2.cba/Main/Corporate-Responsibility/community-support/volunteering/lightbox/Documents/2013.11 Volunteering Policy and FAQs FINAL.pdf')
}

function AS_Label_ab98a8fc211a4dcb95f056c0810f154a(eventobject, x, y) {}

function AS_Label_b4172a3037a7474c862e44f90dacb3f2(eventobject, x, y) {
    return navigateToPage.call(this, eventobject);
}

function AS_Label_cf0d6ae535a5440fa1f5347b2a542bc4(eventobject, x, y) {
    mainPage.BusinessEndorsementModalGrayContainer.isVisible = false;
    mainPage.BusinessEndorsementModalContainer.MessageContaioner.EndorsingMessageTextArea.text = "";
    mainPage.BusinessEndorsementModalContainer.SkillsTextBoxContainer.AnotherSkillInputField.text = "";
}

function AS_ListBox_0ba9774640bc4556b85cbc7da04582fb(eventobject) {
    return onRegFieldUpdateForUpdation.call(this, eventobject);
}

function AS_ListBox_13e02c6d7fef430395e98e7c089ca43e(eventobject, x, y) {
    gblExistingTaskId = mainPage.startEngagementModalContainer.startEngagementModalHeader.startEngagmentHeaderAssignToTask.assignToExistingTaskListBoxContainer.existingTaskListBox.selectedKeyValue;
    var id = gblExistingTaskId[0];
    //alert(JSON.stringify(gblExistingTaskId));
    kony.store.setItem("gblExistingTaskId", id);
    if (mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskTitleField.text == "Select") {
        mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskTitleField.text = "";
        mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskDetailsTextArea.text = "";
        mainPage.startEngagementModalContainer.startEngagementModalBody.startDateCalendarInput.data = "";
        mainPage.startEngagementModalContainer.startEngagementModalBody.startDateCalendarInput.data = "";
    } else {
        //getBusinessLoadExistingTaskTask();
        BusinessLoadExistingTaskTaskService();
    }
    //var tsetGetID=kony.store.getItem("gblExistingTaskId");
    //alert(tsetGetID);
}

function AS_ListBox_1d18903d3b364c1496e367ef5816527b(eventobject, x, y) {
    gblExistingTaskId = mainPage.startEngagementModalContainer.startEngagementModalHeader.startEngagmentHeaderAssignToTask.assignToExistingTaskListBoxContainer.existingTaskListBox.selectedKeyValue;
    var id = gblExistingTaskId[0];
    //alert(JSON.stringify(gblExistingTaskId));
    kony.store.setItem("gblExistingTaskId", id);
    if (mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskTitleField.text == "Select") {
        mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskTitleField.text = "";
        mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskDetailsTextArea.text = "";
        mainPage.startEngagementModalContainer.startEngagementModalBody.startDateCalendarInput.data = "";
        mainPage.startEngagementModalContainer.startEngagementModalBody.startDateCalendarInput.data = "";
    } else {
        //getBusinessLoadExistingTaskTask();
        BusinessLoadExistingTaskTaskService();
    }
    //var tsetGetID=kony.store.getItem("gblExistingTaskId");
    //alert(tsetGetID);
}

function AS_ListBox_1d4f72cf0af34cb79b523b99af66f5ad(eventobject) {
    var gblSkillName = mainPage.BusinessEndorsementModalContainer.SkillsListBoxContainer.VolunteerSkillsListbox.selectedKeyValue;
    var skill = gblSkillName[1];
    var value = gblSkillName[0];
    kony.store.setItem("skillsOfSelectedVolunteers", skill);
    //alert("Skill Name"+skill);
}

function AS_ListBox_2cad7402a3da4b4287375e6d870cc2b3(eventobject) {
    return onRegFieldUpdate.call(this, eventobject);
}

function AS_ListBox_2f77ddc1d1f44df68125d83f467a39d9(eventobject) {
    //alert("select:"+searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.oppurtunities1ListModal.assignToExistingTaskListBox1.selectedKey);
    if ((searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.oppurtunities1ListModal.assignToExistingTaskListBox1.selectedKey === "Select") || (searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.oppurtunities1ListModal.assignToExistingTaskListBox1.selectedKey === "")) {
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "alertTitle": null,
            "yesLabel": "OK",
            "noLabel": "No",
            "message": "Please send message to indigenous business to express interest to volunteer as you currently don't have any briefs available to volunteer",
            "alertHandler": "null"
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
        //alert("Please send message to indigenous business to express interest to volunteer as you currently don't have any briefs available to volunteer");
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.TaskDetailsHdrFlex.taskTitleTxtLbl.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskDetailsModalFlex.taskDetailsRichTxt.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.startDateModalFlex.startDateTxt.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.endDateFlexModal.endDateTxtLbl.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskskillsFlex.skillsTxtLbl.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.hoursFlex.hoursTxtLbl.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.commentsModal.commentsTxtBox.text = "";
        return false;
    } else {
        //D013: Add code snippet to display task details on valid selection
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.TaskDetailsHdrFlex.isVisible = true;
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskDetailsModalFlex.isVisible = true;
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskskillsFlex.isVisible = true;
        //D013: End of addition
        gblExistingBusTaskId = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.oppurtunities1ListModal.assignToExistingTaskListBox1.selectedKeyValue;
        var id = gblExistingBusTaskId[0];
        //alert(JSON.stringify(gblExistingBusTaskId));
        kony.store.setItem("gblExistingBusTaskId", id);
    }
    if (searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.oppurtunities1ListModal.assignToExistingTaskListBox1.selectedKey === "Select") {
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.TaskDetailsHdrFlex.taskTitleTxtLbl.text = " ";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskDetailsModalFlex.taskDetailsRichTxt.text = " ";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.startDateModalFlex.startDateTxt.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.endDateFlexModal.endDateTxtLbl.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskskillsFlex.skillsTxtLbl.text = "";
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.hoursFlex.hoursTxtLbl.text = "";
    } else {
        BusinessLoadExistingTaskTaskService99();
    }
}

function AS_ListBox_371159d502e8420489b4e69bf9505217(eventobject) {
    gblExistingTaskId = mainPage.startEngagementModalContainer.startEngagementModalHeader.startEngagmentHeaderAssignToTask.assignToExistingTaskListBoxContainer.existingTaskListBox.selectedKeyValue;
    var id = gblExistingTaskId[0];
    //alert(JSON.stringify(gblExistingTaskId));
    kony.store.setItem("gblExistingTaskId", id);
    if (mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskTitleField.text == "Select") {
        mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskTitleField.text = "";
        mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskDetailsTextArea.text = "";
        mainPage.startEngagementModalContainer.startEngagementModalBody.startDateCalendarInput.data = "";
        mainPage.startEngagementModalContainer.startEngagementModalBody.startDateCalendarInput.data = "";
    } else {
        //getBusinessLoadExistingTaskTask();
        BusinessLoadExistingTaskTaskService();
    }
    //var tsetGetID=kony.store.getItem("gblExistingTaskId");
    //alert(tsetGetID);
}

function AS_ListBox_40e6cfb5bbb54334bacd88300920c324(eventobject) {
    gblExistingTaskIdBus = searchResultProfile.startEngagementModalContainer.startEngagementHeaderContainer.AssignExistingTaskContainer.assignToExistingTaskListBoxContainer.existingOpenTasksListBox.selectedKeyValue;
    var id = gblExistingTaskIdBus[0];
    var text1 = gblExistingTaskIdBus[1];
    //alert(id);
    //alert(text1);
    //alert(id);
    kony.store.setItem("gblExistingTaskId", id);
    if (text1 == "Select") {
        // alert("Please select a task");
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "alertTitle": null,
            "yesLabel": "OK",
            "noLabel": "No",
            "message": "Please select a task",
            "alertHandler": "null"
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
        searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TitleInputField.text = "";
        searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TaskDetailsTextArea.text = "";
        searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.CommentsTextArea.text = "";
        searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.SkillsInput.text = "";
        searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.DuratationOfEngagementInput.text = "";
        kony.application.dismissLoadingScreen();
    } else {
        //getBusinessLoadExistingTaskTask();
        BusinessLoadExistingTaskTaskService();
    }
    //var tsetGetID=kony.store.getItem("gblExistingTaskId");
    //alert(tsetGetID);
}

function AS_ListBox_469dfb8eb7a74714b3e9b7d558b2dcae(eventobject) {
    return onRegFieldUpdateForUpdation.call(this, eventobject);
}

function AS_ListBox_643746b8217f4e4fb64f64e946613848(eventobject) {
    return onRegFieldUpdateForUpdation.call(this, eventobject);
}

function AS_ListBox_8a3b81e21f92454abbdb7ee1f20c0255(eventobject) {
    return onRegFieldUpdateForUpdation.call(this, eventobject);
}

function AS_ListBox_94e2428d02de4f88943f8ba16108872e(eventobject) {
    return onRegFieldUpdate.call(this, eventobject);
}

function AS_ListBox_9ce4e80690f64aadaede38f2779e9975(eventobject) {
    gblExistingTaskId = mainPage.startEngagementModalContainer.startEngagementModalHeader.startEngagmentHeaderAssignToTask.assignToExistingTaskListBoxContainer.existingTaskListBox.selectedKeyValue;
    var id = gblExistingTaskId[0];
    //alert(JSON.stringify(gblExistingTaskId));
    kony.store.setItem("gblExistingTaskId", id);
    if (mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskTitleField.text == "Select") {
        mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskTitleField.text = "";
        mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskDetailsTextArea.text = "";
        mainPage.startEngagementModalContainer.startEngagementModalBody.startDateCalendarInput.data = "";
        mainPage.startEngagementModalContainer.startEngagementModalBody.startDateCalendarInput.data = "";
    } else {
        //getBusinessLoadExistingTaskTask();
        BusinessLoadExistingTaskTaskService();
    }
    //var tsetGetID=kony.store.getItem("gblExistingTaskId");
    //alert(tsetGetID);
}

function AS_ListBox_b96d06ad93cc4b95b9ddb1e14225ddbf(eventobject) {
    // gblExistingTaskId=mainPage.startEngagementModalContainer.startEngagementModalHeader.startEngagmentHeaderAssignToTask.assignToExistingTaskListBoxContainer.existingTaskListBox.selectedKeyValue;
    // var id=gblExistingTaskId[0];
    // //alert(JSON.stringify(gblExistingTaskId));
    // kony.store.setItem("gblExistingTaskId", id);
    // if(mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskTitleField.text=="Select")
    //       {
    //          mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskTitleField.text="";
    //          mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskDetailsTextArea.text="";
    //          mainPage.startEngagementModalContainer.startEngagementModalBody.startDateCalendarInput.data="";
    //          mainPage.startEngagementModalContainer.startEngagementModalBody.startDateCalendarInput.data="";
    //       }
    //         else{
    //           //getBusinessLoadExistingTaskTask();
    //           BusinessLoadExistingTaskTaskService();
    //         }
    // //var tsetGetID=kony.store.getItem("gblExistingTaskId");
    // //alert(tsetGetID);
}

function AS_ListBox_d48683f3ba65402a858a54db05c47f93(eventobject) {
    return onRegFieldUpdateForUpdation.call(this, eventobject);
}

function AS_ListBox_e3a8f019144d4141b0a47965c3fa1097(eventobject) {
    return onRegFieldUpdateForUpdation.call(this, eventobject);
}

function AS_Phone_f41d3b4c14a04e3a89c9efda339b94cb(eventobject, x, y) {}

function AS_RichText_0039d256ac0e4b1fb29256f8759bd4a9(eventobject, linktext, attributes, context) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        GetVolunteerIdByCloseTaskSegDetails();
        // sendReviewDetailsss();
        // mainPage.sendRecommendation.isVisible=true;
    } else {
        sendReviewDetailsss();
        mainPage.sendRecommendation.isVisible = true;
    }
}

function AS_RichText_0283195679b341f1a643b1f4ebfd38b7(eventobject, linktext, attributes) {
    //if(check if u cliked frst then only execute this)
    //var seg=mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.selectedRowItems;
    // alert("Accepted Seg"+JSON.stringify(seg));
    //var seg1=mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.sentRequestsSegment.selectedRowItems;
    // alert("Sent "+JSON.stringify(seg1));
    var seg = kony.store.getItem("segmentType");
    //alert("the clicked segment is ="+seg);
    try {
        if (seg != "null" || seg != null) {
            //alert("Inside Accepted Seg after first seg");
            if (seg == "accepted") {
                // alert("Inside Accepted Seg");
                callContactfromStartEngagementFromAcceptedrequestSeg();
            } else if (seg == "sent") {
                // {
                //alert("Inside Accepted Seg"); 
                callContactfromStartEngagementSentRequestSeg();
                //}
            }
        }
    } catch (e) {
        alert("aError is" + e);
    }
}

function AS_RichText_066f6c4a6e3245549cd0da96d121a38e(eventobject, linktext, attributes) {
    var seg = kony.store.getItem("segmentType");
    try {
        if (seg != "null" || seg != null) {
            //alert("Inside Accepted Seg after first seg");
            if (seg == "accepted") {
                // alert("Inside Accepted Seg");
                callVolFromAcceptedSeg();
            } else if (seg == "sent") {
                // {
                //alert("Inside Accepted Seg"); 
                callContactSentSeg();
                //}
            }
        }
    } catch (e) {
        alert("aError is" + e);
    }
}

function AS_RichText_0a319277e44943a1823f55a05a9a90f7(eventobject, linktext, attributes) {}

function AS_RichText_0d0180c427964d89b1e55cf0d91967ab(eventobject, linktext, attributes) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        var segType1 = kony.store.getItem("segmentType");
        // alert(segType1);
        try {
            if (segType1 != "null" || segType1 != null) {
                if (segType1 == "open") {
                    //alert("Isinde open seg " + segType1);
                    callContactfromOpenTaskBusiness();
                } else {
                    (segType1 == "close")
                    //alert("Inside Close Task");
                    callContactfromCloseTaskBusiness();
                }
            }
        } catch (e) {
            //alert(e);
        }
    } else {
        var segType2 = kony.store.getItem("segmentType");
        //alert("the clicked segTypement is ="+segType2);
        try {
            if (segType2 != "null" || segType2 != null) {
                //     //alert("Inside Accepted segType after first segType");
                if (segType2 == "accepted") {
                    // alert("Inside Accepted segType");
                    contactVolunteerFromAcceptTaskDetailsPage();
                } else if (segType2 == "open") {
                    callContactfromOpenTaskVolunteer();
                    // alert("Inside Open segType"); 
                } else if (segType2 == "close") {
                    callContactfromCloseTaskVolunteer();
                }
            }
        } catch (e) {
            //alert("Error is"+e);
        }
    }
}

function AS_RichText_0e85ebcdf7a748258ca19a76e6f299bb(eventobject, x, y) {
    mainPage.eligibiltyCriteriaModalContainer.Footer.agreeBtn.isVisible = false;
    mainPage.eligibiltyCriteriaModalContainer.acceptTermsChekBoxFlex.chckBoxFlex.chckBoxx.masterData = [
        ["cbg1", "."]
    ];
    mainPage.eligibiltyCriteriaModalContainer.isVisible = false;
}

function AS_RichText_0f27aeeebbbf441db8063f01eb8132e0(eventobject, x, y) {}

function AS_RichText_101d5ce6c83f4b2885695188561bfa47(eventobject, x, y) {
    kony.application.openURL('http://www.supplynation.org.au/contactus')
}

function AS_RichText_14f32e89539e418c9d4f462b73533382(eventobject, linktext, attributes) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        IndigenousBusinessViewProfileService();
    } else if (kony.store.getItem("isBusOrVol") == "business") {
        // alert("y its not working");
        //alert("inside snippet");
        volunteerViewProfilePageService();
    }
}

function AS_RichText_16c11585f0de42caa968969bd4e21bde(eventobject, x, y) {
    mainPage.destroy();
    mainPage.show();
    if (kony.store.getItem("isBusOrVol") == "business") {
        mainPage.mainPageBody.navBarScroller.recommendationNavContainer.isVisible = true;
        mainPage.mainPageBody.mainPageContentParent.myNotifications.isVisible = true;
        BusinessRecommendationService();
    }
}

function AS_RichText_1838661b13654cc09730234fe8698e3e(eventobject, linktext, attributes) {
    mainPage.show();
    mainPage.cancelRequestModalContainer.isVisible = false;
    mainPage.cancelRequestModalContainer.requestModalBody.cancelRequestTextArea.text = "";
}

function AS_RichText_19990c994176431f906e776d24643e82(eventobject, x, y) {
    mainPage.declineRequestModalContainer.isVisible = false;
    //mainPage.show();
    mainPage.declineRequestModalContainer.declineRequestModalBody.declineRequestTextArea.text = "Good day!\n\nI have received your request but unfortunately I have to decline due to other commitments that may impact my availability.";
}

function AS_RichText_1d4b3b783ae1422280096ad628d8e9a8(eventobject, linktext, attributes) {
    var seg = kony.store.getItem("segmentType");
    try {
        if (seg != "null" || seg != null) {
            //alert("Inside Accepted Seg after first seg");
            if (seg == "accepted") {
                // alert("Inside Accepted Seg");
                callVolFromAcceptedSeg();
            } else if (seg == "sent") {
                // {
                //alert("Inside Accepted Seg"); 
                callContactSentSeg();
                //}
            }
        }
    } catch (e) {
        alert("aError is" + e);
    }
}

function AS_RichText_1dcce3224b9744dcb1bb9c618f17f1ea(eventobject, linktext, attributes) {}

function AS_RichText_214b052e608a4321b07888227bf903d0(eventobject, x, y) {
    kony.application.openURL(' http://commnet2.cba/Main/Corporate-Responsibility/community-support/volunteering/lightbox/Documents/2013.11 Volunteering Policy and FAQs FINAL.pdf')
}

function AS_RichText_25939b8e86014441b5a47e1b246b12e6(eventobject, linktext, attributes) {
    function SHOW_ALERT_ide_onClick_2dd5cb226a764f779f6f03045bd5bb9c_True() {}
    kony.application.openURL('http://www.supplynation.org.au/contactus')
}

function AS_RichText_2789ef5f0cc540749ee37969fb746bdb(eventobject, linktext, attributes) {
    //if(check if u cliked frst then only execute this)
    //var seg=mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.selectedRowItems;
    // alert("Accepted Seg"+JSON.stringify(seg));
    //var seg1=mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.sentRequestsSegment.selectedRowItems;
    // alert("Sent "+JSON.stringify(seg1));
    var seg = kony.store.getItem("segmentType");
    //alert("the clicked segment is ="+seg);
    try {
        if (seg != "null" || seg != null) {
            //alert("Inside Accepted Seg after first seg");
            if (seg == "accepted") {
                // alert("Inside Accepted Seg");
                callContactfromStartEngagementFromAcceptedrequestSeg();
            } else if (seg == "sent") {
                // {
                //alert("Inside Accepted Seg"); 
                callContactfromStartEngagementSentRequestSeg();
                //}
            }
        }
    } catch (e) {
        alert("aError is" + e);
    }
}

function AS_RichText_27a7fcb682904c84a39aa2134b49f8c8(eventobject, linktext, attributes) {
    kony.application.openURL('http://commnet2.cba/Main/Corporate-Responsibility/community-support/volunteering/lightbox/Documents/2013.11 Volunteering Policy and FAQs FINAL.pdf')
}

function AS_RichText_28a27f12568e4becb4ff09baed78ec1b(eventobject, linktext, attributes) {}

function AS_RichText_29e5707126cd44578133646620c12453(eventobject, linktext, attributes) {
    GetBusinessContact();
}

function AS_RichText_2b7006e1867e4eaa99680d582041fdd1(eventobject, linktext, attributes) {
    mainPage.MarkAsCompleteModalContainer.isVisible = false;
}

function AS_RichText_30f0a796a36d4dc1a3a5220f10cc5c04(eventobject, linktext, attributes) {
    mainPage.eligibiltyCriteriaModalContainer.Footer.agreeBtn.isVisible = false;
    mainPage.eligibiltyCriteriaModalContainer.acceptTermsChekBoxFlex.chckBoxFlex.chckBoxx.masterData = [
        ["cbg1", "."]
    ];
    mainPage.eligibiltyCriteriaModalContainer.isVisible = false;
}

function AS_RichText_312c5e932a914f8da7ad1dd420d76231(eventobject, x, y) {
    //alert("touchddd");
    pop1.show();
}

function AS_RichText_34d79e47c53345a59de9709864f21864(eventobject, linktext, attributes) {
    //if(check if u cliked frst then only execute this)
    //var seg=mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.selectedRowItems;
    // alert("Accepted Seg"+JSON.stringify(seg));
    //var seg1=mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.sentRequestsSegment.selectedRowItems;
    // alert("Sent "+JSON.stringify(seg1));
    var seg = kony.store.getItem("segmentType");
    //alert("the clicked segment is ="+seg);
    try {
        if (seg != "null" || seg != null) {
            //alert("Inside Accepted Seg after first seg");
            if (seg == "accepted") {
                // alert("Inside Accepted Seg");
                callContactfromStartEngagementFromAcceptedrequestSeg();
            } else if (seg == "sent") {
                // {
                //alert("Inside Accepted Seg"); 
                callContactfromStartEngagementSentRequestSeg();
                //}
            }
        }
    } catch (e) {
        alert("aError is" + e);
    }
}

function AS_RichText_39b50ab4a8304fbabfd147601b1115a7(eventobject, x, y) {
    return logoutOfApplication.call(this);
}

function AS_RichText_3a4d6ad92a0943ac9d888afb599dd750(eventobject, linktext, attributes) {}

function AS_RichText_407b0568036d4033a12445989aaf483c(eventobject, linktext, attributes, context) {
    mainPage.cancelRequestModalContainer.isVisible = true;
    saveCancelVolReqId.call(this);
    saveReqForCancel.call(this);
}

function AS_RichText_44420397b0474621a6cc3106c0203916(eventobject, x, y) {
    mainPage.markAsCompleteGrayScreen.MarkAsCompleteModalContainer.isVisible = false;
    mainPage.markAsCompleteGrayScreen.isVisible = false;
}

function AS_RichText_45be57ca65c1419986dd2ee513f25601(eventobject, linktext, attributes) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        var segType1 = kony.store.getItem("segmentType");
        // alert(segType1);
        try {
            if (segType1 != "null" || segType1 != null) {
                if (segType1 == "open") {
                    //alert("Isinde open seg " + segType1);
                    callContactfromOpenTaskBusiness();
                } else {
                    (segType1 == "close")
                    //alert("Inside Close Task");
                    callContactfromCloseTaskBusiness();
                }
            }
        } catch (e) {
            //alert(e);
        }
    } else {
        var segType2 = kony.store.getItem("segmentType");
        //alert("the clicked segTypement is ="+segType2);
        try {
            if (segType2 != "null" || segType2 != null) {
                //     //alert("Inside Accepted segType after first segType");
                if (segType2 == "accepted") {
                    // alert("Inside Accepted segType");
                    contactVolunteerFromAcceptTaskDetailsPage();
                } else if (segType2 == "open") {
                    callContactfromOpenTaskVolunteer();
                    // alert("Inside Open segType"); 
                } else if (segType2 == "close") {
                    callContactfromCloseTaskVolunteer();
                }
            }
        } catch (e) {
            //alert("Error is"+e);
        }
    }
}

function AS_RichText_4679184319cf409b9df8be256752ed26(eventobject, linktext, attributes) {
    mainPage.markAsCompleteGrayScreen.isVisible = fales;
}

function AS_RichText_4a9ef318da794d109c48c441442e8956(eventobject, x, y) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        if (kony.store.getItem("isBusOrVol") == "volunteer") {
            mainPage.mainPageBody.mainPageContentParent.myEndorsements.isVisible = true;
            endorsementsService();
        }
    }
}

function AS_RichText_4aa2825b6d21400bb786f06eee737ea2(eventobject, linktext, attributes, context) {
    saveClosedTaskDetails.call(this);
}

function AS_RichText_4b1b3be72301418cbb25e7036fb48272(eventobject, linktext, attributes) {
    alert("clikd");
    pop1.show();
}

function AS_RichText_4b292320515146c5a8184a2451447b77(eventobject, linktext, attributes) {
    var seg = kony.store.getItem("segmentType");
    try {
        if (seg != "null" || seg != null) {
            //alert("Inside Accepted Seg after first seg");
            if (seg == "accepted") {
                // alert("Inside Accepted Seg");
                callVolFromAcceptedSeg();
            } else if (seg == "sent") {
                // {
                //alert("Inside Accepted Seg"); 
                callContactSentSeg();
                //}
            }
        }
    } catch (e) {
        alert("aError is" + e);
    }
}

function AS_RichText_4b804fcacb8f4f48aa023fa3ba60500a(eventobject, x, y) {
    kony.application.openURL('http://www.supplynation.org.au/contactus')
}

function AS_RichText_4d3bec3407c74a89933aa244f3b9e7a7(eventobject, linktext, attributes) {
    //if(check if u cliked frst then only execute this)
    //var seg=mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.selectedRowItems;
    // alert("Accepted Seg"+JSON.stringify(seg));
    //var seg1=mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.sentRequestsSegment.selectedRowItems;
    // alert("Sent "+JSON.stringify(seg1));
    var seg = kony.store.getItem("segmentType");
    //alert("the clicked segment is ="+seg);
    try {
        if (seg != "null" || seg != null) {
            //alert("Inside Accepted Seg after first seg");
            if (seg == "accepted") {
                // alert("Inside Accepted Seg");
                callContactfromStartEngagementFromAcceptedrequestSeg();
            } else if (seg == "sent") {
                // {
                //alert("Inside Accepted Seg"); 
                callContactfromStartEngagementSentRequestSeg();
                //}
            }
        }
    } catch (e) {
        alert("aError is" + e);
    }
}

function AS_RichText_55b2af90803e4a41b41f97f284e70dda(eventobject, linktext, attributes, context) {
    mainPage.cancelRequestModalContainer.isVisible = true;
    saveCancelVolReqId.call(this);
    saveReqForCancel.call(this);
}

function AS_RichText_561a96805a0047f29e926ee5f962019e(eventobject, linktext, attributes) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        IndigenousBusinessViewProfileService();
    } else if (kony.store.getItem("isBusOrVol") == "business") {
        // alert("y its not working");
        //alert("inside snippet");
        volunteerViewProfilePageService();
    }
}

function AS_RichText_5625982895504df6a6fc527f3db8df5f(eventobject, linktext, attributes) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        IndigenousBusinessViewProfileService();
    } else if (kony.store.getItem("isBusOrVol") == "business") {
        // alert("y its not working");
        //alert("inside snippet");
        volunteerViewProfilePageService();
    }
}

function AS_RichText_580bb705ba4b48c78c357662dc41a0e2(eventobject, x, y) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        notificationServiceforVolunteer();
    } else {
        BusinessNotificationService();
        mainPage.mainPageBody.navBarScroller.recommendationNavContainer.isVisible = true;
        mainPage.mainPageBody.mainPageContentParent.myNotifications.isVisible = true;
        BusinessRecommendationService();
    }
}

function AS_RichText_58801e7602f942fc97e2cf254097d926(eventobject, linktext, attributes) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        var segTypeCheckforVolCall = kony.store.getItem("segmentType");
        // alert(segType1);
        try {
            if (segTypeCheckforVolCall != "null" || segTypeCheckforVolCall != null) {
                if (segTypeCheckforVolCall == "open") {
                    //alert("Isinde open seg " + segType1);
                    callFromOpenSeg();
                } else {
                    (segTypeCheckforVolCall == "close")
                    //alert("Inside Close Task");
                    callVolFromeCloseSeg();
                }
            }
        } catch (e) {
            //alert(e);
        }
    } else {
        var segTypeforBusCal = kony.store.getItem("segmentType");
        //alert("the clicked segTypement is ="+segTypeforBusCal);
        try {
            if (segTypeforBusCal != "null" || segTypeforBusCal != null) {
                //     //alert("Inside Accepted segType after first segType");
                if (segTypeforBusCal == "accepted") {
                    // alert("Inside Accepted segType");
                    callBusFromAcceptedSeg();
                } else if (segTypeforBusCal == "open") {
                    //alert("Inside Open segType");
                    callBusContactOpenSeg();
                    //alert("Inside Accepted segType"); 
                } else if (segTypeforBusCal == "close") {
                    callBusFromeCloseSeg();
                }
            }
        } catch (e) {
            alert("aError is" + e);
        }
    }
}

function AS_RichText_5ade2461b2cf4f26be5a058568dc9b84(eventobject, linktext, attributes) {
    GetBusinessContact();
}

function AS_RichText_5b2fab265c874cadaf62f39df2783b03(eventobject, x, y) {
    BusinessProfile.BusinessChangePasswordContainer.ChangePasswordContainer.ChangePasswordBOdyContainer.loggedInBusinessEmailId.text = kony.store.getItem("BusinessEmailId");
    BusinessProfile.BusinessChangePasswordContainer.isVisible = true;
}

function AS_RichText_5fe0b013d5cd4df68b5c961f47978705(eventobject, linktext, attributes) {
    //mamata
    mainPage.declineRequestModalContainer.isVisible = false;
    // mainPage.show();
    mainPage.declineRequestModalContainer.declineRequestModalBody.declineRequestTextArea.text = "Good day!\n\nI have received your request but unfortunately I have to decline due to other commitments that may impact my availability.";
    //mainPage.show();
}

function AS_RichText_6101c7fd29864c16b986f136358074eb(eventobject, linktext, attributes) {
    kony.application.openURL(' http://commnet2.cba/Main/Corporate-Responsibility/community-support/volunteering/lightbox/Documents/2013.11 Volunteering Policy and FAQs FINAL.pdf')
}

function AS_RichText_61ea1e6a537b4f45a68bb7675000343f(eventobject, x, y) {
    //mainPage.destroy();
    mainPage.show();
    if (kony.store.getItem("isBusOrVol") == "business") {
        mainPage.mainPageBody.navBarScroller.recommendationNavContainer.isVisible = true;
        mainPage.mainPageBody.mainPageContentParent.myNotifications.isVisible = true;
        BusinessRecommendationService();
        mainPage.mainPageContentParent.myActivity.CreateOpportunityButtonContainer.isVisible = true;
        mainPage.unAssignedTasksContainer.isVisible = true;
    }
}

function AS_RichText_62d295f610864c51b991362c054ad3ce(eventobject, linktext, attributes) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        IndigenousBusinessViewProfileService();
    } else if (kony.store.getItem("isBusOrVol") == "business") {
        // alert("y its not working");
        //alert("inside snippet");
        volunteerViewProfilePageService();
    }
}

function AS_RichText_62d2e670d3a146f58141e05208398840(eventobject, linktext, attributes) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        IndigenousBusinessViewProfileService();
    } else if (kony.store.getItem("isBusOrVol") == "business") {
        // alert("y its not working");
        //alert("inside snippet");
        volunteerViewProfilePageService();
    }
}

function AS_RichText_64f60642307f4d68891aea6f3323788a(eventobject, linktext, attributes) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        IndigenousBusinessViewProfileService();
    } else if (kony.store.getItem("isBusOrVol") == "business") {
        // alert("y its not working");
        //alert("inside snippet");
        volunteerViewProfilePageService();
    }
}

function AS_RichText_657672998ca44e6ebfa2d4fd1ed09d74(eventobject, linktext, attributes) {
    mainPage.MarkAsCompleteModalContainer.isVisible = true;
    mainPage.markAsCompleteGrayScreen.isVisible = true;
}

function AS_RichText_67a414a1afe94522a2d1e16347726d33(eventobject, linktext, attributes) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        IndigenousBusinessViewProfileService();
    } else if (kony.store.getItem("isBusOrVol") == "business") {
        // alert("y its not working");
        //alert("inside snippet");
        volunteerViewProfilePageService();
    }
}

function AS_RichText_69306abd2de8425a8086f4b28852e0bc(eventobject, linktext, attributes) {
    kony.application.openURL('http://www.supplynation.org.au/contactus')
}

function AS_RichText_6a82d8aa4fcc448fb084c717b0967987(eventobject, linktext, attributes) {
    return validateResendCode.call(this);
}

function AS_RichText_71610d1cc94c44ebab8199fdf7ab5b2b(eventobject, linktext, attributes) {
    mainPage.acceptRequestModalContainer.isVisible = false;
    //mainPage.show(); 
}

function AS_RichText_7545c330a78641979b460c83ee3acd1e(eventobject, x, y) {}

function AS_RichText_796d858af5d446fd9b7c521670dc8af7(eventobject, x, y) {
    kony.application.openURL('http://commnet2.cba/Main/Corporate-Responsibility/community-support/volunteering/lightbox/Documents/2013.11 Volunteering Policy and FAQs FINAL.pdf')
}

function AS_RichText_79a979c620b74de38fdedecd3e420bba(eventobject, x, y) {
    ReportingPage.show();
}

function AS_RichText_7ccbb951657c4d96a2c062fde79742c4(eventobject, linktext, attributes) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        var segTypeCheckforVolCall = kony.store.getItem("segmentType");
        // alert(segType1);
        try {
            if (segTypeCheckforVolCall != "null" || segTypeCheckforVolCall != null) {
                if (segTypeCheckforVolCall == "open") {
                    //alert("Isinde open seg " + segType1);
                    callFromOpenSeg();
                } else {
                    (segTypeCheckforVolCall == "close")
                    //alert("Inside Close Task");
                    callVolFromeCloseSeg();
                }
            }
        } catch (e) {
            //alert(e);
        }
    } else {
        var segTypeforBusCal = kony.store.getItem("segmentType");
        //alert("the clicked segTypement is ="+segTypeforBusCal);
        try {
            if (segTypeforBusCal != "null" || segTypeforBusCal != null) {
                //     //alert("Inside Accepted segType after first segType");
                if (segTypeforBusCal == "accepted") {
                    // alert("Inside Accepted segType");
                    callBusFromAcceptedSeg();
                } else if (segTypeforBusCal == "open") {
                    //alert("Inside Open segType");
                    callBusContactOpenSeg();
                    //alert("Inside Accepted segType"); 
                } else if (segTypeforBusCal == "close") {
                    callBusFromeCloseSeg();
                }
            }
        } catch (e) {
            alert("aError is" + e);
        }
    }
}

function AS_RichText_7f64d44a877a4b07adafaf17065d9086(eventobject, x, y) {
    BusinessProfile.BusinessChangePasswordContainer.isVisible = false;
}

function AS_RichText_875d4a300899481f8e1876ff911875a0(eventobject, linktext, attributes) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        var segType1 = kony.store.getItem("segmentType");
        // alert(segType1);
        try {
            if (segType1 != "null" || segType1 != null) {
                if (segType1 == "open") {
                    //alert("Isinde open seg " + segType1);
                    callContactfromOpenTaskBusiness();
                } else {
                    (segType1 == "close")
                    //alert("Inside Close Task");
                    callContactfromCloseTaskBusiness();
                }
            }
        } catch (e) {
            //alert(e);
        }
    } else {
        var segType2 = kony.store.getItem("segmentType");
        //alert("the clicked segTypement is ="+segType2);
        try {
            if (segType2 != "null" || segType2 != null) {
                //     //alert("Inside Accepted segType after first segType");
                if (segType2 == "accepted") {
                    // alert("Inside Accepted segType");
                    contactVolunteerFromAcceptTaskDetailsPage();
                } else if (segType2 == "open") {
                    callContactfromOpenTaskVolunteer();
                    // alert("Inside Open segType"); 
                } else if (segType2 == "close") {
                    callContactfromCloseTaskVolunteer();
                }
            }
        } catch (e) {
            //alert("Error is"+e);
        }
    }
}

function AS_RichText_897a9ec383b647819186c427c31cd996(eventobject, x, y) {
    //alert("hi touch");
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        //alert("on touch touch innn");
        IndigenousBusinessViewProfileService();
    } else if (kony.store.getItem("isBusOrVol") == "business") {
        // alert("y its not working");
        //alert("inside snippet");
        volunteerViewProfilePageService();
    }
}

function AS_RichText_8adbb7f0da4543799601f8a4e83b4176(eventobject, linktext, attributes) {
    volunteerPhoneNumber();
}

function AS_RichText_8be722f5bb4349d2bad731306f67b5e2(eventobject, linktext, attributes) {
    saveClosedTaskDetails.call(this);
}

function AS_RichText_8d10f40eabc1477a8115c5167105b377(eventobject, linktext, attributes) {
    ReportingPage.show();
    alert("inside onrowclick");
}

function AS_RichText_8ef5e3b3c4eb49679f4a1707c01ad4dd(eventobject, linktext, attributes) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        IndigenousBusinessViewProfileService();
    } else if (kony.store.getItem("isBusOrVol") == "business") {
        // alert("y its not working");
        //alert("inside snippet");
        volunteerViewProfilePageService();
    }
}

function AS_RichText_9230d3beb1b94c34995122d6e8139943(eventobject, linktext, attributes) {
    mainPage.cancelRequestModalContainer.isVisible = false;
    //mainPage.show();
    mainPage.cancelRequestModalContainer.requestModalBody.cancelRequestTextArea.text = "Good day!I have received your request but unfortunately I have to decline due to other commitments that may impact my availability..";
}

function AS_RichText_95a6e28e049a4bda931f0b230a4a7128(eventobject, linktext, attributes, context) {
    mainPage.declineRequestModalContainer.isVisible = true;
    saveReqForBusDecline.call(this);
    saveDeclineVolReqId.call(this);
}

function AS_RichText_97e5661ca5e14986af20d1088bdd4fc3(eventobject, linktext, attributes, context) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        mainPage.viewRequestModalContainer.isVisible = true;
        viewSentRequestedMessage();
        //     mainPage.viewRequestModalContainer.isVisible=false;
        //     mainPage.show();
    } else {
        mainPage.viewRequestModalContainer.isVisible = true;
        viewVolSentRequestedMessage();
        //       mainPage.viewRequestModalContainer.isVisible=false;
        //       mainPage.show();
    }
}

function AS_RichText_99e68ad5e1a44fc195a5f6e0a4fb9d7e(eventobject, x, y) {
    mainPage.NotificationModalGrayContainer.isVisible = false;
    mainPage.NotificationTitleContainer.NotificationTitleInputLabel.text = "";
    mainPage.NotificationDetailsContainerBody.NotificationDetailsTextArea.text = "";
}

function AS_RichText_9f39989dedd74500bb0955337f626ddd(eventobject, linktext, attributes) {
    GetBusinessContact();
}

function AS_RichText_a1dba61c2ae5490298daafe88875d5a6(eventobject, linktext, attributes) {
    scheduleNewForm.outsideScheduletime.isVisible = false;
}

function AS_RichText_a3a624758d274a41a0dcb1677cc67447(eventobject, linktext, attributes) {
    GetBusinessContact();
}

function AS_RichText_a9d4d6e4b69f471c8b3029f998b80f2c(eventobject, linktext, attributes, context) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        // sendReviewDetailsss();
        // mainPage.sendRecommendation.isVisible=true;
    } else {
        sendReviewDetailsss();
        mainPage.sendRecommendation.isVisible = true;
    }
}

function AS_RichText_acd995815d484a848884493eb4dbc9d3(eventobject, linktext, attributes) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        IndigenousBusinessViewProfileService();
    } else if (kony.store.getItem("isBusOrVol") == "business") {
        // alert("y its not working");
        //alert("inside snippet");
        volunteerViewProfilePageService();
    }
}

function AS_RichText_ae818ebb2f0242e792f46ff0d88549e3(eventobject, linktext, attributes) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        IndigenousBusinessViewProfileService();
    } else if (kony.store.getItem("isBusOrVol") == "business") {
        // alert("y its not working");
        //alert("inside snippet");
        volunteerViewProfilePageService();
    }
}

function AS_RichText_af52073dd3d34f32a71a2fa9d46dd502(eventobject, linktext, attributes) {
    var seg = kony.store.getItem("segmentType");
    try {
        if (seg != "null" || seg != null) {
            //alert("Inside Accepted Seg after first seg");
            if (seg == "accepted") {
                // alert("Inside Accepted Seg");
                callVolFromAcceptedSeg();
            } else if (seg == "sent") {
                // {
                //alert("Inside Accepted Seg"); 
                callContactSentSeg();
                //}
            }
        }
    } catch (e) {
        alert("aError is" + e);
    }
}

function AS_RichText_b2cac1454f9a4a5b96e68047bb6a8db9(eventobject, x, y) {
    kony.application.openURL('http://www.supplynation.org.au/contactus')
}

function AS_RichText_b3895bce23c14431ae132346ea5b99c6(eventobject, linktext, attributes) {}

function AS_RichText_ba3a520a0bd6464caf7feb4297050d6d(eventobject, x, y) {
    return validateResendCode.call(this);
}

function AS_RichText_bab7a79099ac4a409c36fc1f1e48d543(eventobject, x, y) {
    resetPasswordForm.show();
}

function AS_RichText_bce7a00902be46b99449de68522a9971(eventobject, linktext, attributes) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        var segTypeCheckforVolCall = kony.store.getItem("segmentType");
        // alert(segType1);
        try {
            if (segTypeCheckforVolCall != "null" || segTypeCheckforVolCall != null) {
                if (segTypeCheckforVolCall == "open") {
                    //alert("Isinde open seg " + segType1);
                    callFromOpenSeg();
                } else {
                    (segTypeCheckforVolCall == "close")
                    //alert("Inside Close Task");
                    callVolFromeCloseSeg();
                }
            }
        } catch (e) {
            //alert(e);
        }
    } else {
        var segTypeforBusCal = kony.store.getItem("segmentType");
        //alert("the clicked segTypement is ="+segTypeforBusCal);
        try {
            if (segTypeforBusCal != "null" || segTypeforBusCal != null) {
                //     //alert("Inside Accepted segType after first segType");
                if (segTypeforBusCal == "accepted") {
                    // alert("Inside Accepted segType");
                    callBusFromAcceptedSeg();
                } else if (segTypeforBusCal == "open") {
                    //alert("Inside Open segType");
                    callBusContactOpenSeg();
                    //alert("Inside Accepted segType"); 
                } else if (segTypeforBusCal == "close") {
                    callBusFromeCloseSeg();
                }
            }
        } catch (e) {
            alert("aError is" + e);
        }
    }
}

function AS_RichText_c20e2b9fcce8495a8638c738fe0f95ca(eventobject, linktext, attributes) {
    var seg = kony.store.getItem("segmentType");
    try {
        if (seg != "null" || seg != null) {
            //alert("Inside Accepted Seg after first seg");
            if (seg == "accepted") {
                // alert("Inside Accepted Seg");
                callVolFromAcceptedSeg();
            } else if (seg == "sent") {
                // {
                //alert("Inside Accepted Seg"); 
                callContactSentSeg();
                //}
            }
        }
    } catch (e) {
        alert("aError is" + e);
    }
}

function AS_RichText_c27b302f6b7a4a9290f211e6e3852ef5(eventobject, linktext, attributes) {
    volunteerMyProfilePage.outsidemodal.isVisible = false;
}

function AS_RichText_c3043f0ca1154149b63a9b24397e8427(eventobject, linktext, attributes, context) {
    //mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer
    var d1 = new Date();
    var day1 = d1.getDate();
    var month1 = d1.getMonth();
    month1 = month1 + 1;
    var year1 = d1.getFullYear();
    var todayDate1 = day1 + "/" + month1 + "/" + year1;
    kony.store.setItem("todayDate", todayDate1);
    mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppStartDateCalendarInput.dateComponents = [day1, month1, year1];
    mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppEndDateCalendarInput.dateComponents = [day1, month1, year1];
    getOppTaskId();
}

function AS_RichText_c4e91f2b81114940b7be2fdce7197a74(eventobject, linktext, attributes) {
    mainPage.markAsCompleteGrayScreen.isVisible = true;
}

function AS_RichText_c74e19ff9c3a4d69beac4cc030f93914(eventobject, linktext, attributes) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        var segType1 = kony.store.getItem("segmentType");
        alert(segType1);
        try {
            if (segType1 != "null" || segType1 != null) {
                if (segType1 == "open") {
                    alert("Isinde open seg " + segType1);
                    callContactfromOpenTaskBusiness();
                } else if (segType == "close") {
                    //Code for business close task row click message
                }
            }
        } catch (e) {
            alert(e);
        }
    } else {
        var segType2 = kony.store.getItem("segmentType");
        //alert("the clicked segTypement is ="+segType2);
        try {
            if (segType2 != "null" || segType2 != null) {
                //     //alert("Inside Accepted segType after first segType");
                if (segType2 == "accepted") {
                    // alert("Inside Accepted segType");
                    contactVolunteerFromAcceptTaskDetailsPage();
                } else if (segType2 == "open") {
                    callContactfromOpenTaskVolunteer();
                    //alert("Inside Accepted segType"); 
                } else if (segType2 == "close") {
                    //Code for close task details message text
                }
            }
        } catch (e) {
            alert("aError is" + e);
        }
    }
}

function AS_RichText_c7798ee8cd504f8e9878f8da0dcdfcb2(eventobject, linktext, attributes) {
    mainPage.destroy();
    mainPage.show();
    if (kony.store.getItem("isBusOrVol") == "business") {
        mainPage.mainPageBody.navBarScroller.recommendationNavContainer.isVisible = true;
        mainPage.mainPageBody.mainPageContentParent.myNotifications.isVisible = true;
        BusinessRecommendationService();
    }
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

function AS_RichText_c99dcca99d354e5e994e5517463e6d6f(eventobject, linktext, attributes) {
    mainPage.show();
    mainPage.cancelRequestModalContainer.isVisible = false;
    mainPage.cancelRequestModalContainer.requestModalBody.cancelRequestTextArea.text = "";
}

function AS_RichText_d0821982169a4f8f80e5abf615b8f36a(eventobject, linktext, attributes) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        var segType1 = kony.store.getItem("segmentType");
        // alert(segType1);
        try {
            if (segType1 != "null" || segType1 != null) {
                if (segType1 == "open") {
                    //alert("Isinde open seg " + segType1);
                    callContactfromOpenTaskBusiness();
                } else {
                    (segType1 == "close")
                    //alert("Inside Close Task");
                    callContactfromCloseTaskBusiness();
                }
            }
        } catch (e) {
            //alert(e);
        }
    } else {
        var segType2 = kony.store.getItem("segmentType");
        //alert("the clicked segTypement is ="+segType2);
        try {
            if (segType2 != "null" || segType2 != null) {
                //     //alert("Inside Accepted segType after first segType");
                if (segType2 == "accepted") {
                    // alert("Inside Accepted segType");
                    contactVolunteerFromAcceptTaskDetailsPage();
                } else if (segType2 == "open") {
                    callContactfromOpenTaskVolunteer();
                    // alert("Inside Open segType"); 
                } else if (segType2 == "close") {
                    callContactfromCloseTaskVolunteer();
                }
            }
        } catch (e) {
            //alert("Error is"+e);
        }
    }
}

function AS_RichText_d0ca4f5592bd46868725fe2607686ba2(eventobject, x, y) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        IndigenousBusinessViewProfileService();
    } else if (kony.store.getItem("isBusOrVol") == "business") {
        // alert("y its not working");
        //alert("inside snippet");
        volunteerViewProfilePageService();
    }
}

function AS_RichText_d6ff08f069db47e1b086860d0827fe7b(eventobject, linktext, attributes, context) {
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirm",
        "yesLabel": "Yes",
        "noLabel": "No",
        "message": "Do you really want to remove the brief?",
        "alertHandler": appUpgradeCloseOpp
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_RIGHT
    });

    function appUpgradeCloseOpp(response) {
        if (response == true) {
            unAssignedTaskSegData1();
        } else {}
    }
}

function AS_RichText_d74ca09b939943a7925dd2fc40d8aeab(eventobject, linktext, attributes) {
    mainPage.show();
    mainPage.cancelRequestModalContainer.isVisible = false;
    mainPage.cancelRequestModalContainer.requestModalBody.cancelRequestTextArea.text = "";
}

function AS_RichText_d9d84b758a9f421f9d83da3d47417c5b(eventobject, linktext, attributes, context) {}

function AS_RichText_dc25bf7ae3f94d669fbd46ba637c72b6(eventobject, x, y) {
    mainPage.viewRequestModalContainer.isVisible = false;
}

function AS_RichText_ddbb912261b744e0910cd634e4bddeb6(eventobject, linktext, attributes) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        IndigenousBusinessViewProfileService();
    } else if (kony.store.getItem("isBusOrVol") == "business") {
        // alert("y its not working");
        //alert("inside snippet");
        volunteerViewProfilePageService();
    }
}

function AS_RichText_dddb86c2252f4d83bdf8692481e8ce26(eventobject, linktext, attributes) {
    //alert("on click");
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        //alert("on click innn");
        IndigenousBusinessViewProfileService();
    } else if (kony.store.getItem("isBusOrVol") == "business") {
        // alert("y its not working");
        //alert("inside snippet");
        volunteerViewProfilePageService();
    }
}

function AS_RichText_dec43d3474be4b14aa1b0c87cc4a0176(eventobject, linktext, attributes) {
    var seg = kony.store.getItem("segmentType");
    try {
        if (seg != "null" || seg != null) {
            //alert("Inside Accepted Seg after first seg");
            if (seg == "accepted") {
                // alert("Inside Accepted Seg");
                callVolFromAcceptedSeg();
            } else if (seg == "sent") {
                // {
                //alert("Inside Accepted Seg"); 
                callContactSentSeg();
                //}
            }
        }
    } catch (e) {
        alert("aError is" + e);
    }
}

function AS_RichText_dfc77110fa9c4e878d108a5fc8bdd84e(eventobject, linktext, attributes) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        IndigenousBusinessViewProfileService();
    } else if (kony.store.getItem("isBusOrVol") == "business") {
        // alert("y its not working");
        //alert("inside snippet");
        volunteerViewProfilePageService();
    }
}

function AS_RichText_e01f591f5e544a28985552b5f5687a2d(eventobject, linktext, attributes) {
    mainPage.markAsCompleteGrayScreen.MarkAsCompleteModalContainer.isVisible = false;
    mainPage.markAsCompleteGrayScreen.isVisible = false;
}

function AS_RichText_e49a8fe8f615487b9dbee78c42b134a8(eventobject, linktext, attributes) {
    //if(check if u cliked frst then only execute this)
    //var seg=mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.selectedRowItems;
    // alert("Accepted Seg"+JSON.stringify(seg));
    //var seg1=mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.sentRequestsSegment.selectedRowItems;
    // alert("Sent "+JSON.stringify(seg1));
    var seg = kony.store.getItem("segmentType");
    //alert("the clicked segment is ="+seg);
    try {
        if (seg != "null" || seg != null) {
            //alert("Inside Accepted Seg after first seg");
            if (seg == "accepted") {
                // alert("Inside Accepted Seg");
                callContactfromStartEngagementFromAcceptedrequestSeg();
            } else if (seg == "sent") {
                // {
                //alert("Inside Accepted Seg"); 
                callContactfromStartEngagementSentRequestSeg();
                //}
            }
        }
    } catch (e) {
        alert("aError is" + e);
    }
}

function AS_RichText_e6693a60dd674a7b8d59132b242be10d(eventobject, linktext, attributes) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        var segTypeCheckforVolCall = kony.store.getItem("segmentType");
        // alert(segType1);
        try {
            if (segTypeCheckforVolCall != "null" || segTypeCheckforVolCall != null) {
                if (segTypeCheckforVolCall == "open") {
                    //alert("Isinde open seg " + segType1);
                    callFromOpenSeg();
                } else {
                    (segTypeCheckforVolCall == "close")
                    //alert("Inside Close Task");
                    callVolFromeCloseSeg();
                }
            }
        } catch (e) {
            //alert(e);
        }
    } else {
        var segTypeforBusCal = kony.store.getItem("segmentType");
        //alert("the clicked segTypement is ="+segTypeforBusCal);
        try {
            if (segTypeforBusCal != "null" || segTypeforBusCal != null) {
                //     //alert("Inside Accepted segType after first segType");
                if (segTypeforBusCal == "accepted") {
                    // alert("Inside Accepted segType");
                    callBusFromAcceptedSeg();
                } else if (segTypeforBusCal == "open") {
                    //alert("Inside Open segType");
                    callBusContactOpenSeg();
                    //alert("Inside Accepted segType"); 
                } else if (segTypeforBusCal == "close") {
                    callBusFromeCloseSeg();
                }
            }
        } catch (e) {
            alert("aError is" + e);
        }
    }
}

function AS_RichText_ea66e5af4a8340d3b4ae4d19f6aa6f49(eventobject, linktext, attributes) {
    var seg = kony.store.getItem("segmentType");
    try {
        if (seg != "null" || seg != null) {
            //alert("Inside Accepted Seg after first seg");
            if (seg == "accepted") {
                // alert("Inside Accepted Seg");
                callVolFromAcceptedSeg();
            } else if (seg == "sent") {
                // {
                //alert("Inside Accepted Seg"); 
                callContactSentSeg();
                //}
            }
        }
    } catch (e) {
        alert("aError is" + e);
    }
}

function AS_RichText_ebb97dc3961c4b1abaff09338d24c4a3(eventobject, x, y) {
    mainPage.cancelRequestModalContainer.isVisible = false;
    //mainPage.show();
    mainPage.cancelRequestModalContainer.requestModalBody.cancelRequestTextArea.text = "Good day!I have received your request but unfortunately I have to decline due to other commitments that may impact my availability..";
}

function AS_RichText_f1342c5021ec46068c03ed07300dbd87(eventobject, linktext, attributes) {
    mainPage.show();
}

function AS_RichText_f489ec06928743ef8d3bb1e9a931c066(eventobject, linktext, attributes) {
    function SHOW_ALERT_ide_onClick_10fd7ab7bcf941839610a200a559e409_True() {}
    PushNoteService.call(this);
}

function AS_RichText_f4afce1bcee84abaad223a921a040045(eventobject, linktext, attributes, context) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        BusinessExistingTaskTaskService();
        mainPage.startEngagementModalContainer.startEngagementModalHeader.startEngagmentHeaderDetails.startEngagmentHeaderDetailsParent.lblStartEngagementBusinessName.text = kony.store.getItem("loginBusinessName");
        mainPage.startEngagementModalContainer.isVisible = true;
        //mainPage.startEngagementModalContainer.startEngagementModalBody.startDateCalendarInput.dateComponents=["01","01","2016"]; 
        var d = new Date();
        var day = d.getDate();
        var month = d.getMonth();
        month = month + 1;
        var year = d.getFullYear();
        var todayDate = day + "/" + month + "/" + year;
        kony.store.setItem("todayDate", todayDate);
        //end merin
        mainPage.startEngagementModalContainer.startEngagementModalBody.startDateCalendarInput.dateComponents = [day, month, year];
        mainPage.startEngagementModalContainer.startEngagementModalBody.endDateCalendarInput.dateComponents = [day, month, year];
        var seg = mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.selectedRowItems;
        var segment = seg[0].segType;
        kony.store.setItem("segmentType", segment);
    } else {
        mainPage.BusinessRequestTaskDetailsModal.isVisible = true;
        mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalFooter.CopystartEngagement0e3cd864659974b.isVisible = true;
        var seg2 = mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.selectedRowItems;
        var segmentType1 = seg2[0].segType;
        kony.store.setItem("segmentType", segmentType1);
        //write salma's code
    }
    saveReqForBusStartEngaeSent.call(this);
    getNewTaskDetailsForVol();
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        NewTaskDetailsForVolunteer();
    }
    var segItems = mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.selectedRowItems;
    //alert(JSON.stringify(segItems));
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        saveBusIdForViewProfile99();
    } else {
        saveBusIdForVolViewProfileAcceptedSeg();
    }
}

function AS_RichText_f78cfc83a55b4063a7a0297be47cd129(eventobject, linktext, attributes) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        var segTypeCheckforVolCall = kony.store.getItem("segmentType");
        // alert(segType1);
        try {
            if (segTypeCheckforVolCall != "null" || segTypeCheckforVolCall != null) {
                if (segTypeCheckforVolCall == "open") {
                    //alert("Isinde open seg " + segType1);
                    callFromOpenSeg();
                } else {
                    (segTypeCheckforVolCall == "close")
                    //alert("Inside Close Task");
                    callVolFromeCloseSeg();
                }
            }
        } catch (e) {
            //alert(e);
        }
    } else {
        var segTypeforBusCal = kony.store.getItem("segmentType");
        //alert("the clicked segTypement is ="+segTypeforBusCal);
        try {
            if (segTypeforBusCal != "null" || segTypeforBusCal != null) {
                //     //alert("Inside Accepted segType after first segType");
                if (segTypeforBusCal == "accepted") {
                    // alert("Inside Accepted segType");
                    callBusFromAcceptedSeg();
                } else if (segTypeforBusCal == "open") {
                    //alert("Inside Open segType");
                    callBusContactOpenSeg();
                    //alert("Inside Accepted segType"); 
                } else if (segTypeforBusCal == "close") {
                    callBusFromeCloseSeg();
                }
            }
        } catch (e) {
            alert("aError is" + e);
        }
    }
}

function AS_RichText_f853df9f664f4109826c9a6d781f9352(eventobject, linktext, attributes) {
    volunteerPhoneNumber();
}

function AS_RichText_f979aad53c1142ecbe5962c51bc1ddef(eventobject, linktext, attributes) {}

function AS_RichText_fa45a6f0ef24436dbc6b83d021c77e25(eventobject, linktext, attributes, context) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        BusinessExistingTaskTaskService();
        mainPage.startEngagementModalContainer.startEngagementModalHeader.startEngagmentHeaderDetails.startEngagmentHeaderDetailsParent.lblStartEngagementBusinessName.text = kony.store.getItem("loginBusinessName");
        mainPage.startEngagementModalContainer.isVisible = true;
        //mainPage.startEngagementModalContainer.startEngagementModalBody.startDateCalendarInput.dateComponents=["01","01","2016"]; 
        var d = new Date();
        var day = d.getDate();
        var month = d.getMonth();
        month = month + 1;
        var year = d.getFullYear();
        var todayDate = day + "/" + month + "/" + year;
        kony.store.setItem("todayDate", todayDate);
        //end merin
        mainPage.startEngagementModalContainer.startEngagementModalBody.startDateCalendarInput.dateComponents = [day, month, year];
        mainPage.startEngagementModalContainer.startEngagementModalBody.endDateCalendarInput.dateComponents = [day, month, year];
        var seg = mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.selectedRowItems;
        var segment = seg[0].segType;
        kony.store.setItem("segmentType", segment);
    } else {
        //  alert("going inside volunteer");
        mainPage.acceptTaskDetailsModalContainer.isVisible = true;
        mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalHeader.CopystartEngagmentHeaderDetails05c3f0a6993dd4b.CopystartEngagmentHeaderDetailsParent07958b4bef26b4f.CopyLabel0d3787300d8b24b.text = kony.store.getItem("volLoginName");
        mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalFooter.CopystartEngagement0e3cd864659974b.isVisible = true;
        var seg2 = mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.selectedRowItems;
        var segmentType1 = seg2[0].segType;
        kony.store.setItem("segmentType", segmentType1);
        //write salma's code
    }
    saveReqForBusStartEngae.call(this);
    getTaskDetailsForVol();
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        TaskDetailsForVolunteer();
    }
    var segItems = mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.selectedRowItems;
    //alert(JSON.stringify(segItems));
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        saveBusIdForViewProfile99();
    } else {
        saveBusIdForVolViewProfileAcceptedSeg();
    }
}

function AS_RichText_fac39ba759ec43de9444a58266eca74f(eventobject, linktext, attributes) {
    mainPage.destroy();
    if (kony.store.getItem("isBusOrVol") == "business") {
        mainPage.mainPageBody.navBarScroller.recommendationNavContainer.isVisible = true;
        mainPage.mainPageBody.mainPageContentParent.myNotifications.isVisible = true;
        BusinessRecommendationService();
    }
    mainPage.show();
}

function AS_RichText_fef272d3e61b46b69d01e363fe6800d3(eventobject, linktext, attributes) {
    // callVolfromStartEngagementFromAcceptedrequestSeg();
}

function AS_Segment_129e92e809394c59bd592175b01d09f1(eventobject, sectionNumber, rowNumber) {
    removeHours.call(this, eventobject);
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": null,
        "yesLabel": "OK",
        "noLabel": "Cancel",
        "message": "Do you really want to remove hours",
        "alertHandler": appUpgrade1
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}

function AS_Segment_1a35f0773f8f485484cb32855b01b64f(eventobject, sectionNumber, rowNumber) {
    return removeSkillForVolUpdate.call(this, eventobject);
}

function AS_Segment_40a3c921256e40bd85f3e68049e6ad36(eventobject, sectionNumber, rowNumber) {
    if (gblIsVol == true) {
        var selReqId = searchPage.volunteerdataSegment.selectedRowItems[0].volunteerId;
        kony.store.setItem("selReqId", selReqId);
        searchResultProfile.volunteerProfileContainer.requestAVolunteer.isVisible = true;
        volunteerProfilePageService();
    } else if (gblIsOpp == true) {
        //alert("inside isOpp");
        searchResultProfile.show();
        searchResultProfile.opprtunitiesReadOnlyContainer.isVisible = true;
        var busNameOpp = searchPage.volunteerdataSegment.selectedRowItems[0].CompanyNameLbl;
        kony.store.setItem("busName99", busNameOpp);
        var busIdNew = searchPage.volunteerdataSegment.selectedRowItems[0].volunteerId;
        kony.store.setItem("busIdNew", busIdNew);
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunityDetailsHdrModal.oppurtunitiesHeaderDetails1.opprtunitiesHeadingModal.opportunityBusinessName.text = kony.store.getItem("busName99");
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.oppurtunities1ListModal.isVisible = false;
        getNewTaskDetailsForVolSearch8();
        BusinessLoadExistingTaskForSearchScreen();
        // mainPage.BusinessRequestTaskDetailsModal.isVisible=true;
        // NewTaskDetailsForVolunteerOppSearch();
    } else {
        //alert("row is "+JSON.stringify(searchPage.volunteerdataSegment.selectedRowItems));
        var selReqId = searchPage.volunteerdataSegment.selectedRowItems[0].volunteerId;
        kony.store.setItem("selReqId", selReqId);
        var busNameNew = searchPage.volunteerdataSegment.selectedRowItems[0].CompanyNameLbl;
        kony.store.setItem("busNameNew", busNameNew);
        searchResultProfile.businessProfileContainer.requestToVolunteerButton.isVisible = true;
        IndigenousBusinessProfileService();
    }
}

function AS_Segment_44ab36382c5144c0a002fbe8531a8626(eventobject, sectionNumber, rowNumber) {
    return removeSchedule.call(this, eventobject);
}

function AS_Segment_515264bd371548348504c5441bf9abb5(eventobject) {}

function AS_Segment_6752aaa5445c4daa8598b7a13aea12f5(eventobject, sectionNumber, rowNumber) {
    return navToMsgScreen.call(this);
}

function AS_Segment_7626a4bad6be43478e9092f27f5f37bf(eventobject, sectionNumber, rowNumber) {
    return
}

function AS_Segment_79111236d3284b099f3383a5e3a60863(eventobject) {}

function AS_Segment_7f7ff160bcdf425ca411e983d533c33d(eventobject) {}

function AS_Segment_95b5c42be7254c9abc10553956bdbc57(eventobject, sectionNumber, rowNumber) {
    return removeScheduleForUpdate.call(this, null);
}

function AS_Segment_9bdb3704db05419d913b9e86104e6dea(eventobject, sectionNumber, rowNumber) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        showBusinessOpenTaskDetails();
        saveVolForVolViewProfileOpenTasks();
        var busSegOpen = mainPage.mainPageBody.mainPageContentParent.myActivity.myOpenTasksParent.myOpenTasksListContainer.myOpenTasksList.selectedRowItems;
        // alert("busSegOpen"+JSON.stringify(busSegOpen));
        var segmentTypeMyActivity = busSegOpen[0].segType;
        // alert(segmentTypeMyActivity);
        kony.store.setItem("segmentType", segmentTypeMyActivity);
    } else {
        mainPage.TaskDetailsContainer.totalHoursContainers.LogHoursButton.isVisible = true;
        saveBusIdForViewProfileOpenTask();
        showVolOpenTaskDetails();
        openVoltaskRowDetails = mainPage.mainPageBody.mainPageContentParent.myActivity.myOpenTasksParent.myOpenTasksListContainer.myOpenTasksList.selectedRowItems;
        var segmentTypeMyActivityVol = openVoltaskRowDetails[0].segType;
        //alert(segmentTypeMyActivityVol);
        hoursComplete = openVoltaskRowDetails[0].hoursArray;
        gbltotalHours = openVoltaskRowDetails[0].totHours;
        gblOutBus = openVoltaskRowDetails[0].outHours;
        gblBusHours = openVoltaskRowDetails[0].busHours;
        startTimeOfTask = openVoltaskRowDetails[0].startDate;
        endTimeOfTask = openVoltaskRowDetails[0].endDate;
        //alert("busSegOpen"+JSON.stringify(openVoltaskRowDetails));
        // alert("row"+gblBusHours);
        kony.store.setItem("segmentType", segmentTypeMyActivityVol);
        //calllContactfromOpenTaskVolunteer();
    }
}

function AS_Segment_a0963566e11f4604b8326f68a2e24ec8(eventobject, sectionNumber, rowNumber) {
    return showBusinessOpenTaskDetails.call(this);
}

function AS_Segment_a10b49ad5346483ab77628da44d5d83f(eventobject, sectionNumber, rowNumber) {
    var selItem = searchPage.segPredictive.selectedRowItems;
    //alert(JSON.stringify(selItem));
    searchPage.searchTxtbox.text = selItem[0].lblSuggestions;
    searchPage.segPredictive.removeAll();
}

function AS_Segment_a4bf0d68751043188d7ac360bb1d04dd(eventobject) {}

function AS_Segment_a52ffce90f1a4961b2dfed2b0b64337e(eventobject, sectionNumber, rowNumber) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        saveVolForVolViewProfileCloseTask();
        showBusinessCloseTaskDetails();
        var rowData = mainPage.mainPageBody.mainPageContentParent.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.selectedRowItems;
        //alert("Close rowData"+JSON.stringify(rowData));
        var seg3 = rowData[0].segType;
        //alert(seg3);
        kony.store.setItem("segmentType", seg3);
    } else {
        mainPage.TaskDetailsContainer.totalHoursContainers.LogHoursButton.isVisible = false;
        saveBusIdForViewProfileCloseTask();
        showVolCloseTaskDetails();
        var rowData1 = mainPage.mainPageBody.mainPageContentParent.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.selectedRowItems;
        var seg4 = rowData1[0].segType;
        //alert(seg4);
        kony.store.setItem("segmentType", seg4);
    }
}

function AS_Segment_badff858be434fc7bb4ffc981040fd67(eventobject, sectionNumber, rowNumber) {}

function AS_Segment_be6fb3f80ae4453da0eef0c00961b918(eventobject, sectionNumber, rowNumber) {}

function AS_Segment_cc1833b9062c482fb8b23f76f61ef7ac(eventobject, sectionNumber, rowNumber) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        getBusinessNotificationDetails();
    } else {
        getVolunteerNotificationDetails();
    }
}

function AS_Segment_da1fa30bda0a42c19cbacbaf60a2545d(eventobject, sectionNumber, rowNumber) {
    return removeSkill.call(this, eventobject);
}

function AS_Segment_dc27f8cfa268483abe30dde5ea343ce5(eventobject, sectionNumber, rowNumber) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        showBusinessOpenTaskDetails();
        saveVolForVolViewProfileOpenTasks();
        var busSegOpen = mainPage.mainPageBody.mainPageContentParent.myActivity.myOpenTasksParent.myOpenTasksListContainer.myOpenTasksList.selectedRowItems;
        var segmentTypeMyActivity = busSegOpen[0].segType;
        // alert(segmentTypeMyActivity);
        kony.store.setItem("segmentType", segmentTypeMyActivity);
    } else {
        saveBusIdForViewProfileOpenTask();
        showVolOpenTaskDetails();
        openVoltaskRowDetails = mainPage.mainPageBody.mainPageContentParent.myActivity.myOpenTasksParent.myOpenTasksListContainer.myOpenTasksList.selectedRowItems;
        var segmentTypeMyActivityVol = openVoltaskRowDetails[0].segType;
        //alert(segmentTypeMyActivityVol);
        kony.store.setItem("segmentType", segmentTypeMyActivityVol);
        //calllContactfromOpenTaskVolunteer();
    }
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

function AS_TextArea_ac195e0dc95744119ba6b9195b097add(eventobject) {
    return onRegFieldUpdateForUpdation.call(this, eventobject);
}

function AS_TextArea_fe2bb2b434114b0c9b9a8bb4acd31f9f(eventobject) {
    return onRegFieldUpdateForUpdation.call(this, eventobject);
}

function AS_TextField_1abf52a14b8b41d7b457e170b2cb77c9(eventobject, changedtext) {
    return onRegFieldUpdateForUpdation.call(this, eventobject);
}

function AS_TextField_372743a3e4dc484f96d2a21d5dd6667c(eventobject, changedtext) {
    return onRegFieldUpdate.call(this, eventobject);
}

function AS_TextField_3d1a1661e3ae41369e8d869dba99f78e(eventobject, changedtext) {
    return onRegFieldUpdate.call(this, eventobject);
}

function AS_TextField_547d8f0aabe647b4b0c0ba62b03a093c(eventobject, changedtext) {
    if (gblIsOpp == true) {
        changeOppSearch();
    } else {
        if (kony.store.getItem("isBusOrVol") == "volunteer") {
            changeBusiness();
        } else {
            chang28();
        }
    }
}

function AS_TextField_5659650338ed492494b9f858ceb83373(eventobject, changedtext) {
    return onRegFieldUpdateForUpdation.call(this, eventobject);
}

function AS_TextField_5947e4a2027142988150f46fb2d660a3(eventobject, changedtext) {
    return onRegFieldUpdate.call(this, eventobject);
}

function AS_TextField_6e61c630845840748ff7f9ba9ac7033f(eventobject, changedtext) {
    return onRegFieldUpdateForUpdation.call(this, eventobject);
}

function AS_TextField_93e59fd514bc461fb9433771e452ac55(eventobject, changedtext) {
    return onRegFieldUpdateForUpdation.call(this, eventobject);
}

function AS_TextField_aa024ef3cb084fa9a2b41693f0bf3cdc(eventobject, changedtext) {
    return onRegFieldUpdateForUpdation.call(this, eventobject);
}

function AS_TextField_ae290058a08a4ad0a0459f12d784ff52(eventobject, changedtext) {
    return onRegFieldUpdateForUpdation.call(this, eventobject);
}

function AS_TextField_b0e239699a344fa4af76f618d418760f(eventobject, changedtext) {
    return onRegFieldUpdate.call(this, eventobject);
}

function AS_TextField_bac558627a05452b99bdf393eae66bc8(eventobject, changedtext) {
    return onRegFieldUpdate.call(this, eventobject);
}

function AS_TextField_bb09ca2e585e49d796d3ca25856e37ff(eventobject, changedtext) {
    return onRegFieldUpdateForUpdation.call(this, eventobject);
}

function AS_TextField_d05d6d132c4b4747a7cbf6dc381fad1b(eventobject, changedtext) {
    return onRegFieldUpdateForUpdation.call(this, eventobject);
}

function AS_TextField_dc1e9ff886644e3197f422537d69455c(eventobject, changedtext) {
    return onRegFieldUpdateForUpdation.call(this, eventobject);
}

function AS_TextField_e6e55cea7bae4981b3b6cc6b5427ae22(eventobject, changedtext) {
    return onRegFieldUpdateForUpdation.call(this, eventobject);
}

function AS_TextField_f859a507a1984459a9b0527f17b10f32(eventobject, changedtext) {
    return onRegFieldUpdateForUpdation.call(this, eventobject);
}

function AS_TextField_f8b9fc0a64c04fb59a35d1236d543dde(eventobject, changedtext) {
    return onRegFieldUpdate.call(this, eventobject);
}

function AS_TitleBar_2c52b585e07e4357bc425c4e75e46480(eventobject) {
    searchResultProfile.destroy();
    searchPage.show();
}

function AS_TitleBar_ae8b7e317f31435fbec5933e1fe84b39(eventobject) {
    gblFirstTime = false;
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

function BusinessProfileContinueButton_OnClick(eventobject) {
    return AS_Button_78e83321b8d049d8881d7b082294720b(eventobject);
}

function AS_Button_78e83321b8d049d8881d7b082294720b(eventobject) {
    mainPage.show();
}

function login_registerButton_onTouchStart(eventobject, x, y) {
    return AS_Label_2e641c70f5f84f80bb2d8fe88102e950(eventobject, x, y);
}

function AS_Label_2e641c70f5f84f80bb2d8fe88102e950(eventobject, x, y) {
    kony.store.removeItem("imageVal");
    kony.store.removeItem("imageFileNameVal");
    registrationPage.show();
}

function login_registerButton_oTS(eventobject, x, y) {
    return AS_RichText_58183f113bfb4950a774c5437a2f1324(eventobject, x, y);
}

function AS_RichText_58183f113bfb4950a774c5437a2f1324(eventobject, x, y) {
    kony.store.removeItem("imageVal");
    kony.store.removeItem("imageFileNameVal");
    registrationPage.show();
}

function login_signInButton_action_onTouchStart(eventobject, x, y) {
    return AS_Button_c55a88368de54c408d5a02eef07ad463(eventobject, x, y);
}

function AS_Button_c55a88368de54c408d5a02eef07ad463(eventobject, x, y) {
    var userText = login.loginContainer.loginBody.usernameField.text;
    var passText = login.loginContainer.loginBody.passwordField.text;
    if (userText == "null" || userText == null || userText == "" || passText == "null" || passText == null || passText == "") {
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_ERROR,
            "alertTitle": null,
            "yesLabel": "OK",
            "noLabel": "No",
            "message": "Email ID and Password Field cannot be blank",
            "alertHandler": "null"
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
    } else {
        loginService();
    }
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
    saveReqForBusStartEngae.call(this);
    getTaskDetailsForVol.call(this);
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
    if (kony.store.getItem("isBusOrVol") == "business") {
        contactVolunteer();
    } else {
        contactVolunteerFromAcceptTaskDetailsPage();
    }
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
    emailValidityCheck();
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
    // scheduleNewForm.outsideScheduletime.isVisible=false;
    scheduleNewForm.outsideScheduletime.isVisible = false;
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
    return removeSkill.call(this, eventobject);
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
    searchPage.destroy();
    mainPage.show();
}

function slideMenu_myProfile_onTouchStart(eventobject, x, y) {
    return AS_RichText_c054155ae9024a5a9c2305607e76e4d8(eventobject, x, y);
}

function AS_RichText_c054155ae9024a5a9c2305607e76e4d8(eventobject, x, y) {
    //alert("show profile");
    //volunteerMyProfilePage.show();
    //mainPage.sideBarMenuContainer.isVisible=false;
    if (kony.store.getItem("isBusOrVol") === "business") {
        //      businessMyProfile.businessMyProfileFooter.isVisible=false;
        //      businessMyProfile.BusinessProfilefooterWith2Buttons.isVisible=true;
        //businessMyProfile.show();
        BusinessProfile.show();
        searchResultProfile.volunteerProfileContainer.isVisible = false;
        searchResultProfile.businessProfileContainer.isVisible = true;
        // alert("BusinessProfile");
    } else {
        volunteerMyProfilePage.show();
        //volunteerMyProfilePage.volunteerMyProfileFooter.isVisible=false;
        volunteerMyProfilePage.volunteerMyProfileFooter2Buttons.isVisible = true;
        mainPage.destroy();
        //alert("volunteerprofile");
    }
}

function userInfoPage_action_init(eventobject) {
    return AS_Form_0955c260e9cd47709155085e6373b9c2(eventobject);
}

function AS_Form_0955c260e9cd47709155085e6373b9c2(eventobject) {
    return getUserInfo.call(this);
}