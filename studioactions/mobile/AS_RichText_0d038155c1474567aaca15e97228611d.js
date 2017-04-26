function AS_RichText_0d038155c1474567aaca15e97228611d(eventobject, x, y) {
    //alert("show profile");
    //volunteerMyProfilePage.show();
    //mainPage.sideBarMenuContainer.isVisible=false;
    if (kony.store.getItem("isBusOrVol") === "business") {
        //      businessMyProfile.businessMyProfileFooter.isVisible=false;
        //      businessMyProfile.BusinessProfilefooterWith2Buttons.isVisible=true;
        //businessMyProfile.show();
        BusinessProfile.show();
        searchResultProfile.volunteerProfileContainer.isVisible = false;
        searchResultProfile.businessProfileContainer.isVisible = true;
        // alert("BusinessProfile");
    } else {
        volunteerMyProfilePage.show();
        //volunteerMyProfilePage.volunteerMyProfileFooter.isVisible=false;
        volunteerMyProfilePage.volunteerMyProfileFooter2Buttons.isVisible = true;
        mainPage.destroy();
        //alert("volunteerprofile");
    }
}