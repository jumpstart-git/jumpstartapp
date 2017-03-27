function AS_Button_77e714f7aa55443ea8dda907cdba64cb(eventobject) {
    gblIsOpp = false;
    searchPage.searchTxtbox.text = "";
    searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.volunteerFlex.volunteerScrollFlex.isVisible = false;
    searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.BusinessContainer.businessIndicator.isVisible = true;
    searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.opportunitiesFlex.opportunitiesIndicator.isVisible = false;
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        searchBusiness();
        gblIsVol = false;
    } else {
        //no action should be done
    }
}