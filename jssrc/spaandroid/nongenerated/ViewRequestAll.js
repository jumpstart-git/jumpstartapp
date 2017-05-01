var viewSentReqMessage;
var opentaskRowDetails;
var openVoltaskRowDetails;
var gblTaskIdForHours;

function viewSentRequestedMessage() {
    if (kony.store.getItem("isBusOrVol") == "business") {
        var startEngageTaskIdSent = mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.sentRequestsSegment.selectedRowItems;
        viewSentReqMessage = startEngageTaskIdSent[0].ActaulMessage;
        // alert("viewSentReqMessage==="+viewSentReqMessage);
        if (viewSentReqMessage === null || viewSentReqMessage === "null") viewSentReqMessage = " ";
        mainPage.viewRequestModalContainer.viewRequestModalBody.viewRequestMessage.text = viewSentReqMessage;
    }
}
//Salma Volunteer view request
var viewVolSentReqMessage;

function viewVolSentRequestedMessage() {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        var acceptReqTaskIdSent = mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.sentRequestsSegment.selectedRowItems;
        viewVolSentReqMessage = acceptReqTaskIdSent[0].ActaulMessage;
        // alert("viewVolSentReqMessage==="+viewVolSentReqMessage);
        mainPage.viewRequestModalContainer.viewRequestModalBody.viewRequestMessage.text = viewVolSentReqMessage;
    }
}

function navToProfilePage() {
    //myProfile.volunteerRequestContainer.isVisible = false;
    if (kony.store.getItem("isBusOrVol") == "business") {
        searchResultProfile.volunteerProfileContainer.isVisible = false;
        searchResultProfile.businessProfileContainer.isVisible = true;
        searchResultProfile.businessProfileContainer.requestToVolunteerButton.isVisible = false;
        //searchResultProfile.businessProfileContainer.show();
    } else if (kony.store.getItem("isBusOrVol") === "volunteer") {
        searchResultProfile.businessProfileContainer.isVisible = false;
        searchResultProfile.volunteerProfileContainer.isVisible = true;
        searchResultProfile.volunteerProfileContainer.requestAVolunteer.isVisible = false;
    }
    searchResultProfile.show();
    hideSideBar();
}

function showBusinessOpenTaskDetails() {
    opentaskRowDetails = mainPage.mainPageBody.mainPageContentParent.myActivity.myOpenTasksParent.myOpenTasksListContainer.myOpenTasksList.selectedRowItems;
    //alert(JSON.stringify(opentaskRowDetails));
    if ((opentaskRowDetails[0].openTaskName != null) && (opentaskRowDetails[0].openTaskName != "null") && (opentaskRowDetails[0].openTaskName != "")) {
        mainPage.TaskDetailsContainer.TaskDetailsBodyContainer.taskTitleLabelInput.text = opentaskRowDetails[0].openTaskName;
        mainPage.TaskDetailsContainer.TaskDetailsBodyContainer.taskDetailsRichText.text = opentaskRowDetails[0].taskDetails;
        mainPage.TaskDetailsContainer.TaskDetailsBodyContainer.HoursRequiredLabelInput.text = opentaskRowDetails[0].hoursRequired;
        mainPage.TaskDetailsContainer.TaskDetailsBodyContainer.startTextInputLabel.text = opentaskRowDetails[0].startDate;
        mainPage.TaskDetailsContainer.TaskDetailsBodyContainer.endDateInputLabel.text = opentaskRowDetails[0].endDate;
        mainPage.TaskDetailsContainer.totalHoursContainers.TotalHoursTopContainer.calculatedHours.totalWorkedHours.text = opentaskRowDetails[0].totHours;
        mainPage.TaskDetailsContainer.TaskDetailsHeaderContainer.taskDetailsViewProfileContainer.detailsViewProfileContainer.profileName.text = opentaskRowDetails[0].openTaskBusiness;
        mainPage.TaskDetailsContainer.TaskDetailsBodyContainer.taskSkillSInput.text = opentaskRowDetails[0].taskSkills;
        //"taskSkills":"taskSkills"
        mainPage.TaskDetailsContainer.isVisible = true;
    } else {
        kony.application.dismissLoadingScreen();
    }
}

