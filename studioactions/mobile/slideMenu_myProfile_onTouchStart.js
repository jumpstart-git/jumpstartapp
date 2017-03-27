function slideMenu_myProfile_onTouchStart(eventobject, x, y) {
    return AS_RichText_c054155ae9024a5a9c2305607e76e4d8(eventobject, x, y);
}

function AS_RichText_c054155ae9024a5a9c2305607e76e4d8(eventobject, x, y) {
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