function AS_Form_42a11d3c371641b28b461909f0aad3b7(eventobject) {
    gblFirstTime = false;
    if (gblIsVol == true) {
        searchResultProfile.businessProfileContainer.isVisible = false;
        searchResultProfile.volunteerRequestContainer.isVisible = false;
        searchResultProfile.volunteerProfileContainer.isVisible = true;
    } else {
        searchResultProfile.volunteerProfileContainer.isVisible = false;
        searchResultProfile.volunteerRequestContainer.isVisible = false;
        searchResultProfile.businessProfileContainer.isVisible = true;
    }
    if (gblIsOpp == true) {
        searchResultProfile.opprtunitiesReadOnlyContainer.isVisible = true;
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.oppurtunities1ListModal.isVisible = false;
    }
}