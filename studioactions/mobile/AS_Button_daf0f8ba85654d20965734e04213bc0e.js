function AS_Button_daf0f8ba85654d20965734e04213bc0e(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        mainPage.mainPageBody.mainPageContentParent.myEndorsements.isVisible = true;
        endorsementsService();
    }
}