function AS_CheckBoxGroup_51154a24fa7345cfa76545f96566cb84(eventobject) {
    var checkBoxVal = mainPage.checkList.selectedKeys;
    //alert("checkBoxVal:"+JSON.stringify(checkBoxVal));
    if (checkBoxVal != null) {
        CheckBoxFunction7();
    } else {
        UnCheckBoxFunction7();
    }
}