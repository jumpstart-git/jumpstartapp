function AS_CheckBoxGroup_357e1e29304942c6a2b764966ce5188c(eventobject) {
    var checkBoxVal = mainPage.checkList.selectedKeys;
    //alert("checkBoxVal:"+JSON.stringify(checkBoxVal));
    if (checkBoxVal != null) {
        CheckBoxFunction7();
    } else {
        UnCheckBoxFunction7();
    }
}