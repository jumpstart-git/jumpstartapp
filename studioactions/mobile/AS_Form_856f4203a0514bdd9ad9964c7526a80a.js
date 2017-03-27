function AS_Form_856f4203a0514bdd9ad9964c7526a80a(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        //   searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.volunteerFlex.volunteerScrollFlex.isVisible=false;
        // searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.BusinessContainer.businessIndicator.isVisible=true;
        //   searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.opportunitiesFlex.opportunitiesIndicator.isVisible=false;
        searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.volunteerFlex.isVisible = false;
        searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.volunteerFlex.volunteerScrollFlex.isVisible = true;
        searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.BusinessContainer.businessIndicator.isVisible = true;
    } else {
        searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.BusinessContainer.isVisible = false;
        searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.opportunitiesFlex.isVisible = false;
        searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.volunteerFlex.volunteerScrollFlex.isVisible = true;
    }
    searchPage.segPredictive.removeAll();
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        gblIsVol = false;
        if (gblFirstTime == true) {
            searchBusiness();
        } else {
            if (gblIsOpp == true) {
                searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.volunteerFlex.volunteerScrollFlex.isVisible = false;
                searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.BusinessContainer.businessIndicator.isVisible = false;
                searchPage.searchPageDashboardFlex.searchPageUpFlex.searchDataTypeFlex1.opportunitiesFlex.opportunitiesIndicator.isVisible = true;
            }
        }
        searchPage.businessBtn.skin = "CopyslButtonGlossBlue0ae29c855fda143";
        searchPage.volunteerBtn.skin = "CopyslButtonGlossBlue05330b12903d140";
    } else {
        gblIsVol = true;
        if (gblFirstTime == true) {
            volunteerService();
        }
        searchPage.businessBtn.skin = "CopyslButtonGlossBlue05330b12903d140";
        searchPage.volunteerBtn.skin = "CopyslButtonGlossBlue0ae29c855fda143";
    }
}