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