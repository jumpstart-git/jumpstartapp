function AS_RichText_0039d256ac0e4b1fb29256f8759bd4a9(eventobject, linktext, attributes, context) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        GetVolunteerIdByCloseTaskSegDetails();
        // sendReviewDetailsss();
        // mainPage.sendRecommendation.isVisible=true;
    } else {
        sendReviewDetailsss();
        mainPage.sendRecommendation.isVisible = true;
    }
}