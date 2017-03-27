function AS_CheckBoxGroup_c2d2104377b94ac29d181a1b042ff518(eventobject) {
    var checkBoxVal = mainPage.checkList.selectedKeys;
    //alert("checkBoxVal:"+JSON.stringify(checkBoxVal));
    if (checkBoxVal != null) {
        CheckBoxFunction7();
    } else {
        UnCheckBoxFunction7();
    }
}