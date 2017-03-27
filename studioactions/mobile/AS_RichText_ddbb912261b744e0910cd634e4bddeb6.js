function AS_RichText_ddbb912261b744e0910cd634e4bddeb6(eventobject, linktext, attributes) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        IndigenousBusinessViewProfileService();
    } else if (kony.store.getItem("isBusOrVol") == "business") {
        // alert("y its not working");
        //alert("inside snippet");
        volunteerViewProfilePageService();
    }
}