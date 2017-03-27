function AS_RichText_62d2e670d3a146f58141e05208398840(eventobject, linktext, attributes) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        IndigenousBusinessViewProfileService();
    } else if (kony.store.getItem("isBusOrVol") == "business") {
        // alert("y its not working");
        //alert("inside snippet");
        volunteerViewProfilePageService();
    }
}