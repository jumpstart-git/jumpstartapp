function AS_RichText_c7798ee8cd504f8e9878f8da0dcdfcb2(eventobject, linktext, attributes) {
    mainPage.destroy();
    mainPage.show();
    if (kony.store.getItem("isBusOrVol") == "business") {
        mainPage.mainPageBody.navBarScroller.recommendationNavContainer.isVisible = true;
        mainPage.mainPageBody.mainPageContentParent.myNotifications.isVisible = true;
        BusinessRecommendationService();
    }
}