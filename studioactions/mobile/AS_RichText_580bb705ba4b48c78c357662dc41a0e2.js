function AS_RichText_580bb705ba4b48c78c357662dc41a0e2(eventobject, x, y) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        notificationServiceforVolunteer();
    } else {
        BusinessNotificationService();
        mainPage.mainPageBody.navBarScroller.recommendationNavContainer.isVisible = true;
        mainPage.mainPageBody.mainPageContentParent.myNotifications.isVisible = true;
        BusinessRecommendationService();
    }
}