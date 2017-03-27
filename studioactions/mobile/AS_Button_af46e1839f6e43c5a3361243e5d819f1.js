function AS_Button_af46e1839f6e43c5a3361243e5d819f1(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        //no action should be done
    } else {
        volunteerService();
        gblIsVol = true;
    }
}