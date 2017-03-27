function AS_Button_6a726122f1104df9b4d53ee762d4a566(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        searchBusiness();
        gblIsVol = false;
    } else {
        //no action should be done
    }
}