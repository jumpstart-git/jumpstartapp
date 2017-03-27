function AS_Button_f5ed84b5ee7648ca8b37b2f668ad41e1(eventobject) {
    mainPage.CreateOpportunityContainer.isVisible = true;
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth();
    month = month + 1;
    var year = d.getFullYear();
    var todayDate = day + "/" + month + "/" + year;
    kony.store.setItem("todayDate", todayDate);
    mainPage.CreateOpportunityContainer.BodyContainer.opportunityStartDateCalendarInput.dateComponents = [day, month, year];
    mainPage.CreateOpportunityContainer.BodyContainer.opportunityEndateCalendarInput.dateComponents = [day, month, year];
}