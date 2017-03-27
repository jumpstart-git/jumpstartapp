function AS_Button_b2c5b26ff29f4a909862e033008e3592(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        mainPage.mainPageBody.mainPageContentParent.myEndorsements.isVisible = true;
        endorsementsService();
    }
}