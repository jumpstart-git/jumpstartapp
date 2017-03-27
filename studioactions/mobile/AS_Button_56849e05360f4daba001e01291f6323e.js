function AS_Button_56849e05360f4daba001e01291f6323e(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        //alert("going inside business");
        indeginousCancelRequest();
        //mamata
        // mainPage.show();
    } else {
        VolCancelRequest();
        //mamata
    }
}