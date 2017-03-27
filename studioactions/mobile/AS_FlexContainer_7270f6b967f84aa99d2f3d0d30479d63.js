function AS_FlexContainer_7270f6b967f84aa99d2f3d0d30479d63(eventobject, x, y) {
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
    }
    // else
    //   {
    //     var segTypeforBusCal=kony.store.getItem("segmentType");
    // //alert("the clicked segTypement is ="+segTypeforBusCal);
    // try{
    //   if(segTypeforBusCal!="null"||segTypeforBusCal!=null)
    //   {
    // //     //alert("Inside Accepted segType after first segType");
    //     if(segTypeforBusCal=="accepted")
    //       {
    //        // alert("Inside Accepted segType");
    //         callBusFromAcceptedSeg();
    //      } 
    //     else if(segTypeforBusCal=="open")
    //   {
    //     //alert("Inside Open segType");
    //     callBusContactOpenSeg();
    //        //alert("Inside Accepted segType"); 
    //   }
    //      else if(segTypeforBusCal=="close")
    //   {
    //     callBusFromeCloseSeg();
    //   }
    // }
    //   }
    //     catch(e)
    //   {
    //     alert("aError is"+e);
    //   }
    //   }
}