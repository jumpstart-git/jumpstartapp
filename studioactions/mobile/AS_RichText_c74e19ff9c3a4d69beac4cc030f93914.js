function AS_RichText_c74e19ff9c3a4d69beac4cc030f93914(eventobject, linktext, attributes) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        var segType1 = kony.store.getItem("segmentType");
        alert(segType1);
        try {
            if (segType1 != "null" || segType1 != null) {
                if (segType1 == "open") {
                    alert("Isinde open seg " + segType1);
                    callContactfromOpenTaskBusiness();
                } else if (segType == "close") {
                    //Code for business close task row click message
                }
            }
        } catch (e) {
            alert(e);
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
                    //alert("Inside Accepted segType"); 
                } else if (segType2 == "close") {
                    //Code for close task details message text
                }
            }
        } catch (e) {
            alert("aError is" + e);
        }
    }
}