function AS_RichText_dddb86c2252f4d83bdf8692481e8ce26(eventobject, linktext, attributes) {
    //alert("on click");
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        //alert("on click innn");
        IndigenousBusinessViewProfileService();
    } else if (kony.store.getItem("isBusOrVol") == "business") {
        // alert("y its not working");
        //alert("inside snippet");
        volunteerViewProfilePageService();
    }
}