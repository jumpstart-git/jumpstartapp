function AS_RichText_45be57ca65c1419986dd2ee513f25601(eventobject, linktext, attributes) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        var segType1 = kony.store.getItem("segmentType");
        // alert(segType1);
        try {
            if (segType1 != "null" || segType1 != null) {
                if (segType1 == "open") {
                    //alert("Isinde open seg " + segType1);
                    callContactfromOpenTaskBusiness();
                } else {
                    (segType1 == "close")
                    //alert("Inside Close Task");
                    callContactfromCloseTaskBusiness();
                }
            }
        } catch (e) {
            //alert(e);
        }
    } else {
        var segType2 = kony.store.getItem("segmentType");
        //alert("the clicked segTypement is ="+segType2);
        try {
            if (segType2 != "null" || segType2 != null) {
                //     //alert("Inside Accepted segType after first segType");
                if (segType2 == "accepted") {
                    // alert("Inside Accepted segType");
                    contactVolunteerFromAcceptTaskDetailsPage();
                } else if (segType2 == "open") {
                    callContactfromOpenTaskVolunteer();
                    // alert("Inside Open segType"); 
                } else if (segType2 == "close") {
                    callContactfromCloseTaskVolunteer();
                }
            }
        } catch (e) {
            //alert("Error is"+e);
        }
    }
}