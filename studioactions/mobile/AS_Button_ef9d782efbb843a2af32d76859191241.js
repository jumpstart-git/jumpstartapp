function AS_Button_ef9d782efbb843a2af32d76859191241(eventobject) {
    mainPage.destroy();
    if (kony.store.getItem("isBusOrVol") == "business") {
        mainPage.mainPageBody.navBarScroller.recommendationNavContainer.isVisible = true;
        mainPage.mainPageBody.mainPageContentParent.myNotifications.isVisible = true;
        BusinessRecommendationService();
    }
    mainPage.show();
}