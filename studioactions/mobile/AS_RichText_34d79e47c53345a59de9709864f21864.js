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