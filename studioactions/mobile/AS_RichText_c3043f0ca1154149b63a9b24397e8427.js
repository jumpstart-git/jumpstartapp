function AS_RichText_c3043f0ca1154149b63a9b24397e8427(eventobject, linktext, attributes, context) {
    //mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer
    var d1 = new Date();
    var day1 = d1.getDate();
    var month1 = d1.getMonth();
    month1 = month1 + 1;
    var year1 = d1.getFullYear();
    var todayDate1 = day1 + "/" + month1 + "/" + year1;
    kony.store.setItem("todayDate", todayDate1);
    mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppStartDateCalendarInput.dateComponents = [day1, month1, year1];
    mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppEndDateCalendarInput.dateComponents = [day1, month1, year1];
    getOppTaskId();
}