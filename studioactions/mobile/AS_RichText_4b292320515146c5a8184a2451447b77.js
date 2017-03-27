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