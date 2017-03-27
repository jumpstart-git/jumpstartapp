function AS_RichText_d0ca4f5592bd46868725fe2607686ba2(eventobject, x, y) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        IndigenousBusinessViewProfileService();
    } else if (kony.store.getItem("isBusOrVol") == "business") {
        // alert("y its not working");
        //alert("inside snippet");
        volunteerViewProfilePageService();
    }
}