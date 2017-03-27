function AS_Button_7860b7ff010d4912ad72fa8209697e9b(eventobject) {
    //searchResultProfile.titleBarSkin="merinnow";
    //gblMer=true;
    BusOpenTaskExistingService();
    var d1 = new Date();
    var day1 = d1.getDate();
    var month1 = d1.getMonth();
    month1 = month1 + 1;
    var year1 = d1.getFullYear();
    var todayDate1 = day1 + "/" + month1 + "/" + year1;
    kony.store.setItem("todayDate", todayDate1);
    var volName = kony.store.getItem("VolNameForStartEngagement");
    searchResultProfile.startEngagementModalContainer.startEngagementHeaderContainer.topHeaderContainer.EngagementHasStartedContainer.nameLabel.text = volName;
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.StartDateCalendarInput.dateComponents = [day1, month1, year1];
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.EndDateCalendarInput.dateComponents = [day1, month1, year1];
    searchResultProfile.startEngagementModalContainer.isVisible = true;
}