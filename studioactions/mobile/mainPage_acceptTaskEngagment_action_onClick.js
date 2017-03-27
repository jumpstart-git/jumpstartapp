function mainPage_acceptTaskEngagment_action_onClick(eventobject, linktext, attributes, context) {
    return AS_RichText_78687b17505c48ef9ec3726f0ba1d95d(eventobject, linktext, attributes, context);
}

function AS_RichText_78687b17505c48ef9ec3726f0ba1d95d(eventobject, linktext, attributes, context) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        //alert("going inside business");
        //  indeginousCancelRequest();
        mainPage.startEngagementModalContainer.isVisible = true;
    } else {
        //  alert("going inside volunteer");
        mainPage.acceptTaskDetailsModalContainer.isVisible = true;
        //write salma's code
    }
    saveReqForBusStartEngae.call(this);
    getTaskDetailsForVol.call(this);
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        TaskDetailsForVolunteer();
    }
}