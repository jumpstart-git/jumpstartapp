function AS_RichText_dfc77110fa9c4e878d108a5fc8bdd84e(eventobject, linktext, attributes) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        IndigenousBusinessViewProfileService();
    } else if (kony.store.getItem("isBusOrVol") == "business") {
        // alert("y its not working");
        //alert("inside snippet");
        volunteerViewProfilePageService();
    }
}