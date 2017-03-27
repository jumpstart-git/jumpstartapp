function AS_TextField_547d8f0aabe647b4b0c0ba62b03a093c(eventobject, changedtext) {
    if (gblIsOpp == true) {
        changeOppSearch();
    } else {
        if (kony.store.getItem("isBusOrVol") == "volunteer") {
            changeBusiness();
        } else {
            chang28();
        }
    }
}