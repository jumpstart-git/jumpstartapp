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