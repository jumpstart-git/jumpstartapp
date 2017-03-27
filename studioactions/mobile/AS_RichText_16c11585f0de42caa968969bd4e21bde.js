function AS_RichText_16c11585f0de42caa968969bd4e21bde(eventobject, x, y) {
    mainPage.destroy();
    mainPage.show();
    if (kony.store.getItem("isBusOrVol") == "business") {
        mainPage.mainPageBody.navBarScroller.recommendationNavContainer.isVisible = true;
        mainPage.mainPageBody.mainPageContentParent.myNotifications.isVisible = true;
        BusinessRecommendationService();
    }
}