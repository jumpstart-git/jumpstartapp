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