function AS_Button_8ae701ee477d43a193ccca1488f4b617(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        mainPage.mainPageBody.mainPageContentParent.myNotifications.isVisible = true;
        mainPage.mainPageBody.navBarScroller.recommendationNavContainer.isVisible = true;
        BusinessRecommendationService();
    }
}