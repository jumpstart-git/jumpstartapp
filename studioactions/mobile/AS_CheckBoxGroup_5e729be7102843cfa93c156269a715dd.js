function AS_CheckBoxGroup_5e729be7102843cfa93c156269a715dd(eventobject) {
    var chkboxvalue = mainPage.eligibiltyCriteriaModalContainer.acceptTermsChekBoxFlex.chckBoxx.selectedKeys;
    //alert("checkBoxVal:"+JSON.stringify(checkBoxVal));
    if (chkboxvalue != null) {
        mainPage.eligibiltyCriteriaModalContainer.Footer.agreeBtn.isVisible = true;
    } else {
        mainPage.eligibiltyCriteriaModalContainer.Footer.agreeBtn.isVisible = false;
    }
}