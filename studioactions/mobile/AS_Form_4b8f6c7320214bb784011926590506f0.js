function AS_Form_4b8f6c7320214bb784011926590506f0(eventobject) {
    //start jan 23
    var d = new Date();
    d.setMonth(d.getMonth() - 1);
    var dValMonth = d.getMonth() + 1;
    var dValDay = d.getDate();
    var dValYear = d.getFullYear();
    ReportingPage.StartDateCalendar.dateComponents = [dValDay, dValMonth, dValYear];
    var d = new Date();
    var dValMonth = d.getMonth() + 1;
    var dValDay = d.getDate();
    var dValYear = d.getFullYear();
    ReportingPage.EndDateCalendar.dateComponents = [dValDay, dValMonth, dValYear];
    //end jan 23
    ReportingPage.ReceipientsTxtArea.text = kony.store.getItem("loginEmail");
    if ((kony.store.getItem("isBusOrVol") == "volunteer") && (kony.store.getItem("adminVal") == "v")) {
        ReportingPage.ReportingContainer.ReportingActionsContainer.corporateFlexContainer.isVisible = true;
        ReportingPage.ReportingContainer.ReportingActionsContainer.supplyNationContainer.isVisible = false;
        ReportingPage.ReportingContainer.ReportingActionsContainer.IndigenousBusinessContainer.isVisible = false;
        ReportingPage.ReportingContainer.ReportingActionsContainer.corporateFlexContainer.corporateIndicatorFlex.isVisible = true;
        ReportingPage.ReportingContainer.ReportingActionsContainer.supplyNationContainer.supplyNationIndicator.isVisible = false;
        ReportingPage.ReportingContainer.ReportingActionsContainer.IndigenousBusinessContainer.BusinessIndicator.isVisible = false;
    } else if ((kony.store.getItem("isBusOrVol") == "business") && (kony.store.getItem("adminVal") == "i")) {
        ReportingPage.ReportingContainer.ReportingActionsContainer.corporateFlexContainer.isVisible = false;
        ReportingPage.ReportingContainer.ReportingActionsContainer.supplyNationContainer.isVisible = false;
        ReportingPage.ReportingContainer.ReportingActionsContainer.IndigenousBusinessContainer.isVisible = true;
        ReportingPage.ReportingContainer.ReportingActionsContainer.corporateFlexContainer.corporateIndicatorFlex.isVisible = false;
        ReportingPage.ReportingContainer.ReportingActionsContainer.supplyNationContainer.supplyNationIndicator.isVisible = false;
        ReportingPage.ReportingContainer.ReportingActionsContainer.IndigenousBusinessContainer.BusinessIndicator.isVisible = true;
    } else {
        ReportingPage.ReportingContainer.ReportingActionsContainer.corporateFlexContainer.isVisible = false;
        ReportingPage.ReportingContainer.ReportingActionsContainer.supplyNationContainer.isVisible = true;
        ReportingPage.ReportingContainer.ReportingActionsContainer.IndigenousBusinessContainer.isVisible = false;
        ReportingPage.ReportingContainer.ReportingActionsContainer.corporateFlexContainer.corporateIndicatorFlex.isVisible = false;
        ReportingPage.ReportingContainer.ReportingActionsContainer.supplyNationContainer.supplyNationIndicator.isVisible = true;
        ReportingPage.ReportingContainer.ReportingActionsContainer.IndigenousBusinessContainer.BusinessIndicator.isVisible = false;
    }
}