function AS_Button_8e7d1c456f684225b78298cb42111f91(eventobject) {
    gblIsOpp = false;
    searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.volunteerFlex.volunteerScrollFlex.isVisible = true;
    searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.BusinessContainer.businessIndicator.isVisible = false;
    searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.opportunitiesFlex.opportunitiesIndicator.isVisible = false;
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        //no action should be done
    } else {
        volunteerService();
        gblIsVol = true;
    }
}