function showBusinessCloseTaskDetails() {
    var closetaskRowDetails = mainPage.mainPageBody.mainPageContentParent.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.selectedRowItems;
    //alert(JSON.stringify(closetaskRowDetails));
    if ((closetaskRowDetails[0].closedTaskName != "") && (closetaskRowDetails[0].closedTaskName != null) && (closetaskRowDetails[0].closedTaskName != "null")) {
        //   mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalHeader.CopystartEngagmentHeaderDetails05c3f0a6993dd4b.CopystartEngagmentHeaderDetailsParent07958b4bef26b4f.CopyLabel0d3787300d8b24b.text=kony.store.getItem("loginBusinessName");
        //       mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalBody.CopystartEngagementTaskTitle09c8c16c0f4cb4f.text=closetaskRowDetails[0].closedTaskName;
        //       mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalBody.RichText086cf577b0bee44.text=closetaskRowDetails[0].detail;
        //       mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalBody.CopystartEngagementTaskTitle05227206fe96b4a.text= closetaskRowDetails[0].startDate;           
        //       mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalBody.CopystartEngagementTaskTitle0d258ad25591a49.text =closetaskRowDetails[0].endDate;
        //       mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalFooter.CopystartEngagement0e3cd864659974b.isVisible=false; 
        //   mainPage.acceptTaskDetailsModalContainer.isVisible=true;
        mainPage.TaskDetailsContainer.TaskDetailsBodyContainer.taskTitleLabelInput.text = closetaskRowDetails[0].closedTaskName;
        mainPage.TaskDetailsContainer.TaskDetailsBodyContainer.taskDetailsRichText.text = closetaskRowDetails[0].detail;
        mainPage.TaskDetailsContainer.TaskDetailsBodyContainer.HoursRequiredLabelInput.text = closetaskRowDetails[0].hoursRequired;
        mainPage.TaskDetailsContainer.TaskDetailsBodyContainer.startTextInputLabel.text = closetaskRowDetails[0].startDate;
        mainPage.TaskDetailsContainer.TaskDetailsBodyContainer.endDateInputLabel.text = closetaskRowDetails[0].endDate;
        mainPage.TaskDetailsContainer.totalHoursContainers.TotalHoursTopContainer.calculatedHours.totalWorkedHours.text = closetaskRowDetails[0].totHours;
        mainPage.TaskDetailsContainer.TaskDetailsHeaderContainer.taskDetailsViewProfileContainer.detailsViewProfileContainer.profileName.text = closetaskRowDetails[0].closedTaskBusiness;
        mainPage.TaskDetailsContainer.TaskDetailsBodyContainer.taskSkillSInput.text = closetaskRowDetails[0].taskSkills;
        mainPage.TaskDetailsContainer.isVisible = true;
    } else {
        kony.application.dismissLoadingScreen();
    }
}

function showVolOpenTaskDetails() {
    openVoltaskRowDetails = mainPage.mainPageBody.mainPageContentParent.myActivity.myOpenTasksParent.myOpenTasksListContainer.myOpenTasksList.selectedRowItems;
    // var segmentTypeMyActivityVol=openVoltaskRowDetails[0].segType;
    //  // alert(segmentTypeMyActivityVol);
    //     kony.store.setItem("segmentType", segmentTypeMyActivityVol);
    // alert("openVoltaskRowDetails"+JSON.stringify(openVoltaskRowDetails));
    gblTaskIdForHours = openVoltaskRowDetails[0].lblRequestId;
    // alert("gblTaskIdForHours"+gblTaskIdForHours);
    if ((openVoltaskRowDetails[0].openTaskName != "") && (openVoltaskRowDetails[0].openTaskName != null) && (openVoltaskRowDetails[0].openTaskName != "null")) {
        //alert(1);
        //   mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalHeader.CopystartEngagmentHeaderDetails05c3f0a6993dd4b.CopystartEngagmentHeaderDetailsParent07958b4bef26b4f.CopyLabel0d3787300d8b24b.text=kony.store.getItem("volLoginName");
        //       mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalBody.CopystartEngagementTaskTitle09c8c16c0f4cb4f.text=openVoltaskRowDetails[0].openTaskName;
        //       mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalBody.RichText086cf577b0bee44.text=openVoltaskRowDetails[0].taskDetails;
        //       mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalBody.CopystartEngagementTaskTitle05227206fe96b4a.text= openVoltaskRowDetails[0].startDate;           
        //       mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalBody.CopystartEngagementTaskTitle0d258ad25591a49.text =openVoltaskRowDetails[0].endDate;
        //       mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalFooter.CopystartEngagement0e3cd864659974b.isVisible=false; 
        //   mainPage.acceptTaskDetailsModalContainer.isVisible=true;
        mainPage.TaskDetailsContainer.TaskDetailsBodyContainer.taskTitleLabelInput.text = openVoltaskRowDetails[0].openTaskName;
        mainPage.TaskDetailsContainer.TaskDetailsBodyContainer.taskDetailsRichText.text = openVoltaskRowDetails[0].taskDetails;
        mainPage.TaskDetailsContainer.TaskDetailsBodyContainer.HoursRequiredLabelInput.text = openVoltaskRowDetails[0].hoursRequired;
        mainPage.TaskDetailsContainer.TaskDetailsBodyContainer.startTextInputLabel.text = openVoltaskRowDetails[0].startDate;
        mainPage.TaskDetailsContainer.TaskDetailsBodyContainer.endDateInputLabel.text = openVoltaskRowDetails[0].endDate;
        mainPage.TaskDetailsContainer.totalHoursContainers.TotalHoursTopContainer.calculatedHours.totalWorkedHours.text = openVoltaskRowDetails[0].totHours;
        mainPage.TaskDetailsContainer.TaskDetailsHeaderContainer.taskDetailsViewProfileContainer.detailsViewProfileContainer.profileName.text = openVoltaskRowDetails[0].openTaskBusiness;
        mainPage.TaskDetailsContainer.TaskDetailsBodyContainer.taskSkillSInput.text = openVoltaskRowDetails[0].taskSkills;
        mainPage.TaskDetailsContainer.isVisible = true;
    } else {
        kony.application.dismissLoadingScreen();
    }
}

