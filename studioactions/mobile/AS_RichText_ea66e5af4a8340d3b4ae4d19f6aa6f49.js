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