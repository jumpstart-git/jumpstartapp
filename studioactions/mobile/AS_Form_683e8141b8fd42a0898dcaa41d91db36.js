function AS_Form_683e8141b8fd42a0898dcaa41d91db36(eventobject) {
    initAppHeader();
    //alert("entering");
    //mainPage.cancelRequestModalContainer.isVisible = false;
    if (kony.store.getItem("isBusOrVol") == "business") {
        // alert("a");
        mainPage.mainPageBody.searchBarContainer.appHeaderTitleContainer.lblBusorVolName.text = kony.store.getItem("loginBusinessName");
        var imageurlPath = kony.store.getItem("imgUrlBusiness");
        if (imageurlPath != null) {
            //alert("jst before setting"+imageurlPath);
            mainPage.mainPageBody.searchBarContainer.appHeaderTitleContainer.appPageProfilePic.src = "";
            mainPage.mainPageBody.searchBarContainer.appHeaderTitleContainer.appPageProfilePic.src = imageurlPath;
        }
        //BusinessExistingOpenTaskService();
        getBusinessRequestsService();
        //BusinessRecommendationService();
    } else {
        // alert("it is volunteer");
        mainPage.mainPageBody.searchBarContainer.appHeaderTitleContainer.lblBusorVolName.text = kony.store.getItem("volLoginName");
        var VolimageurlPath = kony.store.getItem("imgUrlVal");
        if (VolimageurlPath != null) {
            mainPage.mainPageBody.searchBarContainer.appHeaderTitleContainer.appPageProfilePic.src = "";
            mainPage.mainPageBody.searchBarContainer.appHeaderTitleContainer.appPageProfilePic.src = VolimageurlPath;
        }
        getVolunteerRequestsService1();
    }
    if (kony.store.getItem("isBusOrVol") == "business") {
        mainPage.mainPageBody.navBarScroller.endorsementsContainer.isVisible = false;
    }
    //start
    if ((kony.store.getItem("isBusOrVol") == "volunteer") && (kony.store.getItem("adminVal") == "v")) {
        mainPage.sideBarMenuContainer.sideBarMenu.sideBarBody.ReportingLink.isVisible = true;
    } else if ((kony.store.getItem("isBusOrVol") == "business") && (kony.store.getItem("adminVal") == "i")) {
        mainPage.sideBarMenuContainer.sideBarMenu.sideBarBody.ReportingLink.isVisible = true;
    } else if ((kony.store.getItem("isBusOrVol") == "business") && (kony.store.getItem("adminVal") == "sn")) {
        mainPage.sideBarMenuContainer.sideBarMenu.sideBarBody.ReportingLink.isVisible = true;
    } else {
        mainPage.sideBarMenuContainer.sideBarMenu.sideBarBody.ReportingLink.isVisible = false;
    }
    //end
    var adminbus = kony.store.getItem("adminValnew");
    // alert("adminValnew"+adminbus);
    if (adminbus == "y") {
        mainPage.sideBarMenuContainer.sideBarMenu.sideBarBody.FlexContainer08d40d9191a9344.checkList.selectedKeys = ["cbg1"];
    } else {
        //alert("its no");
        mainPage.sideBarMenuContainer.sideBarMenu.sideBarBody.FlexContainer08d40d9191a9344.checkList.masterData = [
            ["cbg1", "."]
        ];
    }
}