function showVolCloseTaskDetails() {
    var closeVoltaskRowDetails = mainPage.mainPageBody.mainPageContentParent.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.selectedRowItems;
    // alert("openVoltaskRowDetails"+JSON.stringify(closeVoltaskRowDetails));
    if ((closeVoltaskRowDetails[0].closedTaskName != "") && (closeVoltaskRowDetails[0].closedTaskName != null) && (closeVoltaskRowDetails[0].closedTaskName != "null")) {
        //alert(1);
        //   mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalHeader.CopystartEngagmentHeaderDetails05c3f0a6993dd4b.CopystartEngagmentHeaderDetailsParent07958b4bef26b4f.CopyLabel0d3787300d8b24b.text=kony.store.getItem("volLoginName");
        //        mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalBody.CopystartEngagementTaskTitle09c8c16c0f4cb4f.text=closeVoltaskRowDetails[0].closedTaskName;
        //       mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalBody.RichText086cf577b0bee44.text=closeVoltaskRowDetails[0].detail;
        //       mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalBody.CopystartEngagementTaskTitle05227206fe96b4a.text= closeVoltaskRowDetails[0].startDate;           
        //       mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalBody.CopystartEngagementTaskTitle0d258ad25591a49.text =closeVoltaskRowDetails[0].endDate;
        //       mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalFooter.CopystartEngagement0e3cd864659974b.isVisible=false; 
        //   mainPage.acceptTaskDetailsModalContainer.isVisible=true;
        mainPage.TaskDetailsContainer.TaskDetailsBodyContainer.taskTitleLabelInput.text = closeVoltaskRowDetails[0].closedTaskName;
        mainPage.TaskDetailsContainer.TaskDetailsBodyContainer.taskDetailsRichText.text = closeVoltaskRowDetails[0].detail;
        mainPage.TaskDetailsContainer.TaskDetailsBodyContainer.HoursRequiredLabelInput.text = closeVoltaskRowDetails[0].hoursRequired;
        mainPage.TaskDetailsContainer.TaskDetailsBodyContainer.startTextInputLabel.text = closeVoltaskRowDetails[0].startDate;
        mainPage.TaskDetailsContainer.TaskDetailsBodyContainer.endDateInputLabel.text = closeVoltaskRowDetails[0].endDate;
        mainPage.TaskDetailsContainer.totalHoursContainers.TotalHoursTopContainer.calculatedHours.totalWorkedHours.text = closeVoltaskRowDetails[0].totHours;
        mainPage.TaskDetailsContainer.TaskDetailsHeaderContainer.taskDetailsViewProfileContainer.detailsViewProfileContainer.profileName.text = closeVoltaskRowDetails[0].closedTaskBusiness;
        mainPage.TaskDetailsContainer.TaskDetailsBodyContainer.taskSkillSInput.text = closeVoltaskRowDetails[0].taskSkills;
        mainPage.TaskDetailsContainer.isVisible = true;
    } else {
        kony.application.dismissLoadingScreen();
    }
}