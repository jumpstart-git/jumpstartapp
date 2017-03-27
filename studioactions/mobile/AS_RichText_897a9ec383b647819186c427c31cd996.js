function AS_RichText_897a9ec383b647819186c427c31cd996(eventobject, x, y) {
    //alert("hi touch");
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        //alert("on touch touch innn");
        IndigenousBusinessViewProfileService();
    } else if (kony.store.getItem("isBusOrVol") == "business") {
        // alert("y its not working");
        //alert("inside snippet");
        volunteerViewProfilePageService();
    }
}