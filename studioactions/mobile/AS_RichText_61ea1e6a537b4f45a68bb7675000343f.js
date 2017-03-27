function AS_RichText_61ea1e6a537b4f45a68bb7675000343f(eventobject, x, y) {
    //mainPage.destroy();
    mainPage.show();
    if (kony.store.getItem("isBusOrVol") == "business") {
        mainPage.mainPageBody.navBarScroller.recommendationNavContainer.isVisible = true;
        mainPage.mainPageBody.mainPageContentParent.myNotifications.isVisible = true;
        BusinessRecommendationService();
        mainPage.mainPageContentParent.myActivity.CreateOpportunityButtonContainer.isVisible = true;
        mainPage.unAssignedTasksContainer.isVisible = true;
    }
}