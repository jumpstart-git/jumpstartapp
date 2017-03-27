function AS_CheckBoxGroup_f2bc0c786f4e4391a9b09374f1707aeb(eventobject) {
    var chkboxvalue = mainPage.eligibiltyCriteriaModalContainer.acceptTermsChekBoxFlex.chckBoxFlex.chckBoxx.selectedKeys;
    //alert("checkBoxVal:"+JSON.stringify(checkBoxVal));
    if (chkboxvalue != null) {
        mainPage.eligibiltyCriteriaModalContainer.Footer.agreeBtn.isVisible = true;
    } else {
        mainPage.eligibiltyCriteriaModalContainer.Footer.agreeBtn.isVisible = false;
    }
}