function AS_Button_919d65dbfcbd4a708628240c170310d9(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        notificationServiceforVolunteer();
    } else {
        BusinessNotificationService();
        mainPage.mainPageBody.navBarScroller.recommendationNavContainer.isVisible = true;
        mainPage.mainPageBody.mainPageContentParent.myNotifications.isVisible = true;
        BusinessRecommendationService();
    }
}