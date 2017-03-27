function AS_RichText_fac39ba759ec43de9444a58266eca74f(eventobject, linktext, attributes) {
    mainPage.destroy();
    if (kony.store.getItem("isBusOrVol") == "business") {
        mainPage.mainPageBody.navBarScroller.recommendationNavContainer.isVisible = true;
        mainPage.mainPageBody.mainPageContentParent.myNotifications.isVisible = true;
        BusinessRecommendationService();
    }
    mainPage.show();
}