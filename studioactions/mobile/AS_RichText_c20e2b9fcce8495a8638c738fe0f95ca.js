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