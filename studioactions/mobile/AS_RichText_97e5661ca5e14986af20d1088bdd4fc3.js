function AS_RichText_97e5661ca5e14986af20d1088bdd4fc3(eventobject, linktext, attributes, context) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        mainPage.viewRequestModalContainer.isVisible = true;
        viewSentRequestedMessage();
        //     mainPage.viewRequestModalContainer.isVisible=false;
        //     mainPage.show();
    } else {
        mainPage.viewRequestModalContainer.isVisible = true;
        viewVolSentRequestedMessage();
        //       mainPage.viewRequestModalContainer.isVisible=false;
        //       mainPage.show();
    }
}