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