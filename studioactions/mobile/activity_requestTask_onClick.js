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