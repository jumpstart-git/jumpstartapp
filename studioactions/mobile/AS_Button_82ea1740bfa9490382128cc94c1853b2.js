function AS_Button_82ea1740bfa9490382128cc94c1853b2(eventobject) {
    searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.volunteerFlex.volunteerScrollFlex.isVisible = false;
    searchPage.searchTxtbox.text = "";
    searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.BusinessContainer.businessIndicator.isVisible = false;
    searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.opportunitiesFlex.opportunitiesIndicator.isVisible = true;
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        searchPage.DataFlexScrollContainer.volunteerdataSegment.removeAll();
        searchOppurtunity();
        gblIsVol = false;
        gblIsOpp = true;
    } else {
        //no action should be done
    }
}