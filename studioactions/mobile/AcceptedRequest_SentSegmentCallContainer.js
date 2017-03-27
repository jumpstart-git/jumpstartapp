function AcceptedRequest_SentSegmentCallContainer(eventobject, x, y) {
    return AS_FlexContainer_a98dd2502cf84883a678f6e9d321c3e5(eventobject, x, y);
}

function AS_FlexContainer_a98dd2502cf84883a678f6e9d321c3e5(eventobject, x, y) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        var segTypeCheckforVolCall = kony.store.getItem("segmentType");
        // alert(segType1);
        try {
            if (segTypeCheckforVolCall != "null" || segTypeCheckforVolCall != null) {
                if (segTypeCheckforVolCall == "sent") {
                    //alert("Isinde open seg " + segType1);
                    callContactSentSeg();
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
                }
            }
        } catch (e) {
            alert("aError is" + e);
        }
    }
}