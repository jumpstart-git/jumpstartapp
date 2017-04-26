function AS_CheckBoxGroup_7adc15c2250c45df839525a862e0bc1f(eventobject) {
    var checkBoxVal = mainPage.checkList.selectedKeys;
    //alert("checkBoxVal:"+JSON.stringify(checkBoxVal));
    if (checkBoxVal != null) {
        CheckBoxFunction7();
    } else {
        UnCheckBoxFunction7();
    }